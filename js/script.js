fetch('js/content.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`cardTitle${i}`).textContent = data[`cardTitle${i}`];
      document.getElementById(`cardText${i}`).textContent = data[`cardText${i}`];
    }
  })
  .catch(error => console.error('Error loading content:', error));
