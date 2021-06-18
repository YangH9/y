import switchSound from '@/assets/switch.mp3'
import noiseSound from '@/assets/noise.mp3'

export const videoSource = [
  {
    name:'duolaameng',
    count:1,
    repo:'DragonCat1/television-resource'
  },
  {
    name:'heimaojingzhang',
    count:1,
    repo:'DragonCat1/television-resource'
  },
  {
    name:'labixiaoxin',
    count:2,
    repo:'DragonCat1/television-resource',
    playInOrder:true
  },
  {
    name:'outman',
    count:1,
    repo:'DragonCat1/television-resource'
  },
  {
    name:'tiebiatongmu',
    count:1,
    repo:'DragonCat1/television-resource'
  },
  {
    name:'longzhu1',
    count:10,
    repo:'superdangdang/tv',
    playInOrder:true
  },
  {
    name:'shierdameinv',
    count:3,
    repo:'superdangdang/tv',
    playInOrder:false
  }
]

// export const cdns = [
//   'https://github.com/DragonCat1/television-resource/blob/master/videos/duolaameng/playlist.m3u8'
// ]

// export const videos = [
//   'heimaojingzhang1.out.mp4',
//   'tiebiaotongmu.out.mp4',
//   'outman.out.mp4',
//   'labixiaoxin.out.mp4',
//   'duolaameng.out.mp4'
// ]

export const waitingTexts = [
  '信号接收中...',
  '⚠️电压不稳定⚠️',
  '正在拍打电视机',
  '电视机正在冒烟',
  '再等等',
  'FBI WARNING',
  'CDN信号接入中...'
]


export const sounds = {
  switch: new Audio(switchSound),
  noise: new Audio(noiseSound)
}
sounds.noise.loop = true
