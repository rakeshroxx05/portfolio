function toggleTheme() {
  document.body.classList.toggle("dark");
}

function sendMessage(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
}

function expandCert(card) {
  const img = card.querySelector('img');
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

function closeCert() {
  document.getElementById('certModal').style.display = 'none';
}
