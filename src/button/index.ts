import { App } from 'vue'
import Button from './src/button'
import { installComponent } from '../install'
import type { SniperUIOptions } from '../_utils/global-config'
export { Button }

export default {
  install(app: App, options?: SniperUIOptions) {
    installComponent(app, Button, options)
  }
}
