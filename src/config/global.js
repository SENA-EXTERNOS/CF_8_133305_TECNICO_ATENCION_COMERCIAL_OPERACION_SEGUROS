export default {
  global: {
    componenteFormativo:
      'Validación de información y optimización del modelo desarrollado',
    descripcionCurso:
      'En este componente formativo, se van a desarrollar conceptos generales sobre los diferentes aspectos legales en la validación de datos; de igual manera, cómo cuidar la seguridad de la información, junto con la identificación de problemas y cómo corregirlos; finalmente, alcanzar la optimización del uso de los recursos y la implementación de los procesos, con la utilización de datos masivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Validación datos legales y seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Derechos de autor: políticas de confidencialidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seguridad de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de gestión de datos masivos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Optimización del modelo de gestión de datos masivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ingeniería de requisitos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Políticas de seguridad de la información',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de gestión de datos masivos',
      referencia:
        'Martínez, R. (2017). Cuestiones de ética jurídica al abordar proyectos de Big Data. El contexto del Reglamento general de protección de datos. <i>Dilemata,</i> (24), p. 151-164. ',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6066833',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Carrizo, D. y Rojas, J. (2018). Metodologías, técnicas y herramientas en ingeniería de requisitos: un mapeo sistemático. <i>Ingeniare. Rev. chil. Ing., 26</i>(3), p.473-485. ',
      tipo: 'Artículo',
      link:
        'https://www.scielo.cl/scielo.php?pid=S0718-33052018000300473&script=sci_abstract',
    },
    {
      tema: 'Seguridad de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022 1 de julio). <i>Ejemplo de Procesamiento de datos</i> [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=K3U38rfBGWw',
    },
    {
      tema: 'Técnicas de gestión de datos masivos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022 27 de junio). <i>Técnicas para el análisis de datos [video].Youtube.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8&t=51s',
    },
  ],
  glosario: [
    {
      termino: 'Diagrama',
      significado:
        'es la representación de un proceso, una actividad, una función, un modelo, se refiere a un concepto que puede ser expresado gráficamente.',
    },
    {
      termino: 'DNS',
      significado:
        'son las siglas de Domain Name System (Sistema de nombres de dominio), la cual hace referencia a una tecnología para resolver los nombres en las redes.',
    },
    {
      termino: 'Flujograma',
      significado:
        'es una representación gráfica a través de convenciones de una actividad o un proceso.',
    },
    {
      termino: 'Seguridad pública',
      significado:
        'se refiere a las acciones y estrategias que garantizan la seguridad a los usuarios públicos, tanto de la seguridad física, como de la informática.',
    },
    {
      termino: 'SPAM',
      significado:
        'se refiere a la información y comunicados que nos entregan sin nuestra autorización. ',
    },
    {
      termino: 'Spyware',
      significado:
        'se refiere a programas, aplicaciones o software que realizan espionaje en nuestros dispositivos y sistemas de información.',
    },
    {
      termino: 'Troyano',
      significado:
        'es una clase de virus que ingresa al sistema para dañarlo o tomar control del mismo.',
    },
    {
      termino: 'Tunelización',
      significado:
        'opera a través del encapsulado de paquetes, es decir, incrusta paquetes dentro de otros. Normalmente, se utiliza en redes privadas con el objeto de transmitir datos de manera eficiente.',
    },
    {
      termino: 'VPN',
      significado:
        'se refiere a <i>Virtual Private Network</i>, que significa una red virtual privada que son utilizadas para brindar seguridad a la información transmitida.',
    },
    {
      termino: 'WI-FI público',
      significado:
        'se refiere a una red con conexión a <i>WI-FI</i> de acceso al público en general, sin restricciones para su conexión.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, J. (2015). <i>Utilización de las bases de datos relaciones en el sistema de gestión y almacenamiento de datos.</i> Ediciones Paraninfo.',
      link:
        'https://biblioteca.sena.edu.co/F/1Q8IM9F3VLEE48JPJ4AVA2ETB86D2KSICP6VMICY4VJIJR4U8D-21875?func=full-set-set&set_number=005687&set_entry=000001&format=999',
    },
    {
      referencia:
        'Joyanes, L. (2019). <i>Inteligencia de negocios y analítica de datos: una visión global de business intelligence & analytics.</i> Alfaomega.',
      link:
        'https://biblioteca.sena.edu.co/F/1Q8IM9F3VLEE48JPJ4AVA2ETB86D2KSICP6VMICY4VJIJR4U8D-22661?func=full-set-set&set_number=005695&set_entry=000002&format=999 ',
    },
    {
      referencia:
        'Luis, A. (2018). Industria 4.0: <i>la cuarta revolución industrial.</i> Alfaomega.',
      link:
        'https://biblioteca.sena.edu.co/F/1Q8IM9F3VLEE48JPJ4AVA2ETB86D2KSICP6VMICY4VJIJR4U8D-24482?func=full-set-set&set_number=005695&set_entry=000005&format=999',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
