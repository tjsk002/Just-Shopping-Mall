var $slide_contents; // 슬라이드할 요소
var currentSlide; // 현재 슬라이드이미지 번호
var slideHEIGHT; // 슬라이드의 높이
var intervalID;
$(document).ready(function(){
    init(); // 초기화(=최초 실행 변수,함수등을 초기화)
    menu(); //첫번재 기능-완성
    slides(); //두번째 기능-완성
    slides_onoff();//두번째 추가기능
    popup(); //세번째 기능-완성
    tabs(); //네번째 기능-진행
});
    function init(){
        $slide_contents=$("#slide_contents"); // 할당
        currentSlide=0;
        slideHEIGHT=300;
    }
    function menu(){// GNB 슬라이드 내비게이션
        var GNB=$("#gnb > li");
        var LNB=$(".lnb");
        GNB.hover(function(){
            var tg=$(this); // 마우스가 over된 요소를 tg라 하고
            var i=tg.index(); // 그 요소가 전체 GNB의 몇번째 인덱스인지를 확인해서
            LNB.eq(i).stop().slideDown("fast"); //LNB중 해당 인덱스번째 요소를 나타나게 해라
        },function(){
            LNB.stop().slideUp("fast");
        });
    }
    function slides(){// 슬라이드      
        intervalID=setInterval(slide_on,3000); 
    }
    function slide_on(){
        var newTop=-slideHEIGHT*currentSlide; // 함수 내부의 지역변수
        $slide_contents.stop().animate({        
            top:newTop
        },400,"swing");
        if(currentSlide>=2) { // 사진이 현재 3장이라서~
            currentSlide=0;                
        } else {
            currentSlide++; // 애니메이션 이동 후 값을 증가, 그러면 다음번 사진위치를 바꿀수 있음                
        }
    }
    function slides_onoff(){
        $(".slide").hover(function(){
            clearInterval(intervalID);
        },function(){
            intervalID=setInterval(slide_on,3000);
        })
    }
    function popup() {
        open_pop();
        close_pop();
    }
    function open_pop(){
        $(".pop").click(function(){ // 공지사항 첫번째 li의 a를 클릭하면           
            $("#popupLayer").fadeIn("fast");
        });
    }
    function close_pop(){
        $("#popup_close").click(function(){ // 공지사항 첫번째 li의 a를 클릭하면           
            $("#popupLayer").fadeOut("fast");
        });
    }  
    function tabs(){
        var tabBTN=$(".tab_btn a"); //대상을 tabBTN으로 초기화
        var tabCONTENT=$(".tab_contents > div");
        tabBTN.click(function(e){ //탭 버튼들(공지사항,갤러리)를 클릭하면~
            e.preventDefault();
            var selectedTAB=$(this); //누른 탭버튼이 선택된 탭버튼이다.
            var tabIndex=selectedTAB.index();            
            if(!selectedTAB.hasClass('active')) {
                tabBTN.removeClass("active"); //active 클래스를 모두 지워
                selectedTAB.addClass("active"); //갤러리에 active클래스를 추가해
                tabCONTENT.last().toggleClass("display_off");
            } 
        })
    }  