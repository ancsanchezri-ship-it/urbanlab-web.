// --- Urban+Lab Scripts ---

// Activar íconos Lucide
if (window.lucide) {
  lucide.createIcons();
}

// Función para enviar mensaje del formulario de contacto
function sendEmail(e) {
  e.preventDefault();

  const form = e.target;
  const name = form[0].value.trim();
  const email = form[1].value.trim();
  const message = form[2].value.trim();

  if (!name || !email || !message) {
    alert('Por favor completa todos los campos antes de enviar.');
    return;
  }

  const subject = encodeURIComponent(`Contacto desde Urban+Lab: ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
  );

  // Enviar a tu correo personal
  window.location.href = `mailto:a.sanchez@estudio92arq.com?subject=${subject}&body=${body}`;

  form.reset();
  alert('Tu mensaje se ha preparado. Confirma el envío en tu aplicación de correo.');
}
