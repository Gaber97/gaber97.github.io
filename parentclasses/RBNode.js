
class RBNode extends PoorNode{


    color;


    constructor(val,color){
      super(val);
      this.color=color;
 
      
    }
  
  
   
    Copy(nil){
  
      var n = new node();
  
  
      n.value=this.value; 
      n.x=this.x;
      n.y=this.y;
      n.color=this.color;


      if(nil != undefined){
      
        n.left = nil;
        n.right= nil;
        n.parent= nil;
      }
      else{
       
        n.left = this.left;;
        n.right= this.right;
        n.parent= this.parent;
      }
  
      return n;
  
    }
  
  
  
   
  }
   