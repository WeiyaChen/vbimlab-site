class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" type="text/css" href="css/layout.css" />
    <div id="menubar">
      <hr size="2" width="100%" noshade="noshade" />
      <a href="index.html">Home</a> &nbsp; | &nbsp;
      <a href="publications.html">Publications</a> &nbsp; | &nbsp;
      <a href="teaching.html">Teaching</a> &nbsp; | &nbsp;
      <a href="resources.html">Resources</a> &nbsp; | &nbsp;
      <a href="members.html">Members</a>
      <hr size="2" width="100%" noshade="noshade" />
    </div>
    `;
  }
}

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<button><slot></slot></button>`;
  }
}
customElements.define('my-button', MyButton);

customElements.define('my-header', Header);