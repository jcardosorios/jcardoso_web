---
title: Distrito Coffee Gourmet
summary: Propuesta de rediseño de la web de un café de especialidad de Concepción. Carta en texto real, información útil desde la portada y un sistema de diseño documentado.
order: 1
spec:
  - label: Tipo
    value: Propuesta de mejora · iniciativa propia
  - label: Rol
    value: Auditoría UI/UX y sistema de diseño
  - label: Alcance
    value: Versión Base y Plus, carta con QR
before:
  label: Antes
  text: 'La carta estaba oculta: en pantalla solo se veían fotos.'
after:
  label: Ahora
  text: Carta en texto, con precios y filtros.
cover: ../../assets/casos/distrito.png
coverAlt: Propuesta de rediseño de la página de inicio de Distrito Coffee Gourmet
callout: carta en texto real · siempre visible
---

## El punto de partida

Distrito Coffee Gourmet es un café de especialidad de Concepción, con pastelería y catering ejecutivo. Este caso es una **propuesta por iniciativa propia**: no fue un encargo y el sitio nuevo no está publicado. Lo hice para practicar lo que quiero ofrecer a las pymes: auditar un sitio real, encontrar lo que le cuesta clientes y proponer cambios concretos.

## Qué encontré y qué propuse

La auditoría dejó cinco problemas. Para cada uno, esto fue lo que propuse:

- **La carta no se ve.** En pantalla son seis fotos de producto, sin un solo nombre ni precio. Los platos y los precios sí existen en el código de la página, pero escondidos: el botón que el código espera para abrirlos no existe, así que ningún visitante puede verlos. Propuse una carta en texto real, siempre visible, con precios alineados y filtros por categoría.
- **La portada no decía nada útil.** No tenía llamado a la acción ni información. Propuse una propuesta de valor, el botón principal "Pide Online" y el horario y la ubicación a la vista.
- **El horario y la dirección estaban al final.** Propuse mostrarlos en la portada y en una franja "Dónde estamos".
- **Jerarquía rota y algún contraste justo.** Los títulos saltan de nivel (un `h4` justo después del `h1`) y Lighthouse marca un enlace con contraste insuficiente. Propuse una jerarquía clara, texto de 16 a 18 px y un contraste que cumpla WCAG AA.
- **El botón decía "Clic aquí para pedir".** Propuse llamados con verbo y destino: "Pedir por WhatsApp" y "Solicitar cotización".

## Dos versiones

La propuesta se puede ofrecer en dos niveles:

- **Base:** la carta se muestra como una galería de seis categorías con foto, y cada una lleva a pedir por WhatsApp.
- **Plus:** una carta que el propio negocio puede editar, con precios, y una vista `/carta` pensada para un código QR en las mesas. Incluye el diseño de la tarjeta de mesa para imprimir (A6).

Además diseñé el formulario "Solicitar cotización" para el servicio de catering.

## Cómo lo trabajé

Documenté un sistema de diseño que **respeta la paleta original** del negocio, con Playfair Display y Montserrat, una escala de espaciado de 4 y 8 px y los estados de foco y hover. Lo diseñé primero para móvil. Y revisé el contraste: por ejemplo, el dorado de la marca no cumple como color de texto sobre blanco, así que lo reservé para fondos de botones y detalles.

## Cómo estaba el sitio

Medí el sitio actual con Lighthouse (escritorio, 18 de noviembre de 2026):

- **Rendimiento:** 93
- **Accesibilidad:** 69
- **Buenas prácticas:** 73
- **SEO:** 82

Carga rápido, pero lo que falla es la accesibilidad: seis enlaces sin nombre (incluido el ícono del menú móvil), una imagen sin texto alternativo, sin una región principal y con el idioma declarado en inglés. Además, los teléfonos no son enlaces para llamar, el pie dice "© 2017" y falta la información de negocio local (horario y dirección) que Google usa para mostrar un café en sus resultados.

## Lo que falta

Es una propuesta: el "antes" está medido, pero el "después" no existe porque el sitio nuevo no está construido ni se probó con clientes reales del café. Si fuera un encargo, el siguiente paso sería construirlo y volver a medir para comparar.
