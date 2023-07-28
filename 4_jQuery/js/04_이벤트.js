// 1. 이벤트 연결
// 1) on, off
// $('#area1').on('mouseenter', function(event) {
//     // 마우스가 올라갔을 때
//     // 배경색상 : beige, 텍스트는 : 마우스가 올라감
//     $(this).css('background-color', "beige").text('마우스가 올라감');
// });
// // mouseleave 함수
// // 배경색상 : hotpink, 텍스트는 : 마우스가 내려감
// $('#area1').on('mouseleave', function(event) {
//     $(event.target).css('background-color', "hotpink").text('마우스가 내려감');
// });

// $('#area1').on('mouseenter mouseleave', function(event) {
//     console.log(event.type);
//     if(event.type === 'mouseenter') {
//         $(this).css('background-color', "beige").text('마우스가 올라감');
//     } else if (event.type === 'mouseleave') {
//         $(event.target).css('background-color', "hotpink").text('마우스가 내려감');
//     }
// });

// $('#area1').on('click', function(event) {
//     // 배경색은 white, 텍스트는 ''
//     console.log(event.type)
//     $(this).css('background-color', "white").text('').off('mouseenter mouseleave');
// });

$('#area1').on({
    mouseenter: function (event) {
        $(this).css('background-color', "beige").text('마우스가 올라감');
    },
    mouseleave: function (event) {
        $(event.target).css('background-color', "hotpink").text('마우스가 내려감');
    },
    click: function (event) {
        $(this).css('background-color', "white").text('').off('mouseenter mouseleave');
    }
});

// 2) one 
$('#area2').one('click', function () {
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
$('#textarea1').keydown(function (e) {
    console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될 때
$('#textarea1').keypress(function (e) {
    console.log(`keypress/ e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질 때
$('#textarea1').keyup(function (e) {
    console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

$('#textarea1').on({
    keydown: function (e) {
        console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress: function (e) {
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup: function (e) {
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
});

// substr
console.log("Hello~".substring(0, 49));

$('#textarea2').on('keyup', function(e) {
    console.log($(e.target).val());
    console.log($(e.target).val().length);
    const currentLength = $(e.target).val().length;

    $('#counter').text(currentLength);

        const maxLength = parseInt($('#maxLength').text());
        console.log(typeof (maxLength));

    if(currentLength > maxLength) {
        // 글자수제한 substring
        // $(e.target).val().substring(0, maxLength); // 50글자
        $(e.target).val($(e.target).val().substring(0, maxLength));
    } else { // currentLength <= maxLength
        $('#counter').text(currentLength);
    }

})

// $("#textarea2").keyup(function(e) {
//     const a = $(this).val();

//     $("#counter").text(a.length);

//     if (a.length > 50) {
//         alert("최대 50자까지 입력 가능합니다.");
//         $(this).val(a.substring(0, 50));
        
//     }
// });

// 아이디 조건 확인


$('#userId').on('keydown', function(e) {
    const regExp = /^[a-z][a-z0-9]{4,12}$/;
    const a = $(e.target).val();

if(regExp.test(a)) {
    $('#idCheck').text('사용 가능한 아이디 입니다.').css('color',"green");
} else if(a === "") {
    $('#idCheck').text("");
} else {
    $('#idCheck').text('사용 불가능한 아이디 입니다.').css('color',"red");
}

});
// let a = 0;
$('#area3').on('click',function() { 
    // $("#counter2").text(++a);
    let currentCount = parseInt($('#counter2').text());
    $('#counter2').text(++currentCount);
});
$('#btn').on('click', function() {
    $('#area3').trigger('click');
})