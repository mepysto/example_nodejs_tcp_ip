# nodejs_tcp_ip
NodeJS + Express TCP/IP Test Example

Original Tutorial from : 큰돌 블로그 
https://blog.naver.com/PostView.nhn?blogId=jhc9639&logNo=221440517724

로직 :
1. 기상청 AWS, 즉, 종관관측자료를 바탕으로 가상의 관측장비를 만듭니다. 

* 이 장비는 미리 만들어 놓은 가상의 기상청 API에 접속해 자료값을 가져 옵니다. 

* 기상자료개방포털 : https://data.kma.go.kr/data/grnd/selectAsosList.do

* csv 파일 다운로드 후 utf8 로 파일인코딩 변경 필요

2. 가상의 API 서버를 만듭니다. 그 API서버는 그 장비로부터 나온 값을 뿌려줍니다. 

서버파일위치 : api/server.js

main함수는 aws데이타를 만들고 나서 app객체에 get요청 메소드를 설정합니다. 

/:time 이런식으로 해놓으면 그 위치의 url조각의 위치를 이용해서 req.params.time이라는 키값으로 받아서 처리 할 수 있습니다.

AWS_list라는 기상청자료들을 만들어서 time에 해당하는 ?번째 요소를 반환하도록 합시다. 그리고 http 서버를 구동합니다. 

3. 서버에다가 일정시간마다 request요청을 하는 client는 그 값을 받아 서버와 TCP/IP 통신을 해서 값을 줍니다. 

4. 서버는 그 값을 받아 로직을 구현합니다.  


구동방법은 다음과 같습니다. 

1. api/server.js를 구동합니다. 

#node api/server.js


2. client.js를 구동합니다. 아이고 서버가 아직 켜지지 않아서 불쌍하게도 reconnect를 하는군요.

#node client.js

3. server를 구동합니다.

#node server.js

​
