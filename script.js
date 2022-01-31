fetch("http://localhost:3000/posts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    appendProduct(data);
  })
  .catch((err) => console.log(err));

let container = document.getElementById("container");
function appendProduct(product) {
  product.forEach((el) => {
    console.log(el);
    let innerDiv = document.createElement("div");
    let divbook = document.createElement("p");
    divbook.innerHTML = "Book Title = "+el.book;
    let divAuthor = document.createElement("p");
    divAuthor.innerHTML = "Book Author = " + el.author;

    let comments = document.createElement("comments");
    comments.innerHTML = "Book Comments = " +el.comments;
      innerDiv.append(divbook, divAuthor, comments);
      innerDiv.setAttribute("class", "innerDiv");
    container.append(innerDiv);
  });
}
var inputTitle = document.getElementById("ip1");
var inputAuthor = document.getElementById("ip2");

function addButtonFunc() {
  let _data = {
    book: inputTitle.value,
    author: inputAuthor.value,
    comments: inputComments.value,
  };

  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
