function solve() {
  let text = document.getElementById("text").value.split(" ");
  text = text.map(x => x.toLowerCase());
  const convention = document.getElementById("naming-convention").value;
  let res = [];
  if (convention === "Camel Case") {
    text.forEach((element, index) => {
      index === 0 ? res.push(element) : null;
      if (index > 0) {
        res.push(element.replace(element[0], element[0].toUpperCase()));
      }
    });
  } else if (convention === "Pascal Case") {
    text.forEach((element) => {
      res.push(element.replace(element[0], element[0].toUpperCase()));
    });
  } else {
    res = [];
  }
  res.length === 0
    ? (document.getElementById("result").textContent = "Error!")
    : (document.getElementById("result").textContent = res.join(""));
}
