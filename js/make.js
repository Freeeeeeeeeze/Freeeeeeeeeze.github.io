// 모든 포트폴리오 아이템 가져오기
const items = document.querySelectorAll('.portfolio-item');
const detailBox = document.querySelector('.portfolio-detail p');

// 아이템 클릭 이벤트 추가
items.forEach(item => {
    item.addEventListener('click', () => {
        // 모든 아이템의 'token' 클래스 제거
        items.forEach(i => i.classList.remove('token'));
        
        // 현재 클릭된 아이템에 'token' 클래스 추가
        item.classList.add('token');
        
        // 상세 내용 업데이트
        const detail = item.getAttribute('data-detail');
        detailBox.textContent = detail;
    });
});
