/* ============================================================
   Контент сайта. Тексты — из «текст, шрифт, цвета.docx» и макета.
   Плейсхолдеры помечены TODO — заменить перед публикацией.
   ============================================================ */

export const contacts = {
  brand: 'Помогариум',
  brandTagline: 'подбор репетиторов', // подпись под логотипом
  phone: '+7 963 349-77-27',
  phoneHref: 'tel:+79633497727',
  telegram: 'https://t.me/violet_repetitor',
  whatsapp: 'https://wa.me/message/SG726GU3IEQ5L1',
  max: 'https://max.ru/u/f9LHodD0cOKOMeuCd-Msv0ZyTbtpvFYibT4M_SO-MKySwz3eK5l3JMPOuiY',
  email: 'hello@pomogarium.ru', // TODO
}

export const nav = [
  { label: 'О нас', href: '#advantages' },
  { label: 'Предметы', href: '#subjects' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Контакты', href: '#contacts' },
]

export const advantages = [
  {
    icon: 'hourglass' as const,
    title: '5 лет',
    text: 'подбираем репетиторов',
  },
  {
    icon: 'palette' as const,
    title: 'Все предметы',
    text: '1–11 класс, ОГЭ и ЕГЭ',
  },
  {
    icon: 'laptop' as const,
    title: 'Онлайн обучение',
    text: 'удобно, безопасно и доступно из любой точки мира',
  },
  {
    icon: 'handshake' as const,
    title: 'Индивидуальный подход',
    text: 'не по шаблону — с учётом особенностей ученика',
  },
]

export const steps = [
  {
    n: 1,
    icon: 'bell' as const,
    title: 'Оставляете заявку',
    text: 'Расскажите нам, для чего нужны уроки и по каким предметам',
  },
  {
    n: 2,
    icon: 'user' as const,
    title: 'Подбираем репетитора',
    text: 'С учётом целей, уровня и ваших пожеланий',
  },
  {
    n: 3,
    icon: 'check' as const,
    title: 'Начинаете занятия',
    text: 'Удобный график и поддержка на каждом этапе',
  },
]

export const subjects = [
  'Математика',
  'Русский язык',
  'Английский язык',
  'Химия',
  'Информатика',
  'Литература',
  'Китайский язык',
  'Биология',
  'Физика',
  'История',
  'Обществознание',
  'И другие предметы',
] as const

export const teacherCategories = [
  {
    title: 'Специалист',
    text: 'Современный подход, энергия, интересная подача. Помогает освоить базу и привыкнуть к самостоятельной работе.',
    exp: 'опыт 1–2 года',
  },
  {
    title: 'Опытный педагог',
    text: 'Знает, как привести ученика к результату. Находит слабые места, выстраивает план занятий и последовательно улучшает знания.',
    exp: 'опыт 3–4 года',
  },
  {
    title: 'Эксперт',
    text: 'Берётся за сложные задачи и высокие цели. Готовят к ОГЭ, ЕГЭ на высокие баллы, углублённая программа и подготовка к серьёзным учебным результатам.',
    exp: 'опыт от 5-ти лет',
  },
]

export type Teacher = {
  name: string
  subject: string
  experience: string
  photo: string | null
  /** Личная цитата под именем. \n — перенос строки (для двуязычной, как у Алины). */
  quote: string
  /** Автор цитаты (напр. «Гуго Штейнгауз») — выводится мельче основного текста. */
  attribution?: string
}

export const teachers: Teacher[] = [
  {
    name: 'Алина',
    subject: 'английский язык',
    experience: 'преподаёт 2 года',
    photo: '/images/teacher-alina-v2.jpg', // v2 — имя изменено, чтобы сбросить кэш браузера после обрезки фото
    quote: '‘English today. Opportunities tomorrow.’\nАнглийский сегодня — возможности завтра.',
  },
  {
    name: 'Анастасия',
    subject: 'русский язык и литература',
    experience: 'преподаёт 4 года',
    photo: '/images/teacher-anastasia.jpg',
    quote: '«Читаем между строк, пишем без ошибок, говорим уверенно.»',
  },
  {
    name: 'Вячеслав',
    subject: 'информатика и математика',
    experience: 'преподаёт 12 лет',
    photo: '/images/teacher-vyacheslav.jpg',
    quote: '«Любая сложная задача становится понятнее, если найти правильный алгоритм.»',
  },
  {
    name: 'Валерия',
    subject: 'математика и физика',
    experience: 'преподаёт 3 года',
    photo: '/images/teacher-valeria.jpg',
    quote: '«Сложное становится понятным, когда находишь правильный путь.»',
  },
  {
    name: 'Роман',
    subject: 'русский язык и литература',
    experience: 'преподаёт 5 лет',
    photo: '/images/teacher-roman.jpg',
    quote: '«Русский язык и литература без скуки: любовь к предмету и результат с первого урока.»',
  },
  {
    name: 'Анна',
    subject: 'биология и химия',
    experience: 'преподаёт 18 лет',
    photo: '/images/teacher-anna.jpg',
    quote: '«Химия объясняет, из чего состоит мир. Биология — как он живёт.»',
  },
  {
    name: 'Варвара',
    subject: 'английский и немецкий',
    experience: 'преподаёт 7 лет',
    photo: '/images/teacher-varvara.jpg',
    quote: '«Моя цель как педагога — убрать страх ошибок и сломать языковой барьер с первого занятия.»',
  },
  {
    name: 'Кристина',
    subject: 'история и обществознание',
    experience: 'преподаёт 4 года',
    photo: '/images/teacher-kristina.jpg',
    quote: '«История помогает понять прошлое. Обществознание — разобраться в настоящем.»',
  },
  {
    name: 'Александра',
    subject: 'химия',
    experience: 'преподаёт 7 лет',
    photo: '/images/teacher-alexandra.jpg',
    quote: '«ЕГЭ по химии без хауса: понятная система = уверенный результат.»',
  },
  {
    name: 'Арина',
    subject: 'химия и биология',
    experience: 'преподаёт 1 год',
    photo: '/images/teacher-arina.jpg',
    quote: '«Химия и биология — не про бесконечную зубрёжку. Это про то, как устроена жизнь.»',
  },
  {
    name: 'Надежда',
    subject: 'математика',
    experience: 'преподаёт 20+ лет',
    photo: '/images/teacher-nadezhda-20.jpg',
    quote: '«Математика становится простой, когда понятно, зачем и как её решать.»',
  },
  {
    name: 'Анна',
    subject: 'английский, итальянский, арабский',
    experience: 'преподаёт 5 лет',
    photo: '/images/teacher-anna-languages.jpg',
    quote: '«Новый язык — это новая свобода: путешествовать, общаться, учиться и выбирать.»',
  },
  {
    name: 'Надежда',
    subject: 'математика',
    experience: 'преподаёт 2 года',
    photo: '/images/teacher-nadezhda-math.jpg',
    quote: '«Никакая наука не укрепляет веру в силу человеческого разума так, как математика.»',
    attribution: 'Гуго Штейнгауз',
  },
  // TODO: добавить остальных преподавателей — просто дописать объекты сюда:
  // { name: 'Имя', subject: 'предмет', experience: 'преподаёт N лет', photo: '/images/teacher-xxx.jpg', quote: '«...»' },
]

// 12 скринов отзывов из Telegram (client/public/reviews/1..12.jpg)
export const reviews = Array.from({ length: 12 }, (_, i) => ({
  src: `/reviews/${i + 1}.jpg`,
  alt: `Отзыв ученика №${i + 1}`,
}))

export const footer = {
  address: 'г. Москва', // TODO
  year: new Date().getFullYear(),
  legalName: 'Помогариум', // TODO: ИП/самозанятость, ИНН
}
