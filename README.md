# Parktaehoon1.github.io
진행하며 공부한 내용

Portfolio 부분 버튼으로 해당 Portfolio 나타나게 구현해야되는 부분이 있었다.
![image](https://user-images.githubusercontent.com/101313551/189078811-23aa18f9-77a0-431c-8a20-716b967fc83b.png)
이 forEach 를 이용하여 구현하려고 하였으나, forEach의 1번째 매개변수는 값이 들어오는 것을 잊는 실수를 했다. 
![image](https://user-images.githubusercontent.com/101313551/189079018-864c3528-b927-4be3-b662-62d4edd8c8e7.png)
이때 원인을 알아내기위해 계속 콘솔을 찍었다.
여기서 함수의 매개변수 _str 은 clone으로 나오지만, forEach(box 안)에서 사용한 _str이 같은 값이 나온다고 착각했다.
(콘솔로 찍었을때 forEach가 돌면서 자기 자신을 나타내는 것을 볼 수 있다.) 
이런 실수는 하지 않아야겠다. 
![image](https://user-images.githubusercontent.com/101313551/189079701-019f3f0f-954d-4d3d-ba56-58d410f70f07.png)
위의 코드로 오류를 바로 잡을 수 있었다! 

