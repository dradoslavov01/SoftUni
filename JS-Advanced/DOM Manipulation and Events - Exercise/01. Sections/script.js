function create(words) {
   for (const ele of words) {
      const createDiv = document.createElement('div');
      const div = document.getElementById('content');
      const p = document.createElement('p');
      p.textContent = ele;
      p.style.display = 'none';
      createDiv.appendChild(p);
      createDiv.addEventListener('click', () => {
         p.style.display = 'block';
      })
      div.appendChild(createDiv);
   }
}