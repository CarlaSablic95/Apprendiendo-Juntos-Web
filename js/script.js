window.onload = function() {
	// Variables
	const arrayImg = [
	'img/lengua/plantilla-abc/a.png',
	'img/lengua/plantilla-abc/b.png',
	'img/lengua/plantilla-abc/c.png',
	'img/lengua/plantilla-abc/ch.png',
	'img/lengua/plantilla-abc/d.png',
	'img/lengua/plantilla-abc/e.png',
	'img/lengua/plantilla-abc/f.png',
	'img/lengua/plantilla-abc/g.png',
	'img/lengua/plantilla-abc/h.png',
	'img/lengua/plantilla-abc/i.png',
	'img/lengua/plantilla-abc/j.png',
	'img/lengua/plantilla-abc/k.png',
	'img/lengua/plantilla-abc/l.png',
	'img/lengua/plantilla-abc/ll.png',
	'img/lengua/plantilla-abc/m.png',
	'img/lengua/plantilla-abc/n.png',
	'img/lengua/plantilla-abc/ñ.png',
	'img/lengua/plantilla-abc/o.png',
	'img/lengua/plantilla-abc/p.png',
	'img/lengua/plantilla-abc/q.png',
	'img/lengua/plantilla-abc/r.png',
	'img/lengua/plantilla-abc/s.png',
	'img/lengua/plantilla-abc/t.png',
	'img/lengua/plantilla-abc/u.png',
	'img/lengua/plantilla-abc/v.png',
	'img/lengua/plantilla-abc/w.png',
	'img/lengua/plantilla-abc/x.png',
	'img/lengua/plantilla-abc/y.png',
	'img/lengua/plantilla-abc/z.png',

	];

	const milesimas = 1000;

	let posicionActual = 0;

	let btnAtras = document.querySelector('#atras');

	let btnAvanzar = document.querySelector('#avanzar');

	let imagen = document.querySelector('#imagen');

// Evento

	btnAvanzar.addEventListener('click', sgteFoto);


	// Función que cambia la foto en siguiente posición

	
	function sgteFoto() {
		if(posicionActual >= arrayImg.length - 1) { // 29 - 1
			 posicionActual = 0;
		} else {
	 		posicionActual++;
	 		console.info(posicionActual++);
		}
		
		renderizarImg();

	}

// Evento

	btnAtras.addEventListener('click', fotoAnterior);


// Función que cambia la foto en la posición anterior

	function fotoAnterior() {
		if(posicionActual <= 0) {
			posicionActual = arrayImg.length - 1
		} else {
	 		posicionActual--;
	 		console.info(posicionActual--);
		}
		renderizarImg();
	}

// Función que actualiza la imagen, dependiendo de posicionActual

	function renderizarImg(){
		imagen.style.backgroundImage = `url(${arrayImg[posicionActual]})`;
	}

	// // Iniciar

	renderizarImg();










}