const url = "https://kea-alt-del.dk/t7/api/products";
//When we get response - return to Json
fetch (url)
      .then(function(res) {
          return res.json();
      })
      .then(function(data){
          handleProductlist(data);
      })

//Create function to handle Data
function handleProductlist(data){
          //console.log(data);
    //data.forEach(function(item){//callback 1 item/time
        //showProduct(item);//show the product pass the item
    data.forEach(showProduct);
}

/*<template id="smallProductTemplate">
        <article class="smallProduct">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Hummel Space Jam Diez"/>
            <h3>HUMMEL SPACE JAM DIEZ</h3>
            <p class="subtle">Tshirts</p>
            <p class="price"><span>Prev </span>500,95 kr</p>
            <div class="discounted">
            <p>Now 350,95 kr</p>
            <p>-30%</p>
        </div>
        <a href="product.html">Read More</a>
        </article> 
    </template>
*/ 
function showProduct(product) {
    console.log(product);
    //grab the template
const template = document.querySelector("#smallProductTemplate").content;
    //clone it - elements copied make a clone incl.all child 
const copy = template.cloneNode(true);
    //change content

    //grab parent
const parent = document.querySelector("main");
    //append - new child called COPY
parent.appendChild(copy);
}