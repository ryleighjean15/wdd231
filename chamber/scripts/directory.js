

window.addEventListener('DOMContentLoaded', (event) => {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});


const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const memberDisplay = document.getElementById('memberDisplay');

gridViewBtn.addEventListener('click', function() {
  memberDisplay.classList.remove('list-view');
  memberDisplay.classList.add('grid-view');
});

listViewBtn.addEventListener('click', function() {
  memberDisplay.classList.remove('grid-view');
  memberDisplay.classList.add('list-view');
});

