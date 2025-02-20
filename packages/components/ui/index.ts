import { App } from 'vue'
import Btn from './btn'
import Icon from './icon'
import {
  SpinnerBall,
  SpinnerBars,
  SpinnerDots,
  SpinnerGears,
  SpinnerHourglass,
  SpinnerIos,
  SpinnerOrbit,
  SpinnerOval,
  SpinnerPuff,
  SpinnerRings,
  SpinnerTail,
  Spinner
} from './spinner'
import Tooltip from './tooltip'
import AjaxBar from './ajax-bar'
import Skeleton from './skeleton'
import Fab from './fab/fab'
import FabAction from './fab/fab-action'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  Btn,
  Icon,
  SpinnerBall,
  SpinnerBars,
  SpinnerDots,
  SpinnerGears,
  SpinnerHourglass,
  SpinnerIos,
  SpinnerOrbit,
  SpinnerOval,
  SpinnerPuff,
  SpinnerRings,
  SpinnerTail,
  Spinner,
  Tooltip,
  AjaxBar,
  Skeleton,
  Fab,
  FabAction
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcBtn = Btn as SFCWithInstall<typeof Btn>
export const VcIcon = Icon as SFCWithInstall<typeof Icon>
export const VcSpinnerBall = SpinnerBall as SFCWithInstall<typeof SpinnerBall>
export const VcSpinnerBars = SpinnerBars as SFCWithInstall<typeof SpinnerBars>
export const VcSpinnerDots = SpinnerDots as SFCWithInstall<typeof SpinnerDots>
export const VcSpinnerGears = SpinnerGears as SFCWithInstall<typeof SpinnerGears>
export const VcSpinnerHourglass = SpinnerHourglass as SFCWithInstall<typeof SpinnerHourglass>
export const VcSpinnerIos = SpinnerIos as SFCWithInstall<typeof SpinnerIos>
export const VcSpinnerOrbit = SpinnerOrbit as SFCWithInstall<typeof SpinnerOrbit>
export const VcSpinnerOval = SpinnerOval as SFCWithInstall<typeof SpinnerOval>
export const VcSpinnerPuff = SpinnerPuff as SFCWithInstall<typeof SpinnerPuff>
export const VcSpinnerRings = SpinnerRings as SFCWithInstall<typeof SpinnerRings>
export const VcSpinnerTail = SpinnerTail as SFCWithInstall<typeof SpinnerTail>
export const VcSpinner = Spinner as SFCWithInstall<typeof Spinner>
export const VcTooltip = Tooltip as SFCWithInstall<typeof Tooltip>
export const VcAjaxBar = AjaxBar as SFCWithInstall<typeof AjaxBar>
export const VcSkeleton = Skeleton as SFCWithInstall<typeof Skeleton>
export const VcFab = Fab as SFCWithInstall<typeof Fab>
export const VcFabAction = FabAction as SFCWithInstall<typeof FabAction>
