var isInterleave = function(s1, s2, s3) {
	if (s1.length+s2.length!=s3.length){
		return false
	}
	if (s1=='' || s2==''){
		if (s1+s2==s3){
			return true
		}
		else{
			return false
		}
	}
    let stack=[]
	stack.push(s3.indexOf(s1[0]))
	let index
	let hook=[]
	//hook
	hook.push(stack[stack.length-1])
	while(stack.length!=0 ) {
	//for (let k=0; k<40; k++) {
		while(stack.length!=s1.length){
			if (hook.length==stack.length){
				index=s3.indexOf(s1[stack.length],hook[stack.length-1]+1)
			}
			else {
				index=s3.indexOf(s1[stack.length],hook[stack.length]+1)
			}
			if(index!=-1){
				stack.push(index)
				if(hook.length<stack.length){
					hook.push(stack[stack.length-1])
				}
				else {
					hook[stack.length-1]=index
					while (hook.length>stack.length) {
						hook.pop()
					}
				}
			}
			else {
				break
			}
		}
		/*console.log(stack)
		console.log('!!!')
		console.log(hook)*/
		if (stack.length==s1.length){
			let left=Array.from(s3)
			let a=''
			for (let i of stack){
				left[i]=''
			}
			for (let i of left){
				a+=i
			}
			//console.log(a)
			if(a==s2){
				return true
			}
		}
		stack.pop()
		if(stack.length==0 && s3.indexOf(s1[0],hook[0]+1)!=-1) {
			stack.push(s3.indexOf(s1[0],hook[0]+1))
			//console.log('-----')
			hook=[]
			hook.push(stack[stack.length-1])
		}
	}
	return false
};
//let aa="aa"
//let aa="aabcc"
//let bb="dbbca"
//let bb="ab"
//let cc="aadbbcbcac"
//let cc='aadbbbaccc'
//let cc="abaa"

//let aa="aabc"
//let bb="abad"
//let cc="aabadabc"

let aa="cbaccbbaabbacbaaabbcbccb"
let bb="bbcaccccbabbbabbcaccacaaa"
let cc="bcbaccbbbcaabbabacccabacabbaacbbbccbbabbcaccacaac"
console.log(isInterleave(aa,bb,cc))