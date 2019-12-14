class CWDSAccordion extends HTMLElement {
  connectedCallback() {
    let expandTarget = this.querySelector('.card-container');
    let expandButton = this.querySelector('.card-header');
    expandButton.addEventListener('click', function(event) {
      event.preventDefault();
      let cardBodyHeight = this.parentNode.querySelector('.card-body').clientHeight;
      let parentHeight = this.parentNode.querySelector('.card-container').clientHeight
      if(parentHeight > 0) {
        expandTarget.style.height = '0px';
      } else {
        expandTarget.style.height = cardBodyHeight+'px';
      }
    })
  }  
}
window.customElements.define('cwds-accordion', CWDSAccordion);