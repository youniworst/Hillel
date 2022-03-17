const generateRandomColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const scene = document.querySelector(".scene");
const sceneRect = scene.getBoundingClientRect();
const sceneContainer = document.querySelector('.scene-container');
const sceneContainerRect = sceneContainer.getBoundingClientRect();
const ball = document.querySelector(".ball");
const ballRect = ball.getBoundingClientRect();
const BORDER_WIDTH = 50;

let ballActive = false;

scene.addEventListener("mousemove", function (e) {
	if (!ballActive) return;

	const {clientX, clientY} = e;
	const left = clientX - sceneRect.left - BORDER_WIDTH - ballRect.width / 2;
	const top = clientY - sceneRect.top - BORDER_WIDTH - ballRect.height / 2;

	console.log(left)
	console.log(sceneContainerRect);
	if(left < 0 || left > sceneContainerRect.width - ballRect.width) return;  //Горизонтальные границы
	if(top < 0 || top > sceneContainerRect.height - ballRect.height) return;  //Вертикальные границы

	ball.style.transform = `translate(${left}px, ${top}px)`;
});


ball.addEventListener("click", () => {
	ballActive = !ballActive;
});
