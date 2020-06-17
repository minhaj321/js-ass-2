

// CHAPTER # 21-25


//TASK # 01
// var fname=prompt("enter first name");
// var lname=prompt("enter last name");
// fname = fname+ " ";
// alert("Hello " + fname + lname);


// TASK # 02
// var name=prompt("enter yuor favourite mobile name");
// alert("the length of string is:" + name.length);


//TASK # 03
// var pak="Pakistani";
// alert(pak.indexOf('n'));


//task # 04
// var kind="Hello world";
// alert(kind.lastIndexOf("l"));


//TASK # 05
// var pak="Pakistani";
// alert(pak.charAt(3));


// TASK # 06
// var fname=prompt("enter first name");
// var lname=prompt("enter last name");
// fname = fname+ " ";
// alert("Hello " + fname.concat(lname));


// //TASK # 07
// var city="Hyderabad";
// alert(city.replace("Hyder","Islam"));


//TASK # 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// alert(message.replace(/and/g,"&"));


//TASK # 09
// var a="472";
// var b=Number(a);
// alert(a+" is " + typeof(a));
// alert(b + " is " + typeof(b));


//TASK # 10
// var take=prompt("enter peanut");
// alert(take.toUpperCase());


//TASK # 11
// var name=prompt("enter name");
// var fchar=name.slice(0,1);
// var others=name.slice(1);
// alert("before "+name);
// alert("after " +fchar.toUpperCase() + others);



//TASK # 12
// var num=35.36;
// var numstr=num.toString();
// var fchar=numstr.slice(0,2);
// var schar=numstr.slice(3);
// alert(fchar + schar);


//TASK # 13
// var name=prompt("enter your name");
// var check;
// for(let i=0;i<name.length;i++)
// {
// if(name.charCodeAt(i)===33 || name.charCodeAt(i)===44 ||
//  name.charCodeAt(i)===46  || name.charCodeAt(i)===64	)
// 	{alert("please insert a valid name");}
// }


//TASK # 14
// var name="cookIe";
// var say=["Pakistani","pak","cookie"];
// alert(say.find(name));


//TASK # 15
// var pass=prompt("enter your password using numbers and chars");
// var charcheck=0;
// var numcheck=0;
// var fchar;	
// var six=1;
// var firstchar=Number(pass.slice(0,1));
// if(Number.isInteger(firstchar)){
// 	fchar=1;	}
// for(let i=0;i<pass.length;i++){

// if(Number(pass.slice(i,1))>=0){
// 	numcheck=1; break;	}}
// for(let i=0;i<pass.length;i++){
// if(pass.slice(i,1)>='a' || pass.slice(i,1)>='A'){
// 	charcheck=1; 
// 	break;	}	}
// 	if(pass.length>=6){six=0;}
// if(charcheck==0 || numcheck==0 || fchar==1 || six==1){
// 	alert("enter correct password");
// }


//TASK # 16
// var uni="University of Karachi";
// var res = uni.split("");
// for(let i=0;i<res.length;i++)
// { document.write(res[i] + "<br>");}


//TASK # 17
// var pak='Pakistani';
// var check=pak.split("");
// check=check.reverse();
// alert(check[0]);


//TASK # 18
// var sec="my name is minhaj";
// console.log(sec.match(/m/g).length);








// CHAPTER # 26-30


//TASK # 01
// var num=prompt("enter any number");
// var copy=num;
// num=Number(num);
// alert("number :"+ num);
// alert("roundoff :"+ Math.round(copy));
// alert("ceil :"+ Math.ceil(copy));
// alert("floor :"+ Math.floor(copy));


//TASK # 02
// var num=prompt("enter any number");
// var copy=num;
// num=Number(num);
// alert("number :"+ num);
// alert("roundoff :"+ Math.round(copy));
// alert("ceil :"+ Math.ceil(copy));
// alert("floor :"+ Math.floor(copy));


