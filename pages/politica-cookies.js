import Head from 'next/head';
import { Box } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Layout from '../components/layout/layout';

export default function PoliticaCookies() {
  return (
    <Layout>
      <Head>
        <title>Política de Cookies - Avistamientos Ovni</title>
        <meta
          name="description"
          content="Política de Cookies Avistamientos ovni, Objetos no reconocidos, Objetos no humanos, Avistamientos extraños"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingY={3} paddingX={5}>
        <Text sizeText='display24' color='green' fontWeight='bold'>Política de Cookies</Text>
        <Text marginY={2}>
          En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de
          navegación, puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los
          usuarios.
        </Text>
        <Text marginY={2}>
          Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se
          almacenen en su dispositivo.
        </Text>
        <Text marginY={2}>
          Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de
          cookies, tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.
        </Text>
        <Text marginY={2}>
          Es muy importante que leas la presente política de cookies y comprendas que, si continúas navegando,
          consideraremos que aceptas su uso.
        </Text>
        <Text marginY={2}>
          Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la
          Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo
          de los referidos mecanismos.
        </Text>

        <Text fontWeight='bold' marginY={2}>Entidad Responsable</Text>
        <Text marginY={2}>
          La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido
          establecido por la Ley de Protección de Datos Personales es la página Avistamientos Ovni, propiedad de –
          Vallgorguina, 08471, España.
        </Text>

        <Text fontWeight='bold' marginY={2}>¿Qué son las cookies?</Text>
        <Text marginY={2}>
          Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la
          información de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio
          web. Es decir, se trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y
          que sirven para identificar al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la
          visita del usuario y guardar cierta información. Su uso es común y frecuente en la web ya que permite a las
          páginas funcionar de manera más eficiente y conseguir una mayor personalización y análisis sobre el
          comportamiento del usuario.
        </Text>

        <Text fontWeight='bold' marginY={2}>¿Qué tipos de cookies existen?</Text>
        <Text marginY={2}>
          Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a
          información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas
          por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras
          y prestar nuestros servicios de una manera más eficiente y personalizada.
        </Text>
        <Text marginY={2}>
          Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que
          expiran cuando el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para
          el que sirven (por ejemplo, para que el usuario se mantenga identificado en los servicios de ) o bien cuando
          se borran manualmente.
        </Text>
        <table>
          <thead>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Caducidad</th>
          <th>Finalidad</th>
          <th>Clase</th>
          </thead>
          <tbody>
          <tr>
            <td>
              _ga
            </td>
            <td>
              De Terceros (Google Analytics)
            </td>
            <td>
              2 años
            </td>
            <td>
              Se usa para distinguir usuarios y sesiones.
            </td>
            <td>
              No exenta
            </td>
          </tr>
          <tr>
            <td>
              _ga_V67R5S2BX7
            </td>
            <td>
              De Terceros (Google Analytics)
            </td>
            <td>
              2 años
            </td>
            <td>
              Se usa para determinar nuevas sesiones o visitas. La primera vez que un
              usuario entre en el sitio web a través de un navegador se instalará esta cookie. Cuando este usuario
              vuelva a
              entrar en la web con el mismo navegador, la cookie considerará que es el mismo usuario. Solo en el caso de
              que el usuario cambie de navegador, se considerará otro usuario.
            </td>
            <td>
              No exenta
            </td>
          </tr>
          <tr>
            <td>
              _gat
            </td>
            <td>
              De Terceros (Google Analytics)
            </td>
            <td>
              10 minutos
            </td>
            <td>
              Se utiliza para limitar la velocidad de petición, la limitación de la recogida de datos en los sitios de
              alto tráfico.
            </td>
            <td>
              No exenta
            </td>
          </tr>
          <tr>
            <td>
              avistamientos_cookie
            </td>
            <td>
              De Terceros (Google Analytics)
            </td>
            <td>
              1 año
            </td>
            <td>
              Ccontiene el valor de si se ha aceptado su instalación de cookies.
            </td>
            <td>
              No exenta
            </td>
          </tr>
          </tbody>
        </table>
        <Text marginY={2}>
          Adicionalmente, en función de su objetivo, las cookies pueden clasificarse de la siguiente forma:
        </Text>

        <Text fontWeight='bold' marginY={2}>Cookies de rendimiento</Text>
        <Text marginY={2}>
          Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo
          que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta
          tipología se incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión
          de vídeo que sean compatibles con su navegador. Los objetos guardados en el “carrito de la compra” en los
          servicios de e-commerce tales como tiendas.
        </Text>

        <Text fontWeight='bold' marginY={2}>Cookies de geo-localización</Text>
        <Text marginY={2}>
          Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta
          cookie es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.
        </Text>

        <Text fontWeight='bold' marginY={2}>Cookies de registro</Text>
        <Text marginY={2}>
          Las cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su
          sesión, y se utilizan para identificarle en los servicios con los siguientes objetivos:
        </Text>
        <Text marginY={2}>
          Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro
          momento u otro día vuelve a entrar en dicho servicio, seguirá identificado, facilitando así su navegación sin
          tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad
          [cerrar sesión], de forma que esta cookie se elimina y la próxima vez que entre en el servicio el usuario
          tendrá que iniciar sesión para estar identificado.
        </Text>
        <Text marginY={2}>
          Comprobar si el usuario está autorizado para acceder a ciertos servicios, por ejemplo, para participar en un
          concurso.
        </Text>
        <Text marginY={2}>
          Adicionalmente, algunos servicios pueden utilizar conectores con redes sociales tales como Facebook o Twitter.
          Cuando el usuario se registra en un servicio con credenciales de una red social, autoriza a la red social a
          guardar una Cookie persistente que recuerda su identidad y le garantiza acceso a los servicios hasta que
          expira. El usuario puede borrar esta Cookie y revocar el acceso a los servicios mediante redes sociales
          actualizando sus preferencias en la red social que específica.
        </Text>

        <Text fontWeight='bold' marginY={2}>Cookies de analíticas</Text>
        <Text marginY={2}>
          Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie
          analítica en el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas
          visitas a los servicios de para identificar de forma anónima al visitante. Los objetivos principales que se
          persiguen son:
        </Text>
        <Text marginY={2}>
          Permitir la identificación anónima de los usuarios navegantes a través de la cookie (identifica navegadores y
          dispositivos, no personas) y por lo tanto la contabilización aproximada del número de visitantes y su
          tendencia en el tiempo.
          Identificar de forma anónima los contenidos más visitados y por lo tanto más atractivos para los usuarios
          Saber si el usuario que está accediendo es nuevo o repite visita.
        </Text>
        <Text marginY={2}>
          Importante: Salvo que el usuario decida registrarse en un servicio de , la cookie nunca irá asociada a ningún
          dato de carácter personal que pueda identificarle. Dichas cookies sólo serán utilizadas con propósitos
          estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.
        </Text>

        <Text fontWeight='bold' marginY={2}>Cookies de publicidad</Text>
        <Text marginY={2}>
          Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los
          servicios de . Entre otros, se almacena la duración o frecuencia de visualización de posiciones publicitarias,
          la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que ayudan a
          conformar un perfil de interés publicitario. De este modo, permiten ofrecer publicidad afín a los intereses
          del usuario.
        </Text>

        <Text marginY={2} ontWeight='bold'>
          Cookies publicitarias de terceros
        </Text>
        <Text marginY={2}>
          Además de la publicidad gestionada por las webs de en sus servicios, las webs de ofrecen a sus anunciantes la
          opción de servir anuncios a través de terceros (“Ad-Servers”). De este modo, estos terceros pueden almacenar
          cookies enviadas desde los servicios de procedentes de los navegadores de los usuarios, así como acceder a los
          datos que en ellas se guardan.
        </Text>
        <Text marginY={2}>
          Las empresas que generan estas cookies tienen sus propias políticas de privacidad. En la actualidad, las webs
          de utilizan la plataforma Doubleclick (Google) para gestionar estos servicios. Para más información, acuda a
          <a href='http://www.google.es/policies/privacy/ads/#toc-doubleclick' target='_blank'
             rel='nofollow, noopener'>http://www.google.es/policies/privacy/ads/#toc-doubleclick</a> y a <a
          href='http://www.google.es/policies/privacy/ads/' target='_blank'
          rel='nofollow, noopeneer'>http://www.google.es/policies/privacy/ads/</a>
        </Text>

        <Text marginY={2} ontWeight='bold'>
          ¿Cómo puedo deshabilitar las cookies en mi navegador?
        </Text>
        <Text marginY={2}>
          Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se
          desea, impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies
          tiene instaladas y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.
        </Text>
        <Text marginY={2}>
          Para ampliar esta información consulte las instrucciones y manuales de su navegador:
        </Text>
        <Text marginY={2}>
          Para más información sobre la administración de las cookies en Google Chrome:
          <a href='https://support.google.com/chrome/answer/95647?hl=es' target='_blank' rel='noopener, nofollow'>
            https://support.google.com/chrome/answer/95647?hl=es
          </a>
        </Text>
        <Text marginY={2}>
          Para más información sobre la administración de las cookies en Internet Explorer:
          <a href='http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions' target='_blank'
             rel='noopener, nofollow'>
            http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions
          </a>
        </Text>
        <Text marginY={2}>
          Para más información sobre la administración de las cookies en Mozilla Firefox:
          <a href='http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we' target='_blank'
             rel='noopener, nofollow'>
            http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
          </a>
        </Text>
        <Text marginY={2}>
          Para más información sobre la administración de las cookies en Safari:
          <a href='http://www.apple.com/es/privacy/use-of-cookies/' target='_blank' rel='noopener, nofollow'>
            http://www.apple.com/es/privacy/use-of-cookies/
          </a>
        </Text>
        <Text marginY={2}>
          Para más información sobre la administración de las cookies en Opera:
          <a href='http://help.opera.com/Windows/11.50/es-ES/cookies.html' target='_blank' rel='noopener, nofollow'>
            http://help.opera.com/Windows/11.50/es-ES/cookies.html
          </a>
        </Text>
        <Text marginY={2}>
          Si desea dejar de ser seguido por Google Analytics visite:
          <a href='http://tools.google.com/dlpage/gaoptout' target='_blank' rel='noopener, nofollow'>
            http://tools.google.com/dlpage/gaoptout
          </a>
        </Text>

        <Text marginY={2} ontWeight='bold'>
          Para saber más sobre las cookies
        </Text>
        <Text marginY={2}>
          Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en
          el siguiente enlace:
          <a href='http://www.youronlinechoices.com/es/' target='_blank' rel='noopener, nofollow'>
             http://www.youronlinechoices.com/es/
          </a>
        </Text>
        <Text marginY={2}>
          Protección de datos de Google Analytics:
          <a href='http://www.google.com/analytics/learn/privacy.html' target='_blank' rel='noopener, nofollow'>
            http://www.google.com/analytics/learn/privacy.html
          </a>
        </Text>
        <Text marginY={2}>
          Cómo usa Google Analytics las cookies:
          <a
            href='https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs'
            target='_blank' rel='noopener, nofollow'>
             https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs
          </a>
        </Text>

        <Text fontWeight='bold' marginY={2}>Actualizaciones y cambios en la política de privacidad/cookies</Text>
        <Text marginY={2}>
          Las webs de pueden modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o
          con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección
          de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
        </Text>
        <Text marginY={2}>
          Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios
          bien mediante la web o a través de correo electrónico a los usuarios registrados.
        </Text>
      </Box>
    </Layout>
  );
}
