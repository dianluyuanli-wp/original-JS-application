function MoreThanHalfNum_Solution(numbers)
{
	if(numbers.length==1){
		return numbers[0]
	}
	copy=numbers.slice(0)
	copy.sort((a,b)=>a-b)
	//console.log(copy)
	var len=Math.ceil(numbers.length/2)
	//console.log(len)
	var start=copy.indexOf(copy[len-1])
	if(copy[start]==copy[start+len-1]){
		return copy[len-1]
	}
	else{
		return 0
	}
}
aa=[1,0,1,0,1,0,1]
console.log(MoreThanHalfNum_Solution(aa))