# Bicycle API

Introducción
------------

*   Esta documentación es para una API creada usando Node.js y Express.js.
*   La API soporta métodos GET, POST y DELETE, por lo que se trata de una API de tipo RESTful.

Configuración
-------------

*   El directorio principal de la aplicación contiene un archivo `package.json`, que contiene la información de la paquetería necesaria para la API.
*   También hay un archivo `.env` que contiene la configuración de la aplicación.

Uso
---

### Requerimientos:

*   Node.js version 16 o superior.
*   Una conexión a Internet para descargar los paquetes necesarios.

### Inicializar

Para inicializar el servidor, siga estos pasos:

1.  Clonar el repositorio.
2.  Instalar todos los paquetes necesarios: `npm install`.
3.  Iniciar el servidor: `npm start`.

### Endpoints

La API contiene los siguientes endpoints:

| Método | URL | Descripción |
|-|-|-|
| GET | `/api/shop` | Obtiene la lista de tiendas