const buttons = document.querySelectorAll('#op1, #op2, #menu, #menux')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

// activar desactivar menu
const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}
buttons.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(menu, 'active')
		toggleElement(body, 'no_scroll')
	})
})

// activar desactivar el scroll de la info extra
const eyeoo = document.querySelectorAll('.fa-eye, #info-x')
eyeoo.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(body, 'no_scroll')
	})
})

// accion a los eyes
const infoone = document.querySelector('#info-one')
const eyeone = document.querySelectorAll('#eye-one, .exit-one')
eyeone.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infoone, 'active')
	})
})

const infotwo = document.querySelector('#info-two')
const eyetwo = document.querySelectorAll('#eye-two, .exit-two')
eyetwo.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infotwo, 'active')
	})
})

const infothree = document.querySelector('#info-three')
const eyethree = document.querySelectorAll('#eye-three, .exit-three')
eyethree.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infothree, 'active')
	})
})

const infofour = document.querySelector('#info-four')
const eyefour = document.querySelectorAll('#eye-four, .exit-four')
eyefour.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infofour, 'active')
	})
})

const infofive = document.querySelector('#info-five')
const eyefive = document.querySelectorAll('#eye-five, .exit-five')
eyefive.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infofive, 'active')
	})
})

const infosix = document.querySelector('#info-six')
const eyesix = document.querySelectorAll('#eye-six, .exit-six')
eyesix.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infosix, 'active')
	})
})

const infoseven = document.querySelector('#info-seven')
const eyeseven = document.querySelectorAll('#eye-seven, .exit-seven')
eyeseven.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infoseven, 'active')
	})
})

const infoeight = document.querySelector('#info-eight')
const eyeeight = document.querySelectorAll('#eye-eight, .exit-eight')
eyeeight.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infoeight, 'active')
	})
})

const infonine = document.querySelector('#info-nine')
const eyenine = document.querySelectorAll('#eye-nine, .exit-nine')
eyenine.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infonine, 'active')
	})
})

const infoten = document.querySelector('#info-ten')
const eyeten = document.querySelectorAll('#eye-ten, .exit-ten')
eyeten.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infoten, 'active')
	})
})

const infoeleven = document.querySelector('#info-eleven')
const eyeeleven = document.querySelectorAll('#eye-eleven, .exit-eleven')
eyeeleven.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(infoeleven, 'active')
	})
})

// agregar accion a proyecto 12


const rigth = document.querySelectorAll('.arrow-rigth');
rigth.forEach(function(col){
    col.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-arrow-right" id="rigth"></i>');
});

const left = document.querySelectorAll('.arrow-left');
left.forEach(function(col){
    col.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-arrow-left" id="left"></i>');
});

// boton light dark
var animateButton = function(e) {
	e.preventDefault;
	//reset animation
	e.target.classList.remove('animate');
	e.target.classList.add('animate');
	setTimeout(function(){
	  e.target.classList.remove('animate');
	},800);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  
  const lightTheme = {
	'--color-fondo1': 'linear-gradient(180deg, #24cfd4 0%, #c22ce7 100%)',
    '--color-fondo2': 'linear-gradient(180deg, #c22ce7 0%, #24cfd4 100%)',
    '--color-light-blue': '#00B4D8',
    '--color-button': '#d86004',
    '--color-gray': '#C4C4C4',
    '--color-wite': '#ffffff',
    '--perfil1': '#a20bcf',
    '--perfil2': 'rgb(63, 91, 249)',
	'--color-info': '#ffffff',
    '--color-icon':'#000000',
	'--color-aro': '#6874e5',
    '--color-sombra': 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.50))',
  }
  const darkTheme = {
    '--color-fondo1': 'linear-gradient(180deg, #234fad 0%, #610445 100%)',
    '--color-fondo2': 'linear-gradient(180deg, #610445 0%, #234fad 100%)',
    '--color-light-blue': '#0e00d8',
	'--color-button': '#10ec98',
    '--color-gray': '#ffffff',
    '--color-wite': '#ffffff',
    '--perfil1': '#2ed9f0',
    '--perfil2': '#0cd105',
    '--color-info': '#817e7e',
    '--color-icon': '#ffffff',
	'--color-aro': '#68d9e5',
    '--color-sombra': 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.50))',
  }
  
  const $state = document.getElementById('aa')
  const $textState = document.querySelector('.bubbly-button')
  
  // // agregar el texto
  let darkMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  $textState.textContent = darkMode ? 'DAYMODE' : 'NIGHTMODE'
  
  const addTheme = (theme) => {
	  const styles = document.documentElement.style
	  const customStyles = Object.keys(theme)
	  for (const style of customStyles) {
		  styles.setProperty(style, theme[style])
	  }
  }
  
  const toggleTheme = () => {
	  darkMode = !darkMode
	  darkMode ? addTheme(darkTheme) : addTheme(lightTheme)
	  $textState.textContent = darkMode ? 'DAYMODE' : 'NIGHTMODE'
	  rotateImage()
  }
  $state.addEventListener('click', () => {
	  toggleTheme()
  })
  


window.onload = function () {
	Particles.init({
	  selector: ".background"
	});
  };
  var particles = Particles.init({
	selector: ".background",
	color: ["#faebd7", "#03dac6", "#ff0266"],
	maxParticles: 400,
	connectParticles: false,
	responsive: [
	  {
		breakpoint: 800,
		options: {
		  color: ["#faebd7", "#03dac6", "#ff0266"],
		  maxParticles: 100,
		  connectParticles: false
		}
	  }
	]
  });