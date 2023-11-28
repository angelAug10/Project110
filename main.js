//https://teachablemachine.withgoogle.com/models/SBVDTjI5m/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ov4DRVbLv/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
    console.log(results);
    random_number_r=Math.floor(Math.floor()*255)+1;
    random_number_g=Math.floor(Math.floor()*255)+1;
    random_number_b=Math.floor(Math.floor()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 if(results[0].label=='barking'){ dog=dog+1; }
   if(results[0].label=='meowing'){ cat=cat+1; }



{
        

    }
}