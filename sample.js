// ............Synchronous.......................

// console.log('start');
// for (i=0;i<=1000;i++){
//     console.log(i);
    

// }
// console.log('end');


// .............Asynchronous...........................

// console.log('start');

// setTimeout(()=>{
//     console.log('inside');
    
// },3000)
// console.log('end');


// let count=10
// let data = setInterval(()=> {
//     document.getElementById("time").innerHTML=count
//     console.log(count);

//     count--
//     if(count<0){
//         clearInterval(data)
//     }
    
// },1000);


// let second=59
// let minute=2
// let data = setInterval(()=>{
//     document.getElementById("time").innerHTML=minute+':'+second

//     second--
//     if(second<0){
//         minute--
//         second=9
//         if(minute<0){
//             clearInterval(data)
//         }
    
//     }

  
    
// },1000);


// let second=10
// let data = setInterval(()=> {
//         document.getElementById("time").innerHTML=second
//         console.log(second);
    
//         second--
//         if(second<0){
//             clearInterval(data)
//             if (second<0){
//                 document.getElementById('image').style.display='none'
//             }
//         }
        
//     },1000);


// document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault()
//     let no = document.getElementById('no').value
//     let a1 = document.getElementById("a1")
//     if(/^[6-9]\d{9}/.test(no)){
//         a1.innerHTML='valid'
//     }
//     else{
//         a1.innerHTML='invalid'
//     }
// })



// let pswd=document.getElementById("pswd")
// let cap=document.getElementById("cap")
// let len=document.getElementById("len")
// let sm=document.getElementById("sm")
// let no=document.getElementById("no")
// let spl=document.getElementById("spl")
// pswd.addEventListener('input',function(){
//     let password = pswd.value
//     len.style.color=password.length>=8 ? 'green' : 'red'
//     cap.style.color=/[A-Z]/.test(password) ? 'green' : 'red'
//     sm.style.color=/[a-z]/.test(password) ? 'green' : 'red'
//     no.style.color=/\d/.test(password) ? 'green' : 'red'
//     spl.style.color=/[!@#$%&*]/.test(password) ? 'green' : 'red'
// })
// document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault()
//     let password=document.getElementById("pswd").value
//     console.log(password.length);

//     if (password.length>=8  && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%&*]/.test(password) ){
//         alert('valid')
//     }
//     else{
//         alert('invalid')
//     }
    
// })



// document.getElementById("form").addEventListener("submit",function(event){
//         event.preventDefault()
//         let email=document.getElementById("email").value
//         // console.log(password.length);
    
//         if (/[a-z]/.test(email) && /\d/.test(email) && /[!@#$%&*]/.test(email) ){
//             alert('valid')
//         }
//         else{
//             alert('invalid')
//         }
        
//     })


// try{
//     console.log(a);
// }
// catch(error){
//     console.log('error',error.message);
// }
// finally{
//     console.log('program ends');
    
// }


// ..............CALLBACK..........

// function Demo(callback){
//     console.log('Demo fun');
//     callback()
    
// }
// function Sample(){
//     console.log('sample fun');
    
// }
// Demo(Sample)

// output

// Demo fun
// sample fun    


// ..............CALLBACK HELL................

// function Demo(callback){
//     console.log('Demo fun');
//     callback(Sample1)
    
// }
// function Sample(callback){
//     console.log('sample fun');
//     callback()
    
// }
// function Sample1(){
//     console.log('sample1 fun');
    
// }

// output

// Demo fun
// sample fun
// sample1 fun


// ...............PROMISE...........................


// const data = new Promise((resolve,reject)=>{
//     if(10==10){
//         resolve('Eql')
//     }
//     else{
//         reject("Not")
//     }
// })
// data.then(result=>console.log(result)).catch(error=>console.log(error)).finally(()=>console.log("program ends"));


// output

// Eql
// program ends


// .............ASYNC AWAIT...................

// async function demo(){
//     const data = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("data available"),2000)
//     })
//     const result=await data
//     console.log(result);
    
// }
// demo()

// output

// data available