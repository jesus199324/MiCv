"""Genera cv-alfredo-albornoz.pdf. Uso: pip install reportlab && python tools/generate_pdf.py"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable

NAVY, CYAN, INK, MUTE, LINE = HexColor('#050B16'), HexColor('#22D3EE'), HexColor('#11203A'), HexColor('#4D5F7A'), HexColor('#D5DDE8')
TEAL = HexColor('#0B7285')
W, H = A4
ML = 18*mm
AW = W - 2*ML - 12  # ancho útil real del frame (descuenta 6 pt de relleno por lado)
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cv-alfredo-albornoz.pdf')

body = ParagraphStyle('b', fontName='Helvetica', fontSize=9.4, leading=13.2, textColor=INK)
mute = ParagraphStyle('m', parent=body, textColor=MUTE)
h2 = ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, leading=14, textColor=NAVY, spaceBefore=11, spaceAfter=2)
tt = ParagraphStyle('t', parent=body, fontName='Helvetica-Bold', fontSize=10.2, leading=13)
dt = ParagraphStyle('d', parent=body, fontName='Helvetica-Bold', fontSize=8.6, textColor=TEAL, alignment=TA_RIGHT)

def section(title):
    return [Paragraph(title.upper(), h2), HRFlowable(width='100%', thickness=1.4, color=CYAN, spaceAfter=6)]

def entry_items(title, sub, date, desc):
    head = Table([[Paragraph(title, tt), Paragraph(date, dt)]], colWidths=[AW-48*mm, 48*mm])
    head.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    items = [head]
    if sub: items.append(Paragraph(sub, mute))
    if desc: items.append(Paragraph(desc, body))
    items.append(Spacer(1, 6))
    return items

def entry(*a):
    return KeepTogether(entry_items(*a))

def header(c, doc):
    c.saveState()
    c.setFillColor(NAVY); c.rect(0, H-44*mm, W, 44*mm, stroke=0, fill=1)
    c.setFillColor(CYAN); c.rect(0, H-44*mm, W, 1.6*mm, stroke=0, fill=1)
    c.setFillColor(HexColor('#FFFFFF')); c.setFont('Helvetica-Bold', 23); c.drawString(ML, H-19*mm, 'Alfredo Jesús Albornoz')
    c.setFillColor(CYAN); c.setFont('Helvetica-Bold', 11.5); c.drawString(ML, H-26.5*mm, 'Desarrollador de Software Full Stack Junior')
    c.setFillColor(HexColor('#C9D6EA')); c.setFont('Helvetica', 8.6)
    x = ML
    for label, url in [('alfredojesus.albornoz@gmail.com', 'mailto:alfredojesus.albornoz@gmail.com'), ('+598 99 119 628', 'https://wa.me/59899119628'), ('linkedin.com/in/alfredojalbornoz', 'https://www.linkedin.com/in/alfredojalbornoz/'), ('github.com/JesusAlbornoz29', 'https://github.com/JesusAlbornoz29')]:
        wd = c.stringWidth(label, 'Helvetica', 8.6)
        y = H-35*mm if x+wd > W-ML else H-35*mm
        c.drawString(x, y, label); c.linkURL(url, (x, y-2, x+wd, y+9), relative=0)
        x += wd + 9*mm
    c.drawString(ML, H-40*mm, 'Montevideo, Uruguay')
    c.restoreState()
    footer(c, doc)

def footer(c, doc):
    c.saveState(); c.setFont('Helvetica', 7.8); c.setFillColor(MUTE)
    c.drawString(ML, 10*mm, 'Alfredo Jesús Albornoz · Currículum')
    c.drawRightString(W-ML, 10*mm, 'Página %d' % doc.page); c.restoreState()

s = [Spacer(1, 30*mm)]
s += section('Perfil')
s.append(Paragraph('Diez años en soporte tecnológico resolviendo problemas reales; ahora construyo las APIs que los evitan. Formado como Desarrollador de Software con énfasis en Backend (Digital House, 2022 - 2025). Aprendo rápido, leo documentación técnica en inglés y busco mi primera experiencia como desarrollador de software.', body))

tech = section('Conocimientos técnicos')
rows = [('Backend', 'Java, Spring Boot, Node.js, Python, Maven, Hibernate, MySQL, PostgreSQL, MongoDB'), ('Frontend', 'JavaScript, TypeScript, React, HTML, CSS, Sass, Bootstrap, Tailwind CSS'), ('DevOps', 'Docker, AWS, Terraform, Ansible, Jenkins, Git'), ('Sistemas', 'Windows, Linux, macOS, Shell scripting, SSH'), ('Testing', 'JUnit, Postman, Debugging'), ('Idiomas', 'Inglés técnico')]
t = Table([[Paragraph(a, tt), Paragraph(b, body)] for a, b in rows], colWidths=[26*mm, AW-26*mm])
t.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 1.5), ('BOTTOMPADDING', (0,0), (-1,-1), 1.5), ('LINEBELOW', (0,0), (-1,-2), 0.4, LINE)]))
s.append(KeepTogether(tech + [t]))

s += section('Experiencia')
s.append(entry('Técnico 1A · Digitador · Chofer', 'CompoSystem', '2026 – actualidad', 'Soporte técnico y mantenimiento de impresoras empresariales y equipos informáticos para organismos públicos.'))
s.append(entry('Encargado de Servicio PostVenta', 'La Oferta Irresistible (LOi)', '2020 – 2026', 'Lideré el área de servicio técnico: organicé al equipo, resolví casos complejos y mejoré los procesos de atención.'))
s.append(entry('Técnico de TI', 'La Oferta Irresistible (LOi)', '2016 – 2020', 'Soporte técnico, mantenimiento de equipos y resolución de incidentes para toda la empresa.'))
s.append(entry('Centro Coordinador de Operaciones de Paz', 'Comando General del Ejército', '2012 – 2016', 'Trabajo en un entorno de disciplina y responsabilidad.'))
s.append(entry('Técnico en Gestión y Soporte IT', 'Net Pc', '2011 – 2012', 'Soporte y gestión de sistemas para clientes.'))

form = section('Formación')
form.append(entry('Desarrollador de Software · Énfasis Backend', 'Digital House', '2022 - 2025', 'Backend I, II y III · Bases de Datos I y II · Infraestructura I, II y III · Testing I y II · Programación orientada a objetos · Maquetado y frontend con JavaScript · Diseño UX/UI · Gestión de producto digital · Proyectos integradores I y II · Comunicación efectiva, trabajo en equipo y resolución de problemas.'))
form.append(entry('Iniciación al Desarrollo con IA', 'Big School', '2025', None))
form.append(entry('Ingeniería en Computación', 'UdelaR', 'Pospuesto', None))
form.append(entry('Bachiller Tecnológico en Informática', None, '2016 – 2020', 'Redes, hardware y lógica de programación, con fundamentos de Java y de sistemas operativos.'))

s.append(KeepTogether(form))

items = [('Barber Studio', 'barberstudio-frontend.vercel.app', 'Plataforma de reservas y gestión para mi barbería: reserva por calendario, portfolio y panel de agenda, barberos, horarios y clientes. Java, Spring Boot, PostgreSQL y JavaScript; desplegada en Vercel, Render, Neon y Cloudinary.'), ('Sistema de Turnos', 'sistema-de-turnos-tau.vercel.app', 'Turnero para comercios: el cliente saca su número en una tablet o el celular, el mostrador lo llama y la TV de la sala lo anuncia con voz. Numeración por sector que se reinicia cada día y sectores configurables. Next.js, TypeScript y Redis; desplegado en Vercel.'), ('Route 66 Diner', 'route66-ebon.vercel.app', 'Landing page para una hamburguesería estilo diner americano: menú por categorías, carrito persistente y pedido que se envía armado por WhatsApp, con delivery o retiro. Angular 20 y TypeScript; desplegada en Vercel.'), ('Delicious', 'deliciouslanding.netlify.app', 'Propuesta de landing para una parrilla y pizzería de Sayago: promos de la semana, horario, ubicación y botones para llamar o abrir el mapa. HTML, CSS y JavaScript, sin frameworks.'), ('Centro Fitness Sayago', 'centrofitnesssayago.netlify.app', 'Propuesta de landing para un gimnasio de Sayago: actividades, grilla semanal de clases, indicador «Abierto ahora» con la hora de Montevideo, mapa y contacto. HTML, CSS y JavaScript.'), ('Nuevo Cantón', 'propuestancanton.netlify.app', 'Propuesta de landing para una pizzería y parrillada de Sayago: menú del día, carta por categorías, delivery y horario. HTML, CSS y JavaScript.'), ('CV Interactivo', 'cvbasico.netlify.app', 'De un CV estático en HTML y CSS a uno dinámico en React, fácil de editar y actualizar.'), ('Pokédex con API', 'pockedexapi2025.netlify.app', 'Mi primer proyecto consumiendo una API: datos de Pokémon en pantalla, de forma dinámica.')]
blocks = [entry_items(n, '<link href="https://%s" color="#0B7285">%s</link>' % (u, u), '', d) for n, u, d in items]
s.append(KeepTogether(section('Proyectos') + blocks[0]))
s += [KeepTogether(b) for b in blocks[1:]]

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=ML, rightMargin=ML, topMargin=16*mm, bottomMargin=18*mm, title='CV Alfredo Jesús Albornoz', author='Alfredo Jesús Albornoz')
doc.build(s, onFirstPage=header, onLaterPages=footer)
print('PDF generado:', os.path.abspath(OUT))
