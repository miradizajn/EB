// using Dragula.js

var drake = dragula({
  containers: [
    document.querySelector('#goal'), document.querySelector('#defence'), document.querySelector('#midfield'),
    document.querySelector('#attack'),
    document.querySelector('#subs')
  ],
  revertOnSpill: true,
  mirrorContainer: document.body,
  ignoreInputTextSelection: true
});

// validation
drake.on('drop', function(el, target, source, sibling) {
  
  // max 11 players
  if (target.id !== 'subs' && document.querySelectorAll('.pitch li').length > 11) {
    drake.cancel();
  }
  
  // 1 goalkeeper
  if (target.id === 'goal' && target.children.length > 1) {
    drake.cancel();
  }
  
  // 5 defenders
  if (target.id === 'defence' && target.children.length > 5) {
    drake.cancel();
  }
  
  // 5 midfielders
  if (target.id === 'midfield' && target.children.length > 5) {
    drake.cancel();
  }
  
  // 4 attackers
  if (target.id === 'attack' && target.children.length > 4) {
    drake.cancel();
  }
  
});