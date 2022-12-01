<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Validación datos legales y seguridad de la información 
    .bg1.p-5.mg-img.mg-img-top  
      .row.justify-content-center.mt-5
        .col-sm-5.mb-3
          figure
            img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
        .col-sm-7.mb-3        
          p Para dar inicio al estudio del contenido sobre la validación de datos legales, es importante decir que, primero se debe abordar la temática de #[span.text-bold la confidencialidad de la información], la cual hace referencia a un conjunto de reglas que limita el acceso o impone restricciones en el uso de ciertos tipos de información y suele ejecutarse a través de acuerdos y políticas de confidencialidad. Esta información puede estimarse de dos maneras:
          ol.lista-ol--cuadro
            li 
            |#[span.color-vineta >] #[span.text-bold La información con preocupaciones de baja confidencialidad] puede considerarse "pública" o no amenazante si se expone más allá de su audiencia prevista.
            li 
            |#[span.color-vineta >] #[span.text-bold La información con preocupaciones de alta confidencialidad], se considera secreta y debe mantenerse confidencial para evitar el robo de identidad, el compromiso de cuentas y sistemas, daños legales o de reputación, y otras consecuencias graves.            
        .col-md-11.mt-5
          .cajon.color-primario.segundo-color-cajon.p-3
            .row.justify-content-center.p-3                
              p Ahora bien, #[span.text-bold la confidencialidad de los datos] consiste en proteger los datos contra el acceso, la divulgación o el robo no intencionales, ilegales o no autorizados.
              

    <separador></separador>
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Derechos de autor: políticas de confidencialidad   

    p.mt-5.mb-5  Las políticas de confidencialidad tienen mejor relevancia, entre mayor sea la información que manejan las empresas y, al mismo tiempo, la importancia de la misma, por lo que la estrategia de protegerla y darle el adecuado uso, se convierte en buenas prácticas de la gestión de la información. 
    p.mb-5   Las políticas de confidencialidad son necesarias para:

    .tarjeta--container.row.mb-5 
      .col-md.tarjeta.color-tarjeta-extremo.p-5 
        .row.justify-content-center.mb-4 
          .col-6 
            figure 
              img(src='@/assets/curso/temas/tema1/img2.png', alt= '') 
        p.text-center Asegurarse que los empleados, clientes y usuarios, comprendan cómo se utilizan sus propios datos personales y quién tiene acceso a ellos.
      .col-md.tarjeta.color-tarjeta-interno.p-5 
        .row.justify-content-center.mb-4 
          .col-6 
            figure 
              img(src='@/assets/curso/temas/tema1/img3.png' , alt='')                  
        p.text-center Aclarar cómo los empleados deben manejar la información confidencial que se les revela durante el curso de su empleo.
      .col-md.tarjeta.color-tarjeta-extremo.p-5 
        .row.justify-content-center.mb-4 
          .col-6 
            figure 
              img(src='@/assets/curso/temas/tema1/img2.png', alt='')       
        p.text-center Dar a conocer que la falta de protección y seguridad de la información confidencial, no solo puede conducir a la pérdida de negocios o clientes, sino que también se abre al peligro que la información confidencial se utilice para cometer actividades ilegales o inmorales.

    p.mt-5.mb-5 Por otra parte, es importante que las organizaciones conozcan cuándo deben crear las políticas de confidencialidad y qué elementos la deben de conformar para, de esta forma, garantizar un adecuado manejo de la información y que esta no se advierta vulnerada por terceros.
    p.mb-5  Por esta razón, se presentan algunos puntos que se recomienda tener en cuenta con respecto a las políticas de confidencialidad.

    .bg_slyder.px-5.py-3.mb-5
      SlyderA(tipo="b")
          .row.justify-content-center.my-lg-4
            .col-lg-5.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="01")
                h4.ps-4 El alcance
                p.ps-4.mb-0 Las organizaciones establecen políticas de confidencialidad, principalmente, para cumplir con la ley (protección de datos personales y confidencialidad del paciente), y para proteger su ventaja competitiva.
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema1/img5.png')
          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-5.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="02")
                h4.ps-4 ¿Qué se considera información confidencial?
                p.ps-4.mb-0 Según la organización, la información confidencial puede incluir datos bancarios, resultados de pruebas de pacientes, resultados de exámenes de alumnos, cantidades en la nómina, fórmulas secretas, listas de clientes y contactos, contraseñas, entre otros.
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema1/img6.png')  

          .row.justify-content-center.my-lg-4
            .col-lg-5.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="03")
                h4.ps-4 Medidas de confidencialidad implementadas
                p.ps-4.mb-0 Cómo se manejan los datos personales y cómo los trabajadores deben manejar la información personal que se les revela. Algunos ejemplos podrían incluir guardar bajo llave o asegurar la información confidencial en todo momento, establecer acuerdos de no divulgación y no guardar documentos confidenciales cuando ya no se necesiten.
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema1/img7.png')  

          .row.justify-content-center.my-lg-4
            .col-lg-5.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="04")
                h4.ps-4 Excepciones
                p.ps-4.mb-0 Cuándo se puede divulgar información confidencial por razones legítimas (en caso de una inquietud de protección, si lo exige la ley o para la seguridad pública), y qué procedimiento se tiene que seguir en estas ocasiones.
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema1/img8.png')  

          .row.justify-content-center.my-lg-4
            .col-lg-5.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="04")
                h4.ps-4 Consecuencias disciplinarias por incumplimiento de la política de confidencialidad
                p.ps-4.mb-0 Acción disciplinaria, despido y, potencialmente, acción legal.
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema1/img9.png')     

    p.mt-5.mb-5  Las empresas e instituciones en sus procesos de operación y funcionamiento, utilizan información altamente sensible de ser reservada y de uso exclusivo de las organizaciones y sus usuarios. 
    p.mb-5 A continuación, se enlista una serie de ejemplos concerniente a la información confidencial.

    SlyderF(columnas="col-lg-6 col-xl-3")
      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img10.png' alt='')
        p.text-center Nombres, fechas de nacimiento, direcciones, datos de contacto (del personal, clientes, pacientes, alumnos, etcétera).

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img11.png' alt='')
        p.text-center Datos bancarios personales e información de tarjetas de crédito.

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img12.png' alt='')
        p.text-center Imágenes del personal, alumnos o clientes, que confirman su identidad y pueden vincularse a información personal adicional.

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img13.png' alt='')
        p.text-center Información de nómina de trabajadores.

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img14.png' alt='')
        p.text-center Resultados de exámenes médicos.        

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img15.png' alt='')
        p.text-center Iniciativas o proyectos de la empresa. 

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img16.png' alt='')
        p.text-center Información y listas de clientes.  

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img17.png' alt='')
        p.text-center Información de las cuentas financieras de la empresa.   

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img18.png' alt='')
        p.text-center Información relativa a la propiedad intelectual, invención o patente.  

      .tarjeta.color-tarjetas-slider.h-tarjeta-slider.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img19.png' alt='')
        p.text-center Contraseñas e información de TI relacionadas.                            

    <separador></separador>
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Seguridad de la información

    .row.justify-content-center
      .col-sm-6.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img20.png", alt="alt")
      .col-sm-6.mb-3         
        p La seguridad de la información se refiere a los principios, las prácticas y las políticas que tienen como objetivo proteger los datos digitales y otros tipos de información. Las responsabilidades incluyen establecer un conjunto de procesos comerciales que protegen los activos de información, independientemente de cómo se formatee, transmita, procese o almacene la información. No obstante, la información siempre podrá estar vulnerable y recibir un #[span.text-bold ataque cibernético], el cual sucede cuando hay un intento deliberado y malicioso de acceder al sistema de información, ya sea de la organización o de un particular.
        .cajon.color-primario.segundo-color-cajon
          .row.justify-content-center.p-3                
            p Con frecuencia, el objetivo de los ataques es financiero pero, algunos que han sido realizados, indican que su fin es el de destruir los datos. Los actores maliciosos muchas veces buscan rescates u otras ganancias financieras, pero los ataques pueden llevarse a cabo por una variedad de motivos, incluyendo razones políticas.

    p.mt-5.mb-5  Para conocer más sobre los ataques cibernéticos, a continuación se presentan los más comunes. 

    .bg2.p-5.mg-img.mg-img-top  
      .row.justify-content-center.mt-5 
        .col-md-8
          TabsA.mt-5.mb-5
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="<i>Malware</i>")
              p Es un término que se utiliza para describir el software malicioso, como spyware, ransomware, virus y gusanos. El malware ingresa a las redes a través de vulnerabilidades. El software malicioso, generalmente se instala cuando un usuario hace clic en un enlace malicioso o en un archivo adjunto de un correo electrónico. Una vez dentro del sistema, el malware puede: 
              ol.lista-ol--cuadro
                li 
                |#[span.color-vineta-1 >] #[span.text-bold] Bloquear el acceso a componentes críticos de la red (#[i ransomware]).
                li 
                |#[span.color-vineta-1 >] #[span.text-bold] Instalar malware adicional o #[i software] malicioso.  
                li 
                |#[span.color-vineta-1 >] #[span.text-bold] Desde la unidad, obtener información de forma encubierta, transfiriendo datos (#[i spyware]).  
                li 
                |#[span.color-vineta-1 >] #[span.text-bold] Destruir ciertos componentes y renderizar el sistema a inoperable.                                       
        
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="<i>Phishing</i>")
              p Es la práctica de enviar comunicaciones engañosas, generalmente por correo electrónico, que parecen provenir de una fuente confiable. Su propósito es robar o acceder a datos confidenciales, como las tarjetas de crédito y contraseñas de inicio de sesión, así como también instalar malware en la computadora de la víctima. El phishing es cada vez más común como práctica fraudulenta.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="<i>Man-in-the-middle</i>(MitM)")
              p También conocido como espionaje, ocurre cuando un atacante compromete una transacción entre dos partes. Si un atacante interfiere con su tráfico, puede filtrar y robar sus datos. Las dos maneras de vulnerar la seguridad:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro
                  span #[span.color-vineta-2 1.] El #[i Wi-Fi] público no seguro, permite que un atacante se interponga entre el dispositivo de su visitante y su red. El visitante, sin saberlo, proporciona toda la información al atacante. 
                li
                  .lista-ol--cuadro
                  span #[span.color-vineta-2 2.] Una vez que el malware está en el dispositivo, el atacante puede instalar un #[i software] que maneja toda la información de la víctima.
                          
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Ataque de denegación de servicio")
              p Un ataque de denegación de servicio inunda un sistema, servidor o red con tráfico, consumiendo recursos y ancho de banda. Como resultado, el sistema no podrá procesar solicitudes legítimas. Los atacantes también pueden usar múltiples dispositivos comprometidos para lanzar este ataque. Esto se conoce como ataque de denegación de servicio distribuido (DDoS).
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Inyección SQL")
              p La inyección de lenguaje de consulta estructurado (SQL), ocurre cuando un atacante inyecta un código malicioso en un servidor que usa SQL, lo que hace que el servidor revele información que normalmente no revelaría. Un atacante puede realizar una inyección SQL simplemente enviando un código malicioso al cuadro de búsqueda de un sitio #[i web] vulnerable.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="<i>Exploit</i> de día cero")
              p Un #[i exploit] de día cero ocurre después que una vulnerabilidad se ha divulgado públicamente en la red y antes que se implemente un parche o corrección. Los atacantes apuntan a las vulnerabilidades descubiertas durante este tiempo. La detección de amenazas de vulnerabilidad de día cero, requiere una conciencia constante.
            .tarjeta.color-borde-slider.color-slider.p-4(titulo="Acceso a DNS")
              p La tunelización DNS utiliza el protocolo DNS para comunicar el tráfico que no es DNS a través del puerto 53. Envía tráfico HTTP y de otros protocolos a través de DNS. Hay varias razones válidas para usar la tunelización DNS. Sin embargo, también existen razones maliciosas para usar un servicio VPN de túnel DNS. Se pueden usar para disfrazar el tráfico saliente como DNS, ocultando datos que normalmente se comparten a través de una conexión a Internet. Las consultas de DNS se manipulan con la intención maliciosa de extraer datos del sistema comprometido, a la infraestructura del atacante. También se puede usar para devoluciones de llamadas de comando y control, desde la infraestructura del atacante, al sistema comprometido.
        .col-md-4.mt-5 
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/img21.png', alt='')

      h3.mt-5.mb-5 Criterios de respaldo y recuperación 
      .row.justify-content-center.mt-5 
        .col-md-5
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/img22.png', alt='')        
        .col-md-7 
          .cajon.color-primario.segundo-color-cajon-2.p-3
            .row.justify-content-center.p-3                
              p Hoy tienen más importancia en las empresas e instituciones, las acciones encaminadas al respaldo y recuperación de la información en cada uno de los procesos de la organización, por lo que se les considera activos muy valiosos.
          h4.mt-5 ¿Qué es una copia de seguridad de datos?
          p La copia de seguridad de datos es un método para copiar datos desde una ubicación de almacenamiento principal, a una ubicación de almacenamiento secundaria para proteger sus datos en caso de desastre, accidente o acto malicioso. Los datos son el elemento vital de las empresas modernas, y la pérdida de datos puede causar daños catastróficos e interrumpir las operaciones comerciales. Es por eso que la copia de seguridad de datos es esencial para todas las empresas, grandes y pequeñas.
          p Por lo general, los datos de respaldo significan todos los datos necesarios para las cargas de trabajo que ejecuta el servidor. Esto puede incluir documentos, archivos multimedia, archivos de configuración, imágenes de máquinas, sistemas operativos y archivos de registro. Esencialmente, cualquier dato que se desee conservar, se puede almacenar como datos de copia de seguridad.
          p Si bien es posible realizar una copia de seguridad de los datos de forma manual, para garantizar que los sistemas se realicen con regularidad y coherencia, la mayoría de las organizaciones utilizan una solución tecnológica para realizar copias de seguridad de sus datos.            
      
      p.mt-5.mb-5 La copia de seguridad de datos incluye varios conceptos importantes como:                     
      .row.justify-content-center.mt-5
        .col-md-11
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='', style='')

            .tarjeta.p-4(x="12%" y="91%" numero="+" style='border-radius: 10px; background-color: #FEEADA')
              p.mb-0.text-center.text-regular Se refiere a un empleado el cual tiene como función asegurarse que los sistemas de respaldo estén configurados correctamente, probarlos periódicamente y asegurarse que los datos críticos, realmente se encuentren respaldados.

            .tarjeta.p-4(x="39%" y="9%" numero="+" style='border-radius: 10px; background-color: #FEEADA')
              p.mb-0.text-center.text-regular Una organización debe decidir sobre una política de copia de seguridad, especificando qué archivos y sistemas son lo suficientemente importantes como para realizar una copia de seguridad y con qué frecuencia se debe realizar la copia de seguridad de los datos.

            .tarjeta.p-4(x="62%" y="91%" numero="+" style='border-radius: 10px; background-color: #FEEADA')
              p.mb-0.text-center.text-regular RPO se refiere a la cantidad de datos que una organización está dispuesta a perder si ocurre un desastre y está determinado por la frecuencia de la copia de seguridad. Si se realiza una copia de seguridad de los sistemas una vez al día, el RPO es de 24 horas. Cuanto menor sea el RPO, más recursos de red, computación y almacenamiento de datos se requieren, para lograr copias de seguridad frecuentes.

            .tarjeta.p-4(x="88%" y="9%" numero="+" style='border-radius: 10px; background-color: #FEEADA')
              p.mb-0.text-center.text-regular RTO se refiere al tiempo que tarda una organización en restaurar datos o sistemas a partir de una copia de seguridad y reanudar las operaciones normales. Para grandes volúmenes de datos y/o copias de seguridad almacenadas fuera de las instalaciones, la copia de datos y la restauración de sistemas pueden llevar tiempo, y se necesitan soluciones técnicas sólidas para garantizar un RTO bajo.
        
      h3.mt-5.mb-5 Depuración y calidad de datos 
      p.mt-5.mb-5 La limpieza de datos ha convertido la calidad y la integridad de los datos en una prioridad principal para las organizaciones, lo que facilita la gestión de su confianza en los conocimientos de los datos. Cuando la deficiencia de calidad de los datos no es identificada y validada a tiempo, es posible que se generen ineficiencias operativas, oportunidades desaprovechadas y afectaciones financieras, con lo que se concluye que, una adecuada depuración de datos, es vital para evitar altas pérdidas y afectaciones en la operación.
      p.mb-5  A continuación, se conocerá más acerca de la depuración de los datos.

      .row.justify-content-center.mt-5
        .col-md-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
            .row(titulo="Depuración de datos").px-5.py-2
              .row
                p.text-justify La depuración es el primero de los pasos para avanzar en la preparación de los datos, lo que significa que es prioritario identificar y corregir los errores de los datos en su conjunto, de manera que se pueda garantizar que solamente sean enviados los datos limpios y de excelente calidad al el sistema de información, objeto de ser trabajado. 
            div(titulo="Importancia en la depuración de datos").px-5.py-3
              .row
                p.text-justify Las tareas de procesamiento y limpieza de datos se convierten en relevantes para que, en los datos clasificados, en un único formato, el #[i software] de depuración ayude a limpiar y categorizar la información básica, en una etapa más avanzada, relacionada con la limpieza y perfilado de datos que corresponden al análisis de datos; finalmente, esto es lo que posibilita a los analistas encontrar patrones importantes en datos limpios y validados, que permitan apoyar las decisiones comerciales.
                p.text-justify A lo anterior se suma que, la actual dependencia hacia las tecnologías y los sistemas de información para la obtención de la información estratégica y de gran relevancia, asimismo la deficiente calidad de los datos, ocasiona un riesgo a la empresa; por lo tanto, al evitar las imprecisiones de los datos, esto hace que la empresa sea más competitiva en el mercado. De lo anterior se concluye, que la empresa debe orientar sus esfuerzos a la rigurosidad en la limpieza de datos, de manera que garantice que los datos son precisos y confiables.
            div(titulo="Diferencia entre depuración de datos y transformación de datos").px-5.py-3
              .row
                p.text-justify Cada vez son más abundantes las cantidades masivas de datos que las empresas manejan en sus operaciones comerciales y empresariales, datos que son almacenados en diferentes formatos y hasta en separados sistemas de información. Lo anterior se debe a que las empresas los crean como almacenes de datos y repositorios centrales, con el objetivo de respaldar, recuperar y analizar la información. En conclusión, la limpieza de datos y la transformación de datos, se definen como dos técnicas que contribuyen a la preparación de los datos comerciales para la integración, creación de informes y su completo análisis. 
                p.text-justify Uno de los objetivos fundamentales de la depuración de datos, consiste en garantizar la precisión de los mismos, que sean de calidad y se encuentren disponibles para ser analizados y apoyar la toma de decisiones. Un ejemplo clásico en las empresas, es disponer de registros duplicados o información imprecisa, lo que lleva a plantear el interrogante: ¿cómo iniciar la depuración de los datos? 
            div(titulo="Revisión de los datos depurados").px-5.py-3
              .row
                p.text-justify Si aún se continúa con algunos datos que pueden ser inconsistentes, es posible que se deba a uno o algunos de los siguientes problemas:
                ol.lista-ol--cuadro
                  li 
                  |#[span.color-vineta-3 >] Duplicaciones debido a múltiples fuentes de datos no coincidentes.
                  li 
                  |#[span.color-vineta-3 >] Errores de ingreso de datos, con faltas de ortografía e inconsistencias.  
                  li 
                  |#[span.color-vineta-3 >] Datos incompletos o campos faltantes.
                  li 
                  |#[span.color-vineta-3 >] Errores de puntuación o símbolos no conformes.   
                  li 
                  |#[span.color-vineta-3 >] Datos desactualizados.
                  li 
                  |#[span.color-vineta-3 >] La limpieza de datos toma estos problemas y, utilizando una variedad de métodos, limpia los datos y garantiza que coincidan con las reglas comerciales.                                                  
              
            div(titulo="Características de los datos limpios").px-5.py-3
              .row
                p.text-justify Se utilizan varias características y atributos de datos para medir la limpieza y la calidad general de los conjuntos de datos, incluidos los siguientes: precisión, consistencia, integridad, oportunidad, uniformidad y validez.
                p.text-justify Los equipos de administración de datos crean métricas de calidad de datos para rastrear esas características, así como también asuntos como las tasas de error y la cantidad total de errores en los conjuntos de datos. Muchos también intentan identificar el impacto comercial de las problemáticas de calidad de los datos y el valor comercial potencial de solucionarlos en parte, a través de encuestas y entrevistas, con ejecutivos comerciales.
        .col-md-4.mt-5
          figure
            img(src="@/assets/curso/temas/tema1/img24.png", alt="alt") 

    p La mejor alternativa para poder verificar #[span.text-bold la calidad de datos] es utilizando herramientas de ETL (#[i Extract Transform Load]); en primera instancia, cabe mencionar que la transformación y la depuración de datos, son conceptos diferentes; por otra parte, no obstante, son variadas las herramientas ETL que ofrecen características avanzadas de depuración, creación de perfiles y transformación de datos en la gestión de datos complejos; asimismo, en la migración de datos y la gestión de los mismos.

    <separador></separador>
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Técnicas de gestión de datos masivos

    p.mt-5.mb-5 Las técnicas de gestión de datos masivos permiten, de manera efectiva, dar un manejo apropiado a la información que sirva de base para la toma de decisiones y la disposición de información de calidad en cualquier momento. 
    .row.justify-content-center.mt-5        
      .col-md-10 
        .cajon.color-secundario.segundo-color-cajon-3.p-2
          .row.justify-content-center.p-3 
            p La gestión de los datos masivos, comprende el manejo y uso de las políticas, los procedimientos y las tecnologías que son utilizados para la recopilación, almacenamiento, administración, organización, recopilación y entrega de grandes cantidades de datos. En ese sentido, incluye la depuración de datos, la migración, la integración y la preparación para la generación de informes y sus posteriores análisis.     

    p.mt-5.mb-5 La #[i Big data] hace referencia a los almacenes de datos que se caracterizan por las "3 V".
    .tarjeta--container.row.mb-5 
      .col-md.tarjeta.color-tarjeta-extremo-verde.p-5 
        .row.justify-content-center.mb-4 
          .col-12 
            figure 
              img(src='@/assets/curso/temas/tema1/img25.png', alt= '') 
        p.text-center Altos volúmenes de información.
      .col-md.tarjeta.color-tarjeta-interno-verde.p-5 
        .row.justify-content-center.mb-4 
          .col-12 
            figure 
              img(src='@/assets/curso/temas/tema1/img26.png' , alt='')                  
        p.text-center Alta velocidad de procesamiento.
      .col-md.tarjeta.color-tarjeta-extremo-verde.p-5 
        .row.justify-content-center.mb-4 
          .col-12 
            figure 
              img(src='@/assets/curso/temas/tema1/img27.png', alt='')       
        p.text-center Amplia variedad en técnicas de gestión.

    p.mt-5.mb-5  Por otra parte, se encuentra estrechamente vinculada con el tema de gestión del ciclo de vida de los datos (DLM), el cual hace referencia a un enfoque basado en políticas para determinar qué información se debe almacenar, en qué lugar del entorno de TI de una organización y cuándo se pueden eliminar los datos de manera segura. Debido a que el #[i Big data] puede almacenar, procesar y gestionar la información de muchas organizaciones, este se encuentra en constante crecimiento y puede llegar a superar su capacidad, e incluso presentar otras contingencias.       
    p.mb-5 Así mismo, a continuación, se hace énfasis en algunos tipos de contingencias que se pueden presentar.
    .bg3.p-5.mg-img.mg-img-top
      .row.justify-content-center.mt-5 
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img28.png', alt='')      
        .col-md-8 
          LineaTiempoD.color-acento-contenido
            p(numero="1" titulo="Silos de datos") Algunas áreas o departamentos dentro de una empresa, pueden usar diferentes aplicaciones para almacenar información en diversas bases de datos que contienen información similar, pero muchos de los datos en las bases de información no son homogéneos. Considerar el caso de un minorista que almacena las direcciones de los clientes en su base de datos de #[i marketing], base de datos de servicio al cliente, base de datos de contabilidad y base de datos del sitio web de comercio electrónico. En otras palabras, si solo una de estas bases de datos contiene información ligeramente diferente sobre un cliente en particular, la dirección del cliente puede aparecer como "Avenida" y en la otra base de datos como "Calle". El resultado es que se pueden enfrentar conflictos en los correos electrónicos duplicados, falta de seguimiento, registros de errores de servicio al cliente, facturación duplicada e informes inexactos.

            p(numero="2" titulo="Almacenes de datos en crecimiento") La gestión de #[i Big data] se dificulta porque, la dimensión de los datos trabajados, son de gran tamaño y con tendencia al crecimiento. Tomando de referencia el caso de la dirección del cliente, es muy fácil corregirlo en una empresa pequeña con apenas un centenar de clientes. Por lo anterior, el error es fácil de identificar y, por ende, darle una solución de manera inmediata. Pero con minoristas y mayoristas y con millones de clientes y petabytes de datos, se necesitan diferentes soluciones. Con frecuencia es mover datos, de una base de datos a una solución de análisis y se requiere algo de tiempo por la gran cantidad de información. 

            p(numero="3" titulo="Alta complejidad de datos y su arquitectura") Es importante que la empresa disponga de herramientas para la atención de este sistema, de manera que se agilice el proceso y, especialmente, la respuesta pertinente y oportuna al cliente

            p(numero="4" titulo="Asegurar la calidad de los datos") Estas oportunidades de mejora, dificultan que las organizaciones garanticen la confiabilidad y precisión de los datos. Como se mencionó anteriormente, los silos de datos no sincronizados dificultan que los administradores determinen qué datos son correctos. Otro factor que limita la calidad de los datos es el error humano.

            p(numero="5" titulo="Dotación de personal inadecuado") Otro gran problema que complica la gestión de datos es la falta de personal cualificado. Pocos científicos de datos o algunos profesionales de #[i Big data] pueden cubrir todas las ofertas de trabajo actuales. Vale la pena señalar que los salarios pueden estar por encima del promedio del mercado.
            
            p(numero="6" titulo="Falta de apoyo ejecutivo") Otro problema con la gestión de datos a gran escala, son los gerentes y ejecutivos que no entienden la importancia y el valor de una buena gestión de datos. La tecnología de análisis predictivo y la inteligencia artificial, pueden atraer mucha atención y presupuesto, pero el proceso mundano de mover y limpiar datos es menos emocionante. Sin embargo, este problema parece haber disminuido algo.

            p(numero="7" titulo="Incorporación de una cultura amigable con los datos") El paso de una cultura de toma de decisiones basada en la intuición, la opinión o la experiencia, a una cultura basada en datos, es un cambio relevante para todas las empresas. Este cambio de mentalidad entre los empleados y gerentes llevará tiempo; inclusive, la mayoría de los expertos están de acuerdo en que la gestión eficaz de Big data se toma su tiempo.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
