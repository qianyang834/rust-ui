import { defineComponent } from 'vue'
import { FormProps, formProps } from './form-types'

export default defineComponent({
  name: 'Form',
  props: formProps,
  emits: [],
  setup(props: FormProps, { slots }) {
    return () => {
      return (
        <form action="" class="s-form">
          {/* 默认插槽 */}
          {slots.default && slots.default()}
        </form>
      )
    }
  }
})
