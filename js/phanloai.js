let products = null;
console.log()
    // Get data from JSON file
    fetch('/js/data.js')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });

        function addDataToHTML() {
          let listProductHTML = document.querySelector('.listProduct');
          listProductHTML.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại
      
          const urlParams = new URLSearchParams(window.location.search);
          const typeParam = urlParams.get('type');
          if (products !== null && typeParam !== null) {
              const filteredProducts = products.filter(product => product.type === typeParam);
      
              filteredProducts.forEach(product => {
                  let newProduct = document.createElement('a');
                  newProduct.href = 'chitietsanpham.html?id=' + product.id;
                  newProduct.classList.add('itema');
                  newProduct.innerHTML = `
                      <img src="${product.image1}"></img>
                      <div class="unmain">
                          <p>${product.name}</p>
                          <p><b>${product.price}đ</b></p>
                      </div>`;
                  listProductHTML.appendChild(newProduct);
              });
              
              // Cập nhật danh sách sản phẩm mới sau khi đã lọc
              itemsForPagination = document.querySelectorAll('.itema');
              loadItem(); // Gọi hàm loadItem() để hiển thị phân trang ban đầu
          }
      }