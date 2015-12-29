var flag = true;
var display = document.getElementById("display");//getting display content
var b_on = document.getElementById("on");//this var for changing button´s tag  ON OFF
var result;
function onOff(){//Turns on and off the calculator changing display background  
	if (flag){
		
		flag = false;
		display.style.backgroundColor = "#bccd95";
		b_on.innerHTML = "OFF";
 	}else{
		b_on.innerHTML = "ON";
		display.style.backgroundColor = "#353636";
		display.innerHTML = "";
		flag = true;
	}
	var result = eval(display.innerHTML);
    console.log(result);
}
function changeValue(x){// adding numbers and operators to 
	if(!flag){
		var str = display.innerHTML;
		if(str.length < 17){
			display.innerHTML += x;
		}else{
			display.innerHTML = "INPUT ERROR";
		}
	}
}
function calcSqrt(){
	if(!flag){
	var root = Math.sqrt(display.innerHTML).toFixed(2);
	if ( root !== root){
		display.innerHTML = "ERROR not a number";
	}else{
		result = root;
		showResult();
      
    }
	}
}

function clearValue(){
	if(!flag){
		display.innerHTML = "";
	}
}
function showResult(){
	result = eval(result);
	    if(Math.round(result) !== result){//if result has many decimals then we round to just  two
			result = result.toFixed(2);
		}
	display.innerHTML = result;//displaying the result
}
function setResult(){
	if(!flag){
		var arr_sqrt = [];
		var str = display.innerHTML;
		arr_sqrt = str.split('');
		for(var i = 0; i < arr_sqrt.length - 1; ++i){//we remove and replace white spaces, x and : chars 
													 //with its arithmetics operators
			if(arr_sqrt[i] === " "){
				arr_sqrt.splice( i , 1);
			};
			if(arr_sqrt[i] === "x"){
				arr_sqrt[i] = "*";
			};
			if(arr_sqrt[i] === ":"){
				arr_sqrt[i] = "/";
			};

			
		}
		result = arr_sqrt.join("");
		if(result.search(/(\D{2,})/g) != -1)
		{//looking for bad use (too many operators )
			 display.innerHTML = "INPUT ERROR";
			 console.log(result);
		}else {
			showResult();
		}
	
	}
}