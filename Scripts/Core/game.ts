//immediate invokes anonymous function

(function() {

    //global
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;


    function Init() {
        console.log("Initializing Start");
        Start();
    }
    

    function Start(){
        console.log("Starting Application...");

        //initialized createjs
        stage = new createjs.Stage(canvas);
        //is like the timer
        createjs.Ticker.framerate = 60;
        //everytime a tick increments calls update function
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(){
        stage.update();

        //movement here
    }

    function Main(){
        console.log("Game Start");

        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel);
    }

    //listening for window to open
    window.onload = Init;
});