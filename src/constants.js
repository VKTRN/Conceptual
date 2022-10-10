export const signalLength     = 5000
export const signalVelocity   = 8
export const durationInFrames = 500
export const backgroundColor  = '#07253d'
export const conductionWidth  = 14
export const transistorWidth  = 22

import {constant} from './utils/functions.js'

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