let library = [];

const table = document.getElementById("books");

function createBook(book) {
  const tbody = document.createElement("tbody");

  tbody.innerHTML = `
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages} pages</td>
    <td>${book.read}</td>
    <td><button class="btn"><i class="fa fa-trash"></i></button></td>
  </tr>`;

  return tbody;
}

const addToLibrary = (event) => {
  event.preventDefault();
  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.querySelector('input[name="read"]:checked').value,
  };

  document.querySelector("form").reset();

  const tbody = createBook(book);
  table.appendChild(tbody);

  console.warn("added", { library });
  // let pre = document.querySelector("#message pre");
  // pre.textContent = "\n" + JSON.stringify(library, "\t", 2);
  // localStorage.setItem("MyLibraryList", JSON.stringify(library));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("book-btn").addEventListener("click", addToLibrary);
});