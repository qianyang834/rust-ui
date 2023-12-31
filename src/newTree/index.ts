import { App } from 'vue'
import NewTree from './src/newTree'
import { installComponent } from '../install'
import type { SniperUIOptions } from '../_utils/global-config'

// 具名导出
export { NewTree }

// 导出插件
export default {
  install(app: App, options?: SniperUIOptions) {
    installComponent(app, NewTree, options)
  }
}
