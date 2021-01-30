function solve() {
  const div = document.getElementById("container");
  const movieSection = document.getElementById("movies");

  div.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.type = "button";
      const inputs = div.querySelectorAll("input");
      let name = inputs[0].value;
      let ticketPrice = inputs[2].value;
      let hall = inputs[1].value;
      if (name != "" && hall != "" && ticketPrice != "") {
        const li = document.createElement("li");
        const movieName = document.createElement("span");
        movieName.textContent = name;
        const movieHall = document.createElement("strong");
        movieHall.textContent = `Hall: ${hall}`;
        const ul = movieSection.querySelector("ul");
        li.appendChild(movieName);
        li.appendChild(movieHall);
        ul.appendChild(li);
        const movieDiv = document.createElement("div");
        li.appendChild(movieDiv);
        const moviePrice = document.createElement("strong");
        moviePrice.textContent = Number(ticketPrice).toFixed(2);
        const inputField = document.createElement("input");
        inputField.placeholder = "Ticket sold";
        const archiveBtn = document.createElement("button");
        archiveBtn.textContent = "Archive";
        movieDiv.appendChild(moviePrice);
        movieDiv.appendChild(inputField);
        movieDiv.appendChild(archiveBtn);
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";

        archiveBtn.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") {
            const archive = document.getElementById("archive");
            const ul = archive.querySelector("ul");
            const li = document.createElement("li");
            li.textContent = name;
            const total = document.createElement("strong");
            let amount = Number(inputField.value) * Number(ticketPrice);
            total.textContent = `Total amount: ${amount.toFixed(2)}`;
            li.appendChild(total);
            ul.appendChild(li);
            const archiveDiv = document.createElement("div");
            const btn = document.createElement("button");
            btn.textContent = "Delete";
            archiveDiv.appendChild(btn);
            li.appendChild(btn)
            
            btn.addEventListener("click", (e) => {
              if (e.target.tagName === "BUTTON") {
                li.parentNode.removeChild(li);
              }
            });

            const items = archive.querySelectorAll("button");
            const last = items[items.length - 1];
            last.addEventListener("click", (e) => {
                if (e.target.tagName === "BUTTON") {
                    ul.parentNode.replaceChild(ul.cloneNode(false), ul);
                }
              });

             
          }
        });
      }
    }
  });
}
