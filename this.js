function x(){
  console.log(this);
  function y(){
    console.log(this);
  }
  y();
  function z(){
    console.log(this);
  }
  z();
}
x();

/* IT depends on how you are calling the function*/