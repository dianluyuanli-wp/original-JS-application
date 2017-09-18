function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function modi(tin_node,tin_list,pre){
	if (tin_node.length==1){
		return tin_node[0]
	}
	for (let i in pre){
		if (tin_list.indexOf(pre[i])!=-1){
			var index=tin_list.indexOf(pre[i])
			if (tin_node.slice(0,index).length>0){
				tin_node[index].left=modi(tin_node.slice(0,index),tin_list.slice(0,index),pre)
			}
			if(tin_node.slice(index+1).length>0){
				tin_node[index].right=modi(tin_node.slice(index+1),tin_list.slice(index+1),pre)
			}
			return tin_node[index]
		}
	}
}
function reConstructBinaryTree(pre, tin)
{
	var tin_node=[]
	for (let i in tin) {
		let tr_node=new TreeNode(tin[i])
		tin_node.push(tr_node)
	}
	var r_in=tin.indexOf(pre[0])
	if (tin_node.slice(0,r_in).length>0){
		tin_node[r_in].left=modi(tin_node.slice(0,r_in),tin.slice(0,r_in),pre)
	}
	if (tin_node.slice(r_in+1).length>0){
		tin_node[r_in].right=modi(tin_node.slice(r_in+1),tin.slice(r_in+1),pre)
	}
	return tin_node[r_in]
}
var pre=[1,2,4,7,3,5,6,8]
var tin=[4,7,2,1,5,3,8,6]
var aa=reConstructBinaryTree(pre, tin)
console.log(aa)// JavaScript Document