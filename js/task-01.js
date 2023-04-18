
const categoriesRef = document.getElementById('categories');

console.log('Number of categories: ', categoriesRef.children.length);

const categoryList = categoriesRef.querySelectorAll('.item');
categoryList.forEach( item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});














