var tablinks = document.getElementsByClassName('Tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add('active-links');
  document.getElementById(tabname).classList.add('active-tab');
}
