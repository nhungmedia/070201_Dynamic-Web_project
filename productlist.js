const urlParams = new URLSearchParams(window.location.search);
	//const query = urlParams.get("q");
const query = urlParams.get("category");    
//console.log(urlParams.get(category));

const url = "https://kea-alt-del.dk/t7/api/products?limit=12&category=" + query;
console.log("hello")
//const url = "https://kea-alt-del.dk/t7/api/products";
//When we get response - return to Json

fetch (url)
      .then((res) => res.json())   
      
      .then((data) => handleProductlist(data));


//Create function to handle Data
function handleProductlist(data){
          console.log(data);//array of objects -list of products
    //data.forEach(function(item){//callback 1 item/time
        //showProduct(item);//show the product pass the item
    data.forEach(showProduct);//for each objects on the list -show product
}


function showProduct(product) {
    console.log(product);//product=forEach
    //grab the template
const template = document.querySelector("#smallProductTemplate").content;

    //clone it - elements copied make a clone incl.all child 
const copy = template.cloneNode(true);

//change content

//Inside the clone - grab the link

copy.querySelector("a").setAttribute("href",`product.html?id=${product.id}`);

const imgUrl = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`; //
copy.querySelector("img").src = imgUrl;

copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;

copy.querySelector("h3").textContent = product.productdisplayname;
/* copy.querySelector(".price").textContent = product.price + " kr"; */
copy.querySelector(".price").textContent = `${product.price} kr`;

//condition
if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  
}
//if discount default no

if (product.discount) {
    const oldPrice = product.price;
    const percentage = product.discount;
    const newPrice = ( 100 - percentage ) * oldPrice / 100;
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".percentage").textContent = `${product.discount} % `;
    copy.querySelector(".discountedPrice").textContent = `Now ${newPrice} kr`;

}
const parent = document.querySelector("main");
    //append - new child called COPY
parent.appendChild(copy);
}