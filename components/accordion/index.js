class CWDSAccordion extends HTMLElement {
  connectedCallback() {
    console.log('hi')
    this.expandTarget = this.querySelector('.card-container');
    this.expandButton = this.querySelector('.card-header');
    this.expandButton.addEventListener('click', this.listen.bind(this))
  }

  listen() {
    console.log('um')
    let cardBodyHeight = this.parentNode.querySelector('.card-body').clientHeight;
    console.log(cardBodyHeight)
    if(this.expandTarget.clientHeight > 0) {
      this.expandTarget.style.height = '0px';
    } else {
     this.expandTarget.style.height = cardBodyHeight+'px';
    }
  }
}
window.customElements.define('cwds-accordion', CWDSAccordion);