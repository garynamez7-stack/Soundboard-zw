export type Badge = 'trending' | 'new'

export type Song = {
  id: string
  title: string
  artist: string
  genre: string
  plays: number
  cover: string
  audioUrl: string
  badge?: Badge
}

export const GENRES = [
  'Afro Jazz',
  'Sungura',
  'Zimdancehall',
  'Mbira',
  'Amapiano',
  'Chimurenga',
  'Jiti',
  'Gospel',
] as const

const sample = (n: number) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`

export const demoSongs: Song[] = [
  {
    id: 'victoria-falls',
    title: 'Victoria Falls',
    artist: 'Tendai Moyo',
    genre: 'Afro Jazz',
    plays: 1_284_302,
    cover: '/covers/victoria-falls.svg',
    audioUrl: sample(1),
    badge: 'trending',
  },
  {
    id: 'sunday-in-mutare',
    title: 'Sunday in Mutare',
    artist: 'Rudo Chikwanha',
    genre: 'Gospel',
    plays: 842_118,
    cover: '/covers/sunday-in-mutare.svg',
    audioUrl: sample(2),
    badge: 'trending',
  },
  {
    id: 'kumusha',
    title: 'Kumusha',
    artist: 'Farai & The Nyami Band',
    genre: 'Sungura',
    plays: 56_740,
    cover: '/covers/kumusha.svg',
    audioUrl: sample(3),
    badge: 'new',
  },
  {
    id: 'bulawayo-bounce',
    title: 'Bulawayo Bounce',
    artist: 'Sizwe Ndlovu',
    genre: 'Amapiano',
    plays: 2_013_559,
    cover: '/covers/bulawayo-bounce.svg',
    audioUrl: sample(4),
    badge: 'trending',
  },
  {
    id: 'harare-nights',
    title: 'Harare Nights',
    artist: 'Kuda Blaze',
    genre: 'Zimdancehall',
    plays: 412_903,
    cover: '/covers/harare-nights.svg',
    audioUrl: sample(5),
  },
  {
    id: 'mbira-dreams',
    title: 'Mbira Dreams',
    artist: 'Chiedza Mhlanga',
    genre: 'Mbira',
    plays: 18_276,
    cover: '/covers/mbira-dreams.svg',
    audioUrl: sample(6),
    badge: 'new',
  },
  {
    id: 'zambezi-flow',
    title: 'Zambezi Flow',
    artist: 'Tatenda Sibanda',
    genre: 'Jiti',
    plays: 309_441,
    cover: '/covers/zambezi-flow.svg',
    audioUrl: sample(7),
  },
  {
    id: 'great-zimbabwe',
    title: 'Great Zimbabwe',
    artist: 'Mukoma Tafara',
    genre: 'Chimurenga',
    plays: 627_015,
    cover: '/covers/great-zimbabwe.svg',
    audioUrl: sample(8),
  },
]

export function formatPlays(plays: number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(plays)
}

export function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}
