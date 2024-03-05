const d = document;
let x = 0, y = 0;


export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    /*console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall,limitsStage)*/;

   //const move = (direction) => {};

switch(e.keyCode){
   case 37:
      //move("left");
      if(limitsBall.left > limitsStage.left){
         e.preventDefault();
         x--;
      }
         break;

   case 38:
      if(limitsBall.top > limitsStage.top){
         e.preventDefault();
         y--;
      }
      break;

   case 39:
      if(limitsBall.right < limitsStage.right){
         e.preventDefault();
         x++;
      }
      break;

   case 40:
      if(limitsBall.bottom < limitsStage.bottom){
         e.preventDefault();
         y++;
      }
      break; 
        
   default:
      break;
 }
 $ball.style.transform =`translate(${x * 10}px, ${y *10}px)`;

};

export function shortcuts(e){
   /* console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    */
    if(e.key === "a" && e.altKey){
       alert(`haz precionado ${e.key} + la tecla "alt"`);
    }

    if(e.key === "c" && e.ctrlKey){
        confirm(`haz laznado una confirmación`);
     }

     if(e.key === "p" && e.altKey){
        prompt(`haz lanzado una recolector de datos`);
     }
}


