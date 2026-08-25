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

        {/* Botón inteligente con onClick y disabled (Puntos 3 y 4) */}
        <button
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

export default ProductoCard;