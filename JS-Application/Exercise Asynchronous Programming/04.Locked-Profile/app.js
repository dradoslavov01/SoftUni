function lockedProfile() {
  const [lock, unlock, userName, email, age] = document.querySelectorAll(
    "input"
  );
  const info = document.getElementById("user1HiddenFields");
  userName.value = "Mary";

  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const isLokced =
      document.querySelector("input[type=radio]:checked").value === "lock";
    if (isLokced) {
      return;
    }

    const info = document.getElementById("user1HiddenFields");
    info.style.display = "block";
    console.log(email);
    getData();
  });

  async function getData() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach((e) => {
      if (userName.value == e.username) {
        email.value = e.email;
        age.value = e.age;
      }
    });
  }
}
