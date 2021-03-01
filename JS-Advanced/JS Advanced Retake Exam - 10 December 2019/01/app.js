function solution() {
  const [listUl, sentUl, discardUl] = document.querySelectorAll("ul");
  const input = document.querySelector("input");

  const button = document.querySelector("button");
  button.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.preventDefault();
      const li = createElement("li", input.value, "gift");

      const sendBtn = createElement("button", "Send", undefined, "sendButton");
      sendBtn.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          e.preventDefault();
          sentGift(li.textContent);
          li.remove();
        }
      });

      const discardBtn = createElement(
        "button",
        "Discard",
        undefined,
        "discardButton"
      );
      discardBtn.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          e.preventDefault();
          discarDgift(li.textContent);
          li.remove();
        }
      });

      li.appendChild(sendBtn);
      li.appendChild(discardBtn);
      listUl.appendChild(li);
      input.value = "";

      sortGifts();
    }
  });

  function sentGift(content) {
    const li = createElement("li", content, "gift");
    sentUl.appendChild(li);
  }
  function discarDgift(content) {
    const li = createElement("li", content, "gift");
    discardUl.appendChild(li);
  }

  function sortGifts() {
    Array.from(listUl.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((g) => listUl.appendChild(g));
  }

  function createElement(type, content, className, id) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    return element;
  }
}
