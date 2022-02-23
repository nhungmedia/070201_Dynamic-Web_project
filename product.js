const urlParams = new URLSearchParams(window.location.search);
	//const query = urlParams.get("q");
const id = urlParams.get("id");    
//console.log(urlParams.get("id"));
//This id will control the data that is fetched.Dynamic string where id is appended.
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch (url)
      .then((res) => res.json())   
      
      .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
    console.log(product);
    document.querySelector(".breadcrumbs .category").textContent = product.brandname;
    document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;

document.querySelector("img.productImage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector("img.productImage").alt = product.productdisplayname;
    
    document.querySelector("h3").textContent = product.productdisplayname;
    document.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
    document.querySelector(".info dd").textContent = product.id;
    

}

