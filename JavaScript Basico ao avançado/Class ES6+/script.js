class Produto{
    constructor(){
        this.nome = '';
        this.code = '';
        this.preco = 0;
    }

    addProduto(name,codi,valor){
        if(name != ''){
            this.nome = name;
        }else{
            return alert('erro');
        }
        if(codi!= ''){
            this.code = codi;
        }else{
            return alert('erro');
        }
        if(valor != 0){
            this.preco = valor;
        }else{
            return alert('erro');
        }
        alert('Produto cadastrado com sucesso!!');
        console.log(`Nome Produto: ${this.nome} Codigo: ${this.codi} preço: ${this.preco}`);

    }


};

function cadprod(){
    Produto = new Produto;
    let nome = document.getElementById('nome').value;
    let codigo = document.getElementById('codi').value;
    let valor = document.getElementById('valor').value;

    Produto.addProduto(nome,codigo,valor);
}

const Produtos = [
    'Computador',
    'Telefone',
    'Mouse',
    'Teclado',
];
//map possui item e index
console.log(Produtos.map( (index) => {
        return index;
    }));
//find recebe item
let retira = Produtos.map((item, index) => {
    if(item == 'Computador'){
        Produtos.splice(index, 1);
    }
});

console.log(Produtos);

let busca = Produtos.find((item) => {
    if(item === 'Computador'){
        console.log('O item existe');
    }else{
        console.log('O não item existe');
    }
});

let dois = Produtos.map((item, index) => {
    if(index === 1){
        Produtos.splice(index, 1);
    }
});

console.log(Produtos);


const A = [1,3,5,7,0,9];
//sort ordena os itens
let B = A.sort();
console.log(B);
A.shift();
console.log(A);
//reverse inverte a ordem
let C = A.reverse();
console.log(C);

// Dia de hoje
let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');
console.log(dia+mes+ano)