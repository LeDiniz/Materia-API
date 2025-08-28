const esportes = []

function adicionar(){
    const nome = document.getElementById("Nome").value;
    const esporte = document.getElementById("Esporte").value;

    const adicionado = {Nome: nome, Esporte: esporte}
    esportes.push(adicionado)

    percorreArray(adicionado)
}

function percorreArray(x){
        document.getElementById("Nomes").innerHTML += `${x.Nome} <br>`;
        document.getElementById("Esportes").innerHTML += `${x.Esporte} <br>`;
}