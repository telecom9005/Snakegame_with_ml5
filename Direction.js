//<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
//손목이 0, 엄지가 4, 소지가 20입니다. [0]가 x좌표 [1]가 y좌표입니다.
//기본적으로 엄지와 손목으로 구분을 해봤는데 위쪽와 왼쪽은 조건이 같아서 엄지와 소지로 구분했습니다.
let handpose;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video);
  handpose.on("predict", gotResult);
}

function gotResult(results){
  predictions = results;
}

function draw() {
  image(video, 0, 0, width, height);
  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    const n20 = prediction.landmarks[20];
    const n4 = prediction.landmarks[4];
    const n0 = prediction.landmarks[0];
    const k20 = prediction.landmarks[20];
    const k4 = prediction.landmarks[4];
    const k0 = prediction.landmarks[0];
    if(k4[0]>k0[0] && k4[1]<k0[1] && k20[1]<k4[1])
      print("UP");
    else if(k4[0]>k0[0] && k4[1]>k0[1])
      print("DOWN");
    else if(k4[0]<k0[0] && k4[1]<k0[1])
      print("RIGHT");
    else if(k4[0]>k0[0] && k4[1]<k0[1] && k20[1]>k4[1])
      print("LEFT");
  }
}
