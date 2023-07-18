
const categoryItems = document.querySelectorAll("#categories > li.item");

const itemsCount = categoryItems.length;

console.log(`Number of categories: ${ itemsCount } `);
categoryItems.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;

  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});