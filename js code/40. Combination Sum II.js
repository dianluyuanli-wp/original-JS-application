var combinationSum2 = function(candidates, target) {
    let ans=[]
	let copy=candidates.sort((a,b)=>a-b).slice(0)
	//console.log(copy)
	let rec=function(path,index,sum){
		let tmp=copy.slice(index)
		let path_c=path.slice(0)
		let index_c=index
		let i_c=-1
		let ss=-1
		for (let i of tmp){
			path_c=path.slice(0)
			if (sum+i<target){
				if(i_c==i){
					continue
				}
				path_c.push(i)
				index=tmp.indexOf(i)+1+index_c
				i_c = i
				rec(path_c,index,sum+i)
			}
			else if (sum+i==target){
				path_c.push(i)
				if(path_c.length==ss.length){
					if(path_c.toString()==ss.toString()){
						continue
					}	
				}
				ss=path_c.slice(0)
				ans.push(path_c)
			}
		}
	}
	rec([],0,0)
	return ans
};
//let aa=[10, 1, 2, 7, 6, 1, 5]
let aa=[1,1]
let target=1
console.log(combinationSum2(aa,target))