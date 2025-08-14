// Функції для роботи з cookie
function setCookie(name, value, hours) {
  const d = new Date();
  d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  name = name + "=";
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

function deleteAllCookies() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.trim().split("=")[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
  });
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.textContent = "");
}



function initIndexPage() {
  if (getCookie("email")) {
    // window.location.href = "user.html";
  }
  window.addEventListener("load", () => {
    const email = getCookie("email");
    const password = getCookie("password");
    if (email) document.getElementById("email").value = email;
    if (password) document.getElementById("password").value = password;
  });

  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    const emailRegex = /^[A-Za-z0-9._-]{3,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email) {
      showError("emailError", "Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError("emailError", "Invalid email");
      valid = false;
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password) {
      showError("passwordError", "Password is required");
      valid = false;
    } else if (!passRegex.test(password)) {
      showError("passwordError", "Min 6 characters, 1 uppercase, 1 lowercase, 1 digit");
      valid = false;
    }

    if (!confirmPassword) {
      showError("confirmPasswordError", "Please confirm password");
      valid = false;
    } else if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match");
      valid = false;
    }

    if (valid) {
      setCookie("email", email, 1);
      setCookie("password", password, 1);
      window.location.href = "user.html";
    }
  });
}


// --- user.html ---

function initUserPage() {
  if (!getCookie("email")) {
    window.location.href = "index.html";
  }
  const email = getCookie("email");
  const greetingDiv = document.getElementById("greeting");
  if (greetingDiv && email) {
    greetingDiv.textContent = `Hello, ${email}`;
  }
  window.addEventListener("load", () => {
    document.getElementById("firstName").value = getCookie("firstName") || "";
    document.getElementById("lastName").value = getCookie("lastName") || "";
    document.getElementById("birthYear").value = getCookie("birthYear") || "";
    document.getElementById("gender").value = getCookie("gender") || "";
    document.getElementById("phone").value = getCookie("phone") || "";
    document.getElementById("skype").value = getCookie("skype") || "";
  });

  document.getElementById("exitBtn").addEventListener("click", function () {
    deleteAllCookies();
    window.location.href = "index.html";
  });

  document.getElementById("backToSignup").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const birthYear = parseInt(document.getElementById("birthYear").value.trim());
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value.trim();
    const skype = document.getElementById("skype").value.trim();

    let valid = true;

    const nameRegex = /^[A-Za-zА-Яа-яЇїІіЄєҐґ]{1,20}$/;
    if (!firstName) {
      showError("firstNameError", "First name is required");
      valid = false;
    } else if (!nameRegex.test(firstName)) {
      showError("firstNameError", "Max 20 characters, letters only");
      valid = false;
    }

    if (!lastName) {
      showError("lastNameError", "Last name is required");
      valid = false;
    } else if (!nameRegex.test(lastName)) {
      showError("lastNameError", "Max 20 characters, letters only");
      valid = false;
    }

    const currentYear = new Date().getFullYear();
    if (!birthYear) {
      showError("birthYearError", "Birth year is required");
      valid = false;
    } else if (birthYear < 1900 || birthYear > currentYear) {
      showError("birthYearError", `Enter a year between 1900 and ${currentYear}`);
      valid = false;
    }

    if (!gender) {
      showError("genderError", "Select gender");
      valid = false;
    }

    if (phone) {
      const phoneDigits = phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 12) {
        showError("phoneError", "Must be 10 to 12 digits");
        valid = false;
      }
    }

    if (skype && !/^[A-Za-z0-9.-]*$/.test(skype)) {
      showError("skypeError", "Letters, digits, dash, and dot only");
      valid = false;
    }

    if (valid) {
      setCookie("firstName", firstName, 1);
      setCookie("lastName", lastName, 1);
      setCookie("birthYear", birthYear, 1);
      setCookie("gender", gender, 1);
      setCookie("phone", phone, 1);
      setCookie("skype", skype, 1);
      alert("Data saved!");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("signupForm")) {
    initIndexPage();
  }
  if (document.getElementById("userForm")) {
    initUserPage();
  }
});
