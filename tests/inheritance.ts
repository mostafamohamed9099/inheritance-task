class Base{
    open():void {
        console.log("open this website here ");
    }
    
}

class child extends Base{
      override open():void{
        super.open();
        console.log(" override the Base class");
        super.open();
    }
   
}
console.log(new child().open());


//const ch = new child ();
//ch.sayHello();
