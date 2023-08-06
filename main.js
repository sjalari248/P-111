
Webcam.set({
    width:350,
    height:300,
    image_format : 'png'
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach( '#camera' );
    
    
    function take_snapshot() 
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
    }
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+'"/>';
        });
    }
    
    console.log('ml5 version:', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BlRwc1xYt/model.json',modelLoaded);
    
    function modelLoaded() {
        console.log('Model Loaded!')
    }
    
    function speak() {
        var synth = window.speachSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        speak_data_2 = "And the second prediction is " + prediction_2;
        var utterThis = new SpeechSynthesesUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis);
    }