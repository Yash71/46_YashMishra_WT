const regexTester = () => {
  let fname = document.querySelector('#first-name');
  let lname = document.querySelector('#last-name');
  let loggerEmail = document.querySelector('#logger-email');

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regName = /^[a-zA-Z]+$/;

  if (!regName.test(fname.value)){
    window.alert("Enter a valid first name");
    return false;
  }
  if (!regName.test(lname.value)) {
    window.alert("Enter a valid last name");
    return false;
  }

  if (!regEmail.test(loggerEmail.value)) {
    window.alert("Enter a valid email");
    return false;
  }
  return true;
};
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", regexTester);
