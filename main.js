//https://teachablemachine.withgoogle.com/models/lVQO-SABb/
var prediction1="";
var prediction2="";
Webcam.set({
    width: 350,
    height: 350,
    image_format: "jpg",
    jpg_quality: 90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='capturedimage'>"
});
}
console.log("ml5version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lVQO-SABb/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata1="first prediction is "+prediction1;
    var speakdata2="second prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}