// == Import: styles
import "./timeline.scss";

// == Component
function Timeline() {
  return (
    <section id="parcours" className="timeline">
      <div class="tl-item">
        <div class="tl-bg tl-bg__studies"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2007 2010</p>
        </div>

        <div class="tl-content">
          <h1>Etudes</h1>
          <p>
            Après avoir obtenu un BTS Management des unités commerciales en
            alternance dans un supermarché, j'ai décidé de poursuivre sur la
            voie de l'alternance en obtenant une licence professionelle Commerce
            Distribution Distech{" "}
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-bg tl-bg__supermarket"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2010 2016</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Grande Distribution</h1>
          <p>
            J'ai occupé des postes d'adjoint, de manager de rayon et de
            responsable de superette. Ces éxperiences m'ont permises d'acquérir
            des compétences en management et en organisation.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-bg tl-bg__bank"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2016 2021</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Secteur bancaire</h1>
          <p>
            J'ai évolué du poste de conseiller en ligne jusqu'au poste de
            conseiller financier. J'ai pu acquérir des compétences de rigueur,
            de respect des procédures ainsi que commerciales.
          </p>
        </div>
      </div>

      <div class="tl-item">
        <div class="tl-bg tl-bg__computer"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2021 2022</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Développeur Web</h1>
          <p>
            J'ai suivi la formation Développeur Web avec spécialisation React
            délivrée par l'école O'Clock du 12/2021 au 05/2022. Cette formation
            m'a permise d'acéquérir des bases solides en back et en front à
            travers la praique de différents langages (Html, Php, JS..)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
