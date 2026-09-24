/* ============================================================
   Комбинированный сервер для хостинга ВНЕ Vercel (Timeweb App
   Platform, VPS и т.п.): отдаёт собранный фронтенд (client/dist)
   и обрабатывает POST /api/lead той же логикой, что и раньше
   (api/_lib/lead.mjs) — форма продолжает слать заявки в Telegram.
   ============================================================ */

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { handleLead } from './api/_lib/lead.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'client', 'dist')

const app = express()
app.use(express.json())

app.post('/api/lead', async (req, res) => {
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '')
    .split(',')[0]
    .trim()
  const { status, body } = await handleLead(req.body || {}, { ip })
  res.status(status).json(body)
})

app.use(express.static(distDir))

// SPA-роутинг: всё остальное отдаём как index.html (аналог rewrites в vercel.json)
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
