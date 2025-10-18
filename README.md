#  Mi Perfil Personal - React Native App

Este proyecto es una aplicación móvil desarrollada con **React Native** y **Expo**, que muestra mi perfil personal como estudiante y técnico en programación de software. La aplicación presenta información sobre mí, mis habilidades, proyectos desarrollados y datos de contacto.

---

##  Características Principales

- Pantalla principal con encabezado y foto de perfil.  
- Sección **"Sobre mí"** con una breve descripción personal.  
- Sección **"Mis habilidades"** con íconos visuales representando las tecnologías que manejo.  
- Sección **"Mis proyectos"** con descripción, etiquetas y tecnologías usadas.  
- Información de contacto (correo, GitHub y ubicación).  
- Diseño responsivo y limpio con componentes reutilizables.

---


##  Componentes Principales

###  SkillCard
Muestra una tarjeta con el nombre y el ícono de una habilidad.

```tsx
<SkillCard icon={<Ionicons name="logo-react" />} name="React Native" />
```

###  ProjectCard
Muestra la información de un proyecto, incluyendo su ícono, título, descripción y etiquetas de tecnologías.

```tsx
<ProjectCard
  icon={<FontAwesome5 name="solar-panel" size={26} color="#FACC15" />}
  title="Ecoenergix"
  description="Plataforma de compra y venta de paneles solares."
  tags={["React", "Node.js", "MongoDB"]}
/>
```
