function printListFromTailToHead(head)
{
 var arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
}