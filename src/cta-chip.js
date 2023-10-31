import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CtaChip extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },

      link: {
        type: String,
      },

      primaryOutlined: {
        type: Boolean,
        reflect: true
      },

      primaryFilled: {
        type: Boolean,
        reflect: true
      },

      tinted: {
        type: Boolean,
        reflect: true
      },

      lightOutlined: {
        type: Boolean,
        reflect: true
      },

      lightFilled: {
        type: Boolean,
        reflect: true
      },
    }
  }

  static styles = css`
  :host {
      display: block;
      margin: 12px;
  }

  .wrapper {
    height: 48px;
    padding: 16px;
    display: inline-flex;
  }

  :host([primaryOutlined]) a:hover,
  :host([primaryOutlined]) a:active,
  :host([primaryOutlined]) a:focus {
    background-color: #005fa9;
    color: #fff;
  }

  :host([primaryFilled]) a:hover,
  :host([primaryFilled]) a:active,
  :host([primaryFilled]) a:focus {
    background-color: #fff;
    color:#005fa9;
  }

  :host([tinted]) a:hover,
  :host([tinted]) a:active,
  :host([tinted]) a:focus {
    background-color: #fff;
    color:#4f627c;
  }

  :host([lightOutlined]) a:hover,
  :host([lightOutlined]) a:active,
  :host([lightOutlined]) a:focus {
    background-color: #a5e7fe;
    color:#011e44;
  }

  :host([lightFilled]) a:hover,
  :host([lightFilled]) a:active,
  :host([lightFilled]) a:focus {
    background-color: #011e44;
    color:#a5e7fe;
  }

  :host([primaryOutlined]) .wrapper,
  :host([primaryFilled]) .wrapper {
    background-color: #fff;
  }

  :host([tinted]) .wrapper {
    background-color: #e4e5e7;
  }

  :host([lightOutlined]) .wrapper,
  :host([lightFilled]) .wrapper {
    background-color: #011e44;
  }

  p {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
  }

  :host([primaryOutlined]) p,
  :host([primaryFilled]) p,
  :host([tinted]) p {
    color: black;
  }

  :host([lightOutlined]) p,
  :host([lightFilled]) p {
    color: #fff;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    font-style: italic;
    font-weight: 700;
    letter-spacing: .025rem;
    display: inline-block;
    margin-left: 32px;
  }

  :host([primaryOutlined]) a {
    border: 2px solid #005fa9;
    background-color: #fff;
    color: #005fa9;
    padding: 12px 32px;
  }

  :host([primaryFilled]) a {
    border: 2px solid #005fa9;
    background-color: #005fa9;
    color: #fff;
    padding: 12px 32px;
  }

  :host([tinted]) a {
    border: 2px solid #fff;
    background-color: #4f627c;
    color: #b0e1ff;
    padding: 12px 32px;
  }

  :host([lightOutlined]) a {
    border: 2px solid #a5e7fe;
    background-color: #011e44;
    color: #a5e7fe;
    padding: 12px 32px;
  }

  :host([lightFilled]) a {
    border: 2px solid #a5e7fe;
    background-color: #a5e7fe;
    color: #011e44;
    padding: 12px 32px;
  }
`;

constructor() {
  super();
  this.text = 'Subscribe';
  this.link = 'https://psu.edu';
}

render() {
  return html`
    <div class="wrapper">
      <p>WANT FREE TRIAL?</p>
      <a href="${this.link}"><slot>${this.text}</slot></a>
    </div>
  `;
}
}

customElements.define('cta-chip', CtaChip);