/*-----------------PRODUCT------------------*/
const bigImg = document.querySelector(".product-content-left-bigimg img")
const smallImg =document.querySelectorAll(".product-content-left-smallimg img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener ("click", function(){
        bigImg.src = imgItem.src
    })
})