const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");
let isSpeaking = true;
const textToSpeech = () =>{
    const synth =  window.speechSynthesis;
    const text = textarea.value;  
    if(text == ""){
        alert("Enter some text");
    }
    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);  
        synth.speak(utterance);
        // btn.innerHTML = "Pause";
        // utterance.onend = () => {
        //     btn.innerHTML = "Convert to Speech";
        // };
    }

    if(text.length > 50){
        if(synth.speaking && isSpeaking){
            btn.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        }else{
            btn.innerText = "Convert to Speech";
            synth.pause();
            isSpeaking = true;
        }
    }
}
btn.addEventListener("click",textToSpeech);   