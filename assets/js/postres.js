document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      const productContainer = this.closest('.image-with-text');
      const productName = productContainer.querySelector('p').textContent;
  
      // Crear un nuevo elemento div para representar la compra
      const newPurchase = document.createElement('div');
      newPurchase.classList.add('purchase');
      
      // Crear contenido HTML para la compra
      newPurchase.innerHTML = `
        <p>${productName}</p>
      `;
      
      // Agregar la nueva compra al div con clase 'card-body'
      const cardBody = document.querySelector('.card-bodyy');
      cardBody.appendChild(newPurchase);
    });
  });
  

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      const productContainer = this.closest('.image-with-text');
      const productPrice = productContainer.querySelector('.card-text').textContent;
  
      // Crear un nuevo elemento div para representar la compra
      const newPurchase = document.createElement('div');
      newPurchase.classList.add('purchase');
      
      // Crear contenido HTML para la compra
      newPurchase.innerHTML = `
        <p>${productPrice}</p>
      `;
      
      // Agregar la nueva compra al div con clase 'card-body'
      const cardBody = document.querySelector('.card-precio');
      cardBody.appendChild(newPurchase);
    });
  });
  

  // agregando summaaa

  
//HORA

// Obtiene la fecha  y hora actual
var fechaHoraActual = new Date();

// Obtiene la parte de la hora en formato HH:MM
var horaActual = fechaHoraActual.getHours() + ':' + fechaHoraActual.getMinutes();

// Establece la hora actual en el campo de entrada
document.getElementById('horaActual').value = horaActual;

//DATOS DEL CLIENTE

const guardarBtn = document.getElementById('guardarBtn');

guardarBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const nombres = document.querySelector('.input-nombres').value;
    const apellidos = document.querySelector('.input-apellidos').value;
    const dni = document.querySelector('.input-dni').value;
    const hora = document.querySelector('.input-hora').value;
    const libros = titulosLibros.trim().split("\n");

    // Verificar que los campos obligatorios estén llenos
    if (nombres.trim() === '' || apellidos.trim() === '' || dni.trim() === '' || hora.trim() === '' || libros[0].trim() === '') {
        alert('Por favor, llene todos los campos obligatorios.');
        return; // Evita que el código siguiente se ejecute si hay campos vacíos
    }

    // Si todos los campos están llenos, redirige a la otra página con los datos como parámetros en la URL
    window.location.href = `registro.html?nombres=${nombres}&apellidos=${apellidos}&dni=${dni}&hora=${hora}&libros=${libros}`;
});