const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
.then((res) => res.json())
.then((data) => handleCategoryList(data));

function handleCategoryList(data) {
    //console.log("hello")
    data.forEach(showCategory);
}
function showCategory(category) {
//console.log(category);

//grab the template
const template = document.querySelector("#categoriesList").content;
//clone it
const copy = template.cloneNode(true);
//change content
copy.querySelector("a").setAttribute("href",`productlist.html?category=${category.category}`);
copy.querySelector("h2").textContent = `${category.category}`;
//grab parent{}
const parent = document.querySelector("main");
//append
parent.appendChild(copy);
}
