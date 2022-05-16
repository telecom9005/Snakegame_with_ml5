// KNN Classification
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// 1: https://youtu.be/KTNqXwkLuM4
// 2: https://youtu.be/Mwo5_bUVhlA
// 3: https://youtu.be/JWsKay58Z2g
// https://thecodingtrain.com/learning/ml5/4.1-ml5-save-load-model.html
// https://editor.p5js.org/codingtrain/sketches/RERqlwJL


//knn_classification + snake 코드입니다. 학습파일명은 model.json이고 적당히 학습시키니까 잘 작동됐습니다.
//snake 게임 주석 지우고 싶으면 지워도 되고 게임화면 크기 등 수정하고 싶으면 수정해주시기 바랍니다.
let video;
let features;
let knn;
let labelP;
let ready = false;
let x;
let y;
let label = 'nothing';

//snake
var s;
var scl = 20;
var food;
playfield = 600;


function setup() {
  //snake
  createCanvas(playfield, 640); // 600640 캔버스 생성
  background(51); // 배경색 (51)설정
  s = new Snake(); // Snake함수 생성
  frameRate (10); // 기본 프레임 속도는 약 60으로 너무 빠르기 때문에 10으로 설정
  pickLocation(); // pickLocation 함수 생성


  
  video = createCapture(VIDEO);
  video.size(320, 240);
  features = ml5.featureExtractor('MobileNet', modelReady);
  knn = ml5.KNNClassifier();
  labelP = createP('need training data');
  labelP.style('font-size', '32pt');
  x = width / 2;
  y = height / 2;

}

function goClassify() {
  const logits = features.infer(video);
  knn.classify(logits, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      label = result.label;
      labelP.html(result.label);
      goClassify();
    }
  });
}

function keyPressed() {
  const logits = features.infer(video);
  if (key == 'l') {
    knn.addExample(logits, 'left');
    console.log('left');
  } else if (key == 'r') {
    knn.addExample(logits, 'right');
    console.log('right');
  } else if (key == 'u') {
    knn.addExample(logits, 'up');
    console.log('up');
  } else if (key == 'd') {
    knn.addExample(logits, 'down');
    console.log('down');
  } else if (key == 's') {
    save(knn, 'model.json');
    //knn.save('model.json');
  }
}

function modelReady() {
  console.log('model ready!');
  // Comment back in to load your own model!
   knn.load('model.json', function() {
     console.log('knn loaded');
   });
}

function draw() {
  //snake
  background(51); // 배경색 (51)설정
  scoreboard();  // scoreboard 함수 실행
  if (s.eat(food)) { // Snake 함수 안의 eat 함수가 true 일 때 실행
    pickLocation(); // pickLocation 함수 실행
  }
  s.death(); // Snake 함수 안의 death함수 실행
  s.update(); // Snake 함수 안의 update함수 실행
  s.show(); // Snake 함수 안의 show함수 실행

  fill (255,0,100);
  rect(food.x,food.y, scl, scl); // 음식 생성, 붉은색 2020 사각형


  if (label == 0) {
    s.dir(-1,0);
  } else if (label == 1) {
    s.dir(1,0);
  } else if (label == 2) {
    s.dir(0,-1);
  } else if (label == 3) {
    s.dir(0,1);
  }

  //image(video, 0, 0);
  if (!ready && knn.getNumLabels() > 0) {
    goClassify();
    ready = true;
  }
}

// Temporary save code until ml5 version 0.2.2
const save = (knn, name) => {
  const dataset = knn.knnClassifier.getClassifierDataset();
  if (knn.mapStringToIndex.length > 0) {
    Object.keys(dataset).forEach(key => {
      if (knn.mapStringToIndex[key]) {
        dataset[key].label = knn.mapStringToIndex[key];
      }
    });
  }
  const tensors = Object.keys(dataset).map(key => {
    const t = dataset[key];
    if (t) {
      return t.dataSync();
    }
    return null;
  });
  let fileName = 'myKNN.json';
  if (name) {
    fileName = name.endsWith('.json') ? name : `${name}.json`;
  }
  saveFile(fileName, JSON.stringify({ dataset, tensors }));
};

