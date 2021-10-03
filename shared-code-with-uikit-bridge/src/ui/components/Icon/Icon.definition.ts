export const GlyphMap = {
  bin: 35,
  lock: 40,
  unlock: 41,
  cross: 42,
  plus: 43,
  refresh: 48,
  less: 60,
  greater: 62,
  question: 63,
  star: 74,
  key: 75,
  message: 77,
  picture: 80,
  filledStar: 83,
  user: 85,
  edit: 87,
  graphic: 89,
  calendar: 92,
  menu1: 106,
  menu2: 107,
  menu3: 108,
  menu4: 109,
  lemon: 111,
  twitter: 112,
  facebook: 113,
  search: 115,
  camera: 118,
  conversation: 119,
  settings: 120,
  brokenbar: 166,
  arrowup: 178,
  arrowdown: 179,
  clock: 188,
  file: 189,
  download: 190,
  music: 208,
  reload: 215,
  user2: 221,
  film: 253,
  tick: 254,
  heart: 322,
  zoomin: 381,
  zoomout: 382,
  play: 8722
}


export interface IconProps {
  name: IconName
  color?: string
  onPress?: () => void
}

export type IconName = keyof typeof GlyphMap
