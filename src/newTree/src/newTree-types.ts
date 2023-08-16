import type { PropType, ExtractPropTypes } from 'vue'

export const newTreeProps = {
    data: {
        type:Object as PropType<Array<IInnerTreeNode>>,
         required:true
    }
} as const

export interface ITreeNode {
    label: string;// treetext
    id?: string;// id
    children?: ITreeNode[];// 子节点
  
    selected?: boolean; // 点击选中
    checked?: boolean; // 勾选
    expanded?: boolean; // 展开
  
    disableSelect?: boolean;
    disableCheck?: boolean;
    disableToggle?: boolean;
  }

  export interface IInnerTreeNode extends ITreeNode{
    parentId?:string// 父节点ID
    level:number// 节点层级
    isLeaf: boolean// 是否叶子结点
  }
export type NewTreeProps = ExtractPropTypes<typeof newTreeProps>
