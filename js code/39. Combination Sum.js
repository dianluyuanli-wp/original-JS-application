var combinationSum = function(candidates, target) {
    let ans=[]
	let copy=candidates.sort((a,b)=>a-b).slice(0)
	let rec=function(path,index,sum){
		let tmp=copy.slice(index)
		let path_c=path.slice(0)
		for (let i of tmp){
			path_c=path.slice(0)
			if (sum+i<target){
				path_c.push(i)
				/*console.log(i)
				console.log(path_c[path_c.length-1])
				console.log(path_c)
				console.log(index)
				console.log(sum)*/
				index=copy.indexOf(i)
				rec(path_c,index,sum+i)
			}
			else if (sum+i==target){
				path_c.push(i)
				ans.push(path_c)
			}
		}
	}
	rec([],0,0)
	return ans
};
let aa=[2,3,6,7]
let target=14
console.log(combinationSum(aa,target))