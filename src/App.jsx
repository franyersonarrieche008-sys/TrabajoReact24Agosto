/*
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/

// 24 de agosto del 2026
/*import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + (producto.precio * producto.stock),
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda Tecnológica</h1>

      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Total Productos</span>
          <span className="resumen-valor">{productos.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Disponibles</span>
          <span className="resumen-valor">{disponibles.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Valor del Inventario</span>
          <span className="resumen-valor">${valorInventario.toLocaleString()}</span>
        </div>
        
        {hayAgotados && (
          <div className="alerta-agotados">
            Atención: Hay productos agotados en el inventario.
          </div>
        )}
      </div>

      <h2>Catálogo Completo</h2>
      <section className="productos">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>

      <hr />

      <h2>Solo Productos Disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;
*/


/*
// 25 de agosto del 2026
import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos as productosIniciales } from "./data/productos";
import './App.css';
import FormularioProducto from "./components/FormularioProducto";

function App() {

  <FormularioProducto />

  const [productos, setProductos] =
    useState(productosIniciales);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const categoriasUnicas = ['Todas', ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
      
    const coincideCategoria = 
      categoria === 'Todas' || producto.categoria === categoria;
      
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
    setSoloDisponibles(false);
  };

  const valorInventario = productos.reduce(
    (total, p) => total + (p.precio * p.stock), 
    0
  );
  const hayAgotados = productos.some(p => p.stock === 0);

  return (
    <main className="contenedor">
      <h1>Catálogo Interactivo en React</h1>
*/

      {/* Panel informativo */}
      /* 
      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Total en Catálogo</span>
          <span className="resumen-valor">{productos.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Resultados Visibles</span>
          <span className="resumen-valor">{productosFiltrados.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Valor del Inventario</span>
          <span className="resumen-valor">${valorInventario.toLocaleString('es-CO')}</span>
        </div>

        {hayAgotados && (
          <div className="alerta-agotados">
            Atención: Hay productos sin stock.
          </div>
        )}
      </div>
*/
      {/* Sección de Controles y Filtros (Puntos 5, 8, 9, 10 y 12) */}
      /*

>>>>>>> 174147e (feat: crear formulario para productos)
      <section className="filtros-contenedor">
        <div className="grupo-filtro">
          <input
            type="text"
            className="input-busqueda"
            placeholder="Buscar producto por nombre..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />

          <select
            className="select-categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            {categoriasUnicas.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grupo-opciones">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(evento) => setSoloDisponibles(evento.target.checked)}
            />
            Mostrar únicamente disponibles
          </label>

          <button className="btn-limpiar" onClick={limpiarFiltros}>
            Limpiar Filtros
          </button>
        </div>
*/
        {/* Contador dinámico (Punto 10) */}
        /*

        <p className="contador-resultados">
          Productos encontrados: <strong>{productosFiltrados.length}</strong>
        </p>
      </section>
<<<<<<< HEAD
*/
      {/* Renderizado de la lista de productos filtrados (Puntos 6 y 7) */}
      /*

      <section className="productos">
        {productosFiltrados.length === 0 ? (
          <p className="sin-resultados">No se encontraron productos con los filtros aplicados.</p>
        ) : (
          productosFiltrados.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))
        )}
      </section>
    </main>
  );
}

export default App;
*/



// 31 de agosto del 2026 - Taller 3: De catálogo a gestor de inventario
/*
import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import FormularioProducto from './components/FormularioProducto';
import { productos as productosIniciales } from './data/productos';
import './App.css';

function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, stock: Math.max(0, producto.stock + cambio) };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const categoriasUnicas = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;
    return coincideNombre && coincideCategoria && coincideStock;
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
    setSoloDisponibles(false);
  };

  const productosAgotados = productos.filter((p) => p.stock === 0);
  const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0,
  );

  return (
    <main className="contenedor">
      <h1>Gestor de Inventario</h1>

      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Productos registrados</span>
          <span className="resumen-valor">{productos.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Productos agotados</span>
          <span className="resumen-valor resumen-valor-alerta">{productosAgotados.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Valor del inventario</span>
          <span className="resumen-valor">${valorInventario.toLocaleString('es-CO')}</span>
        </div>

        {productosAgotados.length > 0 && (
          <div className="alerta-agotados">
            Atención: hay {productosAgotados.length} producto(s) sin stock.
          </div>
        )}
      </div>

      <FormularioProducto onAgregar={agregarProducto} />

      <section className="filtros-contenedor">
        <div className="grupo-filtro">
          <input
            type="text"
            className="input-busqueda"
            placeholder="Buscar producto por nombre..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />

          <select
            className="select-categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            {categoriasUnicas.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grupo-opciones">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(evento) => setSoloDisponibles(evento.target.checked)}
            />
            Mostrar únicamente disponibles
          </label>

          <button className="btn-limpiar" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>

        <p className="contador-resultados">
          Productos encontrados: <strong>{productosFiltrados.length}</strong>
        </p>
      </section>

      <section className="productos">
        {productosFiltrados.length === 0 ? (
          <p className="sin-resultados">No se encontraron productos con los filtros aplicados.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              onModificarStock={modificarStock}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default App;
*/

