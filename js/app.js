document.addEventListener('DOMContentLoaded', () => {
  
const newItemForm = document.querySelector('#new-item-form');
newItemForm.addEventListener('submit', handleFormSubmit);

});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newItem = createListItem(event.target);
  const banana = document.querySelector('#reading-list');
  banana.appendChild(newItem);
  // console.log(event.target)
};

const createListItem = function (form) {
newListItem = document.createElement('li');
newListItem.classList.add('reading-list');

const newTitle = document.createElement('h3') 
newTitle.textContent = form.title.value;
newListItem.appendChild(newTitle)
return newListItem;
};


// console.log('JavaScript loaded');
