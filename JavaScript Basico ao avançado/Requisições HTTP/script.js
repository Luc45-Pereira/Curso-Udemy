// https://sujeitoprogramador.com/rn-api/?api=posts
var list = document.querySelector('#app');

function nutriApp(){
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(r => r.json())
    .then(json => {
        posts = [...json];
        for(post of posts){
            var Element = document.createElement('li');
            var title = document.createTextNode(post.titulo);
            var image = document.createElement('img');
            var br = document.createElement('br');
            image.setAttribute('src', post.capa);
            image.style = "width: 200px; heigth: 200px;"

            
            Element.appendChild(title);
            Element.appendChild(br);
            Element.appendChild(image);
            list.appendChild(Element);
        }

    })

    

}

nutriApp();