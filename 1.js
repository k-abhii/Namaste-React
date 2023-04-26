const person ={
  name:"Abhimanyu"
}

const person2 ={
  name:"Kumar"
}

function x(){
  console.log(this);
}

x.call(this);
x.call(person);
x.call(person2);