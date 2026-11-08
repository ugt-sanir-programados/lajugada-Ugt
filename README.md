# La Jugada · UGT Sanir Programados

Adaptación de Tecni Jaque, creado por Txuwa con la ayuda de Astra. Edición con identidad propia para UGT Sanir Programados.

## Publicar

Descomprime el ZIP y sube TODO el contenido a GitHub Pages o Netlify, conservando assets y vendor. index.html debe quedar en la raíz de la carpeta publicada. No requiere compilación, claves API ni servidor de partidas. Abre la URL HTTPS, no el archivo descargado directamente.

## Esta edición

- Cabecera con los logos UGT y Comité de empresa Sanir Programado.
- Nombre La Jugada, emblema de torre e iconos propios.
- Colores rojo UGT, crema y tonos oscuros con matices malva.
- Se mantienen el rey Txuwa, su retrato, Nox, los tableros 2D/3D, cuatro dificultades, música, río y opciones de juego.
- Crédito a Txuwa en el menú. El icono de torre abre la historia del rey.
- Guardado local propio para separar esta edición de otras aplicaciones del mismo dominio. No importa partidas de Tecni Jaque.
- Aplicación web instalable cuando el navegador lo permita: abre Menú → Instalar La Jugada si aparece. En iPhone, Safari → Compartir → Añadir a pantalla de inicio.
- Recursos locales y caché para uso sin conexión después de una primera carga completa y la activación del service worker. El tablero 2D arranca sin inicializar WebGL; el modo 3D requiere compatibilidad del dispositivo.
- Juego contra la IA o dos jugadores en el mismo dispositivo; no incluye multijugador por internet.

## Desarrollo y actualizaciones

Las pruebas se ejecutan con npm test (solo necesita Node; no requiere instalar paquetes). Las bibliotecas y la fuente conservan sus licencias en vendor. Incrementa CACHE en sw.js para publicar otra versión. Si aparece el icono antiguo, vuelve a añadir el acceso directo.

## Comprobaciones

Han pasado las cuatro suites originales: encuadre de cámara en siete tamaños, reglas especiales de ajedrez, IA, arranque e interacción del tablero, guardado, recuperación ante un worker sin respuesta y controles de audio. Verificados los recursos y la sintaxis. El motor, las reglas y las composiciones originales se conservan. Queda pendiente la revisión visual del nuevo diseño en navegador y la instalación en un dispositivo real; las pruebas de cámara son geométricas y no una inspección de WebGL.
