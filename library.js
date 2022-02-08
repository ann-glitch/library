const books = [];
const table = document.getElementById("books");

function td(content) {
    const td = document.createElement("td");
    td.innerHTML = content;
    return td;
}

function createBook(book) {
    console.log("creating a book with id", book.id);
    const idOfBook = book.id;
    const tbody = document.createElement("tbody");
    const btn = document.createElement("button");
    btn.addEventListener ("click", function(e) {
        const filteredBooks = books.filter((b) => b.id != idOfBook);
        removeExistingTBody(table);
        reRenderBooks(filteredBooks);
    });
    btn.className = "btn";
    btn.innerHTML = "<i class='fa fa-trash'></i>";

 const tr = document.createElement("tr");
 tr.appendChild(td(book.title));
 tr.appendChild(td(book.author));
 tr.appendChild(td(book.pages));
 tr.appendChild(td(book.read));

 const buttonTd = td("");
 buttonTd.appendChild(btn);

 tr.appendChild(buttonTd);


 return tbody
}

function removeExistingTBody(node) {
    const children = Array.from(getElementsByTagName("tbody"));
    for (const child of children) {
        child.remove();
    }
}

function reRenderBooks(b) {
    const totalBooks = document.querySelector("total-books")
    for (let i = 0; i < b.length; i++) {
        const bookFromLibrary = b[i];
        const tbody = createBook(bookFromLibrary);
        table.appendChild(tbody);
    }

    totalBooks.textContent = b.length;
}

const addToLibrary = (event) => {
  event.preventDefault();
  const book = {
    id: library.length,
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.querySelector('input[name="read"]:checked').value,
  };

  document.querySelector("form").reset();
  library.push(book);
  removeExistingTBody(table);


  console.warn("added", { library });
  // let pre = document.querySelector("#message pre");
  // pre.textContent = "\n" + JSON.stringify(library, "\t", 2);
  // localStorage.setItem("MyLibraryList", JSON.stringify(library));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("book-btn").addEventListener("click", addToLibrary);
});