//TASK # 03
// var num=-5;
// alert("the number is :"+num +" \nwhile its absolute value is :"+ Math.abs(num));


//TASK # 04
// alert("the random value of dice is: " +Math.ceil(Math.random()*6));


//TASK # 05
// alert("the random value of coin is: " +Math.ceil(Math.random()*2));


//TASK # 06
// alert("the random value b/w 1-100 is: " +Math.random()*100);


//TASK # 07
// var num=parseInt(prompt("enter weight in kgs"));
// alert("the weight of user is :"+ num +" kilograms");


//TASK # 08
// var num=Math.ceil(Math.random()*10);
// var check=prompt("enter any number b/w 1-10 : ");
// if(num==check)
// {alert("congrats \n you guess right number")}
// else {alert("try again!");}




// CHAPTER # 31-34


//TASK # 01
// var now=new Date();
// alert(now);


//TASK # 02
// var now=new Date("Dec 12 1992");
// var arr=['January','Febuary','March','April','May','June','July','August','September','Octuber',
// 'November','December'];
// alert(arr[now.getMonth()]);



//TASK # 03
// var now=new Date();
// var arr=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
// alert(arr[now.getDay()]);


//TASK # 04
// var now=new Date();
// if(now.getDay()==0 || now.getDay()==6)
// {alert("its a fun day.");}


//TASK # 05
// var now=new Date();
// if(now.getDate()<16)
// {alert("First fifteen days of the month");}
// else{alert("Last days of the month");}


//TASK # 06
// var now=new Date();
// document.write("Current Date is : " +now);
// var ms=now.getTime();
// document.write("<br>the milliseconds since midnight, Jan. 1, 1970 is :" + ms);
// document.write("<br>the seconds since midnight, Jan. 1, 1970 is :" + (ms/1000));


//TASK # 07
// var now=new Date();
// if(now.getHours()<=12){
// alert("its AM");
// }else alert("its PM");


//TASK # 08
// var laterdate=new Date("31 Dec 2020");
// alert("later date :" + laterdate);


//TASK # 09
// var now1=new Date("18 Jun 2015");
// var now2=new Date();
// var diff=now2.getTime()-now1.getTime();
// alert((((diff/1000)/60)/60)/24   +" days have passed since 1st Ramadan , 2015"); 										


//TASK # 10
// var now1=new Date("Dec 5 2015 22:50:16");
// var now2=new Date("Jan 1 2015 00:00:00");
// var diff=now1.getTime()-now2.getTime();
// alert("on reference date :" + now1 +" "+ Math.ceil((diff/1000)/60) + 
// " seconds have passed since beginning of 2015");



//TASK # 11
// var now=new Date();
// var take=now.getHours();
// document.write("Current Date :" + now);
// now.setHours(take+1);
// document.write("<br>1 hour ago, it was" + now);



//TASK # 12
// var now=new Date();
// var take=now.getFullYear();
// document.write("Current Date :" + now);
// now.setFullYear(take-100);
// document.write("<br>1 hour ago, it was" + now);



//TASK # 13
// var age=prompt("enter your age:");
// var now=new Date();
// var take=now.getFullYear();
// now.setFullYear(take-age);
// document.write("your age is :" + now);




//TASK # 14
// document.write("<b>K-Electric Bill.</b>");
// document.write("<br>Customer Name : <b>MINHAJ SOHAIL</b>" );
// document.write("<br>Month : <b>Febuary</b>");
// document.write("<br>Number of units : <b>401</b>");
// document.write("<br>Chargers per unit : <b>16</b>");
// document.write("<br>Net Amount Payable(Within due date) :<b>" + (401*16) + "</b>");
// document.write("<br>Late payment surcharge : <b>350</b>");
// document.write("<br>Gross amount palable(after due date) :<b>"+ ((401*16)+350) + "</b>");


//CHAPTER # 35-38


