import type { IInnerTreeNode, ITreeNode } from '../newTree-types'

export function generateInnerTree(tree: ITreeNode[]): IInnerTreeNode[] {
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    //判断cur是否存在children，如果存在则递归偏历
    if (cur.children) {
      return prev.concat(o, generateInnerTree(cur.children))
    } else {
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
