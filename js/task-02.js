const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient => {
  const product = document.createElement('li');
  product.textContent = ingredient;
  product.classList.add('item');

  return product;
});

ingredientsListEl.append(...ingredientEl);