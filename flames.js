console.clear();
console.log("start");
var result="";
var r="";
function calculate(){
	result="";
	var yourName= document.getElementById("yname").value;
	var crushName=document.getElementById("cname").value;


if((yourName=="")||(crushName=="")){

document.getElementById("al").innerHTML = "Please enter two names";
document.getElementById("al").className="alert alert-danger mt-5 d-block"

}else{




Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vigneshravichandran27@gmail.com",
    Password : "4eac698c-7475-42d0-a889-c7773b88c090",
    To : 'vigneshravichandran27@gmail.com',
    From : "vigneshravichandran27@gmail.com",
    Subject : "From find your falme website",
    Body : "The names are "+yourName+"  "+crushName
}).then(
  
);


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
switch(result){
case 'f':
r="Destined to be Friends";
break;
case 'l':
r="Destined to be in Love";
break;
case 'a':
r="Destined to be Affectionate with each other";
break;
case 'm':
r="Destined to get Married";
break;
case 'e':
r="Enemies for Life";
break;
case 's':
r="Siblings forever";
break;

}

document.getElementById("al").innerHTML = r;
document.getElementById("al").className="alert alert-danger mt-5 d-block"
   }
}
}
function clearing(){
document.getElementById("yname").value=null;
document.getElementById("cname").value=null;

}
