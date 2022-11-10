var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var mortes = 0;
var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);
var inicio = createSprite(35, 190, 30, 38);
var fim = createSprite(345, 190, 30, 38);
var player = createSprite(35, 190, 20, 20);
var bloco1 = createSprite(100, 130, 10, 10);
var bloco2 = createSprite(220, 130, 10, 10);
var bloco3 = createSprite(160, 250, 10, 10);
var bloco4 = createSprite(280, 250, 10, 10);

  bloco1.shapeColor= "red";
  bloco2.shapeColor= "red";
  bloco3.shapeColor= "red";
  bloco4.shapeColor= "red";
  player.shapeColor= "green";
  inicio.shapeColor= "lightblue";
  fim.shapeColor= "lightblue";
  bloco1.velocityY=10;
  bloco2.velocityY=10;
  bloco3.velocityY=10;
  bloco4.velocityY=10;
function draw() {
  background("white");
  textSize(30);
  text("Mortes: "+ mortes, 130, 100);
  drawSprites();
  player.velocityX=0;
  player.velocityY=0;
  
  if (keyDown("up")){
  player.velocityX=0;
  player.velocityY=-5;
  }
  if (keyDown("down")){
  player.velocityX=0;
  player.velocityY=5;
  }
  if (keyDown("right")){
  player.velocityX=5;
  player.velocityY=0;
  }
  if (keyDown("left")){
  player.velocityX=-5;
  player.velocityY=0;
  }
  if (player.isTouching(fim)){
  textSize(30);
  text("GG!", 150, 300);
  
   player.velocityX=0;
  player.velocityY=0;

  }
  bloco1.bounceOff(wall1);
  bloco1.bounceOff(wall2);
  bloco2.bounceOff(wall1);
  bloco2.bounceOff(wall2);
  bloco3.bounceOff(wall1);
  bloco3.bounceOff(wall2);
  bloco4.bounceOff(wall1);
  bloco4.bounceOff(wall2);
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  if (player.isTouching(bloco1)||player.isTouching(bloco2)||player.isTouching(bloco3)||player.isTouching(bloco4)){
  player.x=45;
  player.y=190;
  ++mortes;
  }
  
  
  
  
  
  
  
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
