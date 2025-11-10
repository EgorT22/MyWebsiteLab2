document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let surname = document.getElementById("surname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!name || !surname || !email || !password) {
    alert("Будь ласка, заповніть усі поля!");
  } else {
    alert("Форма успішно відправлена!");
    console.log("Користувач заповнив форму успішно!");
  }
});
