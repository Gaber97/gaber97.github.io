

function setup(){


   
    
    
    canvas=createCanvas(windowWidth, 3*windowHeight/4);
    canvas.position(0,0);



    

    Visualazer= new Treevisualizer();

    createButtons();


    //test

}


function draw(){
    
    background(54);
    Visualazer.setAnimationSpeed(slider.value());
    Visualazer.drawTree();
  
}

function clicked(){

    n=input.value();
    Visualazer.addElement(n);
    input.value("");

    
 
}

function stepForward(){

    Visualazer.stepForward();
    
 
}

function stepBackward(){

    Visualazer.stepBackward();
 
}
  

function setAnim(){

    Visualazer.setAnimation();
    
 
}

function stepForwardSkip(){

    Visualazer.stepForwardSkip();
    
 
}

function stepBackwardSkip(){

    Visualazer.stepBackwardSkip();
 
}
  

function setAnim(){

    Visualazer.setAnimation();
    
 
}

function helpDiv(){

    if(helpDivElement.isHide){
        helpDivElement.show();
        helpDivElement.isHide=false;
    }
    else{
        helpDivElement.hide();
        helpDivElement.isHide=true;

    }

}




function createButtons(){

 


    //vizual elemet
    divHorizontal = createElement("div","");

    divHorizontal.position(0,0);
    divHorizontal.size(80,3*windowHeight/4);

    divVertical = createElement("div","");

    divVertical.position(0,0);
    divVertical.size(windowWidth,50);
    //
    input = createInput();
    input.position(20, 10);
    input.size(50,30);


    buttonAdd = createButton('Add');
    buttonAdd.position(input.x + input.width+10, input.y );
    buttonAdd.mousePressed(clicked);
    buttonAdd.size(50,30);

    buttonDel = createButton('Del');
    buttonDel.position(buttonAdd.x + buttonAdd.width+10, buttonAdd.y );
    //buttonDel.mousePressed(clicked);
    buttonDel.size(50,30);

    buttonForwardSkip = createButton('>>');
    buttonForwardSkip.position(input.x, input.y + input.height+ 10);
    buttonForwardSkip.mousePressed(stepForwardSkip);
    buttonForwardSkip.size(50,50);

    buttonForward = createButton('>');
    buttonForward.position(buttonForwardSkip.x, buttonForwardSkip.y + buttonForwardSkip.height+ 10);
    buttonForward.mousePressed(stepForward);
    buttonForward.size(50,50);

    buttonBackward = createButton('<');
    buttonBackward.position(buttonForward.x ,buttonForward.y + buttonForward.height + 10);
    buttonBackward.mousePressed(stepBackward);
    buttonBackward.size(50,50);

    
    buttonBackwardSkip = createButton("<<");
    buttonBackwardSkip.position(buttonBackward.x ,buttonBackward.y + buttonBackward.height + 10);
    buttonBackwardSkip.mousePressed(stepBackwardSkip);
    buttonBackwardSkip.size(50,50);


    animButton = createButton('SetAnimation ON/OFF');
    animButton.size(100,50);
    animButton.position(windowWidth-150,3*windowHeight/4-75);
    animButton.mousePressed(setAnim);
    


    slider = createSlider(0.001, 0.1, 0.01,0.001);
    slider.position(animButton.x-slider.width-10, animButton.y+ animButton.height/4);

    help=createButton('?');
    help.position(windowWidth-50,20);
    
    help.mouseOver(handlerHelp);
    help.mouseOut(handlerHelp);


    helpDivElement = createElement("div","");
    helpDivElement.id("helpDialog");
    helpDivElement.position(help.x-500,help.y)
    helpDivElement.size(500,750);


    //szépít
    helpDivElement.html('<h2 align="center">Program működése útmutató</h2>'+
    '<ul>'+
        '<li><h3>Add</h3>'+
            '<p>Ennek segítségével adhatsz elemet a Piros Fekete fához.'+
            'Az elem beszúrodik és nyomonkövedheted, hogyan helyezkedik el a fában.</p>'+
        
        '</li>'+
        '<li>'+
            '<h3>Del</h3>'+
            '<p>Ennek segítségével törölhetsz elemet a Piros Fekete fából.'+
            'Az elem beszúrodik és nyomonkövedheted, hogyan helyezkedik el a fában.</p>'+
    
    
       '</li>'+
        '<li> <h3>>></h3>'+
            '<p>Ennek segítségével léptetheted a rögtön a vég állapotba  a fát a beszúrás,vagy törlés esetén.</p>'+
        '</li>'+
        '<li><h3>></h3>'+
            '<p>Ennek segítségével léptetheted a fát előre a beszúrás vagy törlés esetén.</p></li>'+
        '<li><h3>< </h3>'+
            '<p>Ennek segítségével léptetheted a fát vissza a beszúrás vagy törlés esetén.</p></li>'+
        '<li><h3><<</h3>'+
           ' <p>Ennek segítségével léptetheted a fát előre a beszúrás vagy törlés esetén.'+
           ' Ezek segítségével léphetünk vissza, vagy előre előző beszúrt elemekhez is</p>'+
        '</li>'+   
        '<li>'+
            '<h3>Animation set ON/Off</h3>'+
            '<p>Ennek az animációt be és ki lehet kaspcsolni.'+
            'Csúszka segítségével az animáció sebeségét nővelhetjük</p>'+
       '</li>'+
    '</ul>');
   
    helpDivElement.hide();
    helpDivElement.isHide=true;


}



//tester

function randomTree(num){


    for(var i=0;i<num;i++){

        Visualazer.addElement(random(1,10000+num));            
    }

   
}

function lessTree(num){


    for(var i=0;i<num;i++){

        Visualazer.addElement(num*2-i);            
    }

   
}



function windowResized() {
    resizeCanvas(windowWidth, 3*windowHeight/4);
    animButton.position(windowWidth-150,3*windowHeight/4-75);
    slider.position(animButton.x-slider.width-10, animButton.y+ animButton.height/4);
    divVertical.size(windowWidth,50);
    help.position(windowWidth-50,20);
    helpDivElement.position(help.x-500,help.y);
    divHorizontal.size(80,3*windowHeight/4);
  

    






}



function handlerHelp(event) {
  
  if (event.type == 'mouseover') {
     helpDivElement.show();
   
  }
  if (event.type == 'mouseout') {
    helpDivElement.hide();
  }
}