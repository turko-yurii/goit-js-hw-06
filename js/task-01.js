const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);

const categoryEl = numberCategories.forEach(element =>
  console.log(
    `Category: ${element.firstElementChild.textContent}\nElements: ${
      element.querySelectorAll('li').length
    }`,
  ),
);