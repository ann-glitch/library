let library = [];

const addToLibrary = (event) => {
  event.preventDefault();
  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.querySelector('input[name="read"]:checked').value,
  };

  library.push(book);
  document.querySelector("form").reset();

  console.warn("added", { library });
  let pre = document.querySelector("#message pre");
  pre.textContent = "\n" + JSON.stringify(library, "\t", 2);

  localStorage.setItem("MyLibraryList", JSON.stringify(library));
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("book-btn").addEventListener("click", addToLibrary);
});