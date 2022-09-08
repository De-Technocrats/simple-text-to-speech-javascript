// JavaScript Document

//make variabel
let textArea = document.getElementById('textArea');
let btn = document.getElementsByTagName('button')[0];

// check if you click on the button
btn.addEventListener('click', function(){

  //check if textarea is blank
   if(textArea.value==""){
       //give alert
       alert("Please don't be blank!");

  //check if you has been enter a text on textarea
   }else{

      //init responVoice speak
      responsiveVoice.speak(

      //take the tag textarea
      textArea.value,

      //choose us english female
      "US English Female",
      {

      //give a voice
      pitch: 1, 
      rate: 1, 
      volume: 1
      }
    );
  }
});