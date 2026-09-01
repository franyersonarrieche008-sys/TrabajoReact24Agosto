// Formulario para agregar y editar productos del inventario (Taller 1 Sep)
import { useState, useEffect } from 'react';

// onAgregar y onActualizar llegan desde App.jsx por props: son las
// funciones que realmente actualizan el estado del inventario.
// productoEditando (o null) le dice a este componente si debe mostrarse
// en modo "Agregar" o en modo "Editar". Este componente solo se encarga
// de capturar y validar lo que escribe el usuario.
function FormularioProducto({ onAgregar, onActualizar, productoEditando, onCancelarEdicion }) {
  // Estado propio del formulario. Guarda lo que el usuario va escribiendo.
  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
  });

  // Guarda el mensaje de error a mostrar (si existe)
  const [error, setError] = useState('');

  // MISIÓN 5, paso 2: cuando llega un producto en edición, copiamos sus
  // valores al formulario. Este efecto reacciona cada vez que
  // productoEditando cambia (por ejemplo, al presionar "Editar" en otra
  // tarjeta).
  useEffect(() => {
    if (productoEditando) {
      setFormulario({
        nombre: productoEditando.nombre,
        categoria: productoEditando.categoria,
        precio: productoEditando.precio,
        stock: productoEditando.stock,
      });
      setError('');
    }
  }, [productoEditando]);

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

  // Se ejecuta al enviar el formulario (onSubmit).
  // MISIÓN 5, paso 3: si hay un producto en edición, llamamos a
  // onActualizar; si no, llamamos a onAgregar (comportamiento original).
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

    if (productoEditando) {
      // Modo edición: conservamos el id y la imagen originales.
      const productoActualizado = {
        ...productoEditando,
        nombre: formulario.nombre.trim(),
        categoria: formulario.categoria.trim(),
        precio: Number(formulario.precio),
        stock: Number(formulario.stock),
      };
      onActualizar(productoActualizado);
    } else {
      // Modo agregar (comportamiento original)
      const nuevoProducto = {
        id: Date.now(), // id único simple basado en la hora actual
        nombre: formulario.nombre.trim(),
        categoria: formulario.categoria.trim(),
        precio: Number(formulario.precio),
        stock: Number(formulario.stock),
        // Imagen genérica para productos agregados manualmente
        imagen: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&q=80',
      };
      onAgregar(nuevoProducto);
    }

    // Limpia el formulario y vuelve a modo "Agregar" para el siguiente registro
    setFormulario({ nombre: '', categoria: '', precio: '', stock: '' });
    setError('');
  };

  return (
    <section className="formulario-panel">
      {/* MISIÓN 5, paso 1: el título cambia según el modo */}
      <h2>{productoEditando ? 'Editar producto' : 'Agregar producto'}</h2>
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

        <div className="acciones-formulario">
          <button type="submit" className="btn-agregar">
            {productoEditando ? 'Guardar cambios' : 'Agregar producto'}
          </button>

          {productoEditando && (
            <button
              type="button"
              className="btn-cancelar"
              onClick={() => {
                onCancelarEdicion();
                setFormulario({ nombre: '', categoria: '', precio: '', stock: '' });
                setError('');
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {error && <p className="mensaje-error">{error}</p>}
    </section>
  );
}

export default FormularioProducto;