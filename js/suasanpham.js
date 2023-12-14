const inputFiles = document.querySelectorAll('.input_file');
const productPics = document.querySelectorAll('[id^="product_pic"]');

const reuserBtn = document.getElementById('suanguoidung');
const boxreuser = document.getElementById('boxsuauser');
const reUserForm = document.getElementById('suaUserForm');

reuserBtn.addEventListener('click', function () {
    if (boxreuser.style.display === 'none' || boxreuser.style.display === '') {
        boxreuser.style.display = 'block';
        document.querySelector('.overlay').classList.add('show-overlay');
        document.body.classList.add('no-scroll');
    } else {
        boxreuser.style.display = 'none';
        document.querySelector('.overlay').classList.remove('show-overlay');
        document.body.classList.remove('no-scroll');
    }
});
reUserForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Đã cập nhật thông tin');
    boxreuser.style.display = 'none';
});
for (let i = 0; i < inputFiles.length; i++) {
    inputFiles[i].addEventListener('change', function (event) {
        const inputFile = event.target;
        const productPic = productPics[i];

        if (inputFile.files && inputFile.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                productPic.src = e.target.result;
                productPic.style.display = "block";
            }

            reader.readAsDataURL(inputFile.files[0]);
        }
    });
}
function warning() {
    alert("Bạn đã cập nhật thành công !");
    boxreuser.style.display = 'none';
    setTimeout(function() {
        document.querySelector('.overlay').classList.remove('show-overlay');
        document.body.classList.remove('no-scroll');
    }, 0);
}



var form = document.getElementById("formId");
function submitForm(event) {
    event.preventDefault();
}

form.addEventListener('submit', submitForm);

function del(element) {
    var changeImgDiv = element.parentNode.parentNode;
    var pic = changeImgDiv.querySelector("img");
    var input = changeImgDiv.querySelector(".input_file");
    var result = confirm("Bạn có chắc muốn xóa hình không ?");
    if (result) {
      alert("Xóa hình thành công!!!")
    }
}
