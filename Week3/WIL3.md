# FE 셋째주

3주차 과제 공지가 나오자 마자 링크되어있던 페이지로 들어가 보니 개발자 도구를 사용하면 원본 코드를 쉽게 볼 수 있길래 "아 이걸로 클론코딩 해야지"라는 생각을 했었는데 나만 한게 아닌지 디스코드에 의도한거냐고 질문이 바로 올라왔다. 살짝 부끄럽긴 했는데 자기 객관화를 해보니 from scratch에서 구현하는건 절대 지금 내 실력으로 불가능하다고 판단되어서 일단은 주어진 소스코드를 가지고 이리저리 poking해보면서 놀아보았다. _~~근데 왜 다 tab을 사용하지 않고 스페이스 두개로 indentation을 하셨는지는 모르겠다. 이유가 있나? 좀 불편했음...~~_

<details><summary>목차</summary>

- **[index.html](#indexhtml)**
- **[script.js](#scriptjs)**
- **[기타...](#기타)**
</details>

### index.html

내가 따로 HTML을 공부한 적이 없다보니 익숙하지 않은 Element들이 많이 있어서 전체적으로 정리했다.

1. meta

	charset은 많이 봤는데 
	
	```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	```

	이런식으로 사용하는것은 처음 봤다. 검색해보니 모든 장치에서, 특히 모바일 기기등 에서 잘 보이도록 하게 해주는 것 같다.

2. div

	div자체를 처음 보는건 아니고 CSS과 연계해서 flex 이용해서 정렬하는거는 해보지 않아서 자세히 보았다. CSS도 따로 배우진 않았는데 그냥 적으면 tag를 분류, 앞에 .은 class를 분류, #은 id로 분류하는 것 같다.

3. form

	입력 양식의 태그인듯 하다. `<input>`, `<button>`등과 같이 쓸수 있는것 같다.

4. section

	`<div>`와 같이 block속성을 가지고 있는 tag로서 `<div>`와 혼용해도 크게 차이가 없으나
	```
	<section> tag는 논리적으로 관계 있는 문서 혹은 요소를 분리할 때 사용한다.
	<div> 요소간 논리적 관계와는 상관없이 요소를 나눠야 할 필요가 있을 경우 사용한다.
	```
	라고 인터넷에서 한다.

5. span

	CSS나 JS파일이 manipulate할수 있도록 하는 tag인거 같다. 자체로는 큰 의미가 없는것 같다.

6. ul, li

	ul은 unordered list, li는 list item으로 목록을 만드는데 사용되는것 같다.

### script.js

1. Arrow Function
	
	저번의 WIL 에서는 무명함수 제작할때 쓴다고 잠깐 언급하고 지나간것 같다. 그래서 이번에 코드를 봤는데 엄청 많이 나와서 당황했다. 밑의 동영상이 조금 도음이 된 것 같다.
	
	[![arrowfunc](https://raw.githubusercontent.com/heewonox/test1/main/arrowfunctions.jpg)](https://www.youtube.com/watch?v=h33Srr5J9nY)

2. debugger

	인터넷을 보니 `debugger;`를 사용하면 브라우저의 개발자도구에서 디버깅을 할 수 있다고 하길래 적극 사용했다. 입력을 하고 코드가 한줄씩 실행되는 과정을 따라가고 html 문서가 변경되는걸 보면서 천천히 익힐 수 있었다.

	<img src="https://raw.githubusercontent.com/heewonox/test1/main/debugger_chrome_html.png" width=400 height=180><img src="https://raw.githubusercontent.com/heewonox/test1/main/debugger_chrome2.png" width=400 height=180><img src="https://raw.githubusercontent.com/heewonox/test1/main/debugger_safari.png" width=400 height=180>

	사파리는 미적으로는 좀더 마음에 드는데 변수 watch가 불편해서 크롬이 내 기준에서는 더 쓰기 좋았던것 같다.

3. 이벤트처리
	
	```html
	<button id="input-button" onclick="addTodoList()">+</button>
	```

	```js
	itemText.addEventListener("click",toggleItem);
	```

	책에서는 밑에부분을 사용하기 권장했던거 같긴 한데 둘 다 쓰여저 있었다.

4. DOM

	```js
	item=document.createElement("li"); 
	item.addChild(itemText);
	```
	인상깊었음... 아무튼 그랬음...

5. 기타

	`window.onload = renderTodoItem();`는 저번학기 swift배울때 `viewDidLoad`와 비슷한 개념인것 같고

	`itemList = [...itemList, inputObject];` 아마 배열에 append하는것 같은데 다른 방법도 쓸수 있지 않나... 일단 화려해 보이기는 한 것 같다.

	`===` 연산자는 내가 책 요약에서 연산자 부분을 통째로 넘어가서 몰랐는데 type등의 부분까지 완전히 같을때 `true`를 반환한다고 한다.

6. 해결 안된 부분들???

	- `event.preventDefault` << 이놈 뭔지??
	- 이부분 : 
		<details><summary>접기/펼치기</summary>
		```js
		const itemObject = itemList.find(
		(inputObject) => inputObject.text === e.target.innerText
		);
		//중략
		const filteredList = itemList.filter(
		(inputObject) => inputObject.text !== e.target.parentNode.innerText.slice(0, -1)
		);
		//중략
		const todoCount = document.getElementById("todo-count");
		todoCount.innerText = `(${itemList.filter((item) => !item.isDone).length})`;
		const doneCount = document.getElementById("done-count");
		doneCount.innerText = `(${itemList.filter((item) => item.isDone).length})`;
		```
		</details>

		이 사실 어떻게 동작하는지는 정확히 이해가 가진 않는다. 어떤 동작을 하는지는 이해가 가는데. `chatGPT`에 물어봐도  정확하게는 안알려주는듯...

	- local storage를 사용하지 않을려고 다음과 같이 코드를 수정했더니 :
		<details><summary>접기/펼치기</summary>
		
		```js
		const renderTodoItem = () => {
			debugger;  
			//const savedTodo = localStorage.getItem("itemList");

  			const todoList = document.getElementById("todo-list");
  			const doneList = document.getElementById("done-list");

  			// 덮어쓰지 않도록 초기화
  			todoList.innerHTML = "";
  			doneList.innerHTML = "";

  			// 데이터가 존재하는지 확인
  			if (itemList) {
    			//itemList = JSON.parse(savedTodo);

    			//savedItem
				itemList.forEach((savedItem) => {
      				const item = document.createElement("li");

      				const itemText = document.createElement("span");
      				itemText.className = "item-text";
      				itemText.addEventListener("click", toggleItem);
      				itemText.innerText = savedItem.text;

      				const deleteButton = document.createElement("button");
      				deleteButton.className = "delete-button";
      				deleteButton.addEventListener("click", removeItem);
      				deleteButton.innerText = "❌";

      				item.appendChild(itemText);
      				item.appendChild(deleteButton);

      				if (!savedItem.isDone) {
        				todoList.appendChild(item);
        				// deleteButton.appendChild(todoList);
      				} else {
        				doneList.appendChild(item);
        				//deleteButton.appendChild(item);
      				}
    			});
  			}
  			countItem();
		};
		//물론 기타 다른 함수도 수정했다
		```
		
		</details>
		
		항목을 추가하면 나타났다가 갑자기 사라진다. 한 0.5초만에??

### 기타...

항상 WIL을 작성하는 시간이면 뭐랄까 자괴감도 들고 슬프고 한다. 나는 분명 열심히 하고 있는것 같은데도 너무 어려운데 다른사람들은 잘 따라오고 있는거 같고 디스코드 질문에서도 수준높은 질문이 오가는거 같고 내가 위에서 올린 해결안된 궁금증도 질문하고싶은데 너무 간단한 질문일까봐 겁이 좀 난다. 다들 전공수업 듣고 수업내용 쫒아가면서 과제하는거도 안바쁘나?? 나는 엄청 바쁜데....