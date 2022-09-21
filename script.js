const bordaEmail = document.getElementById("email");
const btn = document.getElementById("button");
const error = document.getElementById("error");

document.getElementById("email").onkeyup = function () {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(this.value)) {
    error.style.display = "none";
    bordaEmail.style.borderColor = "green";
  } else {
    error.style.display = "flex";
    bordaEmail.style.borderColor = "hsl(354, 100%, 66%)";
  }
};
