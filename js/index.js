var lvCanvas = document.getElementById("lv");
var ctx = lvCanvas.getContext("2d");

var image = new Image();
image.src = "./images/lv.jpeg";
image.onload = function () {
  lvCanvas.width = image.width;
  lvCanvas.height = image.height;

  ctx.drawImage(image, 0, 0);
};

window.onload = function () {
  var imageData = ctx.getImageData(0, 0, image.width, image.height).data;
  console.log(imageData, "imageData");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, image.width, image.height);

  var gap = 25;

  var lvContainer = document.getElementById("root");
  var lvScale = 1;

  for (var h = 0; h < image.height; h += gap) {
    for (var w = 0; w < image.width; w += gap) {
      var position = (image.width * h + w) * 4;
      var r = imageData[position],
        g = imageData[position + 1],
        b = imageData[position + 2];

      if (r + g + b == 0) {
        // 绘制气泡
        // ctx.fillStyle = "#000";
        // ctx.fillRect(w, h, 4, 4);

        var bubble = document.createElement("img");
        bubble.src = "./images/bubble.png";
        bubble.setAttribute("class", "bubble");

        var bubbleSize = Math.random() * 10 + 20;
        bubble.style.left = 200 + w * lvScale - bubbleSize / 2 + "px";
        bubble.style.top = h * lvScale - bubbleSize / 2 + "px";
        bubble.style.width = bubble.style.height = bubbleSize + "px";
        bubble.style.animationDuration = Math.random() * 6 + 4 + "s";

        lvContainer.appendChild(bubble);
      }
    }
  }
};
