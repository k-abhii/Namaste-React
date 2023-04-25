const person={
  name:"Akshay",
  print:function(){
    console.log(this);
  }
}
const person2 ={
  name:"Simran"
} ;
person.print();
console.log("=========================================");
person.print.call();
console.log("===========================");
person.print.call(this);
console.log("=========================================");
person.print.call(person2);