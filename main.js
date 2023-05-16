prediction_1 = "";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
    

});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'">';
    });
}

console.log("ml5 version :", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/L8WvPg1a6/model.json", modelLoaded);

function modelLoaded(){
    console.log('Model Is Loaded !');
}

function check(){
    img = document.getElementById('capture_img');
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;

        prediction_1 = results[0].label;

        if(results[0].label == "Victory"){
            document.getElementById("gesture_emoji").innerHTML = "That was a marvelous victory !";
        }
        
        if(results[0].label == "Best"){
            document.getElementById("gesture_emoji").innerHTML = "All the best !";
        }
        if(results[0].label == "Amazing"){
            document.getElementById("gesture_emoji").innerHTML = "Looking amazing !";
        }
        
    }

    
}
