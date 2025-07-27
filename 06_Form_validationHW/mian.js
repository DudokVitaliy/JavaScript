let colors = [];

$(document).ready(function () {
  const savedColors = getCookie("colors");
  if (savedColors) {
    colors = JSON.parse(savedColors);
    renderColors();
  }

  $('#colorForm').on('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = $('#name').val().trim();
    const type = $('#type').val();
    const code = $('#code').val().trim();

    if (!validateName(name) || !validateCode(code, type)) return;

    if (colors.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      $('#nameError').text('This color already exists.');
      return;
    }

    colors.push({ name, type, code });
    setCookie("colors", JSON.stringify(colors), 30);
    renderColors();

    $('#name').val('');
    $('#code').val('');
  });

  $('#clearColorsBtn').on('click', function () {
    setCookie("colors", "", -1);
    colors = [];
    $('#colorsContainer').empty();
    $('#infoMessage').text("All saved colors have been cleared.").css('color', 'green');
  });
});

function validateName(name) {
  if (!name) {
    $('#nameError').text('Name is required. Example: SkyBlue');
    return false;
  }
  if (!/^[a-zA-Z]+$/.test(name)) {
    $('#nameError').text('Only letters allowed. Example: Ocean');
    return false;
  }
  return true;
}

function validateCode(code, type) {
  const trimmed = code.replace(/\s+/g, '');
  let isValid = false;

  if (type === "RGB") {
    isValid = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/.test(trimmed) &&
              trimmed.split(',').every(n => +n >= 0 && +n <= 255);
    if (!isValid) $('#codeError').text('Invalid RGB format. Example: 255,0,0');

  } else if (type === "RGBA") {
    const match = trimmed.match(/^(\d{1,3}),(\d{1,3}),(\d{1,3}),(0|1|0?\.\d+)$/);
    isValid = match &&
              +match[1] <= 255 && +match[2] <= 255 && +match[3] <= 255 &&
              +match[4] >= 0 && +match[4] <= 1;
    if (!isValid) $('#codeError').text('Invalid RGBA format. Example: 255,0,0,0.5');

  } else if (type === "HEX") {
    isValid = /^#([0-9A-Fa-f]{6})$/.test(trimmed);
    if (!isValid) $('#codeError').text('Invalid HEX format. Example: #ff0000');
  }

  return isValid;
}

function clearErrors() {
  $('#nameError, #codeError, #typeError, #infoMessage').text('');
}

function renderColors() {
  const container = $('#colorsContainer');
  container.empty();

  colors.forEach(color => {
    const box = $('<div class="color-box"></div>');
    let bgColor = '';

    if (color.type === 'RGB') {
      bgColor = `rgb(${color.code})`;
    } else if (color.type === 'RGBA') {
      bgColor = `rgba(${color.code})`;
    } else {
      bgColor = color.code;
    }

    box.css('background-color', bgColor);

    const info = `
      <div class="color-info">
        <strong>${color.name.toUpperCase()}</strong><br>
        ${color.type}<br>
        <span>${color.code}</span>
      </div>`;
    box.append(info);
    container.append(box);
  });
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
