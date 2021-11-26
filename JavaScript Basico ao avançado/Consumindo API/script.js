// https://api.github.com/repos/
var div = document.querySelector('#repos');
var listElement = document.querySelector('#repos ul');

var repositorios = JSON.parse(localStorage.getItem('lista_repositorios')) || [];;
renderRepos();
buscaRepos = async () => {
    const input = document.querySelector('#input');

    if (input.value === '') {
        alert('Insira um nome abaixo!');
        return;
    }

    const hasRepo = repositorios.find(repo => repo.full_name === input.value);

    if (hasRepo) {
        alert('Já está na lista!!');
    }

    const response = await fetch(`https://api.github.com/repos/${input.value}`)
        .then(res => res.json())
        .then(json => {
            repositorios.push(json);
            input.value = '';

            renderRepos();
        })

}

function renderRepos(){
    listElement.innerHTML = '';
    for( repo of repositorios){
        let repoElement = document.createElement('li');
        repoElement.setAttribute("style", "text-decoration: none; list-style: none;");

        let avatar = document.createElement('img');
        avatar.src = repo.owner.avatar_url;
        avatar.setAttribute("style", "width: 50px; height: 50px; border-radius: 12px;");

        let link = document.createElement('button');
        link.textContent = 'Excluir';

        let posicao = repositorios.indexOf(repo);

        let Br = document.createElement('br');
        let Br1 = document.createElement('br');

        let Url = document.createElement('button');
        Url.setAttribute("href", repo.html_url);
        Url.textContent = 'Acessar repositório';

        link.setAttribute('onclick', 'deletarrepo('+posicao+')');

        let name = document.createTextNode(repo.full_name);

        repoElement.appendChild(avatar);
        repoElement.appendChild(name);
        repoElement.appendChild(link);
        repoElement.appendChild(Br);
        repoElement.appendChild(Url);
        repoElement.appendChild(Br1);
        listElement.appendChild(repoElement);

        salvarDados();

    }
}

function deletarrepo(posicao){
    repositorios.splice(posicao,1);
    salvarDados();
    renderRepos();
}

function salvarDados(){
    localStorage.setItem('lista_repositorios', JSON.stringify(repositorios));
}