const updateColors = (input, error = false) => {
  if (error) {
    document.querySelector(`#${input} > div > p`).classList.remove("hidden");
    document.querySelector(`#${input} > label`).classList.add("text-red");
    document.querySelector(`#${input} > div > input`).classList.remove("focus:ring-primary", "border-purple-400", "ring-primary", "focus:ring-green", "ring-0", "border-green");
    document.querySelector(`#${input} > div > span`).classList.remove("block");
    document.querySelector(`#${input} > div > span`).classList.add("hidden");
    document.querySelector(`#${input} > div > input`).classList.add("ring-red", "border-red", "focus:ring-red");
    return;
  }
  document.querySelector(`#${input} > div > p`).classList.add("hidden");
  document.querySelector(`#${input} > label`).classList.remove("text-red");
  document.querySelector(`#${input} > div > input`).classList.add("focus:ring-green", "ring-0", "border-green");
  document.querySelector(`#${input} > div > input`).classList.remove("border-purple-400", "focus:ring-red", "ring-red");
  document.querySelector(`#${input} > div > span`).classList.add("block");
  document.querySelector(`#${input} > div > span`).classList.remove("hidden");
  document.querySelector(`#${input} > div > input`).classList.remove("border-red");
};

document.querySelector("#divname").addEventListener("input", (e) => {
  if (e.target.value.length > 5) {
    updateColors("divname",);
    return;
  }
  updateColors("divname", true);
});

document.querySelector("#divsurname").addEventListener("input", (e) => {
  if (e.target.value.length > 3) {
    updateColors("divsurname");
    return;
  }
  updateColors("divsurname", true);
});

document.querySelector("#divemail").addEventListener("input", (e) => {
  if (e.target.validity.valid) {
    updateColors("divemail");
    return;
  }
  updateColors("divemail", true);
});

document.querySelector("#divtel").addEventListener("input", (e) => {
  if (e.target.value.length >= 14) {
    updateColors("divtel");
    return;
  }
  updateColors("divtel", true);
});

document.querySelector("#divcpf").addEventListener("input", (e) => {
  if (e.target.value.length >= 14) {
    updateColors("divcpf");
    return;
  }
  updateColors("divcpf", true);
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

//validacao tell
const tellValidation = document.querySelector("#tel");

tellValidation.addEventListener("keyup", formatarTelefone);

function formatarTelefone(e) {
  let valor = e.target.value.replace(/\D/g, "");

  valor = valor.replace(/^(\d\d)(\d)/g, "($1)$2");

  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

  e.target.value = valor;
}


function store() {
  const nome = document.querySelector("#name");
  localStorage.setItem("nome", nome.value);
  const sobrenome = document.querySelector("#surname");
  localStorage.setItem("sobrenome", sobrenome.value);
  const senha = document.querySelector("#password");
  localStorage.setItem("senha", senha.value);
  const email = document.querySelector("#email");
  localStorage.setItem("email", email.value);
  const numero = document.querySelector("#tel");
  localStorage.setItem("numero", numero.value);
  const cpf = document.querySelector("#cpf");
  localStorage.setItem("cpf", cpf.value);

}

const ButtonSubmit = document.querySelector("#SubmitBttn")

ButtonSubmit.addEventListener("click", function(){
  store();
  window.location.href="/dashboard.html"
})