import("angularAppClients/Component")
  .then((module) => {
    // Aquí es donde se va a insertar el componente en el DOM.
    // Esto dependerá de cómo expongas el componente en Angular.
  })
  .catch((err) => {
    console.log("Error al cargar el componente angularAppClients:", err);
  });

import("angularAppUsers/Component")
  .then((module) => {
    // Aquí es donde se va a insertar el otro componente en el DOM.
    // Esto también dependerá de cómo expongas el componente en Angular.
  })
  .catch((err) => {
    console.log("Error al cargar el componente angularAppUsers:", err);
  });
