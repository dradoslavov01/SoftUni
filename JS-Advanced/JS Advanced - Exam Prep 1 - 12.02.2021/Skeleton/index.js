function solve() {
  const nameInput = document.querySelector('input[name="lecture-name"]');
  const dateInput = document.querySelector('input[name="lecture-date"');
  const select = document.querySelector('select[name="lecture-module"');
  const mainDiv = document.querySelector('div[class="modules"]');

  const arr = [];

  const addButton = document.querySelector("button");
  addButton.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      e.preventDefault();

      arr.push(select.value);
        console.log(arr);
      if (arr.includes(select.value)) {
        
      } else {
        
      }
    }
  });

  function createElement(type, content) {
    const result = document.createElement(type);

    if (typeof content == "string") {
      result.textContent = content;
    } else {
      result.appendChild(content);
    }

    return result;
  }
}
