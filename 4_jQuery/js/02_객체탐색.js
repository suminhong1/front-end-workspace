// 1. Filtering 메소드
// 선택된 요소들 중 첫번째 요소를 가져와서 스타일 변경
$('h4').first().css("font-size", "4rem");
$('h4:first').css("font-size", "3rem");
$('h4').filter(':first').css("font-size", "2rem");

// h4 중 마지막 요소의 글자 크기를 2rem으로 
$('h4:last').css("font-size", "2rem");
// h4 중 다섯번째 요소의 텍스트를 '테스트-5'로 변경
$('h4').eq(4).text("테스트-5");
// 클래스 선택자 : test를 선택해서 홀수 인덱스 요소만 배경색상 : royalblue, 글자색 : white
$('h4:odd').css('background-color',"royalblue").css('color', "white");

// 클래스 선택자 : test를 선택해서 짝수 인덱스 요소만 배경색상 : hotpink, 글자색 : white
$('h4:even').css({'background-color':"hotpink",
'color':"white"
});
// h4 중 클래스 선택자 test가 아닌 요소를 선택해서 배경색상 : chocolate, 글자색 : white
$('h4').not('.test').css('background-color',"chocolate").css('color', "white");
$('h4:not(.test)').not('.test').css('background-color',"chocolate").css('color', "white");

// 선택된 요소들 중 특정 요소가 존재하는지 확인(있으면 true, 없으면 false)
console.log($('h4').is('.test'));
console.log($('h4').is('.test1'));

// 2. Ancestors & Descendants 메소드
// 선택된 요소의 바로 상위에 있는 부모 요소
console.log($('span').parent());
// 선택된 요소의 모든 상위 요소
console.log($('span').parents());

// span 요소의 부모 요소에 스타일
// 글자색 : red, border : 2px solid
$('span').parent().css({
    'color':"red", "border":"2px solid"
});

// li 요소의 모든 상위 요소에 스타일 적용
// 글자색 : blue
$('li').parents().css('color',"blue");

// li 요소의 상위 요소 중 div만 스타일 적용
// border : 굵기 - 2px, 스타일 - dashed, 색상 : tomato
$('li').parents('div').css({
    'border':"2px dashed tomato"
});

// span 요소부터 div요소 이전까지 상위 요소 스타일 적용
// 배경색 : lavenderblush
$('span').parentsUntil('div').css('background-color',"lavenderblush");

// 별도로 스타일 작성
let style1 = {'color':'deeppink','border':'2px solid'};
let style2 = {'color':'blue','border':'2px solid'};
let style3 = {'color':'green','border':'2px solid'};
let style4 = {'color':'purple','border':'2px solid'};
let style5 = {'color':'orange','border':'2px solid'};

console.log($('.wrap').children());
console.log($('.wrap').find('span'));

// .wrap인 요소의 자식 요소들에 style1을 적용
$('.wrap').children().css(style1);
// .wrap인 요소의 자식의 자식 요소들에 style2를 적용
$('.wrap').children().children().css(style2);
// .wrap인 요소의 자식 요소 중 ul 태그의 style3을 적용
$('.wrap').children('ul').css(style3);
// .wrap인 요소의 자식의 자식의 자식 요소 중에 li 태그의style4를 적용
$('.wrap').children().children().children('li').css(style4);
// .wrap인 요소의 모든 하위 요소 중 span 태그의 style5를 적용
$('.wrap').find('span').css(style5);

// 4. sideways 메소드
console.log($('.wrap2 h2').siblings());

// h2 요소의 형제 요소들에 style3 적용
$('.wrap h2').siblings().css(style3);
// h2 요소의 형제 요소 중 p 요소에 style2 적용
$('.wrap2 h2').siblings('p').css(style2);
// h2 요소의 다음 형제 요소에 style1 적용
$('.wrap2 h2').next().css(style1);
// h2 요소의 다음에 오는 모든 형제 요소에 배경색 : pink
$('.wrap2 h2').nextAll().css('background-color', "pink");
// wrap2 h2 요소 이후부터 p 요소 이전에 모든 형제 요소에 테두리 스타일 : dashed
$('.wrap2 h2').nextUntil('p').css({'border':"dashed"});
// h2 요소의 이전 형제 요소에 style5 적용
$('.wrap2 h2').prev().css(style5);
// h2 요소의 이전에 오는 모든 형제 요소에 배경색 : moccasin
$('.wrap2 h2').prevAll().css('background',"moccasin");
// h2 요소 이전부터 p 요소 이후까지의 모든 형제 요소에 글자 크기 : 2rem
$('.wrap2 h2').prevUntil('p').css('font-size',"2rem");