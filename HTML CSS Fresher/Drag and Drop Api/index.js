const list = document.getElementById('draggable-list');
const items = document.querySelectorAll('.draggable-item');

let draggedItem = null;


items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = item;
      item.classList.add('dragging');
    });
  
    item.addEventListener('dragend', () => {
      draggedItem = null;
      item.classList.remove('dragging');
    });
  });


// drag over and end

list.addEventListener('dragover', (e) => {
    e.preventDefault();
  
    const afterElement = getDragAfterElement(list, e.clientY);
    if (afterElement == null) {
      list.appendChild(draggedItem);
    } else {
      list.insertBefore(draggedItem, afterElement);
    }
  });
  

// after current drag

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')];
  
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }