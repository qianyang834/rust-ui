import { defineComponent, toRefs } from 'vue'
import { NewTreeProps, newTreeProps } from './newTree-types'

export default defineComponent({
  name: 'NewTree',
  props: newTreeProps,
  emits: [],
  setup(props: NewTreeProps, ctx) {
    const { data: innerData } = toRefs(props)
    return () => {
      return (
        <div class="s-newTree">
          {innerData?.value.map(treeNode => treeNode.label)}
        </div>
      )
    }
  }
})
