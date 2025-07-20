
  let field = document.getElementById("field");
  let ball = document.getElementById("ball");

  field.addEventListener("click", function (event) {
    let fieldRect = field.getBoundingClientRect();

    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;

    let clickX = event.clientX - fieldRect.left;
    let clickY = event.clientY - fieldRect.top;

    let newLeft = clickX - ballWidth / 2;
    let newTop = clickY - ballHeight / 2;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + ballWidth > field.clientWidth) newLeft = field.clientWidth - ballWidth;
    if (newTop + ballHeight > field.clientHeight) newTop = field.clientHeight - ballHeight;

    ball.style.left = newLeft + "px";
    ball.style.top = newTop + "px";
  });

  let lights = ["red", "yellow", "green"];
  let current = 0;

  const btn = document.getElementById("next");

  btn.addEventListener("click", function () {
    lights.forEach(id => {
      document.getElementById(id).style.backgroundColor = "grey";
    });

    document.getElementById(lights[current]).style.backgroundColor = lights[current];

    current = (current + 1) % lights.length;
  });

