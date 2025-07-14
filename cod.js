document.getElementById("form-contato").addEventListener("submit", function (e) {e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      alert("Digite um e-mail válido.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset();
  });

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}


function filtrarLivros() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const cards = document.getElementsByClassName("livro");

  for (let card of cards) {
    const titulo = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = titulo.includes(termo) ? "block" : "none";
  }
}

function atualizarHora() {
  const agora = new Date();
  document.getElementById("dataHora").innerText =
    "Última atualização: " + agora.toLocaleString("pt-BR");
}

setInterval(atualizarHora, 1000);
