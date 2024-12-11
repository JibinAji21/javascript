//1) Alert>.........

// alert("welcome to all")


//2) Console...........

// a="hello"
// console.log("welcome to all",a);
// alert(a)

// var..........

// var a="hello"
// var a=20
// console.log(a);


// let...................

// let a="hai"
// a=25
// console.log(a);


// const.................

// const a="welcome"
// console.log(a);


// DATATYPES IN JAVASCRIPT.................

// 1) number type
// 2) string type
// 3) array type
// 4) boolean type
// 5) none type
// 6) object type

// let a
// a= {name:'anu',age:20}
// console.log(typeof a);

// console.log(a);


// OPERATORS IN JAVASCRIPT................

// 1) Arithmetic operator:

// console.log(10+7);
// console.log(10-7);
// console.log(10*7);

// let a=10/5
// console.log(a);


// let a=10**5
// console.log(a);


// let a=5
// a++
// console.log(a);


// let a=5
// a--
// console.log(a);


// 2) Assignment operator:

// console.log(a=10);


// let a=10
// a+=2
// console.log(a);
// output:12


// let a=10
// a-=2
// console.log(a);
// output:8


// let a=10
// a*=2
// console.log(a);
// output:20


// let a=10
// a/=2
// console.log(a);
// output=5


// let a=10
// a%=2
// console.log(a);
// output=0


// let a=10
// a**=2
// console.log(a);
// output=100

// 3) Comparison operator:


// let a=10
// let b='20'
// console.log(a==b);
// output:false


// let a=10
// let b='10'
// console.log(a==b);
// output:true


// let a=10
// let b='10'
// console.log(a!=b);
// output:false


// let a=10
// let b='20'
// console.log(a>b);
// output:false


// let a=10
// let b='20'
// console.log(a<b);
// output:true


// let a=10
// let b='20'
// console.log(a>=b);
// output:false


// let a=10
// let b='20'
// console.log(a<=b);
// output:true


// let a=10
// let b='20'
// console.log(a===b);
// output:false


// let a=10
// let b=10
// console.log(a===b);
// output:true


// let a=10
// let b='20'
// console.log(a!==b);
// output:true


// 4) Logical operator:

// let a=10
// let b="20"
// console.log(a!=b&&a==10);
// output:true


// let a=10
// let b="20"
// console.log(a!=b||a==10);
// output:true
// ....................................................................


// function sample(){


    // let result=document.getElementById("name")
    // console.log(result.value);
    // document.getElementById("display").innerHTML=result.value


    // let result=document.getElementById("name").value
    // console.log(result);
    // let h2=document.getElementById("display")
    // h2.innerHTML=result
    
    // let no1=parseInt(document.getElementById("no1").value)
    // let no2=parseInt(document.getElementById("no2").value)
    // let h2=document.getElementById("display")
    // h2.innerHTML=no1+no2


    // let no1=parseInt(document.getElementById("no1").value)
    // let no2=parseInt(document.getElementById("no2").value)
    // let h2=document.getElementById("display")

    // if(no1==no2){
    //     h2.innerHTML='eql'
    // }
    // else if(no1!=no2){
    //     h2.innerHTML='not eql'
    // }
  

    // FOR LOOP...............................

    // let i=1
    // for (let i=1;i<=10;i++){
    //     console.log(i);
        
    // }

    //  WHILE LOOP.............................

    // let i=1
    // while (i<=10){
    //     console.log(i);
    //     i++
        
    // }


    // DO WHILE...................................

    // let i=1
    // do{
    //     console.log(i);
    //     i++
        
    // }
    // while(i<=10)










    
// }

// function add(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1+no2


// }

// function sub(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1-no2


// }

// function mult(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1*no2

// }

// function div(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1/no2

// }

// function mod(){
//     let no1=parseInt(document.getElementById("no1").value)
//     let no2=parseInt(document.getElementById("no2").value)
//     let h2=document.getElementById("display")
//     h2.innerHTML=no1%no2

    
// }

// // conditional statements tasks:

// function bonus(){
//     let salary=parseInt(document.getElementById("salary").value)
//     let year=parseInt(document.getElementById("year").value)
//     let h2=document.getElementById("display")

//     if(year>=5){
//         h2.innerHTML=salary*0.05+salary
//     }
//     else {
//         h2.innerHTML='no bonus'
//     }
  

// }
// let year=parseInt(document.getElementById("num").value)
// let h2=document.getElementById("display")
// function divisible(){
//     if(num%3==0){
//         h2.innerHTML='is divisible'
//     }
//     else{
//         h2.innerHTML='not divisible'
//     }

// }

function odd(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let h2=document.getElementById("display")
    let i=num1

    for(let i =num1;i<=num2;i++){
        if (i%2!=0){
        console.log(i);
    }
}
}

function even(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let h2=document.getElementById("display")
    let i=num1

    for(let i =num1;i<=num2;i++){
        if (i%2==0){
        console.log(i);
    }
}
}

function multtable(){
    let num=parseInt(document.getElementById("num").value)
    a=1
    for(let i=a;i<=10;i++){
        console.log(a,'*',num,'=',a*num)
        a+=1
        
    }

}

























