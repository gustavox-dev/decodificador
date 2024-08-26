function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decryptText(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

document.getElementById('encrypt-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  
  // Verificar se o texto é válido
  if (inputText && /^[a-z\s]*$/.test(inputText)) {
    const encryptedText = encryptText(inputText);

    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
      <div class="encrypted-container">
      <p class="encrypted-text">${encryptedText}</p>
      <button id="copy-btn" class="copy-btn">Copiar</button>
      </div>
    `;

    document.getElementById('copy-btn').addEventListener('click', function() {
      navigator.clipboard.writeText(encryptedText).then(function() {
        alert('Texto copiado para a área de transferência!');
      });
    });

  } else {
    alert('Digite um texto válido (apenas letras minúsculas e sem acentos).');
  }
});


document.getElementById('decrypt-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  
  if (inputText && /^[a-z\s]*$/.test(inputText)) {
    const decryptedText = decryptText(inputText);

    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = `
      <div class="encrypted-container">
      <p class="encrypted-text">${decryptedText}</p>
      <button id="copy-btn" class="copy-btn">Copiar</button>
      </div>
    `;
  } else {
    alert('Digite um texto válido (apenas letras minúsculas e sem acentos).');
  }
});


