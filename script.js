  
   window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
      return null;
    } 
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
   
    setTimeout(() => {
      key.classList.remove("playing");
    }, 200);
  });

 

  