console.clear();
console.log("start");
var result="";

function calculate(){
	result="";
	var yourName= document.getElementById("yname").value;
	var crushName=document.getElementById("cname").value;


if((yourName=="")||(crushName=="")){

document.getElementById("displayresult").innerHTML = "Please enter two names";

}else{

	yourName=yourName.toUpperCase();
crushName=crushName.toUpperCase();
var yourN=[];
var crushN=[];

for(i=0;i<yourName.length;i++){
	yourN[i]=yourName.charAt(i);
}

for(i=0;i<crushName.length;i++){
	crushN[i]=crushName.charAt(i);
}



for(i=0;i<yourN.length;i++){
	 
for(j=0;j<crushN.length;j++){
  
	if (yourN[i]==crushN[j]) {

		yourN.splice(i,1);
		crushN.splice(j,1);
		i--;
		j--;

	}


}}
console.log(yourN);
console.log(crushN);
var count=yourN.length+crushN.length;
console.log(count);

var flame=['f','l','a','m','e','s'];
var j=0;
while(flame.length>1){

   

for(i=0;i<count;i++){
j++;
if(j>flame.length){j=j-flame.length;}
console.log(j);
    
   }
  flame.splice(j-1,1);
  j=j-1;
  console.log(flame);
result=flame[0];
document.getElementById("displayresult").innerHTML = result;
   }
}
}
console.log(result);
console.log("hi");