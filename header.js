class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header site-header main-header    is-not-stuck lqd-smart-sticky-header" data-sticky-header="true"
      data-sticky-values-measured="false" data-sticky-options="{&quot;smartSticky&quot;:true}" id="header"
      itemscope="itemscope" itemtype="https://schema.org/WPHeader">
      <style id="elementor-post-7919">
        .elementor-7919 .elementor-element.elementor-element-208375d>.elementor-container>.elementor-column>.elementor-widget-wrap {
          align-content: center;
          align-items: center;
        }

        .elementor-7919 .elementor-element.elementor-element-208375d {
          margin-top: 0px;
          margin-bottom: 0px;
          padding: 0px 25px 12px 25px;
        }

        .is-stuck .elementor-7919 .elementor-element.elementor-element-208375d {
          margin: 0px 0px 0px 0px;
          padding: 0px 30px 0px 30px;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .ld-module-sd>.ld-module-dropdown {
          width: 50%;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .nav-trigger .txt {
          margin-inline-start: 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .nav-trigger .bars {
          width: 56px;
          height: 56px;
          border-style: solid;
          border-width: 1px 1px 1px 1px;
          border-color: #0000003B;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .nav-trigger:hover .bars {
          background-color: #000000;
          border-color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .nav-trigger {
          color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc .nav-trigger:hover .bar {
          color: #FFFFFF;
        }

        .elementor-7919 .elementor-element.elementor-element-448a8dbc>.elementor-widget-container {
          margin: 0px 23px 0px 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-180e0656 .module-logo {
          padding-inline-end: 0px;
          padding-inline-start: 0px;
        }

        .is-stuck .elementor-7919 .elementor-element.elementor-element-180e0656 .module-logo {
          padding-inline-end: 0px;
          padding-inline-start: 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-17656a1f.elementor-column>.elementor-widget-wrap {
          justify-content: flex-end;
        }

        .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
          --lqd-menu-items-top-padding: 5px;
          --lqd-menu-items-right-padding: 17px;
          --lqd-menu-items-bottom-padding: 5px;
          --lqd-menu-items-left-padding: 17px;
        }

        .is-stuck .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
          --lqd-menu-items-top-padding: 5px;
          --lqd-menu-items-right-padding: 17px;
          --lqd-menu-items-bottom-padding: 5px;
          --lqd-menu-items-left-padding: 17px;
        }

        .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li>a {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.1em;
        }

        .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li>a,
        .navbar-fullscreen .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li>a {
          color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li:hover>a,
        .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li.is-active>a,
        .navbar-fullscreen .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li>a:hover {
          color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-7f6b6706>.elementor-widget-container {
          margin: 0px 25px 0px 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn {
          --icon-font-size: 1em;
          --icon-mt: -3px;
          --icon-me: 0px;
          --icon-mb: 0px;
          --icon-ms: 0px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.1em;
          color: #FFFFFF;
          fill: #FFFFFF;
          border-radius: 3px 3px 3px 3px;
        }

        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn,
        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:before {
          background-color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:hover,
        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:focus {
          color: #FFFFFF;
        }

        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:hover,
        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:focus,
        .elementor-7919 .elementor-element.elementor-element-3b406438 .btn:after {
          background-color: var(--e-global-color-accent);
        }

        .elementor-7919 .elementor-element.elementor-element-112d3422>.elementor-container>.elementor-column>.elementor-widget-wrap {
          align-content: center;
          align-items: center;
        }

        .elementor-7919 .elementor-element.elementor-element-112d3422 {
          padding: 0px 25px 0px 25px;
        }

        .elementor-7919 .elementor-element.elementor-element-2534bbd7 .module-logo {
          padding-top: 25px;
          padding-inline-end: 0px;
          padding-bottom: 25px;
          padding-inline-start: 0px;
        }

        .is-stuck .elementor-7919 .elementor-element.elementor-element-2534bbd7 .module-logo {
          padding-top: 23px;
          padding-inline-end: 0px;
          padding-bottom: 23px;
          padding-inline-start: 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-1473eb1e.elementor-column>.elementor-widget-wrap {
          justify-content: flex-end;
        }

        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn {
          --icon-font-size: 1em;
          --icon-mt: -3px;
          --icon-me: 0px;
          --icon-mb: 0px;
          --icon-ms: 0px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.1em;
          color: #FFFFFF;
          fill: #FFFFFF;
          border-radius: 3px 3px 3px 3px;
        }

        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn,
        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:before {
          background-color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:hover,
        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:focus {
          color: #FFFFFF;
        }

        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:hover,
        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:focus,
        .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn:after {
          background-color: var(--e-global-color-accent);
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .ld-module-sd>.ld-module-dropdown {
          width: 450px;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger .txt {
          margin-inline-start: 0px;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger .bars {
          width: 56px;
          height: 56px;
          border-style: solid;
          border-width: 1px 1px 1px 1px;
          border-color: #00000038;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger:hover .bars {
          background-color: #000000;
          border-color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger {
          color: #000000;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger:hover .bar {
          color: #FFFFFF;
        }

        .elementor-7919 .elementor-element.elementor-element-474f4b36>.elementor-widget-container {
          margin: 0px 0px 0px 15px;
        }

        .is-stuck>.elementor>.elementor-section {
          background-color: #FFFFFF;
        }

        @media(min-width:768px) {
          .elementor-7919 .elementor-element.elementor-element-7e6516b0 {
            width: 21.056%;
          }

          .elementor-7919 .elementor-element.elementor-element-17656a1f {
            width: 78.61%;
          }

          .elementor-7919 .elementor-element.elementor-element-3bd8c1e8 {
            width: 21.056%;
          }

          .elementor-7919 .elementor-element.elementor-element-1473eb1e {
            width: 78.61%;
          }
        }

        @media(max-width:1366px) and (min-width:768px) {
          .elementor-7919 .elementor-element.elementor-element-17656a1f {
            width: 80%;
          }

          .elementor-7919 .elementor-element.elementor-element-1473eb1e {
            width: 80%;
          }
        }

        @media(max-width:1200px) and (min-width:768px) {
          .elementor-7919 .elementor-element.elementor-element-7e6516b0 {
            width: 20%;
          }

          .elementor-7919 .elementor-element.elementor-element-3bd8c1e8 {
            width: 20%;
          }
        }

        @media(max-width:1366px) {
          .elementor-7919 .elementor-element.elementor-element-208375d {
            padding: 20px 40px 0px 40px;
          }

          .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
            --lqd-menu-items-top-padding: 0px;
            --lqd-menu-items-right-padding: 15px;
            --lqd-menu-items-bottom-padding: 0px;
            --lqd-menu-items-left-padding: 15px;
          }

          .is-stuck .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
            --lqd-menu-items-top-padding: 0px;
            --lqd-menu-items-right-padding: 15px;
            --lqd-menu-items-bottom-padding: 0px;
            --lqd-menu-items-left-padding: 15px;
          }

          .elementor-7919 .elementor-element.elementor-element-112d3422 {
            padding: 20px 40px 0px 40px;
          }
        }

        @media(max-width:1200px) {
          .elementor-7919 .elementor-element.elementor-element-208375d {
            padding: 20px 35px 0px 35px;
          }

          .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
            --lqd-menu-items-top-padding: 0px;
            --lqd-menu-items-right-padding: 12px;
            --lqd-menu-items-bottom-padding: 0px;
            --lqd-menu-items-left-padding: 12px;
          }

          .is-stuck .elementor-7919 .elementor-element.elementor-element-7f6b6706 {
            --lqd-menu-items-top-padding: 0px;
            --lqd-menu-items-right-padding: 12px;
            --lqd-menu-items-bottom-padding: 0px;
            --lqd-menu-items-left-padding: 12px;
          }

          .elementor-7919 .elementor-element.elementor-element-7f6b6706 .main-nav>li>a {
            font-size: 13px;
          }

          .elementor-7919 .elementor-element.elementor-element-7f6b6706>.elementor-widget-container {
            margin: 0px 20px 0px 0px;
          }

          .elementor-7919 .elementor-element.elementor-element-3b406438 .btn {
            font-size: 13px;
          }

          .elementor-7919 .elementor-element.elementor-element-112d3422 {
            padding: 20px 35px 0px 35px;
          }

          .elementor-7919 .elementor-element.elementor-element-619bddd7 .btn {
            font-size: 13px;
          }

          .hide-before-1200 {
            display: none !important;
          }
        }

        @media(max-width:1024px) {
          .elementor-7919 .elementor-element.elementor-element-112d3422 {
            padding: 0px 30px 0px 30px;
          }

          .elementor-7919 .elementor-element.elementor-element-474f4b36>.elementor-widget-container {
            margin: 0px 0px 0px 20px;
          }
        }

        @media(max-width:767px) {
          .is-stuck .elementor-7919 .elementor-element.elementor-element-112d3422 {
            padding: 0px 20px 0px 20px;
          }

          .elementor-7919 .elementor-element.elementor-element-112d3422 {
            padding: 0px 20px 0px 20px;
          }

          .elementor-7919 .elementor-element.elementor-element-3bd8c1e8 {
            width: 35%;
          }

          .elementor-7919 .elementor-element.elementor-element-1473eb1e {
            width: 65%;
          }

          .elementor-7919 .elementor-element.elementor-element-474f4b36 .nav-trigger .bars {
            width: 53px;
            height: 53px;
          }

          .elementor-7919 .elementor-element.elementor-element-474f4b36>.elementor-widget-container {
            margin: 0px 0px 0px 15px;
          }
        }
      </style>
      <div data-elementor-type="wp-post" data-elementor-id="7919" class="elementor elementor-7919">
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-208375d elementor-section-full_width elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-section-height-default elementor-section-height-default"
          data-id="208375d" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7e6516b0"
              data-id="7e6516b0" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-448a8dbc elementor-widget elementor-widget-ld_header_sidedrawer"
                  data-id="448a8dbc" data-element_type="widget" data-widget_type="ld_header_sidedrawer.default">
                  <div class="elementor-widget-container">
                    <div class="ld-module-sd ld-module-sd-hover ld-module-sd-left">
                      <button
                        class="nav-trigger main-nav-trigger d-flex pos-rel align-items-center justify-content-center collapsed style-2 txt-right"
                        type="button" data-ld-toggle="true"
                        data-toggle-options='{"cloneTriggerInTarget":false,"type":"click"}' data-toggle="collapse"
                        data-target="#lqd-trigger-634fd7e7eb19c" aria-expanded="false"
                        aria-controls="lqd-trigger-634fd7e7eb19c">
                        <span class="bars d-inline-flex align-items-center justify-content-center pos-rel z-index-1">
                          <span class="bars-inner d-flex flex-column">
                            <span class="bar d-inline-block pos-rel"></span>
                            <span class="bar d-inline-block pos-rel"></span>
                            <span class="bar d-inline-block pos-rel"></span>
                          </span>
                        </span>
                      </button>
                      <div class="ld-module-dropdown collapse pos-abs lqd-trigger-634fd7e7eb19c" aria-expanded="false"
                        id="lqd-trigger-634fd7e7eb19c" role="dialog">
                        <div class="ld-sd-wrap">
                          <div class="ld-sd-inner justify-content-center">
                            <style id="elementor-post-7969">
                              .elementor-7969 .elementor-element.elementor-element-5e8c5f50:not(.elementor-motion-effects-element-type-background),
                              .elementor-7969 .elementor-element.elementor-element-5e8c5f50>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                                background-image: url("https://interiortwoarc.liquid-themes.com/wp-content/uploads/2022/03/Drawing.png");
                                background-position: 170% 120%;
                                background-repeat: no-repeat;
                                background-size: 70% auto;
                              }

                              .elementor-7969 .elementor-element.elementor-element-5e8c5f50>.elementor-background-overlay {
                                background-image: url("https://interiortwoarc.liquid-themes.com/wp-content/uploads/2022/03/square-pattern.svg");
                                opacity: 0.02;
                                transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
                              }

                              .elementor-7969 .elementor-element.elementor-element-5e8c5f50 {
                                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                                padding: 0px 80px 0px 80px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-73f51f2f .lqd-custom-menu>ul>li:not(:last-child) {
                                margin-bottom: 0px;
                                margin-inline-end: 30px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-73f51f2f ul>li>a {
                                font-size: 12px;
                                font-weight: 600;
                                text-transform: uppercase;
                                letter-spacing: 1px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-73f51f2f .lqd-fancy-menu>ul>li>a {
                                color: #00000082;
                              }

                              .elementor-7969 .elementor-element.elementor-element-73f51f2f .lqd-fancy-menu>ul>li>a:hover,
                              .elementor-7969 .elementor-element.elementor-element-73f51f2f .lqd-fancy-menu li.is-active>a {
                                color: #000000;
                              }

                              .elementor-7969 .elementor-element.elementor-element-6fd6d737 .elementor-spacer-inner {
                                --spacer-size: 50px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-58ce5774 {
                                --divider-border-style: slashes;
                                --divider-color: #000;
                                --divider-border-width: 1px;
                                --divider-pattern-height: 12px;
                                --divider-pattern-size: 12px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-58ce5774 .elementor-divider-separator {
                                width: 125px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-58ce5774 .elementor-divider {
                                padding-top: 15px;
                                padding-bottom: 15px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-34a5349 .ld-fh-element {
                                font-size: 48px;
                                line-height: 1.2em;
                                white-space: normal;
                                margin: 0.1em 0em 0.5em 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-34a5349 .lqd-highlight-inner {
                                height: 0.275em;
                                bottom: 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-34a5349 .lqd-highlight-inner .lqd-highlight-brush-svg {
                                height: 0.275em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-3f5df9d5 .elementor-spacer-inner {
                                --spacer-size: 150px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-206e7cd1 .ld-fh-element {
                                font-size: 13px;
                                line-height: 18px;
                                white-space: normal;
                                margin: 0em 0em 2.5em 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-206e7cd1 .lqd-highlight-inner {
                                height: 0.275em;
                                bottom: 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-206e7cd1 .lqd-highlight-inner .lqd-highlight-brush-svg {
                                height: 0.275em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-1f75a552 .ld-fh-element {
                                font-size: 13px;
                                font-weight: 500;
                                line-height: 20px;
                                white-space: normal;
                              }

                              .elementor-7969 .elementor-element.elementor-element-1f75a552 .lqd-highlight-inner {
                                height: 0.275em;
                                bottom: 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-1f75a552 .lqd-highlight-inner .lqd-highlight-brush-svg {
                                height: 0.275em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-3252024a .elementor-spacer-inner {
                                --spacer-size: 40px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-7a00e315 .ld-fh-element {
                                font-size: 13px;
                                line-height: 18px;
                                white-space: normal;
                                margin: 0em 0em 2.5em 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-7a00e315 .lqd-highlight-inner {
                                height: 0.275em;
                                bottom: 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-7a00e315 .lqd-highlight-inner .lqd-highlight-brush-svg {
                                height: 0.275em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-700806b9 .ld-fh-element {
                                font-size: 13px;
                                font-weight: 500;
                                line-height: 20px;
                                white-space: normal;
                              }

                              .elementor-7969 .elementor-element.elementor-element-700806b9 .lqd-highlight-inner {
                                height: 0.275em;
                                bottom: 0em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-700806b9 .lqd-highlight-inner .lqd-highlight-brush-svg {
                                height: 0.275em;
                              }

                              .elementor-7969 .elementor-element.elementor-element-108bcf36 .elementor-spacer-inner {
                                --spacer-size: 40px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 {
                                --grid-template-columns: repeat(0, auto);
                                --icon-size: 20px;
                                --grid-column-gap: 20px;
                                --grid-row-gap: 0px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-widget-container {
                                text-align: left;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-social-icon {
                                background-color: #FFFFFF00;
                                --icon-padding: 1em;
                                border-style: solid;
                                border-width: 1px 1px 1px 1px;
                                border-color: #00000026;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-social-icon i {
                                color: #000000;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-social-icon svg {
                                fill: #000000;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-icon {
                                border-radius: 99px 99px 99px 99px;
                              }

                              .elementor-7969 .elementor-element.elementor-element-de91a13 .elementor-social-icon:hover {
                                border-color: #000000;
                              }

                              @media(max-width:1024px) {

                                .elementor-7969 .elementor-element.elementor-element-5e8c5f50:not(.elementor-motion-effects-element-type-background),
                                .elementor-7969 .elementor-element.elementor-element-5e8c5f50>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                                  background-position: 0% 0%;
                                }
                              }

                              @media(max-width:767px) {

                                .elementor-7969 .elementor-element.elementor-element-5e8c5f50:not(.elementor-motion-effects-element-type-background),
                                .elementor-7969 .elementor-element.elementor-element-5e8c5f50>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                                  background-position: 0% 0%;
                                }
                              }
                            </style>
                            <div data-elementor-type="section" data-elementor-id="7969"
                              class="elementor elementor-7969">
                              <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-5e8c5f50 elementor-section-height-full elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                                data-id="5e8c5f50" data-element_type="section"
                                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div class="elementor-background-overlay"></div>
                                <div class="elementor-container elementor-column-gap-default">
                                  <div
                                    class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-203a012e"
                                    data-id="203a012e" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        class="elementor-element elementor-element-73f51f2f elementor-widget elementor-widget-ld_custom_menu"
                                        data-id="73f51f2f" data-element_type="widget"
                                        data-widget_type="ld_custom_menu.default">
                                        <div class="elementor-widget-container">
                                          <div class="lqd-fancy-menu lqd-custom-menu pos-rel lqd-menu-td-none">
                                            <ul class="reset-ul inline-nav" id="73f51f2f">
                                              <li>
                                                <a href="#">
                                                  <span
                                                    class="link-icon d-inline-flex hide-if-empty align-items-center left-icon icon-next-to-label"></span>
                                                  English
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#">
                                                  <span
                                                    class="link-icon d-inline-flex hide-if-empty align-items-center left-icon icon-next-to-label"></span>
                                                  Espanol
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-6fd6d737 elementor-widget elementor-widget-spacer"
                                        data-id="6fd6d737" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                          <style>
                                            /*! elementor - v3.6.5 - 27-04-2022 */
                                            .e-container.e-container--row .elementor-spacer-inner {
                                              width: var(--spacer-size)
                                            }

                                            .e-container.e-container--column .elementor-spacer-inner,
                                            .elementor-column .elementor-spacer-inner {
                                              height: var(--spacer-size)
                                            }
                                          </style>
                                          <div class="elementor-spacer">
                                            <div class="elementor-spacer-inner">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-58ce5774 elementor-widget-divider--separator-type-pattern elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                        data-id="58ce5774" data-element_type="widget"
                                        data-widget_type="divider.default">
                                        <div class="elementor-widget-container">
                                          <style>
                                            /*! elementor - v3.6.5 - 27-04-2022 */
                                            .elementor-widget-divider {
                                              --divider-border-style: none;
                                              --divider-border-width: 1px;
                                              --divider-color: #2c2c2c;
                                              --divider-icon-size: 20px;
                                              --divider-element-spacing: 10px;
                                              --divider-pattern-height: 24px;
                                              --divider-pattern-size: 20px;
                                              --divider-pattern-url: none;
                                              --divider-pattern-repeat: repeat-x
                                            }

                                            .elementor-widget-divider .elementor-divider {
                                              display: -webkit-box;
                                              display: -ms-flexbox;
                                              display: flex
                                            }

                                            .elementor-widget-divider .elementor-divider__text {
                                              font-size: 15px;
                                              line-height: 1;
                                              max-width: 95%
                                            }

                                            .elementor-widget-divider .elementor-divider__element {
                                              margin: 0 var(--divider-element-spacing);
                                              -ms-flex-negative: 0;
                                              flex-shrink: 0
                                            }

                                            .elementor-widget-divider .elementor-icon {
                                              font-size: var(--divider-icon-size)
                                            }

                                            .elementor-widget-divider .elementor-divider-separator {
                                              display: -webkit-box;
                                              display: -ms-flexbox;
                                              display: flex;
                                              margin: 0;
                                              direction: ltr
                                            }

                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator,
                                            .elementor-widget-divider--view-line_text .elementor-divider-separator {
                                              -webkit-box-align: center;
                                              -ms-flex-align: center;
                                              align-items: center
                                            }

                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator:after,
                                            .elementor-widget-divider--view-line_icon .elementor-divider-separator:before,
                                            .elementor-widget-divider--view-line_text .elementor-divider-separator:after,
                                            .elementor-widget-divider--view-line_text .elementor-divider-separator:before {
                                              display: block;
                                              content: "";
                                              border-bottom: 0;
                                              -webkit-box-flex: 1;
                                              -ms-flex-positive: 1;
                                              flex-grow: 1;
                                              border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                                            }

                                            .elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {
                                              -webkit-box-flex: 0;
                                              -ms-flex-positive: 0;
                                              flex-grow: 0;
                                              -ms-flex-negative: 100;
                                              flex-shrink: 100
                                            }

                                            .elementor-widget-divider--element-align-left .elementor-divider-separator:before {
                                              content: none
                                            }

                                            .elementor-widget-divider--element-align-left .elementor-divider__element {
                                              margin-left: 0
                                            }

                                            .elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {
                                              -webkit-box-flex: 0;
                                              -ms-flex-positive: 0;
                                              flex-grow: 0;
                                              -ms-flex-negative: 100;
                                              flex-shrink: 100
                                            }

                                            .elementor-widget-divider--element-align-right .elementor-divider-separator:after {
                                              content: none
                                            }

                                            .elementor-widget-divider--element-align-right .elementor-divider__element {
                                              margin-right: 0
                                            }

                                            .elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {
                                              border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
                                            }

                                            .elementor-widget-divider--separator-type-pattern {
                                              --divider-border-style: none
                                            }

                                            .elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,
                                            .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,
                                            .elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,
                                            .elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {
                                              width: 100%;
                                              min-height: var(--divider-pattern-height);
                                              -webkit-mask-size: var(--divider-pattern-size) 100%;
                                              mask-size: var(--divider-pattern-size) 100%;
                                              -webkit-mask-repeat: var(--divider-pattern-repeat);
                                              mask-repeat: var(--divider-pattern-repeat);
                                              background-color: var(--divider-color);
                                              -webkit-mask-image: var(--divider-pattern-url);
                                              mask-image: var(--divider-pattern-url)
                                            }

                                            .elementor-widget-divider--no-spacing {
                                              --divider-pattern-size: auto
                                            }

                                            .elementor-widget-divider--bg-round {
                                              --divider-pattern-repeat: round
                                            }

                                            .rtl .elementor-widget-divider .elementor-divider__text {
                                              direction: rtl
                                            }
                                          </style>
                                          <div class="elementor-divider"
                                            style='--divider-pattern-url: url("data:image/svg+xml,%3Csvg xmlns=&#039;https://www.w3.org/2000/svg&#039; preserveAspectRatio=&#039;none&#039; overflow=&#039;visible&#039; height=&#039;100%&#039; viewBox=&#039;0 0 20 16&#039; fill=&#039;none&#039; stroke=&#039;black&#039; stroke-width=&#039;1&#039; stroke-linecap=&#039;square&#039; stroke-miterlimit=&#039;10&#039;%3E%3Cg transform=&#039;translate(-12.000000, 0)&#039;%3E%3Cpath d=&#039;M28,0L10,18&#039;/%3E%3Cpath d=&#039;M18,0L0,18&#039;/%3E%3Cpath d=&#039;M48,0L30,18&#039;/%3E%3Cpath d=&#039;M38,0L20,18&#039;/%3E%3C/g%3E%3C/svg%3E");'>
                                            <span class="elementor-divider-separator">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-34a5349 elementor-widget elementor-widget-hub_fancy_heading"
                                        data-id="34a5349" data-element_type="widget"
                                        data-widget_type="hub_fancy_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="ld-fancy-heading-634fd7e7f109e" class="ld-fancy-heading pos-rel">
                                            <h2
                                              class="ld-fh-element d-inline-block pos-rel elementor-heading-title normal lqd-highlight-classic lqd-highlight-grow-left h2"
                                              data-text-rotator="true">
                                              Collaboration, work
                                              enquires or just say <span class="txt-rotate-keywords"><span
                                                  class="txt-rotate-keyword active"><span>hello.</span></span><span
                                                  class="txt-rotate-keyword"><span>你好</span></span><span
                                                  class="txt-rotate-keyword"><span>もしもし.</span></span><span
                                                  class="txt-rotate-keyword"><span>hola.</span></span></span>
                                            </h2>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-3f5df9d5 elementor-widget elementor-widget-spacer"
                                        data-id="3f5df9d5" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                          <div class="elementor-spacer">
                                            <div class="elementor-spacer-inner">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-206e7cd1 elementor-widget elementor-widget-hub_fancy_heading"
                                        data-id="206e7cd1" data-element_type="widget"
                                        data-widget_type="hub_fancy_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="ld-fancy-heading-634fd7e7f33c0" class="ld-fancy-heading pos-rel">
                                            <p
                                              class="ld-fh-element d-inline-block pos-rel normal lqd-highlight-classic lqd-highlight-grow-left p">
                                              London</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-1f75a552 elementor-widget elementor-widget-hub_fancy_heading"
                                        data-id="1f75a552" data-element_type="widget"
                                        data-widget_type="hub_fancy_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="ld-fancy-heading-634fd7e80063b" class="ld-fancy-heading pos-rel">
                                            <p
                                              class="ld-fh-element d-inline-block pos-rel normal lqd-highlight-classic lqd-highlight-grow-left p">
                                              +) 22 256 7890<br>
                                              <a href="https://interiortwoarc.liquid-themes.com/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="c8a9baaba0a1bcadabbcbdbaad88a0bdaae6aba7a5">[email&#160;protected]</a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-3252024a elementor-widget elementor-widget-spacer"
                                        data-id="3252024a" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                          <div class="elementor-spacer">
                                            <div class="elementor-spacer-inner">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-7a00e315 elementor-widget elementor-widget-hub_fancy_heading"
                                        data-id="7a00e315" data-element_type="widget"
                                        data-widget_type="hub_fancy_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="ld-fancy-heading-634fd7e80298a" class="ld-fancy-heading pos-rel">
                                            <p
                                              class="ld-fh-element d-inline-block pos-rel normal lqd-highlight-classic lqd-highlight-grow-left p">
                                              Find Us</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-700806b9 elementor-widget elementor-widget-hub_fancy_heading"
                                        data-id="700806b9" data-element_type="widget"
                                        data-widget_type="hub_fancy_heading.default">
                                        <div class="elementor-widget-container">
                                          <div id="ld-fancy-heading-634fd7e803d91" class="ld-fancy-heading pos-rel">
                                            <p
                                              class="ld-fh-element d-inline-block pos-rel normal lqd-highlight-classic lqd-highlight-grow-left p">
                                              290 Maryam Springs 260,<br>
                                              Courbevoie, Paris, France
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-108bcf36 elementor-widget elementor-widget-spacer"
                                        data-id="108bcf36" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                          <div class="elementor-spacer">
                                            <div class="elementor-spacer-inner">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-de91a13 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                        data-id="de91a13" data-element_type="widget"
                                        data-widget_type="social-icons.default">
                                        <div class="elementor-widget-container">
                                          <style>
                                            /*! elementor - v3.6.5 - 27-04-2022 */
                                            .elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,
                                            .elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,
                                            .elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {
                                              line-height: 1;
                                              font-size: 0
                                            }

                                            .elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {
                                              display: inline-grid
                                            }

                                            .elementor-widget-social-icons .elementor-grid {
                                              grid-column-gap: var(--grid-column-gap, 5px);
                                              grid-row-gap: var(--grid-row-gap, 5px);
                                              grid-template-columns: var(--grid-template-columns);
                                              -webkit-box-pack: var(--justify-content, center);
                                              -ms-flex-pack: var(--justify-content, center);
                                              justify-content: var(--justify-content, center);
                                              justify-items: var(--justify-content, center)
                                            }

                                            .elementor-icon.elementor-social-icon {
                                              font-size: var(--icon-size, 25px);
                                              line-height: var(--icon-size, 25px);
                                              width: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)));
                                              height: calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)))
                                            }

                                            .elementor-social-icon {
                                              --e-social-icon-icon-color: #fff;
                                              display: -webkit-inline-box;
                                              display: -ms-inline-flexbox;
                                              display: inline-flex;
                                              background-color: #818a91;
                                              -webkit-box-align: center;
                                              -ms-flex-align: center;
                                              align-items: center;
                                              -webkit-box-pack: center;
                                              -ms-flex-pack: center;
                                              justify-content: center;
                                              text-align: center;
                                              cursor: pointer
                                            }

                                            .elementor-social-icon i {
                                              color: var(--e-social-icon-icon-color)
                                            }

                                            .elementor-social-icon svg {
                                              fill: var(--e-social-icon-icon-color)
                                            }

                                            .elementor-social-icon:last-child {
                                              margin: 0
                                            }

                                            .elementor-social-icon:hover {
                                              opacity: .9;
                                              color: #fff
                                            }

                                            .elementor-social-icon-android {
                                              background-color: #a4c639
                                            }

                                            .elementor-social-icon-apple {
                                              background-color: #999
                                            }

                                            .elementor-social-icon-behance {
                                              background-color: #1769ff
                                            }

                                            .elementor-social-icon-bitbucket {
                                              background-color: #205081
                                            }

                                            .elementor-social-icon-codepen {
                                              background-color: #000
                                            }

                                            .elementor-social-icon-delicious {
                                              background-color: #39f
                                            }

                                            .elementor-social-icon-deviantart {
                                              background-color: #05cc47
                                            }

                                            .elementor-social-icon-digg {
                                              background-color: #005be2
                                            }

                                            .elementor-social-icon-dribbble {
                                              background-color: #ea4c89
                                            }

                                            .elementor-social-icon-elementor {
                                              background-color: #d30c5c
                                            }

                                            .elementor-social-icon-envelope {
                                              background-color: #ea4335
                                            }

                                            .elementor-social-icon-facebook,
                                            .elementor-social-icon-facebook-f {
                                              background-color: #3b5998
                                            }

                                            .elementor-social-icon-flickr {
                                              background-color: #0063dc
                                            }

                                            .elementor-social-icon-foursquare {
                                              background-color: #2d5be3
                                            }

                                            .elementor-social-icon-free-code-camp,
                                            .elementor-social-icon-freecodecamp {
                                              background-color: #006400
                                            }

                                            .elementor-social-icon-github {
                                              background-color: #333
                                            }

                                            .elementor-social-icon-gitlab {
                                              background-color: #e24329
                                            }

                                            .elementor-social-icon-globe {
                                              background-color: #818a91
                                            }

                                            .elementor-social-icon-google-plus,
                                            .elementor-social-icon-google-plus-g {
                                              background-color: #dd4b39
                                            }

                                            .elementor-social-icon-houzz {
                                              background-color: #7ac142
                                            }

                                            .elementor-social-icon-instagram {
                                              background-color: #262626
                                            }

                                            .elementor-social-icon-jsfiddle {
                                              background-color: #487aa2
                                            }

                                            .elementor-social-icon-link {
                                              background-color: #818a91
                                            }

                                            .elementor-social-icon-linkedin,
                                            .elementor-social-icon-linkedin-in {
                                              background-color: #0077b5
                                            }

                                            .elementor-social-icon-medium {
                                              background-color: #00ab6b
                                            }

                                            .elementor-social-icon-meetup {
                                              background-color: #ec1c40
                                            }

                                            .elementor-social-icon-mixcloud {
                                              background-color: #273a4b
                                            }

                                            .elementor-social-icon-odnoklassniki {
                                              background-color: #f4731c
                                            }

                                            .elementor-social-icon-pinterest {
                                              background-color: #bd081c
                                            }

                                            .elementor-social-icon-product-hunt {
                                              background-color: #da552f
                                            }

                                            .elementor-social-icon-reddit {
                                              background-color: #ff4500
                                            }

                                            .elementor-social-icon-rss {
                                              background-color: #f26522
                                            }

                                            .elementor-social-icon-shopping-cart {
                                              background-color: #4caf50
                                            }

                                            .elementor-social-icon-skype {
                                              background-color: #00aff0
                                            }

                                            .elementor-social-icon-slideshare {
                                              background-color: #0077b5
                                            }

                                            .elementor-social-icon-snapchat {
                                              background-color: #fffc00
                                            }

                                            .elementor-social-icon-soundcloud {
                                              background-color: #f80
                                            }

                                            .elementor-social-icon-spotify {
                                              background-color: #2ebd59
                                            }

                                            .elementor-social-icon-stack-overflow {
                                              background-color: #fe7a15
                                            }

                                            .elementor-social-icon-steam {
                                              background-color: #00adee
                                            }

                                            .elementor-social-icon-stumbleupon {
                                              background-color: #eb4924
                                            }

                                            .elementor-social-icon-telegram {
                                              background-color: #2ca5e0
                                            }

                                            .elementor-social-icon-thumb-tack {
                                              background-color: #1aa1d8
                                            }

                                            .elementor-social-icon-tripadvisor {
                                              background-color: #589442
                                            }

                                            .elementor-social-icon-tumblr {
                                              background-color: #35465c
                                            }

                                            .elementor-social-icon-twitch {
                                              background-color: #6441a5
                                            }

                                            .elementor-social-icon-twitter {
                                              background-color: #1da1f2
                                            }

                                            .elementor-social-icon-viber {
                                              background-color: #665cac
                                            }

                                            .elementor-social-icon-vimeo {
                                              background-color: #1ab7ea
                                            }

                                            .elementor-social-icon-vk {
                                              background-color: #45668e
                                            }

                                            .elementor-social-icon-weibo {
                                              background-color: #dd2430
                                            }

                                            .elementor-social-icon-weixin {
                                              background-color: #31a918
                                            }

                                            .elementor-social-icon-whatsapp {
                                              background-color: #25d366
                                            }

                                            .elementor-social-icon-wordpress {
                                              background-color: #21759b
                                            }

                                            .elementor-social-icon-xing {
                                              background-color: #026466
                                            }

                                            .elementor-social-icon-yelp {
                                              background-color: #af0606
                                            }

                                            .elementor-social-icon-youtube {
                                              background-color: #cd201f
                                            }

                                            .elementor-social-icon-500px {
                                              background-color: #0099e5
                                            }

                                            .elementor-shape-rounded .elementor-icon.elementor-social-icon {
                                              border-radius: 10%
                                            }

                                            .elementor-shape-circle .elementor-icon.elementor-social-icon {
                                              border-radius: 50%
                                            }
                                          </style>
                                          <div class="elementor-social-icons-wrapper elementor-grid">
                                            <span class="elementor-grid-item">
                                              <a class="elementor-icon elementor-social-icon elementor-social-icon-pinterest-p elementor-repeater-item-23f460f"
                                                target="_blank">
                                                <span class="elementor-screen-only">Pinterest-p</span>
                                                <svg class="e-font-icon-svg e-fab-pinterest-p">
                                                  <use xlink:href="#fab-pinterest-p">
                                                  </use>
                                                </svg> </a>
                                            </span>
                                            <span class="elementor-grid-item">
                                              <a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-8d38b73"
                                                target="_blank">
                                                <span class="elementor-screen-only">Twitter</span>
                                                <svg class="e-font-icon-svg e-fab-twitter">
                                                  <use xlink:href="#fab-twitter">
                                                  </use>
                                                </svg> </a>
                                            </span>
                                            <span class="elementor-grid-item">
                                              <a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-ac72760"
                                                target="_blank">
                                                <span class="elementor-screen-only">Instagram</span>
                                                <svg class="e-font-icon-svg e-fab-instagram">
                                                  <use xlink:href="#fab-instagram">
                                                  </use>
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
                          </div>
                        </div>
                      </div>
                      <div class="lqd-module-backdrop"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-180e0656 elementor-widget elementor-widget-ld_header_image"
                  data-id="180e0656" data-element_type="widget" data-widget_type="ld_header_image.default">
                  <div class="elementor-widget-container">
                    <div class="module-logo d-flex navbar-brand-plain">
                      <a class="navbar-brand d-flex p-0 pos-rel" href="./index.html"
                        rel="home"><span class="navbar-brand-inner post-rel"> <img class="logo-sticky"
                            src="./assets/logo.png"
                            width="50px"
                            alt="Architecture - Interior Design 2"> <img class="logo-default"
                            src="./assets/logo.png"
                            width="50px"
                            alt="Architecture - Interior Design 2"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-17656a1f"
              data-id="17656a1f" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-7f6b6706 elementor-widget elementor-widget-ld_header_menu"
                  data-id="7f6b6706" data-element_type="widget" data-widget_type="ld_header_menu.default">
                  <div class="elementor-widget-container">
                    <div class="module-primary-nav d-flex">
                      <div class="collapse navbar-collapse d-inline-flex p-0 lqd-submenu-cover  "
                        id="main-header-collapse" aria-expanded="false" role="navigation">
                        <ul id="primary-nav"
                          class="main-nav d-flex reset-ul inline-nav lqd-menu-counter-right lqd-menu-items-inline main-nav-hover-fade-inactive"
                          data-submenu-options='{"toggleType":"fade","handler":"mouse-in-out"}'>
                          <li id="menu-item-8262"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8262">
                            <a href="./index.html">Home</a>
                          </li>
                          <li id="menu-item-8113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8113">
                            <a href="">Our Services<span class="submenu-expander"><svg
                                  xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                  style="width: 1em; height: 1em;">
                                  <path fill="currentColor"
                                    d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                  </path>
                                </svg></span><span
                                class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  class="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                              </span></a>
                            <ul class="nav-item-children">
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Residential<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./kitchen.html">Kitchen</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./bedroom.html">Bedroom</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Living Room​</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Tv Unit</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Door</a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Commercial<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8394">
                                    <a href="./restaurant.html">Restaurant</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Community Hall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Shopping Mall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Saloons</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="elementor-element elementor-element-3b406438 elementor-widget elementor-widget-ld_button"
                  data-id="3b406438" data-element_type="widget" data-widget_type="ld_button.default">
                  <div class="elementor-widget-container">
                    <a href="#modal-8081"
                      class="elementor-button btn align-items-center justify-content-center pos-rel overflow-hidden ws-nowrap btn-solid btn-hover-txt-liquid-x-alt btn-icon-right btn-hover-reveal btn-has-label"
                      data-lqd-lity="#modal-8081">
                      <span class="btn-txt d-block pos-rel z-index-3" data-text="Contact Us" data-split-text="true"
                        data-split-options='{"type": "chars, words"}'>
                        Contact Us </span>
                      <span class="btn-icon pos-rel z-index-3">
                        <i aria-hidden="true" class="lqd-icn-ess icon-lqd-envelope"></i> </span>
                    </a>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-58dae8ad elementor-widget elementor-widget-ld_modal_window"
                  data-id="58dae8ad" data-element_type="widget" data-settings="{&quot;modal&quot;:&quot;8081&quot;}"
                  data-widget_type="ld_modal_window.default">
                  <div class="elementor-widget-container">
                    <div id="modal-8081" class="lqd-modal lqd-lity-hide" data-modal-type="fullscreen">
                      <div class="lqd-modal-inner">
                        <div class="lqd-modal-content">
                          <style id="elementor-post-8081">
                            .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-container {
                              max-width: 970px;
                            }

                            .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-container>.elementor-column>.elementor-widget-wrap {
                              align-content: center;
                              align-items: center;
                            }

                            .elementor-8081 .elementor-element.elementor-element-dd8f216:not(.elementor-motion-effects-element-type-background),
                            .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                              background-image: url("https://interiortwoarc.liquid-themes.com/wp-content/uploads/2022/04/modal-bg.jpg");
                              background-position: -500px 0vh;
                              background-repeat: no-repeat;
                              background-size: contain;
                            }

                            .elementor-8081 .elementor-element.elementor-element-dd8f216 {
                              transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
                            }

                            .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-background-overlay {
                              transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .lqd-contact-form {
                              --inputs-margin: 0px 0px 0px 0px;
                              --input-margin-bottom: 0px;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 input:not([type=submit]),
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 textarea,
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .lqd-contact-form select,
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .ui-button.ui-selectmenu-button {
                              font-size: 18px;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .wpcf7-submit {
                              font-size: 16px;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 input:not([type=submit]),
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 textarea,
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .lqd-contact-form select,
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .ui-button.ui-selectmenu-button,
                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 .wpcf7-radio {
                              color: #BAB6B6;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 input[type=submit] {
                              background: #000000;
                            }

                            .elementor-8081 .elementor-element.elementor-element-2c3c1df5 input:not([type=submit]):focus,
                            textarea:focus,
                            .lqd-contact-form select:focus,
                            .ui-button.ui-selectmenu-button:focus {
                              color: #000000;
                            }

                            @media(max-width:1024px) {

                              .elementor-8081 .elementor-element.elementor-element-dd8f216:not(.elementor-motion-effects-element-type-background),
                              .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                                background-position: 0% 0vh;
                              }
                            }

                            @media(max-width:767px) {

                              .elementor-8081 .elementor-element.elementor-element-dd8f216:not(.elementor-motion-effects-element-type-background),
                              .elementor-8081 .elementor-element.elementor-element-dd8f216>.elementor-motion-effects-container>.elementor-motion-effects-layer {
                                background-position: 0% 0vh;
                              }
                            }
                          </style>
                          <div data-elementor-type="section" data-elementor-id="8081" class="elementor elementor-8081">
                            <section
                              class="elementor-section elementor-top-section elementor-element elementor-element-dd8f216 elementor-section-height-full elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                              data-id="dd8f216" data-element_type="section"
                              data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                              <div class="elementor-container elementor-column-gap-default">
                                <div
                                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-300ef1e9"
                                  data-id="300ef1e9" data-element_type="column">
                                  <div class="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      class="elementor-element elementor-element-2c3c1df5 elementor-widget elementor-widget-ld_cf722"
                                      data-id="2c3c1df5" data-element_type="widget" data-widget_type="ld_cf722.default">
                                      <div class="elementor-widget-container">
                                        <div
                                          class="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-inputs-border-none lqd-contact-form-button-block lqd-contact-form-button-lg lqd-contact-form-inputs-sm">
                                          <div role="form" class="wpcf7" id="wpcf7-f8073-o1" lang="en-US" dir="ltr">
                                            <div class="screen-reader-response">
                                              <p role="status" aria-live="polite" aria-atomic="true"></p>
                                              <ul></ul>
                                            </div>
                                            <form action="/portfolio/data-analysis/#wpcf7-f8073-o1" method="post"
                                              class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                              <div style="display: none;">
                                                <input type="hidden" name="_wpcf7" value="8073">
                                                <input type="hidden" name="_wpcf7_version" value="5.6.4">
                                                <input type="hidden" name="_wpcf7_locale" value="en_US">
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8073-o1">
                                                <input type="hidden" name="_wpcf7_container_post" value="0">
                                                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                                              </div>
                                              <style>
                                                @media (max-width:991px) {
                                                  .modal-b {
                                                    border: 1px solid #C6C6C6 !important;
                                                  }
                                                }

                                                .modal-b {
                                                  border: 1px solid #C6C6C6;
                                                }

                                                .modal-bl-n {
                                                  border-left: none;
                                                }

                                                .modal-bb-n {
                                                  border-bottom: none;
                                                }

                                                .modal-p {
                                                  padding: 20px 10px 15px 20px;
                                                  background: #fff;
                                                }

                                                .modal-text {
                                                  margin: 0;
                                                  color: #4B4B4C;
                                                  font-size: 14px;
                                                }
                                              </style>
                                              <div class="row p3">
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Nice to meet you
                                                  </p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="name-619"><input
                                                        type="text" name="name-619" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="What’s your name?"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Email address
                                                  </p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="email-899"><input
                                                        type="email" name="email-899" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Enter your email address"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Optional</p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="tel-785"><input
                                                        type="tel" name="tel-785" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                        aria-invalid="false" placeholder="Your phone number"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Subject</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="subject-250"><select name="subject-250"
                                                        class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false">
                                                        <option value="How can we help you?">
                                                          How
                                                          can
                                                          we
                                                          help
                                                          you?
                                                        </option>
                                                        <option value="Subject 1">
                                                          Subject
                                                          1
                                                        </option>
                                                        <option value="Subject 2">
                                                          Subject
                                                          2
                                                        </option>
                                                        <option value="Subject 3">
                                                          Subject
                                                          3
                                                        </option>
                                                      </select></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Budget</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="budget-251"><select name="budget-251"
                                                        class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false">
                                                        <option value="Your budget">
                                                          Your
                                                          budget
                                                        </option>
                                                        <option value="&lt; 10000">
                                                          &lt;
                                                          10000
                                                        </option>
                                                        <option value="&lt; 20000">
                                                          &lt;
                                                          20000
                                                        </option>
                                                        <option value="&lt; 30000">
                                                          &lt;
                                                          30000
                                                        </option>
                                                      </select></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Interested
                                                    Service</p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="text-992"><input
                                                        type="text" name="text-992" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Construction"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-12 modal-p modal-b">
                                                  <p class="modal-text">
                                                    Your name</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="message-889"><textarea name="message-889" cols="10"
                                                        rows="5"
                                                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Tell us about your project"></textarea></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-12 p-0 mt-4 mb-4" style="font-size: 12px;">
                                                  <span class="wpcf7-form-control-wrap" data-name="acceptance-666"><span
                                                      class="wpcf7-form-control wpcf7-acceptance optional"><span
                                                        class="wpcf7-list-item"><label><input type="checkbox"
                                                            name="acceptance-666" value="1" aria-invalid="false"><span
                                                            class="wpcf7-list-item-label">I
                                                            am
                                                            bound
                                                            by
                                                            the
                                                            terms
                                                            of
                                                            the
                                                            Service
                                                            I
                                                            accept
                                                            Privacy
                                                            Policy</span></label></span></span></span>
                                                </div>
                                                <div class="col-md-12 p-0">
                                                  <input type="submit" value="Send Message"
                                                    class="wpcf7-form-control has-spinner wpcf7-submit">
                                                </div>
                                              </div>
                                              <div class="wpcf7-response-output" aria-hidden="true">
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-112d3422 elementor-section-full_width elementor-section-content-middle elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-section-height-default elementor-section-height-default"
          data-id="112d3422" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div
              class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3bd8c1e8"
              data-id="3bd8c1e8" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div
                  class="elementor-element elementor-element-2534bbd7 elementor-widget elementor-widget-ld_header_image"
                  data-id="2534bbd7" data-element_type="widget" data-widget_type="ld_header_image.default">
                  <div class="elementor-widget-container">
                    <div class="module-logo d-flex navbar-brand-plain">
                      <a class="navbar-brand d-flex p-0 pos-rel" href="./index.html"
                        rel="home"><span class="navbar-brand-inner post-rel"> <img class="logo-sticky"
                            src="./assets/logo.png"
                            width="50px"
                            alt="Architecture - Interior Design 2"> <img class="logo-default"
                            src="./assets/logo.png"
                            width="50px"
                            alt="Architecture - Interior Design 2"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-1473eb1e"
              data-id="1473eb1e" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-619bddd7 elementor-widget elementor-widget-ld_button"
                  data-id="619bddd7" data-element_type="widget" data-widget_type="ld_button.default">
                  <div class="elementor-widget-container">
                    <a href="#modal-8081"
                      class="elementor-button btn align-items-center justify-content-center pos-rel overflow-hidden ws-nowrap btn-solid btn-hover-txt-liquid-x-alt btn-icon-right btn-hover-reveal btn-has-label"
                      data-lqd-lity="#modal-8081">
                      <span class="btn-txt d-block pos-rel z-index-3" data-text="Contact Us" data-split-text="true"
                        data-split-options='{"type": "chars, words"}'>
                        Contact Us </span>
                      <span class="btn-icon pos-rel z-index-3">
                        <i aria-hidden="true" class="lqd-icn-ess icon-lqd-envelope"></i> </span>
                    </a>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-474f4b36 elementor-widget elementor-widget-ld_header_sidedrawer"
                  data-id="474f4b36" data-element_type="widget" data-widget_type="ld_header_sidedrawer.default">
                  <div class="elementor-widget-container">
                    <div class="ld-module-sd ld-module-sd-hover ld-module-sd-right">
                      <button
                        class="nav-trigger main-nav-trigger d-flex pos-rel align-items-center justify-content-center collapsed style-2 txt-right"
                        type="button" data-ld-toggle="true"
                        data-toggle-options='{"cloneTriggerInTarget":false,"type":"click"}' data-toggle="collapse"
                        data-target="#lqd-trigger-634fd7e823068" aria-expanded="false"
                        aria-controls="lqd-trigger-634fd7e823068">
                        <span class="bars d-inline-flex align-items-center justify-content-center pos-rel z-index-1">
                          <span class="bars-inner d-flex flex-column">
                            <span class="bar d-inline-block pos-rel"></span>
                            <span class="bar d-inline-block pos-rel"></span>
                            <span class="bar d-inline-block pos-rel"></span>
                          </span>
                        </span>
                      </button>
                      <div class="ld-module-dropdown collapse pos-abs lqd-trigger-634fd7e823068" aria-expanded="false"
                        id="lqd-trigger-634fd7e823068" role="dialog">
                        <div class="ld-sd-wrap">
                          <div class="ld-sd-inner justify-content-center">
                            <style id="elementor-post-35">
                              .elementor-35 .elementor-element.elementor-element-24c1e336 {
                                padding: 25px 25px 25px 25px;
                              }

                              .elementor-35 .elementor-element.elementor-element-676d957d {
                                --lqd-menu-items-top-padding: 0px;
                                --lqd-menu-items-right-padding: 0px;
                                --lqd-menu-items-bottom-padding: 30px;
                                --lqd-menu-items-left-padding: 0px;
                              }

                              .is-stuck .elementor-35 .elementor-element.elementor-element-676d957d {
                                --lqd-menu-items-top-padding: 0px;
                                --lqd-menu-items-right-padding: 0px;
                                --lqd-menu-items-bottom-padding: 30px;
                                --lqd-menu-items-left-padding: 0px;
                              }

                              .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li>a {
                                font-size: 23px;
                                font-weight: 600;
                              }

                              .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li>a,
                              .navbar-fullscreen .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li>a {
                                color: #000000;
                              }

                              .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li:hover>a,
                              .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li.is-active>a,
                              .navbar-fullscreen .elementor-35 .elementor-element.elementor-element-676d957d .main-nav>li>a:hover {
                                color: #00000099;
                              }

                              .elementor-35 .elementor-element.elementor-element-7e8df118 {
                                --divider-border-style: solid;
                                --divider-color: #000;
                                --divider-border-width: 2px;
                              }

                              .elementor-35 .elementor-element.elementor-element-7e8df118 .elementor-divider-separator {
                                width: 100%;
                              }

                              .elementor-35 .elementor-element.elementor-element-7e8df118 .elementor-divider {
                                padding-top: 50px;
                                padding-bottom: 50px;
                              }

                              .elementor-35 .elementor-element.elementor-element-7e8df118>.elementor-widget-container {
                                padding: 0px 0px 10px 0px;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn {
                                font-size: 14px;
                                font-weight: 600;
                                color: #000000;
                                fill: #000000;
                                --btn-pt: 13px;
                                --btn-pe: 55px;
                                --btn-pb: 13px;
                                --btn-ps: 55px;
                                padding: 13px 55px 13px 55px;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:before {
                                background-color: #FFFFFF00;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn-extended-line {
                                border-style: solid;
                                border-width: 1px 1px 1px 1px;
                                border-color: #D3D3D3;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:hover,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:focus {
                                color: #FFFFFF;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:hover,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:focus,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:after {
                                background-color: #000000;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:hover,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:focus,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:hover .btn-extended-line,
                              .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn:focus .btn-extended-line {
                                border-style: solid;
                                border-width: 1px 1px 1px 1px;
                                border-color: #000000;
                              }

                              .elementor-35 .elementor-element.elementor-element-1cd94f7>.elementor-widget-container {
                                margin: 0px 0px 20px 0px;
                              }

                              @media(max-width:1024px) {
                                .elementor-35 .elementor-element.elementor-element-1cd94f7 .btn {
                                  --btn-pt: 21px;
                                  --btn-pe: 39px;
                                  --btn-pb: 21px;
                                  --btn-ps: 40px;
                                  padding: 21px 39px 21px 40px;
                                }
                              }
                            </style>
                            <div data-elementor-type="section" data-elementor-id="35" class="elementor elementor-35">
                              <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-24c1e336 elementor-section-height-full elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                                data-id="24c1e336" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-default">
                                  <div
                                    class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-533cb9cf"
                                    data-id="533cb9cf" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                      <div
                                        class="elementor-element elementor-element-676d957d elementor-widget elementor-widget-ld_header_menu"
                                        data-id="676d957d" data-element_type="widget"
                                        data-widget_type="ld_header_menu.default">
                                        <div class="elementor-widget-container">
                                          <div class="module-primary-nav d-flex">
                                            <div
                                              class="collapse navbar-collapse d-inline-flex p-0 lqd-submenu-default-style  "
                                              id="main-header-collapse" aria-expanded="false" role="navigation">
                                              <ul id="primary-nav"
                                                class="main-nav d-flex reset-ul  lqd-menu-counter-right lqd-menu-items-block main-nav-hover-default"
                                                data-submenu-options='{"toggleType":"slide","handler":"click"}'>
                                                <li
                                                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8262">
                                                  <a href="./index.html">Home</a>
                                                </li>
                                                <li id="menu-item-8113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8113">
                            <a href="">Our Services<span class="submenu-expander"><svg
                                  xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                  style="width: 1em; height: 1em;">
                                  <path fill="currentColor"
                                    d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                  </path>
                                </svg></span><span
                                class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  class="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                              </span></a>
                            <ul class="nav-item-children">
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Residential<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./kitchen.html">Kitchen</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./bedroom.html">Bedroom</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Living Room​</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Tv Unit</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Door</a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Commercial<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8394">
                                    <a href="./restaurant.html">Restaurant</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Community Hall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Shopping Mall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Saloons</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-7e8df118 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                        data-id="7e8df118" data-element_type="widget"
                                        data-widget_type="divider.default">
                                        <div class="elementor-widget-container">
                                          <div class="elementor-divider">
                                            <span class="elementor-divider-separator">
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-1cd94f7 elementor-widget elementor-widget-ld_button"
                                        data-id="1cd94f7" data-element_type="widget"
                                        data-widget_type="ld_button.default">
                                        <div class="elementor-widget-container">
                                          <a href="#modal-32"
                                            class="elementor-button btn align-items-center justify-content-center pos-rel overflow-hidden ws-nowrap btn-solid btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y btn-has-label"
                                            data-lqd-lity="#modal-32">
                                            <span class="btn-txt d-block pos-rel z-index-3" data-text="Send an email">
                                              <span
                                                class="btn-txt-inner d-inline-flex align-items-center justify-content-center"
                                                data-text="Send an email">
                                                Hire us </span>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-element elementor-element-475c6a6b elementor-widget elementor-widget-ld_modal_window"
                                        data-id="475c6a6b" data-element_type="widget"
                                        data-settings="{&quot;modal&quot;:&quot;32&quot;}"
                                        data-widget_type="ld_modal_window.default">
                                        <div class="elementor-widget-container">
                                          <div id="modal-32" class="lqd-modal lqd-lity-hide"
                                            data-modal-type="fullscreen">
                                            <div class="lqd-modal-inner">
                                              <div class="lqd-modal-content">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="lqd-module-backdrop"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-element elementor-element-67748ef5 elementor-widget elementor-widget-ld_modal_window"
                  data-id="67748ef5" data-element_type="widget" data-settings="{&quot;modal&quot;:&quot;8081&quot;}"
                  data-widget_type="ld_modal_window.default">
                  <div class="elementor-widget-container">
                    <div id="modal-8081" class="lqd-modal lqd-lity-hide" data-modal-type="fullscreen">
                      <div class="lqd-modal-inner">
                        <div class="lqd-modal-content">
                          <div data-elementor-type="section" data-elementor-id="8081" class="elementor elementor-8081">
                            <section
                              class="elementor-section elementor-top-section elementor-element elementor-element-dd8f216 elementor-section-height-full elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                              data-id="dd8f216" data-element_type="section"
                              data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                              <div class="elementor-container elementor-column-gap-default">
                                <div
                                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-300ef1e9"
                                  data-id="300ef1e9" data-element_type="column">
                                  <div class="elementor-widget-wrap elementor-element-populated">
                                    <div
                                      class="elementor-element elementor-element-2c3c1df5 elementor-widget elementor-widget-ld_cf722"
                                      data-id="2c3c1df5" data-element_type="widget" data-widget_type="ld_cf722.default">
                                      <div class="elementor-widget-container">
                                        <div
                                          class="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-inputs-border-none lqd-contact-form-button-block lqd-contact-form-button-lg lqd-contact-form-inputs-sm">
                                          <div role="form" class="wpcf7" id="wpcf7-f8073-o2" lang="en-US" dir="ltr">
                                            <div class="screen-reader-response">
                                              <p role="status" aria-live="polite" aria-atomic="true"></p>
                                              <ul></ul>
                                            </div>
                                            <form action="/portfolio/data-analysis/#wpcf7-f8073-o2" method="post"
                                              class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                              <div style="display: none;">
                                                <input type="hidden" name="_wpcf7" value="8073">
                                                <input type="hidden" name="_wpcf7_version" value="5.6.4">
                                                <input type="hidden" name="_wpcf7_locale" value="en_US">
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8073-o2">
                                                <input type="hidden" name="_wpcf7_container_post" value="0">
                                                <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                                              </div>
                                              <style>
                                                @media (max-width:991px) {
                                                  .modal-b {
                                                    border: 1px solid #C6C6C6 !important;
                                                  }
                                                }

                                                .modal-b {
                                                  border: 1px solid #C6C6C6;
                                                }

                                                .modal-bl-n {
                                                  border-left: none;
                                                }

                                                .modal-bb-n {
                                                  border-bottom: none;
                                                }

                                                .modal-p {
                                                  padding: 20px 10px 15px 20px;
                                                  background: #fff;
                                                }

                                                .modal-text {
                                                  margin: 0;
                                                  color: #4B4B4C;
                                                  font-size: 14px;
                                                }
                                              </style>
                                              <div class="row p3">
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Nice to meet you
                                                  </p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="name-619"><input
                                                        type="text" name="name-619" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="What’s your name?"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Email address
                                                  </p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="email-899"><input
                                                        type="email" name="email-899" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Enter your email address"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Optional</p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="tel-785"><input
                                                        type="tel" name="tel-785" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                                        aria-invalid="false" placeholder="Your phone number"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Subject</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="subject-250"><select name="subject-250"
                                                        class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false">
                                                        <option value="How can we help you?">
                                                          How
                                                          can
                                                          we
                                                          help
                                                          you?
                                                        </option>
                                                        <option value="Subject 1">
                                                          Subject
                                                          1
                                                        </option>
                                                        <option value="Subject 2">
                                                          Subject
                                                          2
                                                        </option>
                                                        <option value="Subject 3">
                                                          Subject
                                                          3
                                                        </option>
                                                      </select></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n">
                                                  <p class="modal-text">
                                                    Budget</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="budget-251"><select name="budget-251"
                                                        class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false">
                                                        <option value="Your budget">
                                                          Your
                                                          budget
                                                        </option>
                                                        <option value="&lt; 10000">
                                                          &lt;
                                                          10000
                                                        </option>
                                                        <option value="&lt; 20000">
                                                          &lt;
                                                          20000
                                                        </option>
                                                        <option value="&lt; 30000">
                                                          &lt;
                                                          30000
                                                        </option>
                                                      </select></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-6 modal-p modal-b modal-bb-n modal-bl-n">
                                                  <p class="modal-text">
                                                    Interested
                                                    Service</p>
                                                  <p><span class="wpcf7-form-control-wrap" data-name="text-992"><input
                                                        type="text" name="text-992" value="" size="40"
                                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Construction"></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-12 modal-p modal-b">
                                                  <p class="modal-text">
                                                    Your name</p>
                                                  <p><span class="wpcf7-form-control-wrap"
                                                      data-name="message-889"><textarea name="message-889" cols="10"
                                                        rows="5"
                                                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                        aria-required="true" aria-invalid="false"
                                                        placeholder="Tell us about your project"></textarea></span>
                                                  </p>
                                                </div>
                                                <div class="col-md-12 p-0 mt-4 mb-4" style="font-size: 12px;">
                                                  <span class="wpcf7-form-control-wrap" data-name="acceptance-666"><span
                                                      class="wpcf7-form-control wpcf7-acceptance optional"><span
                                                        class="wpcf7-list-item"><label><input type="checkbox"
                                                            name="acceptance-666" value="1" aria-invalid="false"><span
                                                            class="wpcf7-list-item-label">I
                                                            am
                                                            bound
                                                            by
                                                            the
                                                            terms
                                                            of
                                                            the
                                                            Service
                                                            I
                                                            accept
                                                            Privacy
                                                            Policy</span></label></span></span></span>
                                                </div>
                                                <div class="col-md-12 p-0">
                                                  <input type="submit" value="Send Message"
                                                    class="wpcf7-form-control has-spinner wpcf7-submit">
                                                </div>
                                              </div>
                                              <div class="wpcf7-response-output" aria-hidden="true">
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="lqd-mobile-sec elementor pos-rel">
        <div class="lqd-mobile-sec-inner navbar-header d-flex align-items-stretch w-100">
          <div class="lqd-mobile-modules-container empty"></div>
          <button type="button"
            class="navbar-toggle collapsed nav-trigger style-1 d-flex pos-rel align-items-center justify-content-center"
            data-ld-toggle="true" data-toggle="collapse" data-target="#lqd-mobile-sec-nav" aria-expanded="false"
            data-toggle-options='{ "changeClassnames": {"html": "mobile-nav-activated"} }'>
            <span class="sr-only">Toggle navigation</span>
            <span class="bars d-inline-block pos-rel z-index-1">
              <span class="bars-inner d-flex flex-column w-100 h-100 justify-content-center">
                <span class="bar d-inline-block pos-rel"></span>
                <span class="bar d-inline-block pos-rel"></span>
                <span class="bar d-inline-block pos-rel"></span>
              </span>
            </span>
          </button>
          <a class="navbar-brand d-flex pos-rel" href="./index.html">
            <span class="navbar-brand-inner">
              <img class="logo-default"
                src="./assets/logo.png"
                width="50px"
                alt="Architecture - Interior Design 2">
            </span>
          </a>
        </div>
        <div class="lqd-mobile-sec-nav w-100 pos-abs z-index-10">
          <div class="mobile-navbar-collapse navbar-collapse collapse w-100" id="lqd-mobile-sec-nav"
            aria-expanded="false" role="navigation">
            <ul id="mobile-primary-nav" class="reset-ul lqd-mobile-main-nav main-nav nav">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8262">
                <a href="./index.html">Home</a>
              </li>
              <li id="menu-item-8113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8113">
                            <a href="">Our Services<span class="submenu-expander"><svg
                                  xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                  style="width: 1em; height: 1em;">
                                  <path fill="currentColor"
                                    d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                  </path>
                                </svg></span><span
                                class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  class="bi bi-chevron-down" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                              </span></a>
                            <ul class="nav-item-children">
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Residential<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./kitchen.html">Kitchen</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8393">
                                    <a href="./bedroom.html">Bedroom</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Living Room​</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Tv Unit</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Door</a>
                                  </li>
                                </ul>
                              </li>
                              <li
                                class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8392 menu-item-has-children">
                                <a href="">Commercial<span class="submenu-expander"><svg
                                      xmlns="https://www.w3.org/2000/svg" width="21" height="32" viewbox="0 0 21 32"
                                      style="width: 1em; height: 1em;">
                                      <path fill="currentColor"
                                        d="M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z">
                                      </path>
                                    </svg></span><span
                                    class="link-icon d-inline-flex align-items-center hide-if-empty right-icon hide-before-1200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                      class="bi bi-chevron-down" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                  </span></a>
                                <ul class="nav-item-children">
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8394">
                                    <a href="./restaurant.html">Restaurant</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8395">
                                    <a href="./living-room.html">Community Hall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8396">
                                    <a href="./tv-unit.html">Shopping Mall</a>
                                  </li>
                                  <li
                                    class="menu-item menu-item-type-post_type menu-item-object-liquid-portfolio menu-item-8397">
                                    <a href="./door.html">Saloons</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define('header-component', Header);