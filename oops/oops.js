// .........................OOPS.........................

// class std{
//     constructor(){
//         console.log('demo data');   
//     }
//     display(){
//         console.log('display');   
//     }
// }
// let std1 = new std
// std1.display()

// output

// demo data
// display



// class std{
//     constructor(name){
//         this.name=name
//         console.log('demo data');   
//     }
//     display(age){
//         console.log('display',this.name,age);   
//     }
// }
// let std1 = new std('achu')
// std1.display(21)

// output

// demo data
// oops.js:22 display achu 21


// INHERITANCE................

class School{
    constructor(){
        console.log('school class');
        
    }
    classroom(){
        console.log('class room');
        
    }
}

class std extends School{
        constructor(name){
            super()
            this.name=name
            console.log('demo data');   
        }
        display(age){
            console.log('display',this.name,age);   
        }
    }
    let std1 = new std('achu')
    std1.display(21)
    std1.classroom()
    
    // output

// school class
//  demo data
// display achu 21
//  class room