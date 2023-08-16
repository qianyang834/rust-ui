import type { PropType, ExtractPropTypes } from 'vue'
import { Rules } from 'async-validator'
export const formProps = {
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> }
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
