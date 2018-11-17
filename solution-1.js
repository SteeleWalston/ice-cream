function renderList() {
  const ul = document.querySelector('.ice-cream-list');
  for (let i = 0; i < iceCreamFlavors.length; i++) {
      const li = document.createElement('li');
      li.textContent = iceCreamFlavors[i];
      li.setAttribute('class', 'ice-cream-flavor')
      ul.appendChild(li);
  }
};

renderList();