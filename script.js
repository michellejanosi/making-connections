// Clicking the edit profile button will change the user's name from Jane Doe to another other name.
// In Connection Requests, clicking either button will remove the user from the requests list.
// Under Connection Requests, bonus: either button will decrease the Connection Requests number
// Bonus: The accept button also increases the 'Your Connections' number.

  const editProfileButton = document.querySelector(".edit-profile");
  const acceptButtons = document.querySelectorAll(".accept");
  const closeButtons = document.querySelectorAll(".close");
  const requestsTitle = document.querySelector(
    ".connection-requests .requests-title"
  );
  const yourConnectionsTitle = document.querySelector(
    ".your-connections .requests-title"
  );

  // Function to edit profile name
  editProfileButton.addEventListener("click", function () {
    let newName = prompt("Please enter your new name:");
    if (newName) {
      document.querySelector(".profile-name").innerText = newName;
    }
  });

  // Function to remove connection requests and adjust counters
  acceptButtons.forEach(button => {
    button.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      adjustRequestsCount(-1);
      adjustConnectionsCount(1);
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      adjustRequestsCount(-1);
    });
  });

  function adjustRequestsCount(amount) {
    let currentCount = Number(
      requestsTitle.querySelector(".gray-circle").innerText
    );

    let newCount = currentCount + amount;
    requestsTitle.querySelector(".gray-circle").innerText = newCount.toString();
  }

  function adjustConnectionsCount(amount) {
    let currentCount = Number(
      yourConnectionsTitle.querySelector(".gray-circle").innerText
    );
    
    let newCount = currentCount + amount;
    yourConnectionsTitle.querySelector(
      ".gray-circle"
    ).innerText = newCount.toString();
  }
