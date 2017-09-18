
let ArryInArryList=function(Array_c,Array_List){
	let tmp=[]
	for (let i of Array_List) {
		tmp.push(i.toString().replace(/,/g,''))
	}
	return tmp.includes(Array_c.toString().replace(/,/g,''))
}
let cc=[[1,1],[1,1],[1,2]]
let aa=[1,0]
console.log(ArryInArryList(aa,cc))

