function IsTouching (Movingobject,Steadyobject){
    if (Movingobject.x-Steadyobject.x<Movingobject.width/2+Steadyobject.width/2 
      && Steadyobject.x-Movingobject.x<Movingobject.width/2+Steadyobject.width/2
    && Movingobject.y-Steadyobject.y<Movingobject.height/2+Steadyobject.height/2 
      && Steadyobject.y-Movingobject.y<Movingobject.height/2+Steadyobject.height/2){
  return (true);
  
    }
  else {return (false)}
  }