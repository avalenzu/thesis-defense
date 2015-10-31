document.getElementById('mitcheetah').addEventListener('loadedmetadata', function() {
  this.currentTime = 77;
}, false);
document.getElementById('mitcheetah').addEventListener('timeupdate', function() {
  if (this.currentTime >= 96) {
    this.currentTime = 77;
  }
}, false);
