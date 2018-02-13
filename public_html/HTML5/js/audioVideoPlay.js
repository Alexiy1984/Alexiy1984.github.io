window.onload = function () {

  function playaudio() {
    O('myaudio').play();
  }
  function pauseaudio() {
    O('myaudio').pause();
  }
  function playvideo() {
    O('myvideo').play();
  }
  function pausevideo() {
    O('myvideo').pause();
  }

  O('js_playaudio').addEventListener("click", playaudio());
  O('js_pauseaudio').addEventListener("click", pauseaudio());
  O('js_playvideo').addEventListener("click", playvideo());
  O('js_pausevideo').addEventListener("click", pausevideo());


}
