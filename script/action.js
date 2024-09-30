$(window).scroll(function(){ 
    let scrT = $(this).scrollTop();
    let winH = $(window).height();
    $('.leaf_box figure').each(function(){
        let leafTop  = $(this).offset().top;

        if(scrT > leafTop - winH/2){
            $(this).addClass('on')
        } else {
            $(this).removeClass('on')
        }
    })
})

$('.leaf_box figure').mouseenter(function(){
    $(this).addClass('on')
}).mouseleave(function(){
    $(this).removeClass('on2')
})

$('.leaf_box .leaf10, .leaf_box .leaf11').click(function(){
    $('.leaf_box .rabit').removeClass('on')
    $('.profile_box').fadeIn(200).addClass('on')
})

$('.close').click(function(){
    $('.leaf_box .rabit').addClass('on')
    $('.profile_box').fadeOut(200).removeClass('on')
})

document.querySelectorAll('.gnb a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 앵커 링크 동작 방지

        const targetId = this.getAttribute('href'); // 클릭한 링크의 href 값 가져오기
        const targetElement = document.querySelector(targetId); // 대상 요소 찾기

        targetElement.scrollIntoView({
            behavior: 'smooth' // 부드러운 스크롤
        });
    });
});



// GNB 요소 선택
const gnb = document.querySelector('header');

// 페이지 로드 시 스크롤을 맨 위로 설정하고 'scrolled' 클래스 업데이트
const updateHeaderClass = () => {
    if (window.scrollY > 50) {
        gnb.classList.add('scrolled');
        
    } else {
        gnb.classList.remove('scrolled');
    }
};

// 페이지 로드 시 스크롤을 맨 위로 설정하고 클래스 초기화
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // 스크롤을 맨 위로 설정
    updateHeaderClass();
});

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
    updateHeaderClass();
});