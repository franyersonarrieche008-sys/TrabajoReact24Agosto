// 24 de agosto del 2026
/*function ProductoCard({ producto }) {
  const estaDisponible = producto.stock > 0;
  const estadoTexto = estaDisponible ? 'Disponible' : 'Agotado';
  const estadoClase = estaDisponible ? 'badge disponible' : 'badge agotado';

  return (
    <article className="producto-card">
      <div className="imagen-contenedor">
        <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
        <span className={estadoClase}>{estadoTexto}</span>
      </div>
      
      <div className="producto-info">
        <span className="categoria-tag">{producto.categoria}</span>
        <h3 className="producto-titulo">{producto.nombre}</h3>
        
        <div className="producto-footer">
          <p className="producto-precio">${producto.precio.toLocaleString()}</p>
          <p className="producto-stock">Stock: {producto.stock}</p>
        </div>
        
        <button className="btn-comprar" disabled={!estaDisponible}>
          {estaDisponible ? 'Comprar' : 'Sin Stock'}
        </button>
      </div>
    </article>
  );
}

export default ProductoCard;*/


// 25 de agosto del 2026
/*
function ProductoCard({ producto }) {
  // Desestructuración de las propiedades del producto (Punto 2)
  const { nombre, precio, categoria, stock, imagen } = producto;

  // Estado del producto para visualización
  const estaDisponible = stock > 0;
  const estadoTexto = estaDisponible ? 'Disponible' : 'Agotado';
  const estadoClase = estaDisponible ? 'badge disponible' : 'badge agotado';

  // Función interna para dar formato de moneda en pesos colombianos (Punto 11)
  const formatearPrecio = (valor) => valor.toLocaleString('es-CO');

  // Evento onClick (Punto 3)
  const mostrarProducto = () => {
    alert(`Seleccionaste: ${nombre}`);
  };

  return (
    <article className="producto-card">
      <div className="imagen-contenedor">
        <img src={imagen} alt={nombre} className="producto-imagen" />
        <span className={estadoClase}>{estadoTexto}</span>
      </div>

      <div className="producto-info">
        <span className="categoria-tag">{categoria}</span>
        <h3 className="producto-titulo">{nombre}</h3>

        <div className="producto-footer">
          <p className="producto-precio">${formatearPrecio(precio)}</p>
          <p className="producto-stock">Stock: {stock}</p>
        </div>
*/
        {/* Botón inteligente con onClick y disabled (Puntos 3 y 4) */}
        /*<button
          className="btn-comprar"
          onClick={mostrarProducto}
          disabled={stock === 0}
        >
          {stock > 0 ? 'Ver producto' : 'Agotado'}
        </button>
      </div>
    </article>
  );
}

export default ProductoCard;*/


// 1 de septiembre del 2026 - Taller 1 Sep: botón Editar e indicador de stock bajo
function ProductoCard({ producto, onEliminar, onModificarStock, onEditar }) {
  // Desestructuración de las propiedades del producto
  const { id, nombre, precio, categoria, stock, imagen } = producto;

  const estaDisponible = stock > 0;
  const estadoTexto = estaDisponible ? 'Disponible' : 'Agotado';
  const estadoClase = estaDisponible ? 'badge disponible' : 'badge agotado';

  // Reto de autonomía: indicador de stock bajo (1 o 2 unidades).
  const stockBajo = stock > 0 && stock <= 2;

  // Formato de moneda en pesos colombianos
  const formatearPrecio = (valor) => valor.toLocaleString('es-CO');

  const mostrarProducto = () => {
    alert(`Seleccionaste: ${nombre}`);
  };

  return (
    <article className="producto-card">
      <div className="imagen-contenedor">
        <img src={imagen} alt={nombre} className="producto-imagen" />
        <span className={estadoClase}>{estadoTexto}</span>
      </div>

      <div className="producto-info">
        <span className="categoria-tag">{categoria}</span>
        <h3 className="producto-titulo">{nombre}</h3>

        <div className="producto-footer">
          <p className="producto-precio">${formatearPrecio(precio)}</p>
          <p className="producto-stock">Stock: {stock}</p>
        </div>

        {stockBajo && <p className="aviso-stock-bajo">⚠ Stock bajo</p>}

        {/* Control de stock: onModificarStock viene por props desde App.jsx.
            El botón "-" envía -1 y el botón "+" envía +1. App.jsx se
            encarga de que el stock nunca baje de 0 (Math.max). */}
        <div className="control-stock">
          <button
            type="button"
            className="btn-stock"
            onClick={() => onModificarStock(id, -1)}
            disabled={stock === 0}
            aria-label="Disminuir stock"
          >
            −
          </button>
          <span className="control-stock-valor">Stock: {stock}</span>
          <button
            type="button"
            className="btn-stock"
            onClick={() => onModificarStock(id, 1)}
            aria-label="Aumentar stock"
          >
            +
          </button>
        </div>

        <button
          className="btn-comprar"
          onClick={mostrarProducto}
          disabled={stock === 0}
        >
          {stock > 0 ? 'Ver producto' : 'Agotado'}
        </button>

        <div className="acciones-card">
          {/* MISIÓN 4: envía el producto completo al padre, que lo guarda
              en productoEditando para que el formulario lo cargue */}
          <button
            type="button"
            className="btn-editar"
            onClick={() => onEditar(producto)}
          >
            Editar
          </button>

          {/* onClick envía el id al padre; App.jsx usa filter() para
              quitar ese producto del inventario (ver comentario en App.jsx) */}
          <button
            type="button"
            className="btn-eliminar"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductoCard;