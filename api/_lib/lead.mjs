/* ============================================================
   Общая логика обработки заявки — используется и serverless-функцией
   (/api/lead.mjs на Vercel), и дев-сервером Vite (client/vite.config.ts).
   Без внешних зависимостей: только глобальный fetch (Node 18+).
   ============================================================ */

const tgApi = (method) =>
  `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`

/**
 * Разбирает и проверяет тело формы.
 * @returns {{ lead: object } | { error: string }}
 */
export function validateLead(body) {
  const b = body ?? {}
  const name = String(b.name ?? '').trim()
  const phone = String(b.phone ?? '').trim()
  const contact = String(b.contact ?? '').trim()
  const page = String(b.page ?? '').trim().slice(0, 500)
  const company = String(b.company ?? '') // honeypot
  const elapsedMs = Number(b.elapsedMs)

  if (name.length < 2 || name.length > 80) return { error: 'Укажите имя' }
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 6 || digits.length > 15) return { error: 'Проверьте номер телефона' }
  // ник необязателен - если указан, просто ограничиваем длину
  if (contact.length > 120) return { error: 'Слишком длинный ник' }

  return { lead: { name, phone, contact, page, company, elapsedMs } }
}

/** true — если заявка похожа на бота (honeypot заполнен или отправлена слишком быстро). */
export function looksLikeBot(lead) {
  if (lead.company && lead.company.length > 0) return true
  if (Number.isFinite(lead.elapsedMs) && lead.elapsedMs < 1500) return true
  return false
}

/** Отправляет заявку сообщением в Telegram-группу (TELEGRAM_CHAT_ID). */
export async function sendLeadToTelegram(lead, meta = {}) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    throw new Error('Telegram не настроен: нет TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID')
  }

  const at = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })
  const text =
    '🆕 Новая заявка — «Помогариум»\n\n' +
    `👤 Имя: ${lead.name}\n` +
    `📞 Телефон: ${lead.phone}\n` +
    (lead.contact ? `💬 Ник: ${lead.contact}\n` : '') +
    `\n🕒 ${at}` +
    (lead.page ? `\n🔗 ${lead.page}` : '') +
    (meta.ip ? `\n🌐 ${meta.ip}` : '')

  const res = await fetch(tgApi('sendMessage'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
  })
  const data = await res.json().catch(() => ({}))
  if (!data.ok) throw new Error(`Telegram API: ${data.description || res.status}`)
}

/**
 * Полный обработчик заявки. Принимает распарсенное тело и метаданные,
 * возвращает { status, body } для ответа клиенту.
 */
export async function handleLead(body, meta = {}) {
  const parsed = validateLead(body)
  if (parsed.error) return { status: 400, body: { ok: false, message: parsed.error } }

  const { lead } = parsed
  // тихо «принимаем» ботов, чтобы не подсказывать обход
  if (looksLikeBot(lead)) return { status: 200, body: { ok: true } }

  try {
    await sendLeadToTelegram(lead, meta)
    return { status: 200, body: { ok: true } }
  } catch (err) {
    console.error('[lead] отправка не удалась:', err)
    return {
      status: 502,
      body: { ok: false, message: 'Не удалось отправить заявку. Напишите нам в мессенджер.' },
    }
  }
}
