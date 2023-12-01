    let product=null;
    const bigImg = document.querySelector(".big-image img");
    const smallImg = document.querySelectorAll(".small-image img");
        // get datas from file json
        fetch('/js/data.js')
            .then(response => response.json())
            .then(data => {
                products = data;
                showDetail();
        })

        function showDetail(){
    // remove datas default from HTML
        let detail = document.querySelector('.main');
        let listProduct = document.querySelector('.listProduct');
        let productId =  new URLSearchParams(window.location.search).get('id');
        let thisProduct = products.filter(value => value.id == productId)[0];
        //if there is no product with id = productId => return to home page
        if(!thisProduct){
            window.location.href = "/";
        }

        detail.querySelector('.image .big-image img').src = thisProduct.image1;
        detail.querySelector('.image .small-image img:nth-child(1)').src = thisProduct.image1;
        detail.querySelector('.image .small-image img:nth-child(2)').src = thisProduct.image2;
        detail.querySelector('.image .small-image img:nth-child(3)').src = thisProduct.image3;
        const bigImg = document.querySelector(".big-image img");
        const smallImg = document.querySelectorAll(".small-image img");
        smallImg.forEach(function(smallImg) {
            smallImg.addEventListener("click", function() {
                console.log("Clicked");
                bigImg.src = smallImg.src;
            });
        });

        detail.querySelector('.infor .name').innerText = thisProduct.name;
        detail.querySelector('.infor .price').innerText = thisProduct.price + 'đ';
        detail.querySelector('.infor .description').innerText = thisProduct.description;


                // Shuffle function to randomize array
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Shuffle the products array and select the first 4 elements
        const shuffledProducts = shuffle(products.filter(value => value.id !== productId));
        const productsToShow = shuffledProducts.slice(0, 4);

        productsToShow.forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = 'chitietsanpham.html?id=' + product.id;
            newProduct.classList.add('itema');
            newProduct.innerHTML = `
                <img src="${product.image1}"></img>
                <div class="unmain">
                    <p>${product.name}</p>
                    <p><b>${product.price}</b></p>
                </div>`;
            listProduct.appendChild(newProduct);
        });


    }
    
    
    


