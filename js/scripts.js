function validateForm() {
  var x document.forms["pig-latin"].value;
  if (x === null || x === "") {
    alert("Please insert something in the text field!")
    return false;
  }
}
