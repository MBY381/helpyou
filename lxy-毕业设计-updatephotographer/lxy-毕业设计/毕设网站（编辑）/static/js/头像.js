const avatar = document.getElementById('avatar');
const uploadBtn = document.getElementById('upload-btn');

// 当选择文件后，将文件内容读取为 URL，并将其设置为头像的 src 属性
avatar.addEventListener('click', () => {
    uploadBtn.click();
});

uploadBtn.addEventListener('change', () => {
    const file = uploadBtn.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        avatar.src = reader.result;
    });
    reader.readAsDataURL(file);
});