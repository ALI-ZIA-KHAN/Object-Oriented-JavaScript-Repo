

console.log("hello world")

//encapsulation

let employee = {
    base_salary:3000,
    overtime:10,
    rate:20,

    getWage:function(){
        return this.base_salary + (this.overtime * this.rate)
    }
};



//Object Literals
//simple obj creation
const circle = {
    radius:1,
    location:{
        x:2,
        y:1
    },
    draw:function(){
        console.log('draw')
    }
}
circle.draw()




//Obj creation by
//Factory Function
//when we return

function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('draw')
        }
    }
}


const circle2 = createCircle(1)
circle.draw();
//to create different circle with diff radius





//Obj creation by 
//constructor Function when we use this and new


//actually func are like classes in JS as there is no concept of classes


//this inside obj here creates attributes inside of that obj
//otherwise this refers to global that is window object(chk by just removing new keyword)


//nEW KEYWORD
//1- new keywords create empty object
//2- then it set the this to point that object
//3- we dont write return as new keyword by default returns

function Circle(radius){
    // console.log("this",this)
    this.radius=radius;   
    this.draw = function (){
        console.log('draw');
    }
}

const another=new Circle(1)


//Constructors
another.constructor
//every obj has const prop that refers to functio used to create it


//builtin constructors

new String(); //but we use "",'' instead
new Boolean();//same wwe use true n false




//functions are objects

Circle.length //=1        //write on console to see
Circle.name   //=Circle   //write on console to see






Circle.call({},1)
Circle.apply({},[1,2,3])
//it is same as  const another=new Circle(1)


Circle.call(window,1)
//it is same as const another=Circle(1)



//pass by value

let a=10;
let b=a;
           //a=20
           //b=10
a=20;


//pass by ref

let p= {value:10};
                  //p=20  
let q=p;           //q=20    coz address of memory is allocated
p.value=20;                  //and value at athat is assigned   




//Adding properties to object

circle.location={x:1};
circle['location']={x:1};




delete circle.location;
delete circle['location']



//Enumerating Properties
//iterating
for (let key in circle){

    console.log(key);
    console.log(key,circle[key]);

}


for (let key in circle){
    
    if(typeof circle[key] != 'function')
    console.log(key,circle[key]); //if only want to show attribute

}


const keys=Object.keys(circle);
console.log(keys)


if('radius' in circle){
    console.log("yes circle has radius attribute")
}





//Abstraction

function Circle(radius){
    // console.log("this",this)
    this.radius=radius;   
    this.defaultlocation={x:0,y:0};
    this.optLoc=function(){
        //....
    }
    this.draw = function (){  //now we want to hide optLoc and defaultlocation as abstraction


        this.optLoc()
        console.log('draw');
    }
}

const another1=new Circle(10)









function Circle(radius){
    // console.log("this",this)
    this.radius=radius;           
    let defaultlocation={x:0,y:0};
    let optLoc=function(){
        //....
    }
    this.draw = function (){  //now we are still using these two but 
                               //now let has defined its scope only inside of its function
                               //to use as well as disabling for outside acces
        
        this.radius //circle's attri so like this
        optLoc()   //it is also of parent function but there is concept of closure of func that enable it to use the prop and func of parent function
        console.log('draw');
    }
}

const another2=new Circle(11);









//Getters and setters

//now we want to get def loc in any case just for reading 
//so we make a getter to make it accessible


function Circle(radius){
   
    this.radius=radius;           
    let defaultlocation={x:0,y:0};
   
    this.getdefaultlocation=function (){
        return defaultlocation
    }
    this.draw = function (){  
        
        this.radius
        optLoc()   
        console.log('draw');
    }


  //another way of getter(getters are read only)
  Object.defineProperty(this,'defaultlocation',{
      get:function (){
          return defaultlocation;
      },
      set:function(value){
        if(!value.x || !value.y)
        throw new Error("Not valid location");
  
        defaultlocation=value;
    }
  
  });
  

}

const another4=new Circle(11);
another4.defaultlocation;  
another4.defaultlocation=5;//shows error
