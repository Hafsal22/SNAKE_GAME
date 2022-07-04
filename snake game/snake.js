var cvs=document.getElementById("canavas").getContext("2d")
var sposx=80;
var spoxy=80;
var nposx=0;
var nposy=0;
var fposx=140;
var fpoxy=140;
var snaketail=[];
var snakesize=1;
var score=0;
var gamestatus="ready"

window.onload=function()
{
    document.addEventListener("keydown",inputcontroll);
   game=setInterval( maingame,200);
}


function maingame()
{
    document.getElementById("game-status").innerHTML=gamestatus;
    document.getElementById("score").innerHTML=score;
    sposx +=nposx;
    spoxy +=nposy;

    if(sposx>400)
    {
        sposx=0;
    }
    if(sposx<0)
    {
        sposx=400;
    }
    if(spoxy>400)
    {
        spoxy=0;
    }
    if(spoxy<0)
    {
        spoxy=400;
    }
    cvs.fillStyle="black";
    cvs.fillRect(0,0,400,400);
  for(var cl=0;cl<400;cl+=20)
  {
    cvs.moveTo(cl, 0);
    cvs.lineTo(cl, 400);
    cvs.strokeStyle="black";
    cvs.stroke();
  }
  for(var rl=0;rl<400;rl+=20)
  {
    cvs.moveTo(0, rl);
    cvs.lineTo(400, rl);
    cvs.strokeStyle="black";
    cvs.stroke();
  }
  cvs.fillStyle="yellow";
  //cvs.fillRect(sposx,spoxy,20,20);
  for(var i=0;i<snaketail.length;i++)
  {
    cvs.fillRect(snaketail[i].x,snaketail[i].y,20,20);
    if(sposx==snaketail[i].x &&spoxy==snaketail[i].y && snakesize>1)
    {
        clearInterval(game);
        gamestatus="game over";
        document.getElementById("game-status").innerHTML=gamestatus;
    }

  }

  cvs.fillStyle="red";
  cvs.fillRect(fposx,fpoxy,20,20);

  if (sposx == fposx && spoxy==fpoxy)
  {
    snakesize++;
    score+=10;
  fposx=Math.floor(Math.random()*20)*20;
  fpoxy=Math.floor(Math.random()*20)*20;
  }
snaketail.push({x:sposx,y:spoxy});
while(snaketail.length>snakesize)
{
    snaketail.shift();
}
}
function inputcontroll(e)
{
    console.log(e.keyCode);
    console.log(e.key);
    switch(e.keyCode){
        case 38:
            nposy-=20;
            nposx=0;
            break;
        case 40:
            nposy+=20;
            nposx=0;
            break;
        case 39:
            nposx+=20;
            nposy=0;
            
             break;
         case 37:
            nposx-=20;
            nposy=0;
            break;
    }
    
  if(e.keyCode==37||e.key==38||e.keyCode==39||e.keyCode==40)
  {
     gamestatus="game started";
    Document.getElementById("game-status").innerHTML=gamestatus;
  }


}
