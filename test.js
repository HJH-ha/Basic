// alert("test");
// alert은 홈페이지 시작하면 뜨는 경고창이 뜨면서 안에 텍스트 입력

// 변수 let , var
let m = "메세지";
let n = 77;
console.log("변수 m: " + m);
console.log("변수 n: " + n);
var x = "var변수";
var x = "재선언";
console.log("x: " + x);

//상수 : 변하지 않는 값 const
const age = 27;
//  age = 11;

//숫자형 ㅇㅇㅇㅇ

//문자열 한따옴표 또는 쌍따옴표면 문자열이다.
let s1 = "헬로우 ${}"; // 여긴 ${} 안됨
let s2 = "한따옴표 문자열 ${}"; // 여긴 ${} 안됨
//리터럴 템플릿 문자열은 백틱 (숫자 1옆에 왼쪽에 있는 따옴표) ````
let s3 = `문자열인데 대입가능 ${s1} ${s2}`;
console.log(s3);

//대화상자함수 alert, prompt, confirm
let 나이 = prompt("나이를 입력해주세요.", 100);
alert(`당신의 나이는 ${나이}살 입니다.`);
