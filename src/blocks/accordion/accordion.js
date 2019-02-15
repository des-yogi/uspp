if (document.querySelector('.partnership__accordion')) {
  var accordionPartnership = new Accordion('.partnership__accordion', {
    duration: 350,
    showItem: false
  });
}

if (document.querySelector('.regional-office__accordion')) {
  var accordionPartnership = new Accordion('.regional-office__accordion', {
    duration: 350,
    showItem: true
  });
}

if (document.querySelector('.contacts-page__accordion')) {
  var accordionPartnership = new Accordion('.contacts-page__accordion', {
    duration: 350,
    showItem: true
  });
}
