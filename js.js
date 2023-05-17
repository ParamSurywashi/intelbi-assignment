document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var profileData = document.getElementById("profileData");
  profileData.innerHTML = "Name: " + name + "<br>" +
                          "Username: " + username + "<br>" +
                          "Email: " + email + "<br>" +
                          "Password: " + password;
  
  document.getElementById("profileForm").reset();
});
