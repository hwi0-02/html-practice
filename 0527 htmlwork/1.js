//변수(숫자 또는 문자)
//int, float, char, char[]
//long,double,string
//정수는 숫자이므로 int a=10;
//한 문자는 char a='a';
//문자열은 char[] s="hello";
//Strnig s="hello";

//함수정의
/*
function add(int a, int b){
    return a+b;
}
*/

// function add(a:number,b:number) : number{
//     return a+b;
// }

//함수의 정의
function add(a,b){
    return a+b;
}

//함수의 사용
//값을 직접 입력하는 형태
var result=add(10,20);

//값을 변수를 통해 입력하는 형태
var c=10; var d=20;
result = add(c,d);

//함수를 통해서 입력하는 형태
result=add(add(1,2), add(3,4));

//혼합으로 사용
result=add(add(1,2),c);
result=add(add(add(c,d),add(c,d)),c);

//내장함수
console.log(Math.round(23.5));

//라이브러리를 이용한 함수