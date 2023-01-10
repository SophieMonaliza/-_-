      
Webcam.attach( '#camera' );


var camera = document.getElementById("camera");
      
  Webcam.set({

    width : 300,
    height : 500,

    image_format : "png",
    png_quality:90
  });


function foto()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
  }



classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pwWbPdLnU/model.json',modelLoaded);

  
  function modelLoaded() {
    console.log('Modelo Carregado!');
  }
      
  function identificarfoto() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }



function gotResult(error, results) {
   if(error) {
  console.log(error);
 } else {
    
   console.log(results)
   
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}