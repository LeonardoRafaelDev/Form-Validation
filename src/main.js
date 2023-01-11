const updateColors = (input, error = false) => {
  if (error) {
    document.querySelector(`#${input} > div > p`).classList.remove("hidden");
    document.querySelector(`#${input} > label`).classList.add("text-red");
    document.querySelector(`#${input} > div > input`).classList.remove("focus:ring-primary", "border-purple-400", "ring-primary");
    document.querySelector(`#${input} > div > span`).classList.remove("block");
    document.querySelector(`#${input} > div > span`).classList.add("hidden");
    document.querySelector(`#${input} > div > input`).classList.add("ring-red", "border-red", "focus:ring-red");
    return;
  }
  document.querySelector(`#${input} > div > p`).classList.add("hidden");
  document.querySelector(`#${input} > label`).classList.remove("text-red");
  document.querySelector(`#${input} > div > input`).classList.add("focus:ring-primary", "ring-0", "border-primary");
  document.querySelector(`#${input} > div > input`).classList.remove("border-purple-400", "focus:ring-red", "ring-red");
  document.querySelector(`#${input} > div > span`).classList.add("block");
  document.querySelector(`#${input} > div > span`).classList.remove("hidden");
  document.querySelector(`#${input} > div > input`).classList.remove("border-red");
};

document.querySelector("#name").addEventListener("input", (e) => {
  if (e.target.value.length > 5) {
    updateColors("name");
    return;
  }
  updateColors("name", true);
});

document.querySelector("#email").addEventListener("input", (e) => {
  if (e.target.validity.valid) {
    updateColors("email");
    return;
  }
  updateColors("email", true);
});

//validacao cpf
const input = document.querySelector("#cpf");

input.addEventListener("keyup", formatarCPF);

function formatarCPF(e) {
  let valor = e.target.value.replace(/\D/g, "");

  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = valor;
}
