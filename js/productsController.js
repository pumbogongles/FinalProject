//Hardcoded items productsController.js

const tote1 = {
    type: "Tote", // 4 options: tote, backpack, briefcase or camera bag
    name: "Basic Tote Bag", //any name
    desc: "A simple tote bag for any occassion", // any description
    color: "Red", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 19.90, // any price
    imageURL: `images/Dalle2/singleProduct/_6cf57709-06ac-43db-87ca-bb6d7f70e3c1.jpg`  
}

const tote2 = {
    type: "Tote", // 4 options: tote, backpack, briefcase or camera bag
    name: "Basic Plus Tote Bag", //any name
    desc: "A more complex tote bag for any occassion", // any description
    color: "White", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 21.90, // any price
    imageURL: `images/Dalle2/singleProduct/_8452f73d-8efc-47ea-894a-26e0ac7b8175.jpg`  
}

const backpack1 = {
    type: "Backpack", // 4 options: tote, backpack, briefcase or camera bag
    name: "Basic Backpack", //any name
    desc: "A versatile backpack for any occassion", // any description
    color: "Brown", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 39.90, // any price
    imageURL: `images/Dalle2/singleProduct/_a45e3865-2a51-4482-8755-b0d7801efce2.jpg`  
}

const briefcase1 = {
    type: "Briefcase", // 4 options: tote, backpack, briefcase or camera bag
    name: "Working Briefcase", //any name
    desc: "A work briefcase", // any description
    color: "Black", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 50.90, // any price
    imageURL: "images/Dalle2/singleProduct/_8452f73d-8efc-47ea-894a-26e0ac7b8175.jpg"  
}

const briefcase2 = {
    type: "Briefcase", // 4 options: tote, backpack, briefcase or camera bag
    name: "Working Briefcase 2", //any name
    desc: "A work briefcase 2", // any description
    color: "Red", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 30.90, // any price
    imageURL: "images/Dalle2/singleProduct/_cfb4ca8d-4783-4a0f-bac7-db1846e5982a.jpg"  
}

const briefcase3 = {
    type: "Briefcase", // 4 options: tote, backpack, briefcase or camera bag
    name: "Working Briefcase 3", //any name
    desc: "A work briefcase 2", // any description
    color: "Blue", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 60.90, // any price
    imageURL: "images/Dalle2/singleProduct/_d4751108-685c-4ab4-8dda-8f5b698d7db1.jpg"  
}

const cameraBag1 = {
    type: "Camera Bag", // 4 options: tote, backpack, briefcase or camera bag
    name: "Outdoor Camera Bag", //any name
    desc: "An average looking Camera Bag", // any description
    color: "Blue", // 6 options Red, Blue, Yellow, Green, Black, Brown
    price: 39.90, // any price
    imageURL: `images/Dalle2/singleProduct/_ee00f514-3f45-4a84-8aee-61be8f012397.jpg`  
}

const productArray = [];

productArray.push(tote1, tote2, backpack1, briefcase1, briefcase2, briefcase3, cameraBag1)


function displayProduct() {
    let display = "";
    for (let i = 0; i< productArray.length; i++) {
        display += `
        <div class="populatedContent col-lg-3 col-md-6 col-sm-6 border">
        <a href="#">
            <img src=${productArray[i].imageURL}>
            <p>${productArray[i].name}</p>
        </a>
    </div>`
    }
    document.querySelector(".populate").innerHTML = display;
}
console.log(productArray);
//displayProduct();

function addProductForm(){
    const productType = document.querySelector('#productType').value;
    const productName = document.querySelector('#productName').value;
    const productDescription = document.querySelector('#productDescription').value;
    const color = document.querySelector('#color').value;
    const productPrice = document.querySelector('#productPrice').value;
    const imageURL = "test";

    addProduct(productType,productName,productDescription,color,productPrice,imageURL);

    /*
    const ProductItem = {
        type: productType,
        name: productName,
        desc: productDescription,
        color: color,
        price: productPrice,
        imageURL: imageURL
    }

    productArray.push(ProductItem);
    */
   

}




function addProduct(t, n, d, c, p, i){

    //The parameters will be sent in from another function through the arguments
    //1) Construct/Create the object
    //   property: value
    const ProductItem = {
        type: t,
        name: n,
        desc: d,
        color: c,
        price: p,
        imageURL: i
    }

    productArray.push(ProductItem);

    console.log(productArray);
   // displayProduct();
}

