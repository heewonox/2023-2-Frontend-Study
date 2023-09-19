# FE 첫째주

자바스크립트 초 문법이랑 이런것들이라서 "완전 새로운"내용은 없었던거 같다. 인터프리터 언어인 파이썬과 비슷한 점이 많았던 것  같아서 차이점 위주로만 적겠다. 일단 챕터별로 정리했다.
<details>

<summary>챕터별</summary>

- [1장 자바스크립트의 개요](#1장-자바스크립트의-개요)
- [2장 프로그램의 작성법과 실행법](#2장-프로그램의-작성법과-실행법)
- [3장 변수와 값](#3징-변수와-값)
- [4장 객체와 배열, 함수의 기초](#4장-객체와-배열-함수의-기초)
- [5장 표현식과 연산자](#5장-표현식과-연산자)
- [6장 웹 브라우저에서의 입출력](#6장-웹-브라우저에서의-입출력)
- [7장 제어구문](#7장-제어구문)


</details>

### 1장 자바스크립트의 개요
1. 자바스크립트는 파이썬과 같은 인터프리터 언어이다.

2. 클래스가 아니라 **프로토타입을** 상속한다.

	저번학기 인터넷 프로그래밍 과목에서 스위프트를 배우면서 프로토타입에 대해서 잠깐 배우고 넘어간 기억이 있는데 깊게는 들어가지 않아서 아직까지는 뭔지 잘 모르겠다. 클래스랑 큰 차이가 있을까?

3. 파이썬과 비슷하게 변수타입이 없는 동적 타입 언어이며 **함수를 인자로 넘길 수 있다**

4. **웹 브라우저의 API로 구성된 클라이언트측 자바스크립트와 Node.js등의 실행환경에서 실행되는 서버 측 자바스크립트로 나눌 수 있다.**
	
	2학년 2학기까지 얌전하게 컴공개, 씨프, 객체, 자구등의 수업만 들었던 사람으로서는 이렇게 구분되는건 처음 보는것 같다.


### 2장 프로그램의 작성법과 실행법

#### 자바스크립트 프로그램을 실행시키는 방법 중에는

1. 웹브라우저의 콘솔에서 실행하기 _(shift+enter로 여러 줄 입력 가능)_

2. 자바스크립트 코드를 HTML문서에 삽입하여 웹브라우저로 실행하기
	
	`html`파일에서 `<script>`요소 안에 작성해서 `console.log(...)`일 경우 브라우저 개발자 도구에서 확인,
	
	`document.write(...)`일 경우 웹 페이지 창안에 출력되는것을 확인할 수 있다.
	
	또는 `script`요소의 src속성을 이용해서 자바스크립트 파일을 불러들이는 방식도 가능하다.

3. 자바스크립트의 대화형모드로 실행하기
	
	컴공개를 처음 들을때 터미널에서 python을 실행해서 여러가지 테스트를 많이 해보았던 경험이 있기 때문에 익숙할 것 같다.
	
	`.editor`를 사용하면 여러줄 작성이 가능하다고 한다. 파이썬에서도 이런 비슷한 기능이 있었는지는 잘 모르겠다.

4. 자바스크립트 파일을 읽어 들여 실행하기

등이 있는 것 같다. 확실히 조금 생소한 것 같다.


1. 자바스크립트에서는 빈문장`(...);`이 필요한 경우가 있다고 한다. 무슨경우일까... 

### 3징 변수와 값
1. 변수 끌어올림 _(hoisting)_ 이 있어서 

	```js
	var x;
	console.log(x);
	```

	와

	```js
	console.log(x);
	var x;
	```

	가 같다고 한다. 이 경우 둘다 오류가 발생하지 않고 `undefined`가 출력된다. 다만 주의할것이
	
	```js
	console.log(x);
	var x=5;
	```
	같은 경우에는 `5`가 출력되는 것이 아니라 `undefined`를 출력한다.
	
	솔직히 이런 기능이 필요한지, 괜히 헷갈리게만 만드는건 아닌지 한데 책의 저자도 비슷한 생각을 가진 것 같다.

3장의 대부분의 내용은 이미 학교수업에서 공부한 내용과 겹치는 것 같다. 좀 새로운 내용을 꼽자면

1. 자바스크립트를 `html`요소에 끼워 넣을 때는 자바스크립트 프로그램을 문자열로 작성하기 때문에 HTML코드에는 큰따옴표를 사용하고 자바스크립트 코드에는 작은따옴표를 사용하여 HTML과자바스크립트에서 사용하는 따옴표를 구분하면 좋다.
	
	사실 파이썬에도 '와 "를 구분해서 쓰는 경우가 있었던 것 같은데 잘 기억이 안난다. 큰일났다.

2. **ECMAScript6**부터 추가된 데이터타입으로 심벌, 템플릿 리터럴, 플레이스홀더 등이 있다.
	
	심벌은 조금 흥미로운것 같다. 약간 C에서 #define과 비슷한 점이 있는것 같기도 하고... `#define`도 사실은 제데로 사용한 적이 없어서 잘 모르겠다. 템플릿 리터럴, 플레이스홀더는 파이썬의 f-format과 유사한듯.

### 4장 객체와 배열, 함수의 기초

1. 책에서 설명하는 객체는 이름과 값을 한 쌍으로 묶은 데이터를 여러 개 모은 것으로 연관 배열 또는 사전 이라고도 부른다고 한다. 
	
	책의 예제를 몇가지 보니까 컴공개에서 배웠던 dictionary와 객체에서 배웠던 typedef가 어느정도 짬뽕된 느낌인 것 같다.

2. 앞에서 잠깐 언급했듯이 함수의 값 뿐만 아니라 함수를 다른 함수의 인수로 넘길수도 있다고 하는데 8장에서 자세하게 설명한다고 한다.

3. 변수를 선언하지 않은 상태에서 값을 대입하면 함수 안에서 하더라도 전역 변수로 선언된다. 
	
	앞에서 hoisting을 설명할때도 저자가 이 기능에 대해서 그다지 긍정적인것 같지 않다는 느낌을 받았고 이것도 좀 그런것 같다. 굳이 이렇게 헷갈리게 코드를 짜야하나... 만약 그래야만 한다면 조금 무섭다...

4. 함수는 함수 리터럴로도 정의할 수 있다.
	
	무명함수도 학교수업에서 배우긴 했는데 잘 기억이 안난다. 잘 안써서 그런가... 책 읽으면서 학교수업 복습도 꾸준히 해야겠다는 생각도 든다. 자바스크립트에서는 다음과 같이 한다고 한다.
	```JS
	//eg
	var square = function(x){return x*x;};
	```
5. 객채의 프로퍼티 추가와 삭제
	
	프로퍼티의 추가 삭제:
	```JS
	//추가
	card.value=14;
	console.log(card);	// -> Object{suit:"하트", rank:"A", value:14}
	cricle.translate=function(a,b){
		this.center.x=this.center.x+a;	//C++처럼 this를 사용하는 것 같다
		this.center.y=this.center.y+b;
	}

	//삭제
	delte card.rank;
	console.log(card);	// -> Object{suit:"하트", value:14}
	```

6. 생성자로 객체생성하기
	C++나 파이썬과는 다르게 자바스크립트에는 클래스가 없으므로 함수를 새로 정의해야 하는것 같다
	생성자 함수는 이런식으로 정의하며:
	```js
	function Card(suit,rank){
		this.suit=suit;
		this.rank=rank;
	}
	```
	생성자 함수를 이용해서 객체를 생성할 때에는 이런식으로 한다.
	```js
	var card=new Card("하트","A");
	```
7. 자바스크립트 객체는 크게 네이티브 객체, 자바스크립트 실행 환경에 정의된 호스트 객체, 그리고 사용자 정의 객체로 나눌 수 있다.

책에는 내장 객체에 대한 내용도 많이 있으나 이부분은 필요할때 다시 방문하는게 나을것 같다. 또 Function _(F가 대문자임)_ 생성자에 대한 내용도 있는데 크게 중요한 부분은 아닌 것 같다

### 5장 표현식과 연산자
4장의 뒷부분에 있는 배열 부분도 그렇고 이부분은 컴퓨터 공학을 그래도 2년동안 전공한 입장에서 크게 새롭게 다가오는 부분은 없었던 것 같다. 다만 좀 달랐던 부분이

1. 명시적 타입 변환이 필요할 때
	Number객체의 메서드를 이용해서 숫자의 타입을 문자열로 변환한다
	`S - 0` 이나 `parseInt,parseFloat,Number`함수 등을 사용해서 문자열을 숫자로 변환한다

이전에 배운 언어에서는 `(int)x,(float)y`등으로 했었는데 그것보다는 조금 복잡한 것 같다.

### 6장 웹 브라우저에서의 입출력

사실 제대로된 HTML과 CSS를 공부해 본 적이 없는 사람으로서 이 단원이 읽기도 힘들고 이해하기도 가장 힘든 단원이긴 했는데, 이번 한학기 이걸 계속 해야된다고 생각하니까 빨리 익숙해져야겠다는 생각이 들었다.

1. Window 객체에는 대화상자를 표시하기 위한 메서드가 3가지 있다.
	
	|메서드|설명|
	|-----|---|
	|`window.alert`|경고 대화상자, 확인 버튼을 누르면 사라짐|
	|`window.prompt`|사용자의 문자열을 입력받음|
	|`window.confirm`|확인버튼과 취소버튼이 있음|

	Window객체의 메서드는 앞부분을 생략하고 호출할 수 있다. 위 메서드를 사용하는 예시는 다음과 같다.
	```js
	alert("hello");
	var name = prompt("Your name?","Hee-Won Yoon");	//사용자의 문자열은 name에 저장됨
	var ret=confirm("Y or N");	//true, false를 저장함
	```
2. console부분은... 그냥 필요할것 같을 때 다시 찾아오겠다...

3. 웹 브라우저에서 동작하는 프로그램을 기본적으로 이벤트 주도형 프로그램으로 이벤트 처리기가 필요하다.
	
	함수를 이벤트 처리기로 등록하는 방법에는
	- HTML 요소의 속성으로 등록하는 방법
	- DOM 요소의 프로퍼티로 등록하는 방법
	- addEventListener 메서드를 사용하는 방법
	
	등이 있다. 마지막 부분은 15장에서 설명한다고 한다.
	
4. HTML 요소의 속성으로 등록하려면 아래와 같은 방식으로 한다:
	```html
	<input type="button" value="click" onclick="displayTime()">
	```
	여기서 `onclick="displayTime()"` 이 부분이 이벤트 처리기 속성으로서 `input`요소를 클릭 했을때 `script`요소의 `displayTime`이 실행된다. `onclick`뿐 만 아니라 다양한 이벤트 종류가 있다.

5. DOM은 자바스크립트 등의 프로그램이 HTML 요소를 조작할 수 있게 하는 인터페이스로 DOM 객체는 다음과 같이 분류할 수 있다
	
	- `window` : 웹 브라우저의 윈도우, 또는 탭 하나를 가리킨다
	- `document` : HTML 문서 전체를 가리키며 HTML 요소 객체를 가져오거나 새로 만들때 사용한다
	- **요소객체** : HTML 문서의 요소를 가르키는 객체이다
	
	이를 이용해서 교재 123페이지에 있는 예제 6-2에서 DOM객체를 위 세가지로 분류하면

	`window`객체는
	```js
	//1. Window 객체의 onload 프로퍼티에 함수를 저장한다
	window.onload = function(){}
	``` 
	
	`document`객체는
	```js
	//2. input 요소의 객체 가져오기
	var button = document.getElementById("button");
	```
	**요소객체**는
	```js
	//3. input 요소를 클릭했을 때 동작하는 이벤트 처리기를 등록한다.
	button.onclick = displayTime;
	```
	가 있...는 것 같다.

6. 이벤트 처리기 프로퍼티에 등록한 이벤트 처리기를 제거할 때는 null을 대입시켜서 없앨 수 있다.
	
	위의 예제를 볼 때
	
	```js
	button.onclick = null;
	```
	이런식으로 하면 된다.

7. 윗윗단에서 다뤘던 **요소객체**의 innerHTML프로퍼티는 그 HTML 요소의 내용을 가리키며, 이걸로 HTML 요소의 내용을 읽거나 쓸 수 있다.
	
	교재의 말이 처음에 이해가 안가서 두세번 다시 읽어본거 같은데 코드를 보니까 이해가 좀 가는거 같다
	```js
	//생략(...)
	<head>
	<script>
	//...
	var display = document.getElementById("display");
	//...
	display.innerHTML = ((now-startTime)/1000).toFixed(2);
	//...
	</script>
	</head>
	<body>
	<p id="display">0.00</p>
	//...
	```
	`display.innerHTML = ((now-startTime)/1000).toFixed(2);`이 문구가 `<p id="display">0.00</p>` 의 0.00을 바꾼다는 말 같다.

8. `document.write`메서드는 인수로 받은 문자열을 `<body>`에 출력하며 책에 나오는 여러가지 이유로 인해서 잘 사용하지 않으나 간단한 출력을 할때 유용하다. 
	
	몇가지 사용할 때 주의점중 하나는 이벤트 처리기로 등록한 함수 안에서 사용하면 안된다는 점이다. 이벤트 처리기가 실행되면 HTML 문서 전체 내용이 `document.write`가 출력한 내용으로 변경되므로 그 이후 HTML문서를 동적으로 수정할 수 없다.
 
9. 책에서 Canvas를 이용한 컴퓨터 그래픽스 부분은 파이썬에서 turtle모듈을 사용했을때의 기억이 나서 자세히 기록하지는 않겠다


### 7장 제어구문
7장도 5장과 비슷한 이유로 자세한 요약은 생략하겠다 _~~절대로 시간이 없어서는 아니다.~~_ 

![sad.jpg](https://raw.githubusercontent.com/heewonox/test1/main/sad.jpg?token=GHSAT0AAAAAACHFXL44TILQGXSY6MGCIWJQZIJWI7A)

<br/>

사실 마크다운과 깃허브 자체도 처음 사용해보는거라 생소하고 200쪽 가까운 책의 내용을 일주일만에 요약하는 과제도 처음이다 보니 너무 초반에 힘을 쏟아넣어서 정작 중요한 후반부의 내용은 시간에 쫒겨 조금 대충 커버한 감이 없잖아 있다... 뭐 나중에 막히면 다시 찾아오면 되겠지..? 그래도 이번 과제를 제물삼아서 다음 과제는 조금더 신경써서 잘 할 수 있을것 같다.