const emailInput = document.querySelector('input[name="email"]');
const formulario = emailInput.form;

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = emailInput.value.trim();
  const aliasInput = document.querySelector('input[name="alias"]');
  const aliasValue = aliasInput.value.trim();
  const checkboxes = document.querySelectorAll('input[name="como_se_entero[]"]');
  const seleccionados = [...checkboxes].filter(checkbox => checkbox.checked).length;
  const errores = document.querySelectorAll('.alert-danger');
  errores.forEach(error => error.remove());

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    const error = document.createElement('div');
    error.classList.add('alert', 'alert-danger');
    error.innerHTML = 'Debe ingresar un correo electrónico válido.';
    formulario.insertBefore(error, formulario.querySelector('button[type="submit"]'));
  } else if (seleccionados < 2) {
    const error = document.createElement('div');
    error.classList.add('alert', 'alert-danger');
    error.innerHTML = 'Debe seleccionar al menos 2 opciones.';
    formulario.insertBefore(error, formulario.querySelector('button[type="submit"]'));
  } else if (!validarRutChileno(document.querySelector('input[name="rut"]').value)) {
    const error = document.createElement('div');
    error.classList.add('alert', 'alert-danger');
    error.innerHTML = 'Debe ingresar un RUT válido.';
    formulario.insertBefore(error, formulario.querySelector('button[type="submit"]'));
  } else if (aliasValue.length < 6 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(aliasValue)) {
    const error = document.createElement('div');
    error.classList.add('alert', 'alert-danger');
    error.innerHTML = 'Debe ingresar un alias válido (más de 5 caracteres y que contenga letras y números).';
    formulario.insertBefore(error, formulario.querySelector('button[type="submit"]'));
  }
  
  else {
    formulario.submit();
    alert("Su voto se ha realizado con éxito.");

  }
  
});

function validarRutChileno(rut) {
  // Elimina cualquier guión o punto del RUT
  rut = rut.replace(/[^\dKk]/g, '');

  // Verifica que el RUT tenga un mínimo de 8 dígitos
  if (rut.length < 8) {
    return false;
  }

  // Separa el cuerpo del dígito verificador
  const cuerpo = rut.slice(0, -1);
  const dv = rut.slice(-1).toUpperCase();

  // Calcula el DV a partir del cuerpo
  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += cuerpo.charAt(i) * multiplo;
    if (multiplo < 7) {
      multiplo += 1;
    } else {
      multiplo = 2;
    }
  }

  const dvCalculado = 11 - (suma % 11);
  const dvEsperado = dvCalculado === 11 ? '0' : dvCalculado === 10 ? 'K' : dvCalculado.toString();

  return dv === dvEsperado;
}
