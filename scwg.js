!function (canvas, id) {
  if (window.screen) {
    var ratio = window.devicePixelRatio || 1;
    id('width').value = screen.width * ratio;
    id('height').value = screen.height * ratio;
  }
  (id('gen').onclick = function () {
    canvas.width = id('width').value;
    canvas.height = id('height').value;
    var context = canvas.getContext('2d');
    context.fillStyle = id('color').value;
    context.fillRect(0, 0, canvas.width, canvas.height);
    id('img').src = canvas.toDataURL('image/png');
  })();
}(document.createElement('canvas'), document.getElementById.bind(document));