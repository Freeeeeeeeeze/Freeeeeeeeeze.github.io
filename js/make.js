// // 모든 포트폴리오 아이템 가져오기
// const items = document.querySelectorAll('.portfolio-item');
// const detailBox = document.querySelector('.portfolio-detail p');

// // 아이템 클릭 이벤트 추가
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         // 모든 아이템의 'token' 클래스 제거
//         items.forEach(i => i.classList.remove('token'));
        
//         // 현재 클릭된 아이템에 'token' 클래스 추가
//         item.classList.add('token');
        
//         // 상세 내용 업데이트
//         const detail = item.getAttribute('data-detail');
//         detailBox.textContent = detail;
//     });
// });
// Progress Bar 업데이트 함수
function updateProgressBar() {
    // 전체 페이지 높이에서 현재 스크롤된 양을 백분율로 계산
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // 진행 바 너비 업데이트
    document.getElementById('progressBar').style.width = scrollPercentage + '%';
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', updateProgressBar);
