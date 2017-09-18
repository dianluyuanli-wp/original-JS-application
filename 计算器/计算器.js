// JavaScript Document
var buttons=document.getElementsByClassName('button_panel')[0],
	content=document.getElementsByTagName('p')[0]
	
buttons.onclick=function(e){
	var target=e.target
	if (target.nodeName.toLowerCase()=='button'){
		let button_name=target.innerText
		//content.innerText=button_name
		if (button_name=='AC'){
			content.innerText='0'
		}
		else if (button_name=='CE'){
			content.innerText=content.innerText.slice(0,-1)
		}
		else if(button_name=='='){
			try {
				let result=eval(content.innerText)+''
				content.innerText=result
			}
			catch(e){
				content.innerText="Math error"
			}
			content.innerText=result
		}
		else {
			if (content.innerText[0]=='0'){
				content.innerText=content.innerText.slice(1)
			}
			content.innerText+=button_name
		}
	}
}
