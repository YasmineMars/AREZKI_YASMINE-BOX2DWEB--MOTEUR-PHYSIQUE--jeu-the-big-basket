function init() {
 
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');


    var canvas2 = document.getElementById('canvas2');
    var context2 = canvas2.getContext('2d');
    context2.fillStyle="#ffffff";


	  var posX = 650;      	
    var scale = 20;
    var score1=0 ,score2=0;
   
	//L'échelle qui fait correspondre les distances dans le monde Box2d (en mètres) à la distance 
	//correspondante sur le canvas (en pixels). 
    
    // création du monde physique 
	var    Vect2D = Box2D.Common.Math.b2Vec2 // objet physique

            ,   BodyDef = Box2D.Dynamics.b2BodyDef  // attributs: type, position.x, position.y
            ,   Body = Box2D.Dynamics.b2Body // permet de définir le type static ou dynamic
			//  .b2_dynamicBody or .b2_staticBody
            ,   FixtureDef = Box2D.Dynamics.b2FixtureDef // attributs: density, friction, restitution
            ,   World = Box2D.Dynamics.b2World  // une fois les objets crées, ils sont ajoutés au world
			// avec ajout de la friction .CreateBody(OBJECT1).CreateFixture(fixDef)
            ,   Polygon = Box2D.Collision.Shapes.b2PolygonShape
             ,   Circle = Box2D.Collision.Shapes.b2CircleShape
			
      // la forme de l'objet est ajoutée fixDef.shape.SetAsBox
            ,   DebugDraw = Box2D.Dynamics.b2DebugDraw;



    var world = new World(new Vect2D(0,10),  true);//  (vecteur de gravité, paramètre sleep)
    //On défini un ‘world’ avec deux paramètres : 
	// la gravité 
	//le paramètre ‘’sleep’’ dit à Box2D de ne pas traiter l’objet s'il est en équilibre.
    
    // On définit le sol (Ground, floor) en définissant ses propriétés 
   var fixDef = new FixtureDef;
        fixDef.density = 0.001;
        fixDef.friction = 0.4;
	      fixDef.restitution = 0.4;
	    
	  var X_CENTER_GROUND1=300;
    var Y_CENTER_GROUND1=250;

    var X_CENTER_GROUND2=340;
    var Y_CENTER_GROUND2=465;

    var X_CENTER_GROUND3=960;
    var Y_CENTER_GROUND3=465;

    var X_CENTER_GROUND4=1000;
    var Y_CENTER_GROUND4=250;

    var X_CENTER_GROUND5=650;
    var Y_CENTER_GROUND5=465;

    var X_CENTER_GROUND6=650;
    var Y_CENTER_GROUND6=440;

    var X_CENTER_GROUND7=373;
    var Y_CENTER_GROUND7=550;

    var X_CENTER_GROUND8=473;
    var Y_CENTER_GROUND8=550;


    var X_CENTER_GROUND9=830;
    var Y_CENTER_GROUND9=550;

    var X_CENTER_GROUND10=930;
    var Y_CENTER_GROUND10=550;

    var X_CENTER_GROUND11=423;
    var Y_CENTER_GROUND11=600;

    var X_CENTER_GROUND12=880;
    var Y_CENTER_GROUND12=600;
	// Ground is simply a static rectangular body with its center at X_CENTER_GROUND and Y_CENTER_GROUND
    
   /**************************************************************/

	  var SCENE_OBJECT1 = new BodyDef;
        SCENE_OBJECT1.type = Body.b2_staticBody;
        SCENE_OBJECT1.userData="SCENE_OBJECT1";
        SCENE_OBJECT1.position.x = X_CENTER_GROUND1/scale;//20 mètres;   
	      SCENE_OBJECT1.position.y =Y_CENTER_GROUND1/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(15/scale, 230/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT1).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/

   var SCENE_OBJECT2 = new BodyDef;
       SCENE_OBJECT2.type = Body.b2_staticBody;
      SCENE_OBJECT2.userData="SCENE_OBJECT2";
       SCENE_OBJECT2.position.x = X_CENTER_GROUND2/scale;//20 mètres;   
    	 SCENE_OBJECT2.position.y =Y_CENTER_GROUND2/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(55/scale, 15/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT2).CreateFixture(fixDef);


   /*************************************************************/

var SCENE_OBJECT3 = new BodyDef;
       SCENE_OBJECT3.type = Body.b2_staticBody;
       SCENE_OBJECT3.userData="SCENE_OBJECT3";
       SCENE_OBJECT3.position.x = X_CENTER_GROUND3/scale;//20 mètres;   
       SCENE_OBJECT3.position.y =Y_CENTER_GROUND3/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(55/scale, 15/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT3).CreateFixture(fixDef);

   /**************************************************************/
var SCENE_OBJECT4 = new BodyDef;
       SCENE_OBJECT4.type = Body.b2_staticBody;
      SCENE_OBJECT4.userData="SCENE_OBJECT4";
       SCENE_OBJECT4.position.x = X_CENTER_GROUND4/scale;//20 mètres;   
       SCENE_OBJECT4.position.y =Y_CENTER_GROUND4/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(15/scale, 230/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT4).CreateFixture(fixDef);

   

   /**************************************************************/

       var SCENE_OBJECT5 = new BodyDef;
       SCENE_OBJECT5.type = Body.b2_staticBody;
       SCENE_OBJECT5.userData="SCENE_OBJECT5";
       SCENE_OBJECT5.position.x = X_CENTER_GROUND5/scale;//20 mètres;   
       SCENE_OBJECT5.position.y =Y_CENTER_GROUND5/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(200/scale, 15/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT5).CreateFixture(fixDef);

   /**************************************************************/

var SCENE_OBJECT6 = new BodyDef;
        SCENE_OBJECT6.type = Body.b2_staticBody;
        SCENE_OBJECT6.userData="SCENE_OBJECT6";
        SCENE_OBJECT6.position.x = X_CENTER_GROUND6/scale;//20 mètres;   
        SCENE_OBJECT6.position.y =Y_CENTER_GROUND6/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(15/scale, 40/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT6).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/
   /**************************************************************/

   var SCENE_OBJECT7 = new BodyDef;
        SCENE_OBJECT7.type = Body.b2_staticBody;
        SCENE_OBJECT7.userData="SCENE_OBJECT7";
        SCENE_OBJECT7.position.x = X_CENTER_GROUND7/scale;//20 mètres;   
        SCENE_OBJECT7.position.y =Y_CENTER_GROUND7/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(10/scale, 40/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT7).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/
/**************************************************************/

   var SCENE_OBJECT8 = new BodyDef;
        SCENE_OBJECT8.type = Body.b2_staticBody;
        SCENE_OBJECT8.userData="SCENE_OBJECT8";
        SCENE_OBJECT8.position.x = X_CENTER_GROUND8/scale;//20 mètres;   
        SCENE_OBJECT8.position.y =Y_CENTER_GROUND8/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(10/scale, 40/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT8).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/

 /**************************************************************/

   var SCENE_OBJECT9 = new BodyDef;
        SCENE_OBJECT9.type = Body.b2_staticBody;
        SCENE_OBJECT9.userData="SCENE_OBJECT9";
        SCENE_OBJECT9.position.x = X_CENTER_GROUND9/scale;//20 mètres;   
        SCENE_OBJECT9.position.y =Y_CENTER_GROUND9/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(10/scale, 40/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT9).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/
/**************************************************************/

   var SCENE_OBJECT10 = new BodyDef;
        SCENE_OBJECT10.type = Body.b2_staticBody;
        SCENE_OBJECT10.userData="SCENE_OBJECT10";
       SCENE_OBJECT10.position.x = X_CENTER_GROUND10/scale;//20 mètres;   
        SCENE_OBJECT10.position.y =Y_CENTER_GROUND10/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(10/scale, 40/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT10).CreateFixture(fixDef); // And finally add the object1 to the world


   /**************************************************************/

   /**************************************************************/

   var SCENE_OBJECT11 = new BodyDef;
       SCENE_OBJECT11.type = Body.b2_staticBody;
      SCENE_OBJECT11.userData="SCENE_OBJECT11";
       SCENE_OBJECT11.position.x = X_CENTER_GROUND11/scale;//20 mètres;   
       SCENE_OBJECT11.position.y =Y_CENTER_GROUND11/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(60/scale, 10/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT11).CreateFixture(fixDef);


   /*************************************************************/

var SCENE_OBJECT12 = new BodyDef;
       SCENE_OBJECT12.type = Body.b2_staticBody;
      SCENE_OBJECT12.userData="SCENE_OBJECT12";
       SCENE_OBJECT12.position.x = X_CENTER_GROUND12/scale;//20 mètres;   
       SCENE_OBJECT12.position.y =Y_CENTER_GROUND12/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(60/scale, 10/scale); // les w et h données représentent la moitié de la largeur et hauteur
   world.CreateBody(SCENE_OBJECT12).CreateFixture(fixDef);

   /**************************************************************/


   var debug = new DebugDraw();
	
	debug.SetSprite(document.getElementById("canvas").getContext("2d"));
	debug.SetDrawScale(scale);
	debug.SetFillAlpha(0.6);
	debug.SetLineThickness(2.0);
	debug.SetFlags(DebugDraw.e_shapeBit); // display all shapes and joints 
	world.SetDebugDraw(debug); // initialiser debug draw par le passage de debug à SetDebugDraw()
  world.DrawDebugData(); // draw the world in the given canvas for debugging and testing purposes           	

     
  // Une fois les objets crées, il faut les dessiner et les animer.
  // Il faut utiliser une fonction de rappel. 
     alert("scroller en bas pour voir le score");

      carre();  
     
      window.setInterval(update, 1000 / 100);
      window.setInterval(carre, 6000 );

     function update(){
      
           world.Step(1/60, 10, 10);
           world.DrawDebugData();

           context2.clearRect(0,0,1500,1500);

         context2.lineWidth=5;// epaisseur du trait
         context2.strokeStyle="#ffffff";
         context2.strokeRect(330,0,200,100);

          context2.lineWidth=5;// epaisseur du trait
          context2.strokeStyle="#ffffff";
          context2.strokeRect(780,0,200,100);

         context2.font='70px serif';
         textAlign="center";
         context2.fillText('JOUEUR1',0,85);
          context2.fillText('JOUEUR2 ',1000,85);

         context2.fillText(score1,415,85);
         context2.fillText(score2,865,85);
      }


   
 

      function carre(){

        var DYNAMIC_SCENE_OBJECT = new BodyDef;
        DYNAMIC_SCENE_OBJECT.type = Body.b2_dynamicBody;
        DYNAMIC_SCENE_OBJECT.userData="carre";


        var fixDef = new FixtureDef;

         for(var i=1;i<=5;i++){
               fixDef.shape = new Polygon;
               fixDef.shape.SetAsBox( 0.5, 0.5);

                fixDef.density = 1.0;
                fixDef.friction = 0.5;
                fixDef.restitution = 0.5;

               DYNAMIC_SCENE_OBJECT.position.x = posX/scale;
               DYNAMIC_SCENE_OBJECT.position.y = 50*i/scale;            
               world.CreateBody(DYNAMIC_SCENE_OBJECT).CreateFixture(fixDef);
         }
         

      }

        function circle(MouseXdebut, MouseYdebut,MouseXfin,MouseYfin){

       var DYNAMIC_SCENE_OBJECT2 = new BodyDef;

        DYNAMIC_SCENE_OBJECT2.type = Body.b2_dynamicBody;
        DYNAMIC_SCENE_OBJECT2.userData="circle";

         var fixDef = new FixtureDef;
        
               fixDef.shape = new Circle(Math.random()+0.5);
               
               DYNAMIC_SCENE_OBJECT2.position.x = MouseXdebut/scale;
               DYNAMIC_SCENE_OBJECT2.position.y = MouseYdebut/scale;  
               DYNAMIC_SCENE_OBJECT2.linearVelocity.Set(MouseXfin/scale,MouseYfin/scale);

               world.CreateBody(DYNAMIC_SCENE_OBJECT2).CreateFixture(fixDef);

      }

        window.addEventListener("click", function(e) {

            MouseYdebut=50;

            if(e.x >=650){
              MouseXfin=e.x-200;
              MouseXdebut=350;
              MouseYfin=e.y;
            }
            else{
              MouseXdebut=950;
              MouseXfin= e.x-1000 ;
              MouseYfin=e.y-100;

            }

            circle(MouseXdebut,MouseYdebut,MouseXfin,MouseYfin);
         });


      
var listener = new Box2D.Dynamics.b2ContactListener;
listener.BeginContact = function (contact) {
 
    var fixA = contact.GetFixtureA().GetBody().GetUserData();
    var fixB = contact.GetFixtureB().GetBody().GetUserData();

    if((fixA=="carre") && (fixB=="SCENE_OBJECT7" ||fixB=="SCENE_OBJECT8"||fixB=="SCENE_OBJECT11" ))
    {
         score1++;
    }
    
    if((fixA=="carre") && (fixB=="SCENE_OBJECT9" ||fixB=="SCENE_OBJECT10"||fixB=="SCENE_OBJECT12" ))
    {
         score2++;
    }
    

  if(score1==20){
    alert("BRAVO JOUEUR 1 , VOUS AVEZ GAGNEEEEEEEEE");
  }
  if(score2==20){
    alert("BRAVO JOUEUR 2 , VOUS AVEZ GAGNEEEEEEEEE");
  }
}
world.SetContactListener(listener);
  }

 
     

  

	