const saveFile = (name, data) => {
  const downloadElt = document.createElement('a');
  const blob = new Blob([data], { type: 'octet/stream' });
  const url = URL.createObjectURL(blob);
  downloadElt.setAttribute('href', url);
  downloadElt.setAttribute('download', name);
  downloadElt.style.display = 'none';
  document.body.appendChild(downloadElt);
  downloadElt.click();
  document.body.removeChild(downloadElt);
  URL.revokeObjectURL(url);
};


//snake
function pickLocation() {
  var cols = floor(playfield/scl); // floor(n) n: 반 내림할 숫자, 매개변수의 작거나 같은 수 중 가장 가까운 정수
  var rows = floor(playfield/scl);
  food = createVector(floor(random(cols)), floor(random(rows))); // 벡터생성 
  food.mult(scl); // 벡터에 scl(스칼라)를 곱함

  // Check the food isn't appearing inside the tail 꼬리 안쪽에서 음식물이 나오지 않는지 확인합니다.
  for (var i = 0; i < s.tail.length; i++) {
    var pos = s.tail[i]; // Snake 함수의 tail 배열 가져옴
    var d = dist(food.x, food.y, pos.x, pos.y); // dist() 두 점사이의 거리를 계산한다.
    if (d < 1) {
      pickLocation();
    }
  }
}

// scoreboard 점수 표시 함수
function scoreboard() {
  fill(0);
  rect(0, 600, 600, 40); // 사각형 생성
  fill(255);
  textFont("Georgia"); // text()함수로 그릴 현재 폰트 설정
  textSize(18); // 글자 크기 설정
  text("Score: ", 10, 625); // “Score”를 (10,625) 위치에 표시
  text("Highscore: ", 450, 625) // “Highscore”를 (450,625) 위치에 표시
  text(s.score, 70, 625); //s.score의 값을 (70,625)위치에 표시
  text(s.highscore, 540, 625) //s.highscore의 값을 (540,625)위치에 표시
}
// CONTROLS function (키보드 입력 함수) 키보드의 방향키에 따라 뱀이 움직이는 방향이 바뀜
function keyPressed() {
  if (keyCode === UP_ARROW){ // keyCode : 변수로 특수키 입력을 감지할 수 있다 (BACKSPACE, DELETE, ...)
      s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW) {
      s.dir (1, 0);
  }else if (keyCode === LEFT_ARROW) {
      s.dir (-1, 0);
  }
}
// SNAKE OBJECT. Snake 함수, 이동 방향, 뱀 형태, 점수 변환, 음식 먹기, 실패 함수와 각 변수가 들어있음.
function Snake() {
  this.x =0;
  this.y =0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = []; //배열 생성
  this.score = 1;
  this.highscore = 1;

  this.dir = function(x,y) { //함수 생성, keyPressed함수에서 매개변수(x, y)받아옴. 뱀의 방향 설정
    this.xspeed = x;
    this.yspeed = y;
  }
//함수 생성, 음식을 먹을 때 점수를 1점씩 추가하고, 현재 점수가 최고 점수일 때 최고점수 변환
  this.eat = function(pos) { 
    var d = dist(this.x, this.y, pos.x, pos.y); // 음식과 뱀의 거리를 구한다.
    if (d < 1) { //d<1 : 뱀이 음식을 먹었을 때,
      this.total++;
      this.score++;
      text(this.score, 70, 625); // this.score 값을 (70,625) 위치에 표시
      if (this.score > this.highscore) { // if(조건) 조건이 참일 때 실행
        this.highscore = this.score; 
      }
      text(this.highscore, 540, 625); //this.highscore 값을 (540,625) 위치에 표시
      return true; //true 반환
    } else {
      return false; //false 반환
    }
  }
//함수 생성, 머리가 꼬리에 닿으면 점수, 꼬리 초기화
  this.death = function() { 
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.score = 0;
        this.tail = [];
      }
    }
  }
// 뱀 움직임을 표시하기 위한 좌표 설정
  this.update = function(){
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
    }
   }
    this.tail[this.total-1] = createVector(this.x, this.y);
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
    this.x = constrain(this.x, 0, playfield-scl); //constrain(n,low,high) 값을 최솟값과 최댓값 사이에 제한
    this.y = constrain(this.y, 0, playfield-scl); // this.x, this.y 좌표는 최대 580, 최소 0값을 가질 수 있다.
  }
//함수 생성, 뱀 형태 만들기
  this.show = function(){ 
    fill(255);
    for (var i = 0; i < this.tail.length; i++) { //꼬리 생성
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl); // 몸통 생성
  }
}
