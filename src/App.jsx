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
import { productos } from './data/productos';
import './App.css';

function App() {
  // 1. Estados para los filtros (Puntos 5, 8 y 9)
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // 2. Extraer categorías únicas para el menú desplegable
  const categoriasUnicas = ['Todas', ...new Set(productos.map(p => p.categoria))];

  // 3. Lógica de filtrado combinada (Puntos 6, 8 y 9)
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
      
    const coincideCategoria = 
      categoria === 'Todas' || producto.categoria === categoria;
      
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  // Reto Libre - Opción F: Limpiar filtros (Punto 12)
  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
    setSoloDisponibles(false);
  };

  // Cálculo para el resumen inicial
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
import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import FormularioProducto from './components/FormularioProducto';
import { productos as productosIniciales } from './data/productos';
import './App.css';

function App() {
  // ------------------------------------------------------------------
  // 1. ESTADO PRINCIPAL DEL INVENTARIO (Taller 3)
  // productosIniciales solo se usa para arrancar la app. A partir de
  // aquí todo el inventario vive en el estado "productos", y se
  // actualiza siempre con setProductos (nunca modificando el arreglo
  // original con push, splice, etc.).
  // ------------------------------------------------------------------
  const [productos, setProductos] = useState(productosIniciales);

  // Estados para los filtros (funcionalidad ya existente del catálogo)
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  // ------------------------------------------------------------------
  // 2. AGREGAR PRODUCTO
  // Recibe el producto ya validado desde FormularioProducto y lo suma
  // al inventario usando spread, para crear un arreglo NUEVO en lugar
  // de modificar el anterior.
  // ------------------------------------------------------------------
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  // ------------------------------------------------------------------
  // 3. ELIMINAR PRODUCTO
  // Usamos filter() porque filter() devuelve un arreglo NUEVO con todos
  // los productos que SÍ cumplen la condición (id !== id a eliminar).
  // find() en cambio solo devuelve un único elemento, no serviría para
  // reconstruir la lista completa sin el producto eliminado.
  // ------------------------------------------------------------------
  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
  };

  // ------------------------------------------------------------------
  // 4. MODIFICAR STOCK (entrada/salida de inventario)
  // Usamos map() porque necesitamos devolver un arreglo del mismo
  // tamaño, cambiando SOLO el producto cuyo id coincide.
  // Math.max(0, ...) evita que el stock quede en negativo.
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

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
    setSoloDisponibles(false);
  };

  // ------------------------------------------------------------------
  // 5. TABLERO DE INDICADORES (Taller 3, Misión 8)
  // Los tres se recalculan en cada render, así que cambian solos
  // cuando el estado "productos" cambia (agregar, eliminar, stock).
  // ------------------------------------------------------------------
  const productosAgotados = productos.filter((p) => p.stock === 0);
  const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0,
  );

  return (
    <main className="contenedor">
      <h1>Gestor de Inventario</h1>

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

        {productosAgotados.length > 0 && (
          <div className="alerta-agotados">
            Atención: hay {productosAgotados.length} producto(s) sin stock.
          </div>
        )}
      </div>

      {/* Formulario para agregar productos nuevos */}
      <FormularioProducto onAgregar={agregarProducto} />

      {/* Filtros del catálogo */}
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

      {/* Catálogo / inventario */}
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
