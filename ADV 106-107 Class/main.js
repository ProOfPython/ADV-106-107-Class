function startToSort(){
    navigator.mediaDevices.getUserMedia({audio: true})
    sorter = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1N3noHscf/', modelReady)
}
function modelReady(){
    sorter.classify(gotResults)
}