// 1 de septiembre del 2026 - Taller 1 Sep: persistencia con localStorage,
// edición de productos, orden y mensajes de estado en la interfaz.
import { useState, useEffect } from 'react';
import ProductoCard from './components/ProductoCard';
import FormularioProducto from './components/FormularioProducto';
import { productos as productosIniciales } from './data/productos';
import './App.css';

const CLAVE_INVENTARIO = 'inventario';

function App() {
  // ------------------------------------------------------------------
  // MISIÓN 3. Inventario inicial: si ya hay algo guardado en
  // localStorage lo usamos; si no, arrancamos con productosIniciales.
  // ------------------------------------------------------------------
  const obtenerProductosIniciales = () => {
    const guardados = localStorage.getItem(CLAVE_INVENTARIO);

    if (guardados) {
      return JSON.parse(guardados);
    }

    return productosIniciales;
  };

  const [productos, setProductos] = useState(obtenerProductosIniciales);

  // Estados para los filtros (funcionalidad ya existente del catálogo)
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // MISIÓN 6. Criterio de ordenamiento seleccionado.
  const [orden, setOrden] = useState('ninguno');

  // MISIÓN 4. Producto que está siendo editado (null = modo agregar).
  const [productoEditando, setProductoEditando] = useState(null);

  // MISIÓN 7. Mensaje de estado visible en la interfaz (reemplaza a alert()).
  const [mensaje, setMensaje] = useState('');

  // Muestra un mensaje unos segundos y luego lo limpia solo.
  const mostrarMensaje = (texto) => {
    setMensaje(texto);
  };

  useEffect(() => {
    if (!mensaje) return;

    const temporizador = setTimeout(() => setMensaje(''), 3000);
    return () => clearTimeout(temporizador);
  }, [mensaje]);

  // ------------------------------------------------------------------
  // MISIÓN 2. Cada vez que "productos" cambia, lo guardamos en
  // localStorage convertido a texto con JSON.stringify().
  // ------------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem(CLAVE_INVENTARIO, JSON.stringify(productos));
  }, [productos]);

  // ------------------------------------------------------------------
  // AGREGAR PRODUCTO
  // ------------------------------------------------------------------
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    mostrarMensaje('Producto agregado correctamente.');
  };

  // ------------------------------------------------------------------
  // MISIÓN 5. ACTUALIZAR PRODUCTO (edición)
  // Usamos map() para devolver un arreglo del mismo tamaño, cambiando
  // solo el producto cuyo id coincide con el que se editó.
  // ------------------------------------------------------------------
  const actualizarProducto = (actualizado) => {
    const nuevaLista = productos.map((producto) =>
      producto.id === actualizado.id ? actualizado : producto,
    );

    setProductos(nuevaLista);
    setProductoEditando(null);
    mostrarMensaje('Producto actualizado correctamente.');
  };

  // ------------------------------------------------------------------
  // ELIMINAR PRODUCTO (con confirmación - Reto de autonomía)
  // ------------------------------------------------------------------
  const eliminarProducto = (id) => {
    const producto = productos.find((p) => p.id === id);
    const confirmar = window.confirm(`¿Seguro que quieres eliminar "${producto?.nombre}"?`);

    if (!confirmar) return;

    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);

    // Si el producto eliminado era el que estaba en edición, salimos del modo edición.
    if (productoEditando?.id === id) {
      setProductoEditando(null);
    }

    mostrarMensaje('Producto eliminado.');
  };

  // ------------------------------------------------------------------
  // MODIFICAR STOCK (entrada/salida de inventario)
  // ------------------------------------------------------------------
  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, stock: Math.max(0, producto.stock + cambio) };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  // MISIÓN 4. Botón "Editar": guarda el producto elegido para que el
  // formulario lo cargue.
  const iniciarEdicion = (producto) => {
    setProductoEditando(producto);
  };

  const cancelarEdicion = () => {
    setProductoEditando(null);
  };

  // Categorías únicas para el menú desplegable (se recalculan si cambia el inventario)
  const categoriasUnicas = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  // Filtrado combinado: nombre + categoría + solo disponibles
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;
    return coincideNombre && coincideCategoria && coincideStock;
  });

  // ------------------------------------------------------------------
  // MISIÓN 6. Ordenamiento. Se hace SIEMPRE sobre una copia
  // ([...productosFiltrados]) para no mutar el estado directamente.
  // ------------------------------------------------------------------
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    switch (orden) {
      case 'nombre-asc':
        return a.nombre.localeCompare(b.nombre);
      case 'precio-asc':
        return a.precio - b.precio;
      case 'precio-desc':
        return b.precio - a.precio;
      case 'stock-asc':
        return a.stock - b.stock;
      case 'stock-desc':
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
    setSoloDisponibles(false);
    setOrden('ninguno');
  };

  const restaurarInventario = () => {
  const confirmar = window.confirm(
    '¿Seguro que quieres restaurar el inventario original? Se perderán los cambios realizados.'
  );

  if (!confirmar) return;

  setProductos(productosIniciales);
  setProductoEditando(null);
  mostrarMensaje('Inventario restaurado correctamente.');
  };

  // ------------------------------------------------------------------
  // TABLERO DE INDICADORES
  // ------------------------------------------------------------------
  const productosAgotados = productos.filter((p) => p.stock === 0);
  const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0,
  );
  // Reto de autonomía: precio promedio del inventario.
  const precioPromedio = productos.length
    ? productos.reduce((total, p) => total + p.precio, 0) / productos.length
    : 0;

  return (
    <main className="contenedor">
      <h1>Gestor de Inventario</h1>

      {/* Mensaje de estado (Misión 7): reemplaza el uso de alert() */}
      {mensaje && <p className="mensaje-estado">{mensaje}</p>}

      {/* Tablero de indicadores dinámicos */}
      <div className="resumen-panel">
        <div className="resumen-item">
          <span className="resumen-label">Productos registrados</span>
          <span className="resumen-valor">{productos.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Productos agotados</span>
          <span className="resumen-valor resumen-valor-alerta">{productosAgotados.length}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Valor del inventario</span>
          <span className="resumen-valor">${valorInventario.toLocaleString('es-CO')}</span>
        </div>
        <div className="resumen-item">
          <span className="resumen-label">Precio promedio</span>
          <span className="resumen-valor">${precioPromedio.toLocaleString('es-CO', { maximumFractionDigits: 0 })}</span>
        </div>

        {productosAgotados.length > 0 && (
          <div className="alerta-agotados">
            Atención: hay {productosAgotados.length} producto(s) sin stock.
          </div>
        )}
      </div>

      {/* Formulario reutilizado para agregar y editar (Misión 5) */}
      <FormularioProducto
        onAgregar={agregarProducto}
        onActualizar={actualizarProducto}
        productoEditando={productoEditando}
        onCancelarEdicion={cancelarEdicion}
      />

      {/* Filtros y ordenamiento del catálogo */}
      <section className="filtros-contenedor">
        <div className="grupo-filtro">
          <input
            type="text"
            className="input-busqueda"
            placeholder="Buscar producto por nombre..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />

          <select
            className="select-categoria"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            {categoriasUnicas.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* MISIÓN 6. Selector de ordenamiento */}
          <select
            className="select-orden"
            value={orden}
            onChange={(evento) => setOrden(evento.target.value)}
          >
            <option value="ninguno">Sin ordenar</option>
            <option value="nombre-asc">Nombre A-Z</option>
            <option value="precio-asc">Precio menor a mayor</option>
            <option value="precio-desc">Precio mayor a menor</option>
            <option value="stock-asc">Stock menor a mayor</option>
            <option value="stock-desc">Stock mayor a menor</option>
          </select>
        </div>

        <div className="grupo-opciones">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(evento) => setSoloDisponibles(evento.target.checked)}
            /> Mostrar únicamente disponibles
          </label>

  <div className="botones-inventario">
    <button className="btn-limpiar" onClick={limpiarFiltros}>
      Limpiar filtros
    </button>

    <button
      className="btn-restaurar"
      onClick={restaurarInventario}
    >
      ↻ Restaurar inventario
    </button>
  </div>
</div>

        <p className="contador-resultados">
          Productos encontrados: <strong>{productosOrdenados.length}</strong>
        </p>
      </section>

      {/* Catálogo / inventario */}
      <section className="productos">
        {productosOrdenados.length === 0 ? (
          <p className="sin-resultados">No se encontraron productos con los filtros aplicados.</p>
        ) : (
          productosOrdenados.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              onModificarStock={modificarStock}
              onEditar={iniciarEdicion}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default App;