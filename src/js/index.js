const botaoAtualizarConselho = document.getElementById("atualizar-conselho");
const numeroDoConselho = document.querySelector(".titulo-do-cartao");
const conselho = document.querySelector(".frase");

async function pedirConselho() {
    try {
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        };

        const json = await resposta.json();
        const adviceId = `ADVICE #${json.slip.id}`;
        const advice = `"${json.slip.advice}"`;

        numeroDoConselho.innerHTML = adviceId;
        conselho.innerText = advice;
    } catch (erro) {
        console.log("Erro ao tentar buscar as informações da API", erro);
    };
};

botaoAtualizarConselho.addEventListener("click", pedirConselho);

pedirConselho();