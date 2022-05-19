# <span style="color:gold">아브라카다브라!</span>
#### 과목명: 컴퓨터 그래픽스<br/>지도교수: 컴퓨터공학과 심재창<br/>프로젝트명: 아브라카다브라! (Abracadabra!)<br/>과제명: 아브라카다브라<br/>프로젝트 팀: 피리부는 사나이(10팀)<hr/>
### 팀 구성
|   번호   |   구분  |                   이름                  |      학과     |   학년  |      휴대폰     |        담당업무        |
|:-------:|:------:|:---------------------------------------:|:--------------:|:------:|:---------------:|:----------------------|
|  **1**  | **팀장**|**[최연우](https://github.com/wafla)**    |**컴퓨터공학과**|  **2** |**010-2224-9395**|    발표, 코드 작성    |
|    2    |   팀원  | [서정목](https://github.com/SeoJeongmok) |  컴퓨터공학과  |   2    |  010-9005-6102  | 발표자료 제작, 코드 작성 |
|    3    |   팀원  | [조송하](https://github.com/Song-haJo)   |    무역학과    |   3    |  010-3808-8152  |  보고서 작성, 코드 작성 |
|    4    |   팀원  | [허영준](https://github.com/telecom9005) |  컴퓨터공학과  |   2    |  010-2748-9005  | 발표자료 제작, 코드 작성  |
<hr/>

## 1. 과제 요약
스네이크 게임은 비디오 게임의 한 장르로, 벽과 같은 장애물을 피해 먹이를 먹도록 조종하는 뱀을 키우는 게임이다. 본 과제에서는 p5.js 기반으로 작성된 스네이크 게임에 머신러닝 라이브러리인 ml5.js를 적용하여 손동작을 통해 뱀을 조작할 수 있도록 하였다. ml5.js란 2018년 7월 뉴욕 대학교에서 TensorFlow.js 기반으로 구축한 머신러닝 알고리즘 라이브러리로, 웹에서 사용 가능한 오픈 소스 고급 라이브러리이기 때문에 초보자들도 쉽게 이용이 가능하다는 장점이 있다.
## 2. 과제 개요
<ol type="i">
    <h3><li>과제 배경 및 필요성</li></h3>
    2022년도 1학기 컴퓨터그래픽스 수업에서 배운 내용은 다음과 같다:<br/>
<ul>
        <li>Processing</li>
        <li>p5.js</li>
        <li>OpenGL</li>
        <li>ml5.js</li>
    </ul>
본 과제는 본 수업의 최종 팀 프로젝트로, 그동안 공부한 것들을 복습하고, 그중 p5.js와 ml5.js를 활용하여 Application을 프로그래밍해 봄으로써 협업 능력을 수양하기 위함이다.
    <h3><li>주제 선택 동기</li></h3>
    본 수업에서는 과제를 통해 Snake 게임을 p5.js 기반으로 프로그래밍하는 연습을 진행한 바 있다. 최근 수업에서 ml5.js를 중심으로 인공지능과 머신 러닝에 대해 다룸에 따라, 주제 선택은 ml5.js를 기존의 p5.js 기반 Snake 게임에 적용하여 키보드가 아닌 ‘손의 부위별 포인트 찾기’를 통해 조작할 수 있는 방안을 도출해내는 것으로 결정되었다.
</ol>

## 3. 과제 목표 및 내용
<ol type="i">
    <h3><li>정량적·정성적 목표 및 평가 기준</li></h3>
    <table>
        <thead>
            <tr>
                <th colspan="7">정성적 평가</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="2">번호</th>
                <th rowspan="2" width="400px">평가 기준</th>
                <th colspan="5">평가 척도</th>
            </tr>
            <tr>
                <th width="120px">매우 그렇다</th>
                <th width="120px">그렇다</th>
                <th width="120px">보통이다</th>
                <th width="120px">그렇지 않다</th>
                <th width="120px">전혀 그렇지 않다</th>
            </tr>
            <tr>
                <td align="center">1</td>
                <td>과제 내용이 Graphics와 관련이 있는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <td align="center">2</td>
                <td>손 모양을 정확하게 인식하는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <td align="center">3</td>
                <td>뱀을 자신이 원하는 방향으로 움직일 수 있는가?</td>
                <td align="center">5</td>
                <td align="center">4</td>
                <td align="center">3</td>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
        </tbody>
    </table>
    <h3><li>과제 내용 (글, 그림, 표, 사진 등으로 이 내용을 보면 다른 사람이 동일한 작품을 만들 수 있도록 한다.)</li></h3>
    손가락의 각 마디와 손목 부위로 21개의 포인트가 나타나고, 손 모양에 따라 포인트의 위치가 변경된다.
    손을 위로 올리면 위쪽, 내리면 아래쪽, 왼쪽 방향으로 하면 왼쪽, 오른쪽 방향으로 하면 오른쪽으로 방향을 설정하게 된다.<br/>
    <div align="center">
    <손으로 방향 지정 방법><br/>
    </div>
    <div align="center">
        <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169253224-041bb900-0f92-46f3-b136-f3b2bfdd0028.png"/>
    </div>
    <div align='center'>
    위
    </div>
    <div align="center">
        <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256768-f8b3ccb0-2155-40ee-925c-81be35ec8ec4.png"/>
        <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169256106-72e3e64a-77e8-4a1e-9f6a-e8fb9a3dccac.png"/>
    </div>
    <div align="center">
        오른쪽 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 왼쪽
    </div>
    <div align="center">
        <img width="195px" height="145px" src="https://user-images.githubusercontent.com/102509603/169255285-7e919de5-c45b-429d-b871-0572356d6b34.png"/>
    </div>
    <div align="center">
        아래
    </div>
        <br/>
    snakegame의 뱀의 이동방향은 손의 모양으로 결정되며, 뱀이 음식을 먹을 때마다 뱀의 길이가 길어지고 뱀이 벽에 부딪치거나 자신의 몸에 부딪치게되면 gameover가 된다.
</ol>

## 4. 결과물
<ol type="i">
    <h3><li>예상 결과물(구현 사항)</li></h3>
    <ul>
        <li>손가락의 각 마디와 손목 부위가 21개의 포인트로 감지되며, 손동작에 따라 포인트의 위치가 변경된다.</li>
        <li>손 모양을 인지하여 상하좌우로 방향이 구분하고 해당하는 방향으로 뱀의 이동방향이 결정된다.</li>
        <li>최종적으로, 키보드로 방향 키를 누르지 않고, 손 모양을 바꿔가면서 즐겁게 스네이크 게임을 플레이할 수 있도록 한다.</li>
    </ul>
    <h3><li>기대효과 및 활용방안</li></h3>
    최근 지역 치매안심센터 등 노인 관련 기관에 따르면 치매예방 게임교실 등 게임적 요소를 활용한 치매예방 프로그램을 적극 활용 중인 것으로 나타났다.<sup>[3]</sup> 게임의 경우, 단순 인지훈련을 넘어 시각, 촉각, 청각은 물론 공감각, 대인 소통 등 다양한 감각을 동원해 문제를 해결하는 과정을 포함하고 있어 치매예방에 효과적이라는 전문가 평가가 다수 있다. 본 게임은 단순한 동작으로 작동하는 게임이므로 어르신들이 익히기 쉬우며, 조작하는 과정에서 벽과 먹이라는 요소를 신경 써야 하기 때문에 치매예방에 좋은 효과를 줄 것으로 기대된다.
</ol>

## 5. 수행일정
|  번호 |      내용      |            추진일정           |     비고    |
|:----:|:--------------:|:----------------------------:|:----------:|
|   1  |       기획     |   2022.05.16. - 2022.05.19.  |   계획서 작성   |
|   2  |     1차 구현    |   2022.05.19. - 2022.05.22.  |  손모양 인식 기능 추가  |
|   3  |     2차 구현    |         2022.05.23.          |  Snake 디자인 수정  |
|   4  |  발표자료 제작  |   2022.05.24. - 2022.05.30.  | ppt, 리플릿, 동영상 제작  |

## 6. 참고문헌 및 자료
[1] https://ml5js.org/(accessed May 17, 2021)

[2] Find points by hand(2020)https://wikidocs.net/103185(accessed May 17, 2021)

[3] Frontline dementia management site...Increased use of dementia prevention games(2021)https://www.dementianews.co.kr/news/articleView.html?idxno=3863(accessed May 17, 2021)

[4] Snake (video game genre)(2022)https://en.wikipedia.org/wiki/Snake_(video_game_genre)(accessed May 17, 2021)

[5] Introduction to ML⁵.js(2018)https://towardsdatascience.com/introduction-to-ml5-js-3fe51d6a4661(accessed May 17, 2021)
