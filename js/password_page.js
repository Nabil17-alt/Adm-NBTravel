// script.js
function redirectAfterDelay() {
    setTimeout(function() {
        window.location.href = "sign-in.html"; // Alamat tujuan redirect
    }, 5000); // Tunggu 5 detik sebelum redirect
}

function getQueryParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

var username = getQueryParam("username");

var usersData = localStorage.getItem("users");
var users = usersData ? JSON.parse(usersData) : [];

function displayUser(username) {
  var userListElement = document.getElementById("user-list");
  userListElement.innerHTML = "";

  var matchedUser = users.find(function (user) {
    return user.username.toLowerCase() === username.toLowerCase();
  });

  if (matchedUser) {
    var userElement = document.createElement("li");

    var userInfoElement = document.createElement("div");
    userInfoElement.textContent = `Username: ${matchedUser.username}, Password: ${matchedUser.password}`;
    userElement.appendChild(userInfoElement);

    userListElement.appendChild(userElement);
  } else {
    var noUserElement = document.createElement("li");
    noUserElement.textContent = `Tidak ada pengguna dengan nama "${username}"`;
    userListElement.appendChild(noUserElement);
  }
}

if (username) {
  displayUser(username);
} else {
  console.error("Username tidak ditemukan di parameter URL");
}