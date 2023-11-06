function cambiarColor(color) {
  const spinners = document.querySelectorAll('.spinner.spinner1');
spinners.forEach((spinner) => {
      spinner.classList.remove('color1', 'color2', 'color3', 'color4', 'color5'); // Agrega o quita clases según corresponda
    });
    // Agrega la clase de color correspondiente a los elementos .spinner.spinner1
    if (color === '#FFE500') {
      spinners.forEach((spinner) => {
        spinner.classList.add('color1');
      });
    } else if (color === 'red') {
      spinners.forEach((spinner) => {
        spinner.classList.add('color2');
      });
    } else if (color === 'blue') {
      spinners.forEach((spinner) => {
        spinner.classList.add('color3');
      });
    } else if (color === 'green') {
      spinners.forEach((spinner) => {
        spinner.classList.add('color4');
      });
    } else if (color === '#00ffdd') {
      spinners.forEach((spinner) => {
        spinner.classList.add('color5');
      });
    }
  
 // Cambiar el color del logo de las redes sociales
 const redesLogo = document.getElementById('redes-logo');
 redesLogo.style.color = color;
 redesLogo.style.boxShadow = color;
 const facebookLogo = document.getElementById('facebook-logo');
 facebookLogo.style.color = color;
 const linkedinLogo = document.getElementById('linkedin-logo');
 linkedinLogo.style.color = color;
 const githubLogo = document.getElementById('github-logo');
 githubLogo.style.color = color;
// Cambia el color de fondo y las sombras específicas para las redes sociales
const redesSociales = document.querySelector('.redes');
redesSociales.style.setProperty('--background-color', color);
redesSociales.style.setProperty('--box-shadow-color', color);
redesSociales.style.setProperty('--text-shadow-color', color);
const tituloEligeUnColor = document.querySelector('.titulo-elige-un-color');
tituloEligeUnColor.style.setProperty('--box-shadow-color', color);
document.documentElement.style.setProperty('--navbar-borde-elige-un-color-opcion', color);
}