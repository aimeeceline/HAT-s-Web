
let shouldDisplayBox = false;

function selectImage(imageId, event) {
    event.stopPropagation();
    shouldDisplayBox = true;
}

function deleteImage(imageId, event) {
    event.stopPropagation();
    shouldDisplayBox = true;
}

function updateData() {
    alert('Bạn có chắc chắn muốn lưu thay đổi? Hãy xác nhận');
    if (!shouldDisplayBox) {
        const boxreuser = document.getElementById('boxsuauser');
        boxreuser.style.display = 'none';
    }
    shouldDisplayBox = false; // Reset lại biến flag sau khi cập nhật
}

const reuserBtn = document.getElementById('suanguoidung');
reuserBtn.addEventListener('click', function () {
    const boxreuser = document.getElementById('boxsuauser');
    if (shouldDisplayBox) {
        shouldDisplayBox = false;
    } else {
        if (boxreuser.style.display === 'none' || boxreuser.style.display === '') {
            boxreuser.style.display = 'block';
        } else {
            boxreuser.style.display = 'none';
        }
    }
});

const reUserForm = document.getElementById('suaUserForm');
reUserForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Đã cập nhật thay đổi!');
    if (!shouldDisplayBox) {
        const boxreuser = document.getElementById('boxsuauser');
        boxreuser.style.display = 'none';
    }
    shouldDisplayBox = false;
});
