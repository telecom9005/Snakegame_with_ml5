//https://wikidocs.net/103185
//<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
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
    const prediction = predictions[i];  //prediction이라는 변수에 카메라가 인식하고 있는 값을 넣기
    for (let j = 0; j < prediction.landmarks.length; j += 1) {  //포인트 0~20까지
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);  //j번째의 x, y좌표
    }
  }
}