//TASK # 01
// function foo()
// { var now=new Date();
// alert(now);	}
// foo();



//TASK # 02
// function foo(){
// 	var fname=prompt("enter first name");
// 	var lname=prompt("enter last name");
// 	alert("welcome " + fname + " " +lname);
// }
// foo();



//TASK # 03
// function add(){
// var fnum=Number(prompt("enter first number"));
// var snum=Number(prompt("enter second number"));
// return fnum + snum;
// }
// var get=add();
// alert(get);



//TASK # 04
// function calc(){
// var fnum=Number(prompt("enter first number"));
// var snum=Number(prompt("enter second number"));
// var operator=prompt("enter operator");
// if(operator=='+'){
//  return fnum + snum;	
// }
// else if(operator=='/'){
//  return fnum/snum;	
// }
// else if(operator=='-'){
//  return fnum-snum;	
// }
// else if(operator=='*'){
//  return fnum*snum;	
// }	 }
// alert(calc());



//TASK # 05
// function square(get){
// 	return get*get;
// }
// alert(square(4));



//TASK # 06
// function fact(get){
// for(let i=get-1;i>=1 ;i--)
// { get=get*i;  }
// return get;
// }
// alert("Factorial of the number 5 is :" +fact(5));



//TASK # 07
// function sequence(fnum,lnum) {
// 	for (var i = fnum; i<=lnum; i++) {
// 		document.write(i +"<br>");
// 	}
// }
// sequence(1,8);



//TASK # 08
// function calculateHypotenuse(b,p){
//  var hsquare= calculateSquare(b,p);
//  return Math.sqrt(hsquare);
// function calculateSquare(base,per){
// var h=(base*base)+(per *per);
// return h;
// }

// }
// var base=Number(prompt("enter base of triangle"));
// var perpendicular=Number(prompt("enter perpendicular of triangle"));
// alert(calculateHypotenuse(base,perpendicular));



//TASK # 09
//i-Arguments as value
// function area(a,b){
// 	return a*b;
// }
// alert(area(4,5));


//ii-Arguments as variables
// function area(a,b){
// 	return a*b;
// }
// var c=4,d=5;
// alert(area(c,d));



//TASK # 10
// function rev(str){
// 	var flag=1;
// var arr1=str.split("");
// arr1=arr1.reverse();
// var arr2=str.split("");
// for (var i = 0; i<=arr1.length; i++) {
// 	if(arr1[i]!=arr2[i])
// 		{	flag=0;
// 		break;		}}
// 		if(flag==1){alert("your string is palindrome");}
// 		else {alert("sorry it is not palindrome");}
// }
// var input=prompt("enter any string");
// rev(input);



//TASK # 11 
// function convert(str)
// {
//     str = str.split(" ");

//     for (let i = 0; i <str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }
// var you=prompt("enter any string");
// document.write(convert(you));



//TASK # 12
// function long(str){
// str=str.split(" ");
// var longest=str[0];
// for(let i =1 ;i<str.length;i++)
// { if(longest.length<str[i].length)
// 	{		longest=str[i];	}
// }
// return longest;
// }
// var get=prompt("enter any string");
// var ans=long(get);
// document.write("the longest word of the string is :" +ans);



//TASK # 13
// function check(str,wanted){
// var count=0;
// for(let i=0;i<str.length;i++)
// {		if(str[i]===wanted)
// {		count=count+1;	continue;}
// }
// return count;
// }
// var get="oSResourceS.com";
// var c=check(get,"o");
// alert("your variable is find on "+c+" spots in that string.");



//TASK # 14
// function calcCircumference(rad){
// document.write("Circumference of circle  :" + (2*Math.PI*rad));
// }
// function calcArea(rad){
// document.write("<br>Area of circle  :" + (Math.PI*rad*rad));
// }
// var r=prompt("enter the radius.");
// calcCircumference(r);
// calcArea(r);

















