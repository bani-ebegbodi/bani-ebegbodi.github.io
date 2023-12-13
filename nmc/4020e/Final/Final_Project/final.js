
function validateInput() {
    const userInput = document.getElementById('subjectInput').value.trim();
    const messageDiv = document.getElementById('message');

    // Check if the input has spaces, indicating more than one word
    if (userInput.includes(' ')) {
        messageDiv.textContent = 'Please enter only one word.';
    } else {
        messageDiv.textContent = ''; // Clear the message if the input is valid
    }
} //validateInput

async function getBooks() {
    const subject = document.getElementById('subjectInput').value.trim();
    const messageDiv = document.getElementById('message');

    // Check if the input is one word before sending the request
    if (subject.includes(' ')) {
        messageDiv.textContent = 'Please enter only one word.';
        return; 
    }

    const url = `https://openlibrary.org/subjects/${subject.toLowerCase()}.json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayBooks(data.works);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
} //getBooks

function displayBooks(works) {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = ''; // Clear previous results

    // Randomly select 5 books
    const selectedBooks = works.sort(() => 0.5 - Math.random()).slice(0, 5);

    selectedBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book'); // Add the book class to each book element
         // Check if cover_id is available, otherwise use placeholder image
         const coverImageUrl = book.cover_id 
         ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
         : 'images/placeholder.svg'; 

        bookElement.innerHTML = `
            <img src="${coverImageUrl}" alt="${book.title}">            
            <p class="book-title">Title: ${book.title}</p>
            <p class="book-author">Author: ${book.authors.map(author => author.name).join(', ')}</p>
        `;
        booksDiv.appendChild(bookElement);
    });
} //displayBooks
