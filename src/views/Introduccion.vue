<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-3.mb-3
            figure
              img(src="@/assets/curso/temas/introduccion.png", alt="alt")
          .col-sm-9.mb-3
            .bloque-texto-b.color-bloque-texto-pequeno
              .bloque-texto-b__texto          
                p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo, donde usted conocerá las generalidades y aspectos clave de los derechos de autor, los métodos de representación en la ingeniería de requisitos, la seguridad de la información y las técnicas de la gestión de datos masivos, lo que le permitirá adquirir una visión más amplia e identificar con claridad, los diferentes aspectos legales en la utilización de datos y velar por la seguridad de la información. Por otra parte, conseguirá identificar problemas a la hora de implementar procesos y logrará corregirlos optimizando el uso de los recursos.

    p.mt-5.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
