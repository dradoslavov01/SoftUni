function search() {
  const input = document.querySelector("#searchText").value;

  const towns = document.querySelector("#towns");

  let matches = 0;

  for (const town of Array.from(towns.children)) {
    let townName = town.textContent;

    if (townName.includes(input)) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    }
  }
  document.querySelector("#result").textContent = `${matches} matches found`;
}
