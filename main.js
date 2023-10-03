function btnlogin() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (user === "contoh" && pass === "1234") {
    window.location.href = "indexSecond.html";
  } else {
    alert("Usernama Atau Password Salah Silahkan Coba Lagi");
  }
}
function toggleContent() {
  let content = document.getElementById("hiddenContent");
  content.classList.toggle("hidden");
}
