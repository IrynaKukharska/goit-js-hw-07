const list = document.querySelector("#categories");
console.log("Numbers of categories:", list.children.length);

[...list.children].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
//
//
// [...list.children].forEach((item) => {
//   console.log("Category:", item.querySelector("h2").textContent);
//   console.log("Elements:", item.querySelector("ul").children.length);
// });
