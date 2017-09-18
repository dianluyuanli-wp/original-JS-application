// JavaScript Documentfunction ReverseList(pHead)
{
    // write code here
    if (pHead==null){
    	return null
    }
    let node=[]
    while(pHead!=null){
    	node.push(pHead.val)
        pHead=pHead.next
    }
    node.reverse()
    let first=new ListNode(node[0])
    let mark=first
    for(let i of node.slice(1)){
    	let tmp=new ListNode(i)
        first.next=tmp
        first=tmp
    }
    return mark
}