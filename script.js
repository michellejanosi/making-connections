// Clicking the edit profile button will change the user's name from Jane Doe to another other name.
// In Connection Requests, clicking either button will remove the user from the requests list.
// Under Connection Requests, bonus: either button will decrease the Connection Requests number
// Bonus: The accept button also increases the 'Your Connections' number.

function editName() {
  const profileName = document.querySelector(".profile-name");
  let name = prompt("What is your name?")
  profileName.innerHTML = name;
}

const editProfileBtn = document.querySelector(".edit-profile");
editProfileBtn.addEventListener("click", editName);

