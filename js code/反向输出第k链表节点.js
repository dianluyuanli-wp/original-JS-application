function FindKthToTail(head, k)
{
    // write code here
    let node=[]
    while(head!=null){
        node.push(head)
        head=head.next
    }
    let ans
    let i = 0
    while( i <k){
        ans=node.pop()
        i+=1
    }
    return ans
}