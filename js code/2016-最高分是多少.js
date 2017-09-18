var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
  
  
var M,N,score,beg,end,index,val,s_arr;
var com;
var i=0;
rl.on('line',function(line) {
    
	if(i==0){
		N=parseInt(line.split(' ')[0]);
		M=parseInt(line.split(' ')[1]);
	}
	else if(i==1){
		score=line.split(' ');
        
		for (var j in score){
			score[j]=parseInt(score[j]);
		}
		//score=score.map(x=>parseInt(x))
	}
	else{
		com=line.split(' ')
		if(com[0]=='Q'){
			beg=parseInt(com[1]);
			end=parseInt(com[2]);
            if (beg>end){
				s_arr=score.slice(end-1,beg);
                //[beg,end]=[end,beg]
            }
            else {
				s_arr=score.slice(beg-1,end);
        	}
            //s_arr=score.slice(beg-1,end);
			console.log(Math.max.apply({},s_arr));
		}
		else {
			index=parseInt(com[1]);
			val=parseInt(com[2]);
			score[index-1]=val;
		}
	}
    i+=1;
    if(i>=M+2){
        i=0
        N=0
        M=0
    }
});