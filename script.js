const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");

const textToSpeech = () =>{
    const synth =  window.speechSynthesis;
    const text = textarea.value;

    
    if (text !== "") {
        const utterance = new SpeechSynthesisUtterance(text);  
        synth.speak(utterance);
    }
    
}

btn.addEventListener("click",textToSpeech);
    