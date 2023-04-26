const obj = {
  fn : function(){
    console.log(this);
  },
  fn2: ()=>{
    console.log(this);
  }
}

obj.fn();   /*Normal function returns object */
console.log("=========================================");
obj.fn2();  /* arrow function returns parent this */