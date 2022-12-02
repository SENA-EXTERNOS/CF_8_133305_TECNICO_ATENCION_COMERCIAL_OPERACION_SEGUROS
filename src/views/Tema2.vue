<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Optimización del modelo de gestión de datos masivos 

    .row.justify-content-center.mt-5
      .col-sm-7.mt-5.mb-3        
        p La gestión de requisitos (RM) es un desafío para muchas empresas, en gran parte debido a la ambigüedad que implica el desarrollo de #[i software.] En primer lugar, se deben comprender los requisitos del cliente. En segundo lugar, se obliga a coincidir esos requisitos, con los procesos críticos.
        p Los clientes tienen una larga lista de objetivos al crear un nuevo #[i software], y RE proporciona un marco para cumplir esos objetivos. Las necesidades importantes se inventan y se transforman en un conjunto detallado de requisitos. El desarrollo de requisitos dicta las futuras actividades de desarrollo y crea un modelo para el éxito.
      .col-sm-5.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")

    .row.justify-content-center.mt-5      
      .col-md-9
        .cajon.color-primario.segundo-color-cajon-4.p-3
          .row.justify-content-center.p-3                
            p Los términos "gestión de requisitos" e "ingeniería de requisitos" normalmente se usan indistintamente, pero son diferentes. RM es una parte de la ingeniería de requisitos, y hacerlo bien marca la diferencia.
                  
    <separador></separador>
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Ingeniería de requisitos

    p.mt-5.mb-5 El cumplimiento de los requerimientos de ingeniería hace parte fundamental para garantizar una efectividad en el desarrollo del #[i software] o aplicaciones en las organizaciones; en este sentido, es garantía de contar un resultado validado y en correcto funcionamiento.         

    h3 Métodos de representación 
    p.mb-5 Los métodos de representación utilizan símbolos predefinidos para transformar visual y gráficamente los pasos de un proceso, sus tareas y actividades, sus agentes, entradas y salidas para que el proceso se pueda entender y analizar completamente. Los métodos de representación permiten una mejor visualización de los modelos a través de flujos, diagramas, estructuras o secuencias.
    p.mb-5 A continuación, se explican cada uno de estos métodos de representación.
    .bg4.p-5.mg-img.mg-img-top 
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
        .row(titulo="Modelado y notación de procesos comerciales (BPMN) ").px-5.py-2
          .row
            .col-md-7
              p.text-justify El modelado y notación de procesos comerciales, se utiliza para crear gráficos que simplifican la comprensión del proceso mercantil. Es una técnica popular utilizada por los analistas de negocios para coordinar la secuencia de mensajes entre diferentes participantes, en un conjunto relacionado de actividades.
              p.text-justify BPMN (modelado y notación de procesos comerciales) es una representación gráfica del proceso comercial, utilizando objetos simples, lo que ayuda a la organización a comunicarse de forma estándar. Varios objetos utilizados en BPMN incluyen:
              ol.lista-ol--cuadro
                li 
                |#[span.color-vineta-1 >] Objetos de flujo.
                li 
                |#[span.color-vineta-1 >] Conectando objetos.
                li 
                |#[span.color-vineta-1 >] Carriles de natación o piscinas.
                li 
                |#[span.color-vineta-1 >] Artefactos.
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img2.png", alt="alt") 

        div(titulo="Diagramas de flujo").px-5.py-3
          .row
            .col-md-7
              p.text-justify Los diagramas de flujo representan el flujo secuencial y la lógica de control de un conjunto relacionado de actividades. Son útiles tanto para miembros técnicos, como no técnicos.
              p.text-justify Los diagramas de flujo de datos muestran cómo un sistema procesa los datos en términos de entradas y salidas. Los componentes del diagrama de flujo de datos incluyen: proceso, caudal, tienda y terminador.
              p.text-justify Un diagrama de flujo de datos lógicos muestra las actividades del sistema, mientras que un diagrama de flujo de datos físicos, muestra la infraestructura de un sistema. Se puede diseñar un diagrama de flujo de datos en las primeras etapas del proceso de obtención de requisitos de la fase de análisis, dentro del ciclo de vida de desarrollo del sistema SDLC, para definir el alcance del proyecto. Para facilitar el análisis, un diagrama de flujo de datos, se puede desglosar en sus subprocesos conocidos como "DFD nivelado".
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")

        div(titulo="Diagrama de Gantt ").px-5.py-3
          .row
            .col-md-7
              p.text-justify Estos diagramas proporcionan una representación visual de las tareas, junto con sus cronogramas programados. Ayudan a los analistas de negocios a visualizar las fechas de inicio y finalización de todas las tareas de un proyecto.
              p.text-justify Un diagrama de Gantt es una representación gráfica de un cronograma que ayuda a coordinar, planificar y realizar un seguimiento de tareas específicas en un proyecto. Representa el lapso de tiempo total del objeto, desglosado en incrementos. Representa la lista de todas las tareas a realizar en el eje vertical mientras que, en el eje horizontal, enumera la duración estimada de la actividad o el nombre de la persona asignada a la actividad. Un gráfico puede demostrar muchas actividades.          
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img4.png", alt="alt") 

        div(titulo="Diagramas de actividad de roles- (RAD)").px-5.py-3
          .row
            .col-md-7
              p.text-justify El diagrama de actividad de roles es similar a la notación de tipo de diagrama de flujo. En este diagrama, las instancias de roles son participantes del proceso, el cual tiene un estado inicial y uno final. RAD requiere un conocimiento profundo del proceso o de la organización para identificar roles. Los componentes de RAD incluyen: actividades, eventos externos y estados.
              p.text-justify Los roles agrupan las actividades en unidades de responsabilidad, de acuerdo con el conjunto de tareas que están desempeñando. Una actividad puede llevarse a cabo aisladamente con un rol, o puede requerir coordinación con actividades en otros roles.
              p.text-justify Los eventos externos son los puntos en los que ocurren los cambios de estado. Los estados son útiles para mapear las actividades de un rol a medida que avanza de un estado a otro. Cuando se alcanza un estado particular, indica que se ha logrado un objetivo determinado.
              p.text-justify RAD es útil para apoyar la comunicación, debido a que es fácil de leer y presenta una vista detallada del proceso y permite actividades en paralelo.
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img5.png", alt="alt")                        
        
        div(titulo="Redes de Petri coloreadas (CPN)").px-5.py-3
          .row
            .col-md-7
              p.text-justify Las redes de Petri coloreadas o CPN, son un lenguaje orientado gráficamente para la especificación, verificación, diseño y simulación de sistemas. Las redes de Petri coloreadas son una combinación de gráficos y texto. Sus componentes principales son: lugares, transiciones y arcos dirigidos y marcas o fichas que ocupan posiciones dentro de los lugares.
              p.text-justify Los objetos de las redes de Petri tienen una inscripción específica como:
              p.text-justify #[span.text-bold Lugares.] Tiene inscripción como: nombre, conjunto de colores, marcado inicial.
              p.text-justify #[span.text-bold Transición.] Tiene una inscripción como: nombre (para identificación) y Guard (la expresión booleana consiste en algunas de las variables).
              p.text-justify #[span.text-bold Arcos.] Tiene inscripción como: #[i Arc], cuando se evalúa la expresión del arco, se obtiene un conjunto múltiple de colores de token.
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")

        div(titulo="Técnica de flujo de trabajo").px-5.py-3
          .row
            .col-md-7
              p.text-justify La técnica de flujo de trabajo es un diagrama visual que representa uno o más procesos comerciales para aclarar la comprensión del proceso o para hacer recomendaciones de mejora del proceso. Al igual que otros diagramas como los diagramas de flujo, la actividad UML y el mapa de procesos, la técnica de flujo de trabajo es la técnica más antigua y popular. El proceso consta de cuatro etapas:
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Recopilación de información.
                li 
                  i.lista-ul__vineta
                  | Modelado de flujo de trabajo. 
                li 
                  i.lista-ul__vineta
                  | Modelado de procesos de negocio.  
                li 
                  i.lista-ul__vineta
                  | Implementación, verificación y ejecución.                                             
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img7.png", alt="alt") 

      h4.mt-5.mb-5 Proceso de ingeniería de requisitos  
      p.mb-5 El proceso de ingeniería de requisitos tiene muchas trampas potenciales. El proceso sirve como una brújula que lo guía para determinar los entregables exactos y hacerlo con mayor precisión. Todas las partes importantes están en la misma página sobre qué pasos deben tomarse para lograr el resultado deseado.
      p.mb-5 A continuación, se presentan los cuatro pasos del proceso de ingeniería de requisitos.

      .row.justify-content-center.mt-5
        .col-md-8.mt-3
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='', style='')

            .tarjeta.p-4(x="91%" y="10%" numero="+" style='border-radius: 10px; background-color: #fff')
              p.mb-0.text-regular.text-justify Consiste en familiarizarse con todos los detalles importantes relacionados con el proyecto. El cliente brinda detalles sobre sus necesidades y aporta antecedentes críticos. Estudia esos detalles y también se familiariza con tipos similares de soluciones de #[i software]. Este paso proporciona un contexto importante para el desarrollo.

            .tarjeta.p-4(x="99%" y="34%" numero="+" style='border-radius: 10px; background-color: #fff')
              p.mb-0.text-regular.text-justify La verificación garantiza que el #[i software] esté construido según los requisitos del cliente. Por el contrario, la validación garantiza que el #[i software] esté implementando las funciones correctas. Si los requisitos no pasan por la etapa de validación, existe la posibilidad de reformulaciones costosas y que requieran mucho tiempo.

            .tarjeta.p-4(x="99%" y="59%" numero="+" style='border-radius: 10px; background-color: #fff')
              p.mb-0.text-regular.text-justify Durante la fase de especificación, reúne los requisitos funcionales y no funcionales del proyecto. Durante esta etapa se utiliza una variedad de herramientas, incluidos los diagramas de flujo de datos, para agregar más claridad a los objetivos del proyecto.

            .tarjeta.p-4(x="94%" y="84%" numero="+" style='border-radius: 10px; background-color: #fff')
              p.mb-0.text-regular.text-justify Es un proceso continuo que se ejecuta en paralelo a los otros tres procesos que se acaban de describir. Las funciones a realizar se enfocan en: analizar, documentar y priorizar los requisitos y, adicionalmente, brindar una efectiva comunicación con las partes interesadas. Cualquier requisito que necesite modificación, se maneja de manera eficiente y sistemática.
      
      p.mt-5.mb-5 Después de conocer el proceso de ingeniería de requisitos, es importante comprender sobre las herramientas que permiten administrar los proyectos de manera efectiva en la ingeniería de requisitos.
      p.mb-5  A continuación, se presentan algunas de estas herramientas.
      .row.justify-content-center.mt-5 
        .col-md-8
          TabsA.mt-5.mb-5
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Jira")
              p Es una plataforma creada principalmente para el seguimiento y la gestión de proyectos. Sin embargo, Jira también se puede usar para la ingeniería de requisitos junto con Confluence, lo que le permite rastrear y personalizar docenas de tareas y proyectos con sus requisitos, en un momento dado. Los profesionales de gestión de ingeniería pueden hacer un gran uso de esta plataforma para realizar un seguimiento de las tareas del proyecto (problemas) y crear requisitos a nivel de problema.
              p La integración de Jira con Confluence, brinda mucho control y personalización a los gerentes de ingeniería. Puede crear los flujos de trabajo de varias maneras y permitir que todos vean las páginas de requisitos, en línea con los problemas/tareas de Jira que le correspondan.                                               
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="<i>Doc sheets</i>")
              p Es una de las herramientas de ingeniería de requisitos más eficiente, que ayuda a controlar y personalizar todo el ciclo de vida de un proyecto. La herramienta permite administrar la documentación y hace que la trazabilidad sea más fácil y rápida que nunca.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Requisitos Hub")
              p Es otra herramienta notable para la gestión de ingeniería de requisitos. Esta herramienta está especialmente diseñada para empresas de #[i software] y tecnología de información TI, donde la gestión de proyectos puede ser extremadamente complicada. La herramienta viene con cientos de plantillas integradas con docenas de categorías de organizaciones, lo que garantiza que encuentre algo que satisfaga sus necesidades.
              p Requisitos Hub, brinda mucho control en la administración y priorización de tareas, lo que lo convierte en un gerente de ingeniería de calidad sin mucha documentación que manejar. Una de las mejores cosas de Requisitos Hub es acceder a seminarios web, tutoriales y otro material de aprendizaje cuando compra la herramienta.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="DOORS Next")
              p Es una de las mejores herramientas de ingeniería de requisitos que contribuye a tener credibilidad. La mejor característica de esta herramienta es su interoperabilidad. DOORS Next, funciona perfectamente bien con otras herramientas para la gestión del ciclo de vida, la colaboración y la creación de informes.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="ReqSuite® RM")
              p ReqSuite® RM es una herramienta de ingeniería de requisitos, fácil de aprender que ofrece mucho soporte y personalización. Está diseñada específicamente para gerentes de ingeniería que se ocupan de muchos proyectos en un momento dado, por lo que no tienen que pasar meses aprendiendo la herramienta en sí.
              p La mejor característica de ReqSuite® RM es su sencilla curva de aprendizaje y su facilidad de uso; es perfecta para organizaciones más pequeñas y nuevas empresas.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Requisitos modernos")
              p Es otra excelente herramienta de ingeniería de requisitos, diseñada para satisfacer las necesidades de las empresas de tecnología moderna. La herramienta proporciona una extensión integrada para Azure DevOps, que muchas organizaciones usan para crear aplicaciones modernas.
              p Los requisitos modernos, al igual que Jira, tienen una excelente interfaz de usuario y pueden proporcionar bastante automatización en la gestión de proyectos. Lo mejor es que esta única aplicación cubre casi todas las necesidades de los directores de ingeniería. No hay que descargar varias aplicaciones para administrar documentos, colaborar con informes y realizar un seguimiento del rendimiento de un proyecto.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Spira Team")
              p Está diseñado para realizar un seguimiento del progreso de los proyectos, gestionar los requisitos de ingeniería y controlar la calidad. Esta herramienta se utiliza tanto para la gestión de requisitos, como para el aseguramiento de la calidad, donde se puede rastrear fácilmente el ciclo de vida de un proyecto.
              p SpiraTeam viene con algunas integraciones que puede usar para la gestión de proyectos, pruebas unitarias y seguimiento de errores. Estas integraciones y la facilidad de uso de esta herramienta de requisitos de ingeniería, la convierten en una solución integral para las organizaciones modernas.                                                                 
        .col-md-4.mt-5 
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema2/img9.png', alt='')      

    <separador></separador>
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Políticas de seguridad de la información

    p.mt-5.mb-5 Una política de seguridad (también denominada política de seguridad de la Información o política de seguridad de TI), es un documento que detalla las reglas, las expectativas y el enfoque general que utiliza una organización para mantener la confidencialidad, la integridad y la disponibilidad de sus datos.
    p.mb-5  Las políticas de seguridad existen en muchos niveles diferentes, desde construcciones de alto nivel que describen los objetivos y principios generales de seguridad de una empresa, hasta documentos que abordan problemas específicos, como el acceso remoto o el uso de #[i Wi-Fi.]                 

    .row.justify-content-center.mt-5        
      .col-md-10 
        .cajon.color-secundario.segundo-color-cajon-3.p-2
          .row.justify-content-center.p-3 
            p Una política de seguridad se usa con frecuencia, junto con otros tipos de documentación, como los procedimientos operativos estándar. Estos documentos trabajan juntos para ayudar a la empresa a lograr sus objetivos de seguridad. La política define la estrategia general y la postura de seguridad, y los demás documentos ayudan a construir una estructura en torno a esa práctica. Se puede pensar en una política de seguridad como una respuesta al "qué" y al "por qué", mientras que los procedimientos, estándares y directrices, responden al "cómo".

    p.mt-5.mb-5 Lo invitamos a ver el siguiente video, donde se amplía la temática sobre seguridad eficaz.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video 

    h3.mt-5 Normativa sobre la seguridad de la información en Colombia 
    p.mb-5 Teniendo en cuenta las temáticas tratadas anteriormente, como los derechos de autor, la confidencialidad y la seguridad de la información, el #[i Big data], las políticas de seguridad, entre otras, se hace necesario conocer cuál es la normativa que rige a dicha información en Colombia.                  
    p.mb-5 Se presenta un recorrido por la normatividad colombiana referida a la seguridad de la información.
    .row.justify-content-center.mt-5 
      .col-md-8
        TabsA.mb-5
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 23 de 1982")
            p Propiedad Intelectual - Derechos de Autor.            
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 80 de 1993")
            p El Estatuto General de Contratación de la Administración Pública.
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 527 de 1999")
            p Se reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.            
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Directiva presidencial<br/>02 del año 2000")
            p Gobierno en línea.
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 594 de 2000")
            p Ley General de Archivos.
            
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 962 de 2005")
            p “Simplificación y Racionalización de Trámite. Atributos de seguridad en la Información electrónica de entidades públicas”.
            
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1032 de 2006")
            p Habeas Data y se regula el manejo de la información contenida en base de datos personales
          
          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1150 de 2007 ")
            p “Seguridad de la información electrónica en contratación en línea”.

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1273 de 2009 ")
            p "Delitos Informáticos" protección de la información y los datos.

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1341 de 2009 ")
            p “Tecnologías de la Información y aplicación de seguridad”.

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1437 de 2011 ")
            p Código de procedimiento administrativo y de lo contencioso administrativo.   

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="CONPES 3701 de 2011 ")
            p Lineamientos de Política para Ciberseguridad y Ciberdefensa.   

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1581 de 2012")
            p Protección de Datos Personales.  

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ley 1712 de 2014")
            p “De transparencia y del derecho de acceso a la información pública nacional”.                        

          .tarjeta.color-borde-slider.color-slider.p-4(titulo="CONPES 3854 de 2016")
            p Política Nacional de seguridad digital. 

      .col-md-4.mt-5 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img10.png', alt='')  

    .row.justify-content-center.mt-5      
      .col-md-9
        .cajon.color-primario.segundo-color-cajon-4.p-3
          .row.justify-content-center.p-3                
            p La Ley de Protección de Datos, Ley 1581, tiene por objeto garantizar la seguridad y protección de los datos personales almacenados en diversas bases de datos de entidades públicas o privadas, que realicen cualquier tipo de tratamiento de datos.
                              
    .row.justify-content-center.mt-5
      .col-sm-7.mt-5.mb-3        
        p La información personal se puede dividir en los siguientes grupos, según la divulgación más o menos aceptable, o el riesgo que enfrenta la organización en caso de violación de los principios de integridad, confidencialidad y acceso:
        ol.lista-ol--cuadro
          li 
          |#[span.color-vineta-1 >] Información pública. 
          li 
          |#[span.color-vineta-1 >] Información semiprivada.  
          li 
          |#[span.color-vineta-1 >] Información privada o confidencial.                    
           
      .col-sm-5.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img11.png", alt="alt")

    h4.mt-5.mb-5 Tratamiento de datos y políticas legales 
    p.mb-5 El tratamiento de datos y las políticas legales contribuyen, de manera significativa, en la gestión de los activos informáticos, dentro del marco legal colombiano.
    p.mb-5 A continuación, se hace énfasis en la revisión y el cumplimiento del tratamiento de datos y las políticas legales.

    .bg5.p-5.mg-img.mg-img-top
      TabsC.color-acento-contenido
        .py-3.py-md-4.px-5(titulo="Tratamiento de datos")
          .row
            .col-md-8.mb-4.mb-md-0
              p Se entiende por tratamiento de datos a todo proceso u operación técnica, automatizada o no, que recopile, registre, almacene, procese, modifique, consulte, utilice, suprima, bloquee o destruya, así como también transfiera datos de comunicaciones, solicitudes, permita la conexión y transferencias. El tratamiento de datos está regulado por los artículos 3, 4 y 6 de la Ley No. 1581 del 2012. 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='')
        .py-3.py-md-4.px-5(titulo="Políticas legales")
          .row
            .col-md-8.mb-4.mb-md-0              
              p El incumplimiento de la ley de protección de datos, expone a sanciones económicas y operativas, pero también se enfrentan problemas de reputación que pueden costarle al negocio, hasta 2,000 SMMLV:
              ol.lista-ol--cuadro
                li 
                |#[span.color-vineta-1 >] Suspensión de actividades relacionadas con el tratamiento hasta por seis (6) meses.  
                li 
                |#[span.color-vineta-1 >] Bloqueo temporal de operaciones relacionadas con el tratamiento de datos.
                li 
                |#[span.color-vineta-1 >] Bloqueo permanente de operaciones relacionadas con el tratamiento de datos sensibles.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='')


      .row.justify-content-center.mt-5        
        .col-md-10 
          .cajon.color-secundario.segundo-color-cajon-3.p-2
            .row.justify-content-center.p-3 
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para hacerlo, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
