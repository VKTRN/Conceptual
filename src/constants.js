import {constant} from './utils/functions.js'


export const signalLength     = 5000
export const signalVelocity   = 8
export const durationInFrames = 100
const gradient1               = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
const gradient2               = 'linear-gradient(30deg, #09203f 0%, #537895 100%)'
const gradient3 = {
  backgroundColor: '#4158D0',
  backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'

}

const gradient4 = {
  backgroundColor: '#8BC6EC',
  backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
}

const gradient5 = {
  backgroundImage: 'linear-gradient(135deg, #313454 10%, #41294f 100%)',
}

const gradient6 = {
  backgroundImage: 'linear-gradient(135deg, #6b0505 10%, #3b3232 100%)',
}

export const backgroundColor  = gradient6
export const conductionWidth  = 14
export const transistorWidth  = 22


export const transform = {
  rotation: constant(0),
  scale:    constant(1),
  translation: {x:constant(0), y:constant(0)}
}

export const signal = {
  t0:    0,
  color: 'yellow'
}

const defaults                   = {}
defaults.transform               = {}
defaults.transform.translation   = {}
defaults.signal                  = {}
defaults.conduction              = {}

defaults.transform.rotation      = 0
defaults.transform.scale         = 1
defaults.transform.translation.x = 0
defaults.transform.translation.y = 0
defaults.signal.t0               = 0
defaults.signal.color            = 'yellow'
defaults.signal.length           = 5000
defaults.velocity                = 8
defaults.conduction.width        = 14