function showDetail(){
    // remove datas default from HTML
        let detail = document.querySelector('.detail');
        let listProduct = document.querySelector('.listProduct');
        let productId =  new URLSearchParams(window.location.search).get('id');
        let thisProduct = products.filter(value => value.id == productId)[0];
        //if there is no product with id = productId => return to home page
        if(!thisProduct){
            window.location.href = "/";
        }

        detail.querySelector('.image img1').src = thisProduct.image;
        detail.querySelector('.name').innerText = thisProduct.name;
        detail.querySelector('.price').innerText = '$' + thisProduct.price;
        detail.querySelector('.description').innerText = '$' + thisProduct.description;


        (products.filter(value => value.id != productId)).forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = '/detail.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>`;
            listProduct.appendChild(newProduct);
        });
    }
/*-----------------PRODUCT------------------*/
const bigImg = document.querySelector(".product-content-left-bigimg img")
const smallImg =document.querySelectorAll(".product-content-left-smallimg img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener ("click", function(){
        bigImg.src = imgItem.src
    })
})
