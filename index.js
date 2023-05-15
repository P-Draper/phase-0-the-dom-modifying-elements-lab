const mainNode = document.querySelector('#main');
if (mainNode) {
  mainNode.remove();
}
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Peter is the champion';