# CV interactivo · Alfredo Jesús Albornoz

Sitio estático (HTML + CSS + JavaScript puro). No necesita instalación ni dependencias para ejecutarse.

## Estructura

```
index.html                  Marcado de la página
css/style.css               Estilos, colores y modo claro/oscuro
js/main.js                  Datos (experiencia, formación, skills) y toda la interactividad
cv-alfredo-albornoz.pdf     PDF que descarga el botón "Descargar CV en PDF"
assets/diplomas/            Carpeta para los diplomas (ver abajo)
tools/generate_pdf.py       Script que regenera el PDF
```

## Ejecutarlo

Abrí `index.html` en el navegador, o levantá un servidor local: `python3 -m http.server` y entrá a http://localhost:8000.
Las tipografías se cargan desde Google Fonts, por lo que se necesita conexión a internet para verlas; sin conexión se usa una tipografía del sistema.

## Publicarlo

- **GitHub Pages:** subí la carpeta al repositorio, en *Settings → Pages* elegí la rama `main` y la carpeta `/ (root)`.
- **Netlify:** arrastrá la carpeta a https://app.netlify.com/drop o conectá el repositorio (sin comando de build, directorio de publicación `.`).

## Editar el contenido

Todo el contenido está en `js/main.js`:
- Experiencia: bloque `tl("exp", [...])`.
- Formación y certificaciones: arreglo `FORM`.
- Skills: objeto `S`.

## Agregar diplomas

1. Copiá el archivo (PDF o imagen) en `assets/diplomas/`.
2. En `js/main.js`, dentro de `FORM`, completá el campo `file` de esa formación, por ejemplo:
   `file:"assets/diplomas/digital-house-backend.pdf"`.
3. Aparecerá el enlace "Ver diploma" en la tarjeta. Si `file` es `null`, no se muestra nada.

## Regenerar el PDF

Si cambiás el contenido del currículum, editá el texto en `tools/generate_pdf.py` y ejecutá:

```
pip install reportlab
python tools/generate_pdf.py
```
