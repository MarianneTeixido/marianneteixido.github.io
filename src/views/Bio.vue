<template>
  <article class="about-content">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7">
        <h1>Marianne Teixidó</h1>

        <figure>
          <FlowmapPhoto />
        </figure>

        <!-- ESPAÑOL -->
        <template v-if="current === 'ES'">
          <div class="bio-section">
            <h2>Semblanza</h2>
            <p>Artista, música y desarrolladora transhackfeminista. Mi práctica se sitúa en la intersección entre arte,
              tecnología y teoría crítica, explorando el código como material poético y político. A través de la escritura
              expandida, el sonido y la experimentación algorítmica, propongo otros modos del saber-hacer para ocupar la
              tecnología como espacio de resistencia y creación de temporalidades alternativas.</p>

            <p>Mi trabajo se materializa en performances de live coding, composiciones electroacústicas, instalaciones
              interactivas e investigaciones teóricas que cuestionan las narrativas hegemónicas de la tecnología,
              proponiendo en su lugar prácticas ciberfeministas y no binarias de creación.</p>

            <a class="cv-pill" :href="cvEs" download="Marianne-Teixido_CV_ES.pdf" target="_blank" rel="noopener"
              data-umami-event="descarga-cv" data-umami-event-idioma="ES"><i class="bi bi-download"></i> Descargar CV</a>
          </div>

          <div class="bio-section">
            <h2>Formación Académica</h2>
            <ul class="timeline">
              <li>
                <strong>Doctorado en Música</strong> - Especialidad Tecnología Musical<br>
                Facultad de Música, Universidad Nacional Autónoma de México<br>
                <em>Investigación en proceso: "XYK. Síntesis de voces disidentes posthumanas con redes neuronales"</em><br>
                2024 - 2028
              </li>
              <li>
                <strong>Maestría en Historia del Arte</strong> - Especialidad Teoría y Metodología<br>
                Facultad de Filosofía y Letras / Instituto de Investigaciones Estéticas, UNAM<br>
                <em>Tesis: "Para tejer tiempos. Temporalidades otras para pensar y escribir sobre prácticas artísticas con
                  tecnologías"</em><br>
                2021 - 2022
              </li>
              <li>
                <strong>Licenciatura en Ciencias de la Comunicación</strong> - Especialidad Producción Audiovisual<br>
                Facultad de Ciencias Políticas y Sociales, UNAM<br>
                <em>Tesis: "Videoarte y resistencia política: alternativas al discurso oficial en torno al caso Iguala en
                  la obra de Bruno Varela"</em><br>
                2013 - 2017
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Investigación y Proyectos Actuales</h2>
            <ul>
              <li><strong>[R.A.M.] Redes Autónomas de Memoria</strong> - Coordinación de la infraestructura tecnológica
                autónoma transhackfeminista, 2021 - presente</li>
              <li><strong>XYK</strong> - Investigación doctoral sobre síntesis de voces disidentes posthumanas con redes
                neuronales, 2024 - 2028</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Reconocimientos y Premios</h2>
            <ul>
              <li>
                <strong>Best Music Award</strong> - New Interfaces for Musical Expression (NIME)<br>
                Por "deep structures" en colaboración con Emilio Ocelotl, Ciudad de México, 2023
              </li>
              <li>
                <strong>Mención Honorífica</strong> - Tercera Edición de la Bienal Internacional de Videoarte y Animación
                Puebla 2018<br>
                Por el video "Fragmentos"
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Becas y Residencias</h2>

            <h3>Becas Individuales</h3>
            <ul>
              <li><strong>Jóvenes Creadores</strong> - Sistema Nacional de Creadores de Arte, Medios Audiovisuales / Nuevas
                Tecnologías, por "Oráculo para cuerpos tentaculares", 2026</li>
              <li><strong>Beca completa</strong> - School for Poetic Computation (SFPC), Nueva York, curso Handmade
                Datasets, 2026</li>
              <li><strong>Estancia de investigación</strong> - PAEP-UNAM, Stiftung Universität Hildesheim, Alemania: "XYK.
                Perceptual evaluation of voice latent space interpolation through real-time synthesis", 2026</li>
              <li><strong>Beca nacional de doctorado SECIHTI</strong> - Doctorado en Música, UNAM, 2024-2028</li>
              <li><strong>manifiest(ia)s</strong> - Convocatoria para compositoras Creación con perspectiva, CMMAS, 2022
              </li>
              <li><strong>Estancia de investigación</strong> - Convergencia TransHackFeminista, Calafou y Hangar,
                Barcelona. PAEP, 2022</li>
              <li><strong>[R.A.M.] Redes Autónomas de Memoria</strong> - Programa de Acompañamiento 2022, Piso 16, Cultura
                UNAM, 2021</li>
              <li><strong>Beca Nacional CONACyT</strong> - Programa de Posgrado, Maestría en Historia del Arte, 2021-2022
              </li>
              <li><strong>Jóvenes Creadores</strong> - FONCA, Medios Audiovisuales, Nuevas Tecnologías, por "Unknown Author.
                Meta-imágenes cartográficas", 2018-2019</li>
            </ul>

            <h3>Becas Colectivas</h3>
            <ul>
              <li><strong>[R.A.M.] Redes Autónomas de Memoria</strong> - Seed funding por Numun Found, 2022-2024</li>
              <li><strong>RGGTRN</strong> - Apoyos Especiales FONCA para Conferencia Internacional de Live Coding, Madrid,
                2019</li>
              <li><strong>PiranhaLab</strong> - PADID, Centro Nacional de las Artes, 2018</li>
              <li><strong>RGGTRN, Bellacode Tour</strong> - IBERMUSICAS, 2017</li>
            </ul>

            <h3>Residencias Artísticas</h3>
            <ul>
              <li><strong>Stiftung Universität Hildesheim, Alemania</strong> - 23 de noviembre al 11 de diciembre de 2026
                (próxima)</li>
              <li><strong>CCRMA, Stanford University</strong> - Enero 2024</li>
              <li><strong>TransHachFeminist! @ Calafou, Catalonia</strong> - Agosto 2022</li>
              <li><strong>Hangar, Toplab Barcelona</strong> - Julio 2022</li>
              <li><strong>LacunaLab, Berlín</strong> - Enero 2019</li>
              <li><strong>MediaLab Prado, Madrid</strong> - Enero 2019</li>
              <li><strong>MediaLab UIO, Quito</strong> - Mayo-Junio 2018</li>
              <li><strong>Fundación Telefónica, Lima</strong> - Mayo 2018</li>
              <li><strong>Platohedro, Medellín</strong> - Mayo 2018</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Experiencia Profesional</h2>

            <h3>Docencia</h3>
            <ul>
              <li>
                <strong>Docente - <a
                    href="https://desarrolloacademico.cenart.gob.mx/curso-oci-2025-2026-2-poeticas-situadas-de-lo-artificial-eticas-especulativas-con-las-ias/"
                    target="_blank">Poéticas situadas de lo artificial. Éticas especulativas con las IAs</a></strong><br>
                Oferta Curricular Interdisciplinaria, CENART<br>
                Impartido en dupla con Yoatzin Balbuena<br>
                2025
              </li>
              <br>
              <li>
                <strong>Docente - <a
                    href="https://desarrolloacademico.cenart.gob.mx/diplomado-transitos-34-exploraciones-intermediales-con-el-cuerpo-y-el-sonido/"
                    target="_blank">Exploraciones intermediales con el cuerpo y el sonido</a></strong><br>
                Diplomado Tránsitos Nodo 34, CENART <br>
                Impartido en colaboración con Claudia Cabrera. Además, clase magistral de SuperCollider, LIMME, UNAM <br>
                2025
              </li>
              <br>
              <li>
                <strong>Docente de asignatura</strong> - Código Creativo en STEAMLab<br>
                Carreras de Arquitectura de Interiores, Diseño Industrial, Diseño Textil y Moda, Cine y Televisión,
                Mercadotecnia y Publicidad<br>
                Centro de Diseño, Cine y Televisión<br>
                2019 - 2023
              </li>
              <br>
              <li>
                <strong>Docente de asignatura</strong> - ABC Digital en Tronco Común<br>
                Centro de Diseño, Cine y Televisión<br>
                2020 - 2021
              </li> <br>
              <li>
                <strong>Docente de asignatura</strong> - Arte en la Red<br>
                Licenciatura en Arte Digital, UAEM<br>
                2021
              </li>
            </ul>

            <h3>Industria Tecnológica</h3>
            <ul>
              <li>
                <strong>Especialista de desarrollo</strong> - B Drive IT<br>
                Colaboré como desarrolladora fullstack en el equipo de Proyectos Especiales en el área de Inteligencia
                Artificial en implementación de chatbots y avatares 3D para asistentes virtuales en la web | 2024 - 2025
              </li> <br>
              <li>
                <strong>Desarrolladora Web</strong> - Engine Core<br>
                Colaboré como desarrolladora frontend con el equipo de desarrollo y marketing, además de realizar diseño
                UI/UX & optimización SEO | 2024
              </li>
              <br>
              <li>
                <strong><a href="https://www.instagram.com/p/DFY4WdfxtEb/?img_index=9" target="_blank">Contribuidora al
                    código de p5.js</a></strong> -  Processing Foundation<br>
                Participé en el equipo de traducción al español de la documentacion de P5.js en la sección de Referencias contribuyendo al código en Github | 2024
              </li>
            </ul>

            <h3>Curaduría y Gestión Cultural</h3>
            <ul>
              <li><strong>Curadora</strong> - Tecnologías Otras. Saberes-hacer en el Abya Yala, Museo Universitario
                Leopoldo Flores, UAEM, Toluca, 2026</li>
              <li><strong>Coordinadora</strong> - R.A.M. (Redes Autónomas de Memoria), infraestructura tecnológica
                autónoma transhackfeminista, 2021 - presente</li>
              <li><strong>Curadora (PiranhaLab)</strong> - 5.º Ciclo de Concierto EDGES, Centro Multimedia,
                CENART, 2020</li>
              Para este ciclo de conciertos desarrollamos espacio virtual e inmmersivo en 3D llamado Panorama hecho con
              software libre autogestionado por nosotres como PiranhaLab
              <li><strong>Gestora y productora</strong> - Concierto de Live Coding, Festival Tiempo de Mujeres, Ex-Teresa
                Arte Actual, 2020</li>
              <li><strong>Curadora y gestora</strong> - Ciclo de talleres PiranhaLab, PADID, Centro de Cultura Digital,
                2019</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Publicaciones Seleccionadas</h2>
            <ul>
              <li>
                <strong><a href="https://mitpress.mit.edu/9780262049702/the-supercollider-book/"
                    target="_blank"><em>Artist
                      Statement</em> en The SuperCollider Book. Second Edition</a></strong><br>
                MIT Press | Part V: Projects and perspectives, Chapter 24: Artists' Statements, 2025
              </li>
              <br>
              <li>
                <strong><a href="https://www.cmmas.com/copy-3-of-ideassonicas25/ideassonicas%2Fsonicideas-23"
                    target="_blank">Live coding como práctica ciber-hackfeminista</a></strong><br>
                Ideas Sónicas No. 29, CMMAS, 2023
              </li>
              <br>
              <li>
                <strong><a href="https://www.repositorio.fam.unam.mx/handle/123456789/139" target="_blank">Panorama.
                    Escritura de espacios libres e inmersivos para el performance audiovisual</a></strong><br>
                En colaboración con Emilio Ocelotl y Dorian Sotomayor<br>
                En "Algoritmos Arruinados. Perspectivas situadas de tecnología musical", UNAM, 2023
              </li><br>
              <li>
                <strong><a
                    href="https://www.tierraadentro.cultura.gob.mx/subversion-ciber-feminista-utopias-tecnologicas-palabra-musica-codigo/"
                    target="_blank">Subversión (ciber) feminista. Utopías tecnológicas, palabra - música -
                    código</a></strong><br>
                Revista Tierra Adentro, 2020
              </li><br>
              <li>
                <strong><a href="https://doi.org/10.5281/zenodo.3946163" target="_blank">Bellacode: localized textual
                    interfaces for live coding music</a></strong><br>
                En colaboración con Luis N. Del Angel, Emilio Ocelotl y David Ogborn<br>
                Proceedings of the Fourth International Conference on Live Coding, 2019
              </li> <br>
              <li>
                <strong><a href="http://dx.doi.org/10.12801/1947-5403.2018.10.01.11" target="_blank">Saborítmico: A
                    Report from the Dance Floor in Mexico</a></strong><br>
                En colaboración con Emilio Ocelotl y Luis N. Del Angel<br>
                Dancecult Journal of Electronic Dance Music Culture, 2018
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Habilidades Técnicas</h2>

            <h3>Lenguajes de Programación y tecnologías de desarrollo</h3>
            <p>JavaScript, Python, C++, Three.js, React, Vue, TypeScript, Bootstrap, Tailwind, HTML5, CSS3, Git,
              Firestore, Firebase, Node, Java, Pytorch, MySQL, API Rest, Google Cloud Platform (GCP), Netlify, Vercel,
              Docker, Kubernetes,
              Bash, Pytorch, TensorFlow, Keras, Flask, Jupyter Notebooks
            </p>

            <h3>Entornos Creativos de Programación</h3>
            <p>SuperCollider, TidalCycles, SonicPi, Hydra, Processing, OpenFrameworks, p5.js, ml5.js, Three.js, P5LIVE,
              Fluxus, Cinder, FoxDot, Tone.js</p>

            <h3>Sistemas Operativos</h3>
            <p>Linux (Debian, Ubuntu, Linux Mint), Raspbian, MacOs, Windows</p>

            <h3>Otras herramientas</h3>
            <p>Github, Gitlab, Figma, SCRUM, Notion, Adobe Creative Suite (Premiere, Audition, After Effects, Photoshop,
              Illustrator), TouchDesigner, ProTools,
              Kdenlive, Reaper, Reallusion, Logic, Ableton Live, Final Cut, Resolume Arena,
              Ardour, Audacity, Blender, GIMP, Inkscape, OBS, ffmpeg, LaTeX, Raspberry Pi, ESP32 / Arduino</p>

            <h3>Áreas de Especialización</h3>
            <p>Inteligencia artificial, machine learning, programación y diseño web, programación al vuelo (live coding), programación y electrónica creativa, música electroacústica, síntesis neuronal de voz, espacialización y ambisonics, biomateriales (bioplásticos de alginato y agar, celulosa bacteriana, cerámica de huevo), arte digital, sistemas de control de versiones, sensores, procesamiento de bases de datos, realidad virtual y 3D, procesamiento de señales de audio e investigación artística.</p>
          </div>

          <p class="update-date"><em>Actualización: Octubre 2026</em></p>
        </template>

        <!-- ENGLISH -->
        <template v-else>
          <div class="bio-section">
            <h2>Statement</h2>
            <p>Artist, musician and transhackfeminist developer. My practice is situated at the intersection of art,
              technology and critical theory, exploring code as poetic and political material. Through expanded writing,
              sound and algorithmic experimentation, I propose other modes of knowing-doing to occupy technology as a
              space of resistance and creation of alternative temporalities.</p>

            <p>My work materializes in live coding performances, electroacoustic compositions, interactive installations
              and theoretical research that question the hegemonic narratives of technology, proposing instead
              cyberfeminist and non-binary practices of creation.</p>

            <a class="cv-pill" :href="cvEn" download="Marianne-Teixido_CV_EN.pdf" target="_blank" rel="noopener"
              data-umami-event="descarga-cv" data-umami-event-idioma="EN"><i class="bi bi-download"></i> Download CV</a>
          </div>

          <div class="bio-section">
            <h2>Academic Background</h2>
            <ul class="timeline">
              <li>
                <strong>PhD in Music</strong> - Music Technology Specialization<br>
                Faculty of Music, Universidad Nacional Autónoma de México<br>
                <em>Research in progress: "XYK. Synthesis of posthuman dissident voices with neural networks"</em><br>
                2024 - 2028
              </li>
              <li>
                <strong>Master's in Art History</strong> - Theory and Methodology Specialization<br>
                Faculty of Philosophy and Letters / Institute of Aesthetic Research, UNAM<br>
                <em>Thesis: "To weave times. Other temporalities to think and write about artistic practices with
                  technologies"</em><br>
                2021 - 2022
              </li>
              <li>
                <strong>Bachelor's in Communication Sciences</strong> - Audiovisual Production Specialization<br>
                Faculty of Political and Social Sciences, UNAM<br>
                <em>Thesis: "Video art and political resistance: alternatives to the official discourse around the Iguala
                  case in the work of Bruno Varela"</em><br>
                2013 - 2017
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Current Research and Projects</h2>
            <ul>
              <li><strong>[R.A.M.] Autonomous Memory Networks</strong> - Coordination of the autonomous transhackfeminist
                technological infrastructure, 2021 - present</li>
              <li><strong>XYK</strong> - Doctoral research on synthesis of posthuman dissident voices with neural networks,
                2024 - 2028</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Awards and Recognition</h2>
            <ul>
              <li>
                <strong>Best Music Award</strong> - New Interfaces for Musical Expression (NIME)<br>
                For "deep structures" in collaboration with Emilio Ocelotl, Mexico City, 2023
              </li>
              <li>
                <strong>Honorable Mention</strong> - Third Edition of the International Biennial of Video Art and
                Animation Puebla 2018<br>
                For the video "Fragmentos"
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Grants and Residencies</h2>

            <h3>Individual Grants</h3>
            <ul>
              <li><strong>Jóvenes Creadores</strong> - Sistema Nacional de Creadores de Arte, Audiovisual Media / New
                Technologies, for "Oráculo para cuerpos tentaculares", 2026</li>
              <li><strong>Full scholarship</strong> - School for Poetic Computation (SFPC), New York, Handmade Datasets
                course, 2026</li>
              <li><strong>Research stay</strong> - PAEP-UNAM, Stiftung Universität Hildesheim, Germany: "XYK. Perceptual
                evaluation of voice latent space interpolation through real-time synthesis", 2026</li>
              <li><strong>SECIHTI National PhD Grant</strong> - PhD in Music, UNAM, 2024-2028</li>
              <li><strong>manifiest(ia)s</strong> - Open call for composers, Creación con perspectiva, CMMAS, 2022</li>
              <li><strong>Research stay</strong> - TransHackFeminist Convergence, Calafou and Hangar, Barcelona. PAEP,
                2022</li>
              <li><strong>[R.A.M.] Autonomous Memory Networks</strong> - Accompaniment Program 2022, Piso 16, Cultura
                UNAM, 2021</li>
              <li><strong>CONACyT National Grant</strong> - Graduate Program, Master's in Art History, 2021-2022</li>
              <li><strong>Jóvenes Creadores</strong> - FONCA, Audiovisual Media, New Technologies, for "Unknown Author.
                Cartographic meta-images", 2018-2019</li>
            </ul>

            <h3>Collective Grants</h3>
            <ul>
              <li><strong>[R.A.M.] Autonomous Memory Networks</strong> - Seed funding by Numun Fund, 2022-2024</li>
              <li><strong>RGGTRN</strong> - FONCA Special Support for the International Conference on Live Coding,
                Madrid, 2019</li>
              <li><strong>PiranhaLab</strong> - PADID, Centro Nacional de las Artes, 2018</li>
              <li><strong>RGGTRN, Bellacode Tour</strong> - IBERMUSICAS, 2017</li>
            </ul>

            <h3>Artist Residencies</h3>
            <ul>
              <li><strong>Stiftung Universität Hildesheim, Germany</strong> - November 23 to December 11, 2026
                (upcoming)</li>
              <li><strong>CCRMA, Stanford University</strong> - January 2024</li>
              <li><strong>TransHackFeminist! @ Calafou, Catalonia</strong> - August 2022</li>
              <li><strong>Hangar, Toplab Barcelona</strong> - July 2022</li>
              <li><strong>LacunaLab, Berlin</strong> - January 2019</li>
              <li><strong>MediaLab Prado, Madrid</strong> - January 2019</li>
              <li><strong>MediaLab UIO, Quito</strong> - May-June 2018</li>
              <li><strong>Fundación Telefónica, Lima</strong> - May 2018</li>
              <li><strong>Platohedro, Medellín</strong> - May 2018</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Professional Experience</h2>

            <h3>Teaching</h3>
            <ul>
              <li>
                <strong>Instructor - <a
                    href="https://desarrolloacademico.cenart.gob.mx/curso-oci-2025-2026-2-poeticas-situadas-de-lo-artificial-eticas-especulativas-con-las-ias/"
                    target="_blank">Situated Poetics of the Artificial. Speculative Ethics with AIs</a></strong><br>
                Interdisciplinary Curricular Offering, CENART<br>
                Taught in a duo with Yoatzin Balbuena<br>
                2025
              </li>
              <br>
              <li>
                <strong>Instructor - <a
                    href="https://desarrolloacademico.cenart.gob.mx/diplomado-transitos-34-exploraciones-intermediales-con-el-cuerpo-y-el-sonido/"
                    target="_blank">Intermedial Explorations with Body and Sound</a></strong><br>
                Diplomado Tránsitos Node 34, CENART<br>
                Taught in collaboration with Claudia Cabrera. Also, SuperCollider masterclass, LIMME, UNAM<br>
                2025
              </li>
              <br>
              <li>
                <strong>Course Instructor</strong> - Creative Code at STEAMLab<br>
                Interior Architecture, Industrial Design, Textile and Fashion Design, Film and Television,
                Marketing and Advertising programs<br>
                Centro de Diseño, Cine y Televisión<br>
                2019 - 2023
              </li>
              <br>
              <li>
                <strong>Course Instructor</strong> - ABC Digital in Common Core<br>
                Centro de Diseño, Cine y Televisión<br>
                2020 - 2021
              </li><br>
              <li>
                <strong>Course Instructor</strong> - Art on the Web<br>
                Digital Art Degree, UAEM<br>
                2021
              </li>
            </ul>

            <h3>Tech Industry</h3>
            <ul>
              <li>
                <strong>Development Specialist</strong> - B Drive IT<br>
                Worked as a fullstack developer in the Special Projects team in the Artificial Intelligence area,
                implementing chatbots and 3D avatars for virtual web assistants | 2024 - 2025
              </li><br>
              <li>
                <strong>Web Developer</strong> - Engine Core<br>
                Worked as a frontend developer with the development and marketing team, also performing UI/UX design
                & SEO optimization | 2024
              </li>
              <br>
              <li>
                <strong><a href="https://www.instagram.com/p/DFY4WdfxtEb/?img_index=9" target="_blank">p5.js Code
                    Contributor</a></strong> - Processing Foundation<br>
                Participated in the Spanish translation team for the P5.js documentation in the References section,
                contributing to the code on Github | 2024
              </li>
            </ul>

            <h3>Curatorship and Cultural Management</h3>
            <ul>
              <li><strong>Curator</strong> - Tecnologías Otras. Saberes-hacer en el Abya Yala, Museo Universitario
                Leopoldo Flores, UAEM, Toluca, 2026</li>
              <li><strong>Coordinator</strong> - R.A.M. (Autonomous Memory Networks), autonomous transhackfeminist
                technological infrastructure, 2021 - present</li>
              <li><strong>Curator (PiranhaLab)</strong> - 5th Concert Cycle EDGES, Centro Multimedia, CENART,
                2020</li>
              For this concert cycle we developed a virtual and immersive 3D space called Panorama, made with free
              software self-managed by us as PiranhaLab
              <li><strong>Manager and producer</strong> - Live Coding Concert, Festival Tiempo de Mujeres, Ex-Teresa
                Arte Actual, 2020</li>
              <li><strong>Curator and manager</strong> - PiranhaLab workshop series, PADID, Centro de Cultura Digital,
                2019</li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Selected Publications</h2>
            <ul>
              <li>
                <strong><a href="https://mitpress.mit.edu/9780262049702/the-supercollider-book/"
                    target="_blank"><em>Artist Statement</em> in The SuperCollider Book. Second Edition</a></strong><br>
                MIT Press | Part V: Projects and perspectives, Chapter 24: Artists' Statements, 2025
              </li>
              <br>
              <li>
                <strong><a href="https://www.cmmas.com/copy-3-of-ideassonicas25/ideassonicas%2Fsonicideas-23"
                    target="_blank">Live coding as a cyber-hackfeminist practice</a></strong><br>
                Ideas Sónicas No. 29, CMMAS, 2023
              </li>
              <br>
              <li>
                <strong><a href="https://www.repositorio.fam.unam.mx/handle/123456789/139" target="_blank">Panorama.
                    Writing free and immersive spaces for audiovisual performance</a></strong><br>
                In collaboration with Emilio Ocelotl and Dorian Sotomayor<br>
                In "Algoritmos Arruinados. Situated perspectives on music technology", UNAM, 2023
              </li><br>
              <li>
                <strong><a
                    href="https://www.tierraadentro.cultura.gob.mx/subversion-ciber-feminista-utopias-tecnologicas-palabra-musica-codigo/"
                    target="_blank">Cyberfeminist Subversion. Technological utopias, word - music - code</a></strong><br>
                Revista Tierra Adentro, 2020
              </li><br>
              <li>
                <strong><a href="https://doi.org/10.5281/zenodo.3946163" target="_blank">Bellacode: localized textual
                    interfaces for live coding music</a></strong><br>
                In collaboration with Luis N. Del Angel, Emilio Ocelotl and David Ogborn<br>
                Proceedings of the Fourth International Conference on Live Coding, 2019
              </li><br>
              <li>
                <strong><a href="http://dx.doi.org/10.12801/1947-5403.2018.10.01.11" target="_blank">Saborítmico: A
                    Report from the Dance Floor in Mexico</a></strong><br>
                In collaboration with Emilio Ocelotl and Luis N. Del Angel<br>
                Dancecult Journal of Electronic Dance Music Culture, 2018
              </li>
            </ul>
          </div>

          <div class="bio-section">
            <h2>Technical Skills</h2>

            <h3>Programming Languages and Development Technologies</h3>
            <p>JavaScript, Python, C++, Three.js, React, Vue, TypeScript, Bootstrap, Tailwind, HTML5, CSS3, Git,
              Firestore, Firebase, Node, Java, Pytorch, MySQL, REST API, Google Cloud Platform (GCP), Netlify, Vercel,
              Docker, Kubernetes, Bash, Pytorch, TensorFlow, Keras, Flask, Jupyter Notebooks
            </p>

            <h3>Creative Programming Environments</h3>
            <p>SuperCollider, TidalCycles, SonicPi, Hydra, Processing, OpenFrameworks, p5.js, ml5.js, Three.js, P5LIVE,
              Fluxus, Cinder, FoxDot, Tone.js</p>

            <h3>Operating Systems</h3>
            <p>Linux (Debian, Ubuntu, Linux Mint), Raspbian, MacOS, Windows</p>

            <h3>Other Tools</h3>
            <p>Github, Gitlab, Figma, SCRUM, Notion, Adobe Creative Suite (Premiere, Audition, After Effects, Photoshop,
              Illustrator), TouchDesigner, ProTools, Kdenlive, Reaper, Reallusion, Logic, Ableton Live, Final Cut,
              Resolume Arena, Ardour, Audacity, Blender, GIMP, Inkscape, OBS, ffmpeg, LaTeX, Raspberry Pi, ESP32 / Arduino</p>

            <h3>Areas of Specialization</h3>
            <p>Artificial intelligence, machine learning, web programming and design, live coding, creative programming
              and electronics, electroacoustic music, neural voice synthesis, spatialization and ambisonics, biomaterials (alginate and agar bioplastics, bacterial cellulose, eggshell ceramics), digital art, version control systems, sensors, database processing,
              virtual reality and 3D, audio signal processing and artistic research.</p>
          </div>

          <p class="update-date"><em>Last updated: October 2026</em></p>
        </template>

      </div>
    </div>
  </article>
</template>

<script setup>
import { useLang } from '../composables/useLang'
import FlowmapPhoto from '../components/FlowmapPhoto.vue'

import cvEs from '../assets/docs/Marianne-Teixido_CV_ES_corto.pdf?url'
import cvEn from '../assets/docs/Marianne-Teixido_CV_EN_short.pdf?url'

const { current } = useLang()
</script>

<style scoped>
.about-content {
  padding: 2rem 0;
}

.bio-section {
  margin-bottom: 2.5rem;
}

.bio-section h2 {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.cv-pill {
  display: inline-block;
  border: 1px solid var(--Blue-01);
  background: var(--White);
  color: var(--Dark);
  padding: 0.25rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.3;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.cv-pill:hover {
  background: var(--Blue-01);
  color: var(--White);
}

.bio-section h3 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.timeline {
  list-style: none;
  padding-left: 0;
}

.timeline li {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid #ddd;
}

.contact-info {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 5px;
}

.update-date {
  font-style: italic;
  color: #666;
  text-align: right;
  margin-top: 2rem;
}

figure {
  margin-bottom: 2rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}



@media (max-width: 480px) {
  .about-content h1 {
    display: none;
  }
}

</style>