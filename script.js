function ValidateEmail() {
  var mail = document.getElementById("user");
  var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regex.text(mail)) {
    alert("You have provided a valid email-id");
    return true;
  } else {
    alert("Sorry ! Incorrect email-id");
    return false;
  }
}
