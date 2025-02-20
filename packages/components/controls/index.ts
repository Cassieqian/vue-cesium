import { App } from 'vue'
import Compass from './compass'
import ZoomControl from './zoom-control'
import Print from './print'
import MyLocation from './my-location'
import StatusBar from './status-bar'
import DistanceLegend from './distance-legend'
import Navigation from './navigation'
import CompassSm from './navigation-sm/compass-sm'
import ZoomControlSm from './navigation-sm/zoom-control-sm'
import NavigationSm from './navigation-sm'

import OverviewMap from './vc-overview-map'
import SelectionIndicator from './selection-indicator'

import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  Compass,
  ZoomControl,
  Print,
  MyLocation,
  StatusBar,
  DistanceLegend,
  Navigation,
  CompassSm,
  ZoomControlSm,
  NavigationSm,
  OverviewMap,
  SelectionIndicator
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

export const VcCompass = Compass as SFCWithInstall<typeof Compass>
export const VcZoomControl = ZoomControl as SFCWithInstall<typeof ZoomControl>
export const VcPrint = Print as SFCWithInstall<typeof Print>
export const VcMyLocation = MyLocation as SFCWithInstall<typeof MyLocation>
export const VcStatusBar = StatusBar as SFCWithInstall<typeof StatusBar>
export const VcDistanceLegend = DistanceLegend as SFCWithInstall<typeof DistanceLegend>
export const VcNavigation = Navigation as SFCWithInstall<typeof Navigation>
export const VcCompassSm = CompassSm as SFCWithInstall<typeof CompassSm>
export const VcZoomControlSm = ZoomControlSm as SFCWithInstall<typeof ZoomControlSm>
export const VcNavigationSm = NavigationSm as SFCWithInstall<typeof NavigationSm>
export const VcOverviewMap = OverviewMap as SFCWithInstall<typeof OverviewMap>
export const VcSelectionIndicator = SelectionIndicator as SFCWithInstall<typeof SelectionIndicator>
