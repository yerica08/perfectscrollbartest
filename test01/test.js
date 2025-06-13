const container = document.querySelector('.scroll-container');
//const container2 = document.querySelector('.scroll-container2');

/* 
   1. 스크롤바는 콘텐츠 영역이 넘치는 자동으로 생김(overflow-x, overflow-y)
   2. 키보드 방향키로 스크롤 가능(Arrow Up, Arrow Down, Page Up, Page Down)
   3. 모바일 환경에서도 스와이프 스크롤 가능(단, 너무 짧은 영역은 스크롤이 어려울 수 있음)
   4. 스크롤바 색, 두께, 모양, 위치는 CSS로 조절
   5. 직접 이벤트를 바인딩 할 순 없지만, scrollTop 등 DOM을 이용해 연동 가능
   6. 부모박스에서 스크롤을 사용하면 thumb이 움직이며, 스크롤이 움직이는 동안 부모박스에 ps--scrolling-y 혹은 ps--scrolling-x가 추가 됨
   7. 스크롤이 움직인 만큼 스크롤 자체와 scroll thumb의 top, left 값이 변동되는 원리
   8. 비동기 콘텐츠의 경우, PerfectScrollbar.update()가 자동으로 재계산 되어 크기 증가 루프를 탈 수 있음
*/
//new PerfectScrollbar('#scroll-container');
const ps = new PerfectScrollbar(container);
// const ps2 = new PerfectScrollbar(container2, {
//    wheelSpeed: 1, //마우스 휠 속도 (기본 1)
//    wheelPropagation: false, // 부모로 스크롤 이벤트 전파 여부
//    minScrollbarLength: 20, // 스크롤바 최소 길이
// });

/* 콘텐츠가 바뀐 경우 반드시 업데이트 해줘야함 */
// ps.update();

/* 스크롤바 제거 */
// ps.destroy();

/*
   1. ps-scroll-y : 수직 스크롤이 발생했을 때
   2. ps-scroll-x : 수평 스크롤이 발생했을 때
   3. ps-scroll-up, ps-scroll-down : 스크롤 방향
   4. ps-y-reach-start, ps-y-reach-end : y축 스크롤이 맨 위 or 맨 아래 도달 시
   5. ps-x-reach-start, ps-x-reach-end : x축 스크롤 도달 시
 */

// container2.addEventListener('ps-scroll-y', () => {
//    console.log('Y축 스크롤 중입니다.');
// });
// container2.addEventListener('ps-scroll-x', () => {
//    console.log('x축 스크롤 중입니다.');
// });

// container2.addEventListener('ps-scroll-up', () => {
//    console.log('위로 스크롤 중');
// });
// container2.addEventListener('ps-scroll-down', () => {
//    console.log('아래로 스크롤 중');
// });

// container2.addEventListener('ps-y-reach-start', () => {
//    console.log('맨 위에 도달!');
// });
// container2.addEventListener('ps-y-reach-end', () => {
//    console.log('맨 아래 도달!');
// });
// container2.addEventListener('ps-x-reach-start', () => {
//    console.log('좌측 도달!');
// });
// container2.addEventListener('ps-x-reach-end', () => {
//    console.log('우측 도달!');
// });

/*
      Perfect Scrollbar는 element.ps.reach라는 객체에 현재 스크롤 위치 상태를 저장함

      < ps.reach 구조>
      {
        "x": "start" | "end" | "",
        "y": "start" | "end" | ""
      }
      1. "start": 스크롤이 맨 처음에 위치함
      2. "end": 맨 끝까지 스크롤됨
      3. "": 중간 위치
*/
const axisEl = document.getElementById('axis');
const dirEl = document.getElementById('direction');
const reachEventEl = document.getElementById('reach-event');
const reachStateEl = document.getElementById('reach-state');

/* reachState */
function showReachState() {
   reachStateEl.textContent = JSON.stringify(ps.reach); // {"x":"start","y":"start"} 형태
   tContent = JSON.stringify(ps.reach);
}
showReachState();
container.addEventListener('scroll', showReachState);

// Axis 이벤트
container.addEventListener('ps-scroll-y', () => {
   axisEl.textContent = 'ps-scroll-y';
   reachEventEl.textContent = '';
});
container.addEventListener('ps-scroll-x', () => {
   axisEl.textContent = 'ps-scroll-x';
   reachEventEl.textContent = '';
});

// 방향 이벤트
container.addEventListener('ps-scroll-up', () => {
   dirEl.textContent = 'ps-scroll-up';
});

container.addEventListener('ps-scroll-down', () => {
   dirEl.textContent = 'ps-scroll-down';
});
container.addEventListener('ps-scroll-left', () => {
   dirEl.textContent = 'ps-scroll-left';
});
container.addEventListener('ps-scroll-right', () => {
   dirEl.textContent = 'ps-scroll-right';
});

// Reach 이벤트
container.addEventListener('ps-y-reach-start', () => {
   reachEventEl.textContent = 'ps-y-reach-start';
});

container.addEventListener('ps-y-reach-end', () => {
   reachEventEl.textContent = 'ps-y-reach-end';
});
container.addEventListener('ps-x-reach-start', () => {
   reachEventEl.textContent = 'ps-x-reach-start';
});
container.addEventListener('ps-x-reach-end', () => {
   reachEventEl.textContent = 'ps-x-reach-end';
});
