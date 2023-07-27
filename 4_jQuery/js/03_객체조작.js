// 1. Content 설정
// 1) html()
console.log($('#content1').html());

// #content2에 #content1의 내용을 대입
$('#content2').html($('#content1').html());
//#content1의 a태그 속성 href에 https://naver.com 대입
$('#content1').children('a').attr('href',"https://naver.com");
// #content2의 a 태그 속성에도 href에 https://naver.com 대입
$('#content2').find('a').prop('href',"https://naver.com");

console.log($('.content').html());
$('.content').html('zzzzzzzz');
$('.content').html(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});

// 2) text()
console.log($('#content3').text());
$('#content4').text($('#content3').text());
$('#content4').text('<strong>Hello~</strong>');

console.log($('.content2').text());
$('.content2').text(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
})

// 2. 요소 추가
// 1) 자바스크립트와 제이쿼리
const p = document.createElement('p');
p.innerHTML = '자바스크립트 추가';
document.querySelector('#area1').appendChild(p);

const p2 = $('<p>').text('제이쿼리로 추가');
$('#area1').append(p2);

// 2) 요소 추가 1
$('#add1').append('<span>B</span>');
$('#add2').prepend('<span>B</span>');
$('#add3').after('<span>B</span>');
$('#add4').before('<span>B</span>');

// 3) 요소 추가 2
$('<span>B</span>').appendTo('#add5');
$('<span>B</span>').prependTo('#add6');
$('<span>B</span>').insertAfter('#add7');
$('<span>B</span>').insertBefore('#add8');

// 3. 요소 복제 
$('#item1').hover(
//     (event) => { // mouseenter
//         console.log(event.type);
//         $(event.target).addClass('bg-hotpink');
//     },
//     (event) => { // mouseleave
//         console.log(event.type);
//         $(event.target).removeClass('bg-hotpink');
//     }
(event) => {
    // toggleClass 사용!
    $(event.target).toggleClass('bg-hotpink');
}
);

// 버튼 클릭 시 요소 복제
$('#btn1').click(function() {
   const item = $('#item1').clone(true);
   $('#clone-result').append(item);
});


$('#item2').hover(
    (event) => {
        $(event.target).toggleClass('bg-hotpink');
    }
)

// 1) remove
// remove 버튼 클릭시 #item2를 remove로 제거 후 #remove-result에 리턴받은 값 출력
$('#remove').click(function(){
   const remove = $('#item2').remove();
    $('#remove-result').append(remove);
})

// 2) detach
// detach 버튼 클릭시 #item2를 detach로 제거 후 #remove-result에 리턴받은 값 출력
$('#detach').click(function(){
   const detach = $('#item2').detach();
    $('#remove-result').append(detach);  
});

// 3) empty
// empty 버튼 클릭시 #remove-test를 비워버림ㅋㅋ
$('#empty').click(function(){
    $('#remove-test').empty();
});

// 5. 배열
const array = [
    {name: '구글', link: 'https://google.com'},
    {name: '네이버', link: 'https://naver.com'},
    {name: '다음', link: 'https://daum.net'}
]

// 자바스크립트
array.forEach(function(element, index, origin) {
    console.log(element, index, origin);
});

$.each(array, function(index, element) {
    console.log(index, element);
});

$(array).each(function(index, element) {
    console.log(index,element);
    $('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);
});

// #each-test에 배열의 값들을 a링크로 href에는 link, content 부분에는 name을 사용해서 출력