# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## Taller 3
La aplicación ahora permite:
- Agregar productos
- Validar formularios
- Eliminar productos
- Modificar stock
- Calcular inventario dinámicamente
- Gestionar estado con useState

## Taller 1 Sep
El gestor de inventario ahora también permite:
- Persistir el inventario en el navegador con `localStorage`, usando `JSON.stringify()` para guardarlo y `JSON.parse()` para recuperarlo.
- Mantener el inventario sincronizado automáticamente con `useEffect()` cada vez que cambia el estado `productos`.
- Editar un producto existente reutilizando el mismo `FormularioProducto` que se usa para agregar (no se creó un componente aparte).
- Buscar y filtrar productos por nombre, categoría y disponibilidad.
- Ordenar el inventario por nombre, precio o stock (ascendente/descendente).
- Ver mensajes de estado visibles en la interfaz (agregado, actualizado, eliminado) en lugar de depender únicamente de `alert()`.
- Confirmar antes de eliminar un producto y ver un aviso de "Stock bajo" cuando el stock es de 1 o 2 unidades.
- Ver el precio promedio del inventario en el panel de indicadores.