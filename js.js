let users = [];
function signUp() {
  users.push({
    Email: document.getElementById("1n").value,
    Password: document.getElementById("Pw").value,
  });
  console.log(users);
  document.getElementById("1n").value = "";
  document.getElementById("Pw").value = "";
}
function signIn() {
  let Email = document.getElementById("1n").value;
  let Password = document.getElementById("Pwd").value;
  login = false;
  for (i = 0; i < users.length; i++) {
    if (Email == users[i].Email && Password == users[i].Password) {
      login = true;
      if (login) {
        alert("login successful");
      } else {
        alert("Invalid Email or Password");
      }
    }
  }
}
