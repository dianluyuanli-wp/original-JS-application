var isInterleave = function(s1, s2, s3) {
	if (s1.length+s2.length!=s3.length){
		return false
	}
	let stack=[[0,0]]
	let visited=[[0,0]]
	let [x,y]=[0,0]
	let ArryInArryList=function(Array_c,Array_List){
		let tmp=[]
		for (let i of Array_List) {
			tmp.push(i.toString().replace(/,/g,''))
		}
		return tmp.includes(Array_c.toString().replace(/,/g,''))
	}
	while (stack.length!=0){
		[x,y]=stack.pop()
		if (x+y==s3.length){
			return true
		}
		if (x<s1.length && s1[x]==s3[x+y] && !ArryInArryList([x+1,y],visited)) {
			stack.push([x+1,y])
			visited.push([x+1,y])
		}
		if (y<s2.length && s2[y]==s3[x+y] && !ArryInArryList([x,y+1],visited)) {
			stack.push([x,y+1])
			visited.push([x,y+1])
		}
	}
	return false
};