const formulario = document.getElementById('formulario-usuarios');
const inputs = document.querySelectorAll('#formulario-usuarios input');

const expresiones = {
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,  
}

const campos = {
    usuario : false,
    nombre : false,
    correo : false,
}

validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`${campo}`).classList
    }
}

const validarABM= (e)=>{
    switch(e.target.name){
        case "usuario":
            validarCampo
        break;
    }
}

function createNavBar() {
    // Crear elementos
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg bg-body-tertiary NavBarMenu';
  
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid NavMenu';
  
    const anchorLogo = document.createElement('a');
    anchorLogo.className = 'navbar-brand logoPrincipal';
    anchorLogo.href = 'menuAdmin.html';
  
    const imgLogo = document.createElement('img');
    imgLogo.src = 'https://cdn-icons-png.flaticon.com/512/2307/2307827.png';
    imgLogo.alt = 'Logo';
    imgLogo.width = 30;
    imgLogo.height = 24;
    imgLogo.className = 'd-inline-block align-text-top';
  
    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');
  
    const spanButton = document.createElement('span');
    spanButton.className = 'navbar-toggler-icon';
  
    const divCollapse = document.createElement('div');
    divCollapse.className = 'collapse navbar-collapse';
    divCollapse.id = 'navbarNav';
  
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav LinkABM';
  
    const li1 = document.createElement('li');
    li1.className = 'nav-item';
  
    const a1 = document.createElement('a');
    a1.className = 'nav-link active';
    a1.setAttribute('aria-current', 'page');
    a1.href = 'ambUsurios.html';
    a1.target = '_blank';
    a1.textContent = 'ABM Usuario';
  
    const li2 = document.createElement('li');
    li2.className = 'nav-item NavbarActividades';
  
    const a2 = document.createElement('a');
    a2.className = 'nav-link';
    a2.href = 'actividadesMenu.html';
    a2.textContent = 'Actividades';
  
    const li3 = document.createElement('li');
    li3.className = 'nav-item';
  
    const a3 = document.createElement('a');
    a3.className = 'nav-link';
    a3.href = 'menuPagos.html';
    a3.textContent = 'Pagos';
  
    const divIconoExit = document.createElement('div');
    divIconoExit.className = 'iconoExit d-flex';
  
    const a4 = document.createElement('a');
    a4.href = 'index.html';
  
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.classList.add('bi', 'bi-box-arrow-left');
    svg.setAttribute('viewBox', '0 0 16 16');
  
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('fill-rule', 'evenodd');
    path1.setAttribute('d', 'M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z');
  
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('fill-rule', 'evenodd');
    path2.setAttribute('d', 'M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z');
  
    // Estructurar los elementos
    anchorLogo.appendChild(imgLogo);
    button.appendChild(spanButton);
  
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
  
    svg.appendChild(path1);
    svg.appendChild(path2);
    a4.appendChild(svg);
    divIconoExit.appendChild(a4);
  
    divCollapse.appendChild(ul);
    divCollapse.appendChild(divIconoExit);
  
    containerDiv.appendChild(anchorLogo);
    containerDiv.appendChild(button);
    containerDiv.appendChild(divCollapse);
  
    nav.appendChild(containerDiv);
  
    // Añadir el navbar al body u otro elemento padre deseado
    document.body.appendChild(nav);
  }
  

