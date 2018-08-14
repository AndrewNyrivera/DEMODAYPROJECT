var demoButtons;

function start() {

  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    demoButtons[i].addEventListener('click', toggleEffect);
  }

  // Add event "click" to "save buttons"
  window.CP.exitedLoop(0);var saveButtons = document.querySelectorAll('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {if (window.CP.shouldStopExecution(1)) break;
    saveButtons[i].addEventListener('click', toggleActive);
  }window.CP.exitedLoop(1);

}

// Toggle "effect" classes
function toggleEffect() {
  var target = document.querySelector(this.dataset.target);
  target.dataset.effect = this.dataset.effect;

  for (var i = 0; i < demoButtons.length; i++) {if (window.CP.shouldStopExecution(2)) break;
    demoButtons[i].classList.remove('active');
  }window.CP.exitedLoop(2);

  toggleActive.call(this);
}

// Toggle "active" class
function toggleActive() {
  this.classList.toggle('active');
}

// Invoke "start ()" function
window.addEventListener('load', start);
//# sourceURL=pen.js
