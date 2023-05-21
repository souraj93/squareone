class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="main-footer site-footer footer" id="footer" itemscope="itemscope"
itemtype="https://schema.org/WPFooter" data-sticky-footer="true"
data-sticky-footer-options="{&quot;shadow&quot;:&quot;4&quot;}">
<style id="elementor-post-11">
  .elementor-11 .elementor-element.elementor-element-a6dbb7f>.elementor-container>.elementor-column>.elementor-widget-wrap {
    align-content: center;
    align-items: center;
  }

  .elementor-11 .elementor-element.elementor-element-a6dbb7f .elementor-heading-title {
    color: #FFFFFF;
  }

  .elementor-11 .elementor-element.elementor-element-a6dbb7f {
    color: #FFFFFF6B;
    padding: 85px 0px 90px 0px;
  }

  .elementor-11 .elementor-element.elementor-element-a6dbb7f a {
    color: #FFFFFF;
  }

  .elementor-11 .elementor-element.elementor-element-a6dbb7f a:hover {
    color: #FFFFFF66;
  }

  .elementor-11 .elementor-element.elementor-element-9483489 .ld-fh-element {
    font-family: "Playfair Display", Sans-serif;
    font-weight: 500;
    font-style: italic;
    white-space: normal;
    margin: 0em 0em 0em 0em;
  }

  .elementor-11 .elementor-element.elementor-element-9483489 .lqd-highlight-inner {
    height: 0.275em;
    bottom: 0em;
  }

  .elementor-11 .elementor-element.elementor-element-9483489 .lqd-highlight-inner .lqd-highlight-brush-svg {
    height: 0.275em;
  }

  .elementor-11 .elementor-element.elementor-element-648368b .ld-fh-element {
    white-space: normal;
    margin: 0em 0em 0.5em 0em;
  }

  .elementor-11 .elementor-element.elementor-element-648368b .lqd-highlight-inner {
    height: 0.275em;
    bottom: 0em;
  }

  .elementor-11 .elementor-element.elementor-element-648368b .lqd-highlight-inner .lqd-highlight-brush-svg {
    height: 0.275em;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn {
    --extended-line-size: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #FFFFFF;
    fill: #FFFFFF;
    --btn-pt: 1.2em;
    --btn-pe: 5.2em;
    --btn-pb: 1.2em;
    --btn-ps: 5.2em;
    padding: 1.2em 5.2em 1.2em 5.2em;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:before {
    background-color: #FFFFFF00;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn-extended-line {
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #FFFFFF33;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn-extended-line {
    border-color: #FFFFFF33;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:hover,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:focus {
    color: #000000;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:hover,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:focus,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:after {
    background-color: #FFFFFF;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:hover,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:focus,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:hover .btn-extended-line,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:focus .btn-extended-line {
    border-style: solid;
    border-color: #FFFFFF;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:hover .btn-extended-line,
  .elementor-11 .elementor-element.elementor-element-02ee29f .btn:focus .btn-extended-line {
    border-color: #BCBCBC;
  }

  .elementor-11 .elementor-element.elementor-element-02ee29f>.elementor-widget-container {
    margin: 0px 0px 35px 0px;
  }

  .elementor-11 .elementor-element.elementor-element-0ce464c .ld-fh-element,
  .elementor-11 .elementor-element.elementor-element-0ce464c .ld-fh-element a {
    color: #FFFFFF54;
  }

  .elementor-11 .elementor-element.elementor-element-0ce464c .ld-fh-element {
    font-size: 10px;
    font-style: italic;
    white-space: normal;
  }

  .elementor-11 .elementor-element.elementor-element-0ce464c .lqd-highlight-inner {
    height: 0.275em;
    bottom: 0em;
  }

  .elementor-11 .elementor-element.elementor-element-0ce464c .lqd-highlight-inner .lqd-highlight-brush-svg {
    height: 0.275em;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa {
    --grid-template-columns: repeat(0, auto);
    --icon-size: 20px;
    --grid-column-gap: 15px;
    --grid-row-gap: 0px;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-widget-container {
    text-align: right;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-social-icon {
    background-color: #FFFFFF00;
    --icon-padding: 1.2em;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #FFFFFF2E;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-social-icon:hover {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-social-icon:hover i {
    color: #000000;
  }

  .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-social-icon:hover svg {
    fill: #000000;
  }

  .main-footer,
  .single-liquid-footer #lqd-site-content {
    background-color: #1C1C1C;
    background-image: url("https://interiortwoarc.liquid-themes.com/wp-content/uploads/2022/03/patt.svg");
  }

  @media(max-width:880px) and (min-width:768px) {
    .elementor-11 .elementor-element.elementor-element-c9acab0 {
      width: 100%;
    }

    .elementor-11 .elementor-element.elementor-element-f7cc533 {
      width: 100%;
    }
  }

  @media(max-width:1024px) {
    .elementor-11 .elementor-element.elementor-element-a6dbb7f {
      padding: 70px 0px 80px 0px;
    }

    .elementor-11 .elementor-element.elementor-element-7616eaa {
      --grid-column-gap: 6px;
    }
  }

  @media(max-width:880px) {
    .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-widget-container {
      text-align: left;
    }
  }

  @media(max-width:767px) {
    .elementor-11 .elementor-element.elementor-element-7616eaa .elementor-widget-container {
      text-align: left;
    }
  }
</style>
<div data-elementor-type="wp-post" data-elementor-id="11" class="elementor elementor-11">
  <section
    class="elementor-section elementor-top-section elementor-element elementor-element-a6dbb7f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
    data-id="a6dbb7f" data-element_type="section">
    <div class="elementor-container elementor-column-gap-extended">
      <div
        class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-c9acab0"
        data-id="c9acab0" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="elementor-element elementor-element-9483489 elementor-widget elementor-widget-hub_fancy_heading"
            data-id="9483489" data-element_type="widget" data-widget_type="hub_fancy_heading.default">
            <div class="elementor-widget-container">
              <div id="ld-fancy-heading-634fd7e84da8b" class="ld-fancy-heading pos-rel">
                <h2
                  class="ld-fh-element d-inline-block pos-rel elementor-heading-title normal lqd-highlight-classic lqd-highlight-grow-left h2">
                  We’d love to cooperate to build</h2>
              </div>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-648368b elementor-widget elementor-widget-hub_fancy_heading"
            data-id="648368b" data-element_type="widget" data-widget_type="hub_fancy_heading.default">
            <div class="elementor-widget-container">
              <div id="ld-fancy-heading-634fd7e84ef52" class="ld-fancy-heading pos-rel">
                <h2
                  class="ld-fh-element d-inline-block pos-rel elementor-heading-title normal lqd-highlight-classic lqd-highlight-grow-left h2"
                  data-text-rotator="true"> <span class="txt-rotate-keywords"><span
                      class="txt-rotate-keyword active"><span>Commercial Properties.</span></span><span class="txt-rotate-keyword"><span>Interior
                        Design.</span></span><span class="txt-rotate-keyword"><span>City
                        Marks.</span></span></span>
                </h2>
              </div>
            </div>
          </div>
          <div class="elementor-element elementor-element-02ee29f elementor-widget elementor-widget-ld_button"
            data-id="02ee29f" data-element_type="widget" data-widget_type="ld_button.default">
            <div class="elementor-widget-container">
              <a href=""
              onclick="window.open('https://forms.gle/6BAPfKHmgbLBKwfCA')"
                class="elementor-button btn align-items-center justify-content-center pos-rel overflow-hidden ws-nowrap btn-solid btn-hover-txt-liquid-x-alt btn-has-label btn-extended-lines"
                >
                <span class="btn-txt d-block pos-rel z-index-3" data-text="Drop us a line" data-split-text="true"
                  data-split-options='{"type": "chars, words"}'>
                  Drop us a line </span>
                <i class="btn-extended-line btn-extended-line-tl d-inline-block pos-abs pointer-events-none"></i>
                <i class="btn-extended-line btn-extended-line-tr d-inline-block pos-abs pointer-events-none"></i>
                <i class="btn-extended-line btn-extended-line-br d-inline-block pos-abs pointer-events-none"></i>
                <i class="btn-extended-line btn-extended-line-bl d-inline-block pos-abs pointer-events-none"></i>
              </a>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-0ce464c elementor-widget elementor-widget-hub_fancy_heading"
            data-id="0ce464c" data-element_type="widget" data-widget_type="hub_fancy_heading.default">
            <div class="elementor-widget-container">
              <div id="ld-fancy-heading-634fd7e8561a7" class="ld-fancy-heading pos-rel">
                <p
                  class="ld-fh-element d-inline-block pos-rel normal lqd-highlight-classic lqd-highlight-grow-left p">
                  Interior design is the art and science of enhancing the interiors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f7cc533"
        data-id="f7cc533" data-element_type="column">
        <div class="elementor-widget-wrap elementor-element-populated">
          <div
            class="elementor-element elementor-element-7616eaa elementor-shape-circle e-grid-align-right e-grid-align-mobile_extra-left e-grid-align-mobile-left elementor-grid-0 elementor-widget elementor-widget-social-icons"
            data-id="7616eaa" data-element_type="widget" data-widget_type="social-icons.default">
            <div class="elementor-widget-container">
              <div class="elementor-social-icons-wrapper elementor-grid">
                <span class="elementor-grid-item">
                <a class="elementor-icon elementor-social-icon elementor-social-icon-pinterest elementor-repeater-item-db2d269"
                href="https://www.facebook.com/profile.php?id=100084401384179&mibextid=ZbWKwL" target="_blank">
                <span class="elementor-screen-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg> </a>
                </span>
                <span class="elementor-grid-item">
                <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-c69096d"
                href="https://instagram.com/square_one_interiors?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
                <span class="elementor-screen-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg> </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</footer>
        `;
    }
}

customElements.define('footer-component', Footer);