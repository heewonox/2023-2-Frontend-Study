# FE 둘째주

저번주 목,금요일이 예상치 못하게 이리저리 바빳었던데다가 주말은 알바때문에 원래 바쁜지라 월요일날이 되어서 책을 처음 펴 보니 8장 거의 시작부터 Lexicon Environment니 뭐니 엄청 개념적이고 추상적이면서 어려운 내용들이 폭포수 처럼 쏟아졌다. 내가 문해력이 떨어졌는지 (나름 수능 국어영역은 1등급 턱걸이를 했다만) 2~3페이지를 계속해서 읽어도 이해가 안되어서 덮어 두고 보니까 벌써 화요일 저녁이 되있더라. 뭐라도 일단 끄적여야 되니 보이는 단어 위주로 정리한 다음 유튜브에서 해당하는 동영상을 좀 찾아보았다.

<details><summary>챕터별</summary>

- **[8장 함수](#8장-함수)**
- **[9장 객체](#9장-객체)**
- [10장 배열의 다양한 기능](#10장과-11장은-그래도-필요할때-다시-방문해도-타격이-덜할것-같다)
- [11장 버그와 오류에 대처하는 방법](#10장과-11장은-그래도-필요할때-다시-방문해도-타격이-덜할것-같다)
- **[12장 정규 표현식](#12장-정규-표현식)**
- [13장 웹 브라우저의 객체](#13장도-생략)
- **[14장 문서 제어](#14-문서제어)**
- **[15장 이벤트 처리](#15장-이벤트-처리)**

</details>

 ### 8장 함수

- 중첩함수
- arguments 객체
- execution environment (lexicon environment type component)
- 클로저
	<details><summary>영상</summary> 
	
	<iframe width="560" height="315" src="https://www.youtube.com/embed/vKJpN5FAeF4?si=3GG4PubRGvRNq6y2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	
	[링크](https://www.youtube.com/embed/vKJpN5FAeF4?si=3GG4PubRGvRNq6y2)

	더 볼 자료

	- [생활코딩 : JavaScript - Execute context](https://www.youtube.com/watch?v=QtOF0uMBy7k)
	- [생활코딩 : Javascript - Closure](https://www.youtube.com/watch?v=bwwaSwf7vkE) 
	
	</details>

	영상만 보고 이해한것은 Execution Environment가 복잡하게 들어가면 책에서 나온것 처럼 깊게 들어갈 수 있으나 대충 생각하자면 이미 익숙한 Block 범위와 지역, 전역 변수/함수에 관한 것 같다. 대신 조금 주의 할 게 영상에도 나온것 처럼 for문 안에서 변화하는 전역변수를 참조하는 경우 이미 for문이 다 돌아간 뒤에 실행될 수도 있다는 점?? 영상에는 `var` 대신 `let`을 사용하는 것으로 해결한 것 같다. 

- apply, call, bind
-  고차함수(함수형 프로그래밍)
	
	- 메모이제이션(memoization)
	- compose
	- 부분적용
	- currying

- 콜백 함수
	<details><summary>영상</summary>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/-iZlNnTGotk?si=w4tWl8DKEZxpPJx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

	[링크](https://www.youtube.com/embed/-iZlNnTGotk?si=w4tWl8DKEZxpPJx0)

	더 볼 자료
	- [생활코딩 : JavaScript - callback](https://www.youtube.com/watch?v=TAyLeIj1hMc)

	</details>

	콜백함수는 함수에 인자로 들어가는 함수로 순차적으로 실행하고 싶을때 사용한다고 영상에는 나와있다. 특히나 `.addEventListener('...',function(){})`같이 이벤트처리기에서 자주 쓰이는 것 같다.

	사실 영상에는 단순히 순차적으로 실행하고 싶을떄라고 나왔으나 책에 나오는 map,filter,reduce같은 함수를 인자로 받는 메서드등에도 사용되는것 같다.

- ECMAScript6 부터 추가된 기능 : 화살표 함수, 나머지 인수, 이터레이터 제네레이터 등

### 9장 객체 

프로토콜, 상속에 관한 내용은 어느정도는 학교에서 배운 C++, Swift, Python의 기본 지식으로 커버가 조금 될 것 같으나

- JSON
	<details><summary>영상</summary>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/1ID6pfTViXo?si=7qVA6lzsPdE7ZIVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

	[링크](https://www.youtube.com/embed/1ID6pfTViXo?si=7qVA6lzsPdE7ZIVI)

	</details>
	
	저번학기에 자료구조 수업을 들으면서 맥북을 이용하는 나는 vscode에서 c++ 프로젝트를 디버깅을 하려고 launch.json을 수정한 적이 있어서 (생각보다 인터넷에 자료가 없어서 직접 여러가지를 수정해가며 해볼수 밖에 없었다.) 어떻게 생겨먹었는지는 알고 있었긴 했다. 다음은 내가 수정한 파일이다.
	<details><summary>펼치기</summary>
	
	```js
	{
		// Use IntelliSense to learn about possible attributes.
		// Hover to view descriptions of existing attributes.
		// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
		"version": "0.2.0",
		"configurations": [
			{
				"name": "(lldb) hw",
				"type": "cppdbg",
				"request": "launch",
				"program": "${workspaceFolder}/hw3a.out",
				"args": ["${workspaceFolder}/poly.in"],
				"stopAtEntry": false,
				"cwd": "${fileDirname}",
				"environment": [],
				"externalConsole": true,
				"MIMode": "lldb"
			}

		]	
	}
	```
	
	</details>
	
	[생활코딩 : JavaScript Object Oriented Programming](https://www.youtube.com/playlist?list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3)

#### <br><br>10장과 11장은 그래도 필요할때 다시 방문해도 타격이 덜할것 같다<br><br>


### 12장 정규 표현식

<img src="https://raw.githubusercontent.com/heewonox/test1/main/prof_regex.png" width=400 height=180>

에브리타임 컴공게인가 정확히 어디서 본건지는 기억이 안나는데 숭실대학교 AI학부의 교수님의 성함이 올라왔던 적이 있는것 같고 아마 댓글에는 _컴하하하_ 같이 비웃는 댓글이 달렸던 것이 기억이 난다.

<details><summary>영상</summary>
<iframe width="560" height="315" src="https://www.youtube.com/embed/sXQxhojSdZM?si=bdLyVrGzjFaXOe_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></details>

문자열 검색하는데 사용되는것 같다. 영상에도 언급하듯이 일단 정규식을 읽는것 자체도 너무 복잡하고 깊게 들어가면 너무 어려울 것 같다.

#### <br><br>13장도 생략

사실 13장~15장이 가장 중요한 내용일 것 같은데 어째 가장 부실한 기분... 13장은 그래도 한번 훑어보았을때 필요할때 내용을 참조하는 식으로 하는게 조금 가능해 보인다

<br>

### 14 문서제어

이부분은 짧은 동영상도 못찾았다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5fb2aPlgoys?si=v0aV-lJTw5wF7Fg-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[링크](https://www.youtube.com/embed/5fb2aPlgoys?si=v0aV-lJTw5wF7Fg-)

무려 2시간 40분 길이의 영상이다... 책 매우 초반부에 html문서 요소를 js로 조작하는 매우 간단한 방법을 보였는데 이부분은 각 객체를 트리로 분석해서 엄청 자세하게 암튼 하는거 같다.... 

### 15장 이벤트 처리

[자바스크립트 DOM & EVENT #5 이벤트 핸들러(Event Handler)](https://www.youtube.com/watch?v=J5EJija5-Sw)

[생활코딩 : JavaScript Promise (callback & async) Playlist](https://www.youtube.com/playlist?list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI)

이부분도 책의 초반부에 다음과 같은 코드:

```html
<input type="buton" onclick="changeColor();">
```
```js
var btn = document.getElementById("button");
btn.onclick=changeColor();
```
등을 이용해서 이벤트가 발생했을 때 코드가 실행되도록 할 수 있었으나 1. 가독성과 유지보수성, 2. 이벤트 처리기를 단 하나만 등록할 수 있다 의 문제점등 때문에 
```js
var btn = document.getElementById("button");
btn.addEventListener("click",changeColor,false);
```
과 같이 `addEventListener` 메서드를 사용하는것 같다.


<br><br>

![으앙](https://raw.githubusercontent.com/heewonox/test1/main/sad.jpg) 

디스코드에는 조용하고 가끔씩 올라오는 질문도 수준 높은 질문들이라서 나만 어려워하는거 같다.... 너무 두렵다. 추석때 To Do 리스트 제작 과제 하면서 동영상 강의도 열심히 찾아듣고 책도 열심히 보고 아무튼 더 열심히 해야겠다.