// js/lead.js
const WHATS_NUMBER = "5548996352829";
const EMAIL_TO = "diego@informareconsultoria.com.br";

function encode(text) {
  return encodeURIComponent(text ?? "");
}

function buildMessage(data) {
  return (
`Olá, Diego! Gostaria de um orçamento/consultoria.

Nome: ${data.nome}
Empresa: ${data.empresa}
WhatsApp: ${data.telefone}
E-mail: ${data.email}
Quantidade: ${data.quantidade} unidades

Mensagem:
${data.mensagem}`
  );
}

document.getElementById("leadForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome")?.value.trim(),
    empresa: document.getElementById("empresa")?.value.trim(),
    telefone: document.getElementById("telefone")?.value.trim(),
    email: document.getElementById("email")?.value.trim(),
    quantidade: document.getElementById("quantidade")?.value.trim(),
    mensagem: document.getElementById("mensagem")?.value.trim(),
  };

  const qtd = Number(data.quantidade || 0);
  if (Number.isNaN(qtd) || qtd < 3000) {
    alert("A quantidade mínima é 3000 unidades.");
    return;
  }

  const text = buildMessage(data);
  const url = `https://wa.me/${WHATS_NUMBER}?text=${encode(text)}`;
  window.open(url, "_blank", "noopener");
});

document.getElementById("sendEmailBtn")?.addEventListener("click", () => {
  const data = {
    nome: document.getElementById("nome")?.value.trim(),
    empresa: document.getElementById("empresa")?.value.trim(),
    telefone: document.getElementById("telefone")?.value.trim(),
    email: document.getElementById("email")?.value.trim(),
    quantidade: document.getElementById("quantidade")?.value.trim(),
    mensagem: document.getElementById("mensagem")?.value.trim(),
  };

  const subject = encode("Contato via Landing Page - Orçamento/Consultoria");
  const body = encode(buildMessage(data));
  window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
});
