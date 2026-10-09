import { teacherCategories, teachers } from '../data/site'
import Carousel from '../components/Carousel'
import Reveal from '../components/Reveal'
import Highlight from '../components/Highlight'
import './Teachers.css'

function initials(name: string) {
  return name.trim().charAt(0).toUpperCase()
}

export default function Teachers() {
  return (
    <section className="tch section" id="teachers">
      <div className="container">
        <Reveal className="tch__head">
          <h2 className="section-title tch__title">Наши преподаватели</h2>
          <p className="tch__cats-label">
            <Highlight>3 категории</Highlight>
          </p>
        </Reveal>

        <div className="tch__cats">
          {teacherCategories.map((c, i) => (
            <Reveal as="article" key={c.title} className="tch__cat" delay={i * 90}>
              <h3 className="tch__cat-title">{c.title}</h3>
              <p className="tch__cat-text">{c.text}</p>
              <span className="tch__cat-exp">{c.exp}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="tch__carousel-wrap" delay={80}>
          <Carousel ariaLabel="Преподаватели" className="tch__carousel">
            {teachers.map((t, i) => (
              <article className="tch-card" key={i}>
                <div className="tch-card__photo">
                  {t.photo ? (
                    <img src={t.photo} alt={`${t.name} — ${t.subject}`} loading="lazy" />
                  ) : (
                    <span className="tch-card__ph" aria-hidden="true">
                      {initials(t.name)}
                    </span>
                  )}
                </div>
                <div className="tch-card__body">
                  <h4 className="tch-card__name">
                    {t.name}
                    {t.subject && <>, <span className="tch-card__subject">{t.subject}</span></>}
                  </h4>
                  {t.quote && (
                    <p className="tch-card__quote">
                      {t.quote.split('\n').map((line, i, arr) => (
                        <span key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </span>
                      ))}
                      {t.attribution && <span className="tch-card__attribution"> ({t.attribution})</span>}
                    </p>
                  )}
                  <p className="tch-card__exp">{t.experience}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
