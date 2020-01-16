class CWDSAccordion extends HTMLElement {
  connectedCallback() {
    this.expandTarget = this.querySelector('.card-container');
    this.expandButton = this.querySelector('.card-header');
    this.expandButton.addEventListener('click', this.listen.bind(this))
  }

  listen() {
    let cardBodyHeight = this.parentNode.querySelector('.card-body').clientHeight;
    if(this.expandTarget.clientHeight > 0) {
      this.expandTarget.style.height = '0px';
    } else {
     this.expandTarget.style.height = cardBodyHeight+'px';
    }
  }
}
window.customElements.define('cwds-accordion', CWDSAccordion);


class CWDSStepList extends HTMLElement {
  connectedCallback() {
    this.expandTargets = this.querySelectorAll('li');
    this.expandTargets.forEach( (item) => {
      item.addEventListener('click', this.listen)
    })
  }

  listen() {
    let detailsEl = this.querySelector('.details');
    if(this.classList.contains('list-open')) {
      this.classList.remove('list-open')
    } else {
      this.classList.add('list-open')
    }
    if(!detailsEl.style.height || detailsEl.style.height.indexOf('0px') == 0) {
      detailsEl.style.height = detailsEl.scrollHeight + 'px';
    } else {
      detailsEl.style.height = '0px';
    }
  }
}
window.customElements.define('cwds-step-list', CWDSStepList);

