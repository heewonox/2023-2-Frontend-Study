# FE 4주차

먼저 저번주에 했던것 처럼 과제 페이지에 있던 소스를 그대로 다운로드해서 자바스크립트에서 debugger; 명령어를 사용해서 크롬 개발자도구를 사용해서 어떤식으로 동작하는지 파악한 다음 곧바로 선택 구현사항 먼저 구현했다.

[내가 한거](#내가-한거)

[새로 본거](#새로-본거)

### 내가 한거

#### % 연산자 구현

1. 일단 자리를 잡아야 했었는데 이미 정렬이 다 잘 되어있었던지라 어디 끼워넣기는 좀 애매하고 container class의 밑에 row-wrapper를 하나 더 추가하세 삼열을 통째로 %연산자 버튼으로 구성했다. 

	따로 modop button class를 구현해서 `style.css`에도 다른건 같이, width옵션만 바꿔서 지정했다. 
	
	한칸 버튼의 width가 80px, 세칸버튼의 268px ( = 80 * 3 + 14 * 2 )이길래 네칸버튼은 80 * 4 + 14 * 3 해서 362px로 계산해서 넣었으나 나중에 보니까 `.button-wrapper`에 gap이 14px라고 나와있더라...

	근데 내가 웹(html,css)를 공부해본적이 없어서 모르는건지 모르겠지만 저번학기 인터넷프로그래밍을 수강하면서 Swift를 배울때에도 화면을 그릴때 픽셀단위로 했었는데 여기서도 그래서 좀 놀랐다. 나는 사실 엄청 비율이나 그런거 사용하면서 할 줄 알았는데...

2. 앞에서 `.modop` 클래스를 새로 만들어서
	
	`else if (e.target.matches('.operator')||e.target.matches('.modop'))`
	
	처럼 원래 있던 else if 문에 `||`를 이용해서 `.modop` 추가해줬다. 클래스만 다르지 실질적으로는 string을 다루니까 이부분만 수정하고 `operate` 함수만 조금 수정하니까 잘 작동하더라

#### unary minus 구현

과제 안내 페이지에

> (선택) 다른 연산을 추가해 봅니다. (ex. %, +/- 연산 등) 

라고 적혀있던데 +/-가 뭔말인지 잘 이해가 안가서 그냥. 이번학기 자료구조 수업에서 배운 unary minus를 구현했다. 

내 아이폰 계산기로 확인해보니 첫 숫자만 제대로 적용되고 나머지는 잘 안되길래 나도 공학용계산기를 만드는건 아니니 그냥 그정도만 구현했다.

내가 봐도 조금 야매같기는 한데 다음과 같은 `else if`문을 추가했다.
```js
//unary minus operator
else if (!previousNumber&&!currentNumber&&buttonValue=='-') {
    previousNumber = currentNumber;
    currentNumber = '-';
	updateDisplay(); 
	return;
}
```
어차피 숫자도 일단은 string으로 처리하니까 `currentNumber= '-'` 라고 했고.또 뒤에서 -를 체크하는 if문이 있어서 과감하게 `return;`을 추가했다.


_~~아니 근데 왜 탭대신 스페이스 두개를 쓰는지... 그 이유는 무엇인지...개인적으로 너무 불편했다.~~_

### 새로 본거

#### HTML

```html
<button class="operator" data-Type="operator">
<button class="reset reset-operator" data-Type="ac"> 
```
`data-Type` 속성이 뭔지... CSS나 Javascript 코드에서도 안쓰는거같은데 뭔지는 잘 모르겠다.

#### Javascript

```js
document.addEventLister('DOMContentLoaded',function(){});
const inputText = document.querySelector('.input-text');
document
    .querySelector('.button-wrapper')
    .addEventListener('click', function (e) {
});
```

`addEventLister`에 `DOMContentLoaded`도 쓸수 있다는거, 무명함수도 넣을수 있다는거.

`document.querySelector('')`를 이용해서 특정 name,id,class를 제한하지 않고 css선택자를 사용하여 요소를 찾을수 있다는거... 근데 여기서는 class만 선택한것 같다.

`function(e)`

아마 책에서 엄청 중요하게 다뤘을것 같은데 나는 사실 책을 제대로 읽지 못해서... 저번주차에도 나왔긴 한데 이번주에 대충 [이 블로그 포스트](https://365kim.tistory.com/62)를 읽으면서 도움을 받았다.

#### CSS

```css
button {
  border: 0;
  background: white;

  width: 80px;
  height: 80px;
  border-radius: 100%;

  font-size: 30px;
  color: #fff;
  cursor: pointer;
}

button.operator {
  background: #ff9f0a;
}

button.number {
  background: #333333;
}

button.modop{
	background: #ff9f0a;
	width: 362px;
	border-radius: 40px;
}
```

이런식으로 `<button>` 태그의 클래스별로 정리할 수 있다는거...