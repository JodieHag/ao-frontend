import Head from 'next/head';
import { Box } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Layout from '../components/layout/layout';

export default function AvisoLegal() {
  console.log(`
              ██████╗ ██╗   ██╗███╗   ██╗██╗
             ██╔═══██╗██║   ██║████╗  ██║██║
             ██║   ██║██║   ██║██╔██╗ ██║██║                 ▄▀▀▀▀▀▄
             ██║   ██║╚██╗ ██╔╝██║╚██╗██║██║                ▐ ▄   ▄ ▌
             ╚██████╔╝ ╚████╔╝ ██║ ╚████║██║                ▐ ▀▀ ▀▀ ▌
              ╚═════╝   ╚═══╝  ╚═╝  ╚═══╝╚═╝                 ▀▄ ═ ▄▀
                                                               ▀▀▀

                        ▄▄▄                  ──────────────                 ▄▀█▀█▀▄
                       █▀█▀█ █▀█  █▀█ ▄███▄  ─────────────                 ▀▀▀▀▀▀▀▀▀  ▄▄▄▄▄
                       █▀█▀█ █▀██ █▀█ █▄█▄█             ▄▄                          ▄█▄█▄█▄█▄
                       █▀█▀█ █▀████▀█ █▄█▄█    ── ▄▄─── ▐▌                             ░░░
                       █▀█▀█ █▀████▀█ █▄█▄█ ▌██▐▌▐█▐▐▌█▌█▌█▌▌                          ░░░
    `);

  return (
    <Layout>
      <Head>
        <title>Aviso legal - Avistamientos Ovni</title>
        <meta
          name="description"
          content="Aviso legal Avistamientos ovni, Objetos no reconocidos, Objetos no humanos, Avistamientos extraños"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingY={3} paddingX={5}>
        <Text sizeText="display24" color="green" fontWeight="bold">
          AVISO LEGAL Y CONDICIONES GENERALES DE USO
        </Text>
        <Text sizeText="display24" color="green" fontWeight="bold">
          https://www.avistamientosovni.es
        </Text>
        <Text fontWeight="bold" marginY={2}>
          I. INFORMACIÓN GENERAL
        </Text>
        <Text marginY={2}>
          En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la
          Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se
          facilitan a continuación los siguientes datos de información general de este sitio web:
          <br />
          La titularidad de este sitio web, https://www.avistamientosovni.es, (en adelante, Sitio
          Web) la ostenta: Judit S.G, y cuyos datos de contacto son:
          <br />
          Ubicación: Vallgorguina, 08471, España
          <br />
          Email de contacto: hello@avistamientosovni.es
        </Text>
        <Text fontWeight="bold" marginY={2}>
          II. TÉRMINOS Y CONDICIONES GENERALES DE USO
        </Text>
        <Text fontWeight="bold" marginY={2}>
          El objeto de las condiciones: El Sitio Web
        </Text>
        <Text marginY={2}>
          El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es
          regular el acceso y la utilización del Sitio Web. A los efectos de las presentes
          Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de
          pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de
          navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en
          el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en
          línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni se reserva la facultad de modificar, en cualquier momento, y sin aviso
          previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que
          en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento
          Avistamientos Ovni pueda interrumpir, desactivar y/o cancelar cualquiera de estos
          elementos que se integran en el Sitio Web o el acceso a los mismos.
        </Text>
        <Text marginY={2}>
          El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es
          gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder
          disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de
          telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el
          Usuario.
        </Text>
        <Text marginY={2}>
          La publicación de nuevo Contenidos por parte del usuario al Sitio Web podrá hacerse
          mediante la suscripción o registro previo del Usuario o el envío de un formulario de
          contacto o email.
        </Text>
        <Text fontWeight="bold" marginY={2}>
          El Usuario
        </Text>
        <Text marginY={2}>
          El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para
          interactuar entre los Usuarios, y el Usuario y Avistamientos Ovni, como los comentarios
          y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde
          que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así
          como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente
          normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior,
          se recomienda al Usuario leerlas cada vez que visite el Sitio Web.
        </Text>
        <Text marginY={2}>
          El Sitio Web de Avistamientos Ovni proporciona gran diversidad de información, servicios y
          datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web.
          Esta responsabilidad se extenderá a:
        </Text>
        <Box as="ul" style={{ listStyle: 'hangul-consonant' }} marginX={5}>
          <Text as="li" marginY={1}>
            Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Avistamientos
            Ovni sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la
            moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los
            derechos de terceros o del mismo funcionamiento del Sitio Web.
          </Text>
          <Text as="li" marginY={1}>
            La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios
            extendidos por Avistamientos Ovni para el acceso a ciertos Contenidos o Servicios
            ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a
            Avistamientos Ovni acerca de cualquier hecho que permita el uso indebido de la
            información registrada en dichos formularios, tales como, pero no sólo, el robo,
            extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de
            proceder a su inmediata cancelación.
          </Text>
        </Box>
        <Text marginY={2}>
          En cualquier caso, Avistamientos Ovni no será responsable de las opiniones vertidas por
          los Usuarios a través de comentarios u otras herramientas de blogging o de participación
          que pueda haber. Avistamientos Ovni tampoco será responsable de la veracidad de las
          pubicaciones y reportes hechos por los usuarios y/o recopilados mediante webs de terceros.
        </Text>
        <Text marginY={2}>
          El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter
          comercial entre Avistamientos Ovni y el Usuario.
        </Text>
        <Text marginY={2}>
          Siempre en el respeto de la legislación vigente, este Sitio Web de Avistamientos Ovni se
          dirige a todas las personas, sin importar su edad, que puedan acceder y/o navegar por las
          páginas del Sitio Web.
        </Text>
        <Text fontWeight="bold" marginY={2}>
          III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni no garantiza la continuidad, disponibilidad y utilidad del Sitio Web,
          ni de los Contenidos o Servicios. Avistamientos Ovni hará todo lo posible por el buen
          funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso
          a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.
        </Text>
        <Text marginY={2}>
          Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a
          través de este Sitio Web, esté libre de error o cause un daño al sistema informático
          (software y hardware) del Usuario. En ningún caso Avistamientos Ovni será responsable por
          las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y
          el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas
          informáticos o los provocados por la introducción de virus.
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni tampoco se hace responsable de los daños que pudiesen ocasionarse a los
          usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en
          modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que
          pudieran ocurrir.
        </Text>
        <Text fontWeight="bold" marginY={2}>
          IV. POLÍTICA DE ENLACES
        </Text>
        <Text marginY={2}>
          Se informa que el Sitio Web de Avistamientos Ovni pone o puede poner a disposición de los
          Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y
          motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o
          gestionados por terceros.
        </Text>
        <Text marginY={2}>
          La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene
          por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en
          Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la
          visita de los mismos.
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni no ofrece ni comercializa por sí ni por medio de terceros los productos
          y/o servicios disponibles en dichos sitios enlazados.
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados. La
          información que aparece en estos enlaces de afiliados o los anuncios insertados, son
          facilitados por los propios anunciantes, por lo que Avistamientos Ovni no se hace
          responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni
          garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o
          la calidad de sus productos y/o servicios.
        </Text>
        <Text marginY={2}>
          Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o
          legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los
          enlaces.
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni en ningún caso revisará o controlará el contenido de otros sitios web,
          así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos,
          archivos y cualquier otro material existente en los referidos sitios enlazados.
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni no asume ninguna responsabilidad por los daños y perjuicios que
          pudieran producirse por el acceso, uso, calidad o licitud de los contenidos,
          comunicaciones, opiniones, productos y servicios de los sitios web no gestionados por
          Avistamientos Ovni y que sean enlazados en este Sitio Web.
        </Text>
        <Text marginY={2}>
          El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto,
          sitio web al Sitio Web de Avistamientos Ovni deberá saber que:
        </Text>
        <Text marginY={2}>
          No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o
          Servicios del Sitio Web sin autorización expresa de Avistamientos Ovni.
        </Text>
        <Text marginY={2}>
          No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio
          Web de Avistamientos Ovni, ni sobre los Contenidos y/o Servicios del mismo.
        </Text>
        <Text marginY={2}>
          A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no
          contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el
          ordenamiento jurídico español, salvo autorización expresa de Avistamientos Ovni.
        </Text>
        <Text marginY={2}>
          El establecimiento del hipervínculo no implicará la existencia de relaciones entre
          Avistamientos Ovni y el titular del sitio web desde el cual se realice, ni el conocimiento
          y aceptación de Avistamientos Ovni de los contenidos, servicios y/o actividades ofrecidos
          en dicho sitio web, y viceversa.
        </Text>
        <Text fontWeight="bold" marginY={2}>
          V. PROPIEDAD INTELECTUAL E INDUSTRIAL
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni por sí o como parte cesionaria, es titular de todos los derechos de
          propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en
          el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o
          textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de
          materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso,
          etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el
          ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y
          comunitaria en este campo, como los tratados internacionales relativos a la materia y
          suscritos por España.
        </Text>
        <Text marginY={2}>
          Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad
          Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la
          comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o
          parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y
          por cualquier medio técnico, sin la autorización de Avistamientos Ovni.
        </Text>
        <Text marginY={2}>
          El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de
          Avistamientos Ovni. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos,
          copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte
          físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin
          embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o
          sistema de seguridad que estuviera instalado en el Sitio Web.
        </Text>
        <Text marginY={2}>
          En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio
          Web suponga una violación de los derechos de protección de la propiedad intelectual,
          deberá comunicarlo inmediatamente a Avistamientos Ovni a través de los datos de contacto
          del apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.
        </Text>
        <Text fontWeight="bold" marginY={2}>
          VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN
        </Text>
        <Text marginY={2}>
          Avistamientos Ovni se reserva la facultad de presentar las acciones civiles o penales que
          considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el
          incumplimiento de las presentes Condiciones.
        </Text>
        <Text marginY={2}>
          La relación entre el Usuario y Avistamientos Ovni se regirá por la normativa vigente y de
          aplicación en el territorio español. De surgir cualquier controversia en relación con la
          interpretación y/o a la aplicación de estas Condiciones las partes someterán sus
          conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que
          correspondan conforme a derecho.
        </Text>
      </Box>
    </Layout>
  );
}
