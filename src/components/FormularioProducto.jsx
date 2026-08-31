<<<<<<< HEAD
// Formulario para agregar nuevos productos al inventario (Taller 3)
import { useState } from 'react';

// onAgregar llega desde App.jsx por props: es la función que realmente
// actualiza el estado del inventario. Este componente solo se encarga
// de capturar y validar lo que escribe el usuario.
function FormularioProducto({ onAgregar }) {
  // Estado propio del formulario. Guarda lo que el usuario va escribiendo.
  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
  });

  // Guarda el mensaje de error a mostrar (si existe)
  const [error, setError] = useState('');

  // Se ejecuta en cada onChange de los inputs.
  // Usa spread (...formulario) para copiar los valores actuales
  // y solo reemplaza la propiedad del input que cambió,
  // gracias a la propiedad calculada [evento.target.name].
  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
    setError('');
  };

  // Se ejecuta al enviar el formulario (onSubmit)
  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validación mínima exigida por el taller
    if (
      formulario.nombre.trim() === '' ||
      formulario.categoria.trim() === '' ||
      Number(formulario.precio) <= 0 ||
      Number(formulario.stock) < 0
    ) {
      setError('Revisa los datos: nombre y categoría no pueden estar vacíos, el precio debe ser mayor a 0 y el stock no puede ser negativo.');
      return;
    }

    const nuevoProducto = {
      id: Date.now(), // id único simple basado en la hora actual
      nombre: formulario.nombre.trim(),
      categoria: formulario.categoria.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      // Imagen genérica para productos agregados manualmente
      imagen: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80',
    };

    onAgregar(nuevoProducto); // avisa a App.jsx que agregue el producto

    // Limpia el formulario para el siguiente registro
    setFormulario({ nombre: '', categoria: '', precio: '', stock: '' });
    setError('');
  };

  return (
    <section className="formulario-panel">
      <h2>Agregar producto</h2>
      <form className="formulario-producto" onSubmit={manejarEnvio}>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ej: Webcam HD"
            value={formulario.nombre}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="categoria">Categoría</label>
          <input
            id="categoria"
            type="text"
            name="categoria"
            placeholder="Ej: Periféricos"
            value={formulario.categoria}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            type="number"
            name="precio"
            placeholder="Ej: 50000"
            value={formulario.precio}
            onChange={manejarCambio}
          />
        </div>

        <div className="campo-formulario">
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            type="number"
            name="stock"
            placeholder="Ej: 10"
            value={formulario.stock}
            onChange={manejarCambio}
          />
        </div>

        <button type="submit" className="btn-agregar">
          Agregar producto
        </button>
      </form>

      {error && <p className="mensaje-error">{error}</p>}
    </section>
  );
}

=======
import { useState } from "react";
function FormularioProducto() {
const [formulario, setFormulario] = useState({
nombre: "",
categoria: "",
precio: "",
stock: ""
});
return (
<form>
<h2>Agregar producto</h2>
<input
type="text"
name="nombre"
placeholder="Nombre"
/>
<input
type="text"
name="categoria"
placeholder="Categoría"
/>
<input
type="number"
name="precio"
placeholder="Precio"
/>
<input
type="number"
name="stock"
placeholder="Stock"
/>
<button type="submit">
Agregar producto
</button>
</form>
);
}
>>>>>>> 174147e (feat: crear formulario para productos)
export default FormularioProducto;