const enlaces = document.querySelectorAll('.nav-link');

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();

        const destino = this.getAttribute('href');
        if (destino.length > 1) {
            const seccionDestino = document.querySelector(destino);
            if (seccionDestino) {
                seccionDestino.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

const wrappers = document.querySelectorAll('.card-img-wrapper');

wrappers.forEach(function (wrapper) {
    const original = wrapper.querySelector('.img-original');
    const hover = wrapper.querySelector('.img-hover');

    wrapper.addEventListener('mouseover', function () {
        original.style.opacity = '0';
        hover.style.opacity = '1';
    });

    wrapper.addEventListener('mouseout', function () {
        original.style.opacity = '1';
        hover.style.opacity = '0';
    });
});

fetch('juegos.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const juegosContainer = document.getElementById('juegos-container');

        data.forEach(function (juego) {
            const columna = document.createElement('div');
            columna.className = 'col-12 col-md-6 col-lg-3';

            columna.innerHTML = `
                <div class="card h-100">
                    <div class="card-img-wrapper">
                        <img src="${juego.imagen}" class="card-img-top img-original" alt="${juego.nombre}">
                        <img src="${juego.imagenHover}" class="card-img-top img-hover" alt="${juego.nombre} screenshot">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${juego.nombre}</h5>
                        <p class="card-text">${juego.descripcion}</p>
                    </div>
                </div>
            `;

            juegosContainer.appendChild(columna);
        }); // <- cierra el forEach

    }) // <- cierra el segundo .then, AQUÍ debe estar el forEach, adentro
    .catch(function (error) {
        console.error('Error al cargar el archivo JSON:', error);
    });

    const formulario = document.getElementById('formularioContacto');
    const confirmacionMensaje = document.getElementById('confirmacionMensaje');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        confirmacionMensaje.textContent = 'Mensaje enviado con éxito.';
        confirmacionMensaje.classList.remove('d-none');
        formulario.reset();
    }); 