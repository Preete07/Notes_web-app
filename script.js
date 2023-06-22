// Retrieve the necessary elements from the DOM
const noteInput = document.getElementById('noteInput');
const addButton = document.getElementById('addButton');
const noteList = document.getElementById('noteList');

// Function to handle adding a new note
function addNote() {
  const noteText = noteInput.value;

  if (noteText.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('noteItem');

    const noteTextElement = document.createElement('span');
    noteTextElement.classList.add('noteText');
    noteTextElement.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    listItem.appendChild(noteTextElement);
    listItem.appendChild(deleteButton);

    noteList.appendChild(listItem);

    noteInput.value = '';
  }
}

// Add event listener to the Add button
addButton.addEventListener('click', addNote);