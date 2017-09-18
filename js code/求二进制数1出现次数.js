function NumberOf1(n)
{
	var ans=0
	if (n>=0){
		var a=n.toString(2)
		for(let i in a){
			if (a[i]=='1'){
				ans+=1
			}
		}
		return ans
	}
	if(n<0){
		var cc=(~n).toString(2)
		for(let i in cc){
			if (cc[i]=='1'){
				ans+=1
			}
		}
		return ans
	}
}

console.log(NumberOf1(-2147483648))