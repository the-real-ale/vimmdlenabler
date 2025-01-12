let dlForm = document.getElementById("dl_form");
if (dlForm.getElementsByTagName("button").length == 0) {
  dlForm.innerHTML += `<button type="submit" style="width:100%">Download</button>`;
}
