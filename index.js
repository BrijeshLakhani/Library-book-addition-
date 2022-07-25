console.log("this is js");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}
// If user adds a book, add it to the local storage
let AddBook = document.getElementById('addBook');
AddBook.addEventListener("click", function(e) {

    let addText = document.getElementById("addText")
    let book = localStorage.getItem("Book");
    if (books) {

    }
})

//display constructor
function Display() {

}

// Add method to display prototype
Display.prototype.add = function(book) {
        console.log('adding');
        tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <th scope="row">#</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += uiString;
    }
    // Implement the validate function
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.name.author < 2) {
        return false;
    } else {
        return true;
    }
}
Display.prototype.show = function(type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>message:</strong> ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> `;
    setTimeout(function() {
        message.innerHTML = ''
    }, 5000);
}

// Implement the clear function
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryFrom');
    libraryFrom.reset();
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryFrom');
libraryFrom.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // programing, cocking, knowledge 
    let programing = document.getElementById('programing');
    let cocking = document.getElementById('cocking');
    let knowledge = document.getElementById('knowledge');
    let type;
    if (programing.checked) {
        type = programing.value;
    } else if (cocking.checked) {
        type = cocking.value;
    } else if (knowledge.checked) {
        type = knowledge.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'your book has been successfully added');

    } else {
        display.show('danger', 'sorry you cannot add this book');
    }

    e.preventDefault();

}