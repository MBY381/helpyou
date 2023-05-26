const uploadInput = document.getElementById('upload-input');
const uploadButton = document.getElementById('upload-button');
const preview = document.getElementById('preview');

// 添加图片预览
function addPreview(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const previewImage = document.createElement('div');
    previewImage.className = 'preview-image';
    previewImage.innerHTML = `
      <img src="${e.target.result}">
      <button class="delete-button">删除</button>
    `;
    preview.appendChild(previewImage);
    // 监听删除按钮的点击事件
    const deleteButton = previewImage.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      preview.removeChild(previewImage);
    });
  };
  reader.readAsDataURL(file);
}

// 监听上传按钮的点击事件
uploadButton.addEventListener('click', function() {
  uploadInput.click();
});

// 监听上传文件的change事件
uploadInput.addEventListener('change', function() {
  const files = uploadInput.files;
  for (let i = 0; i < files.length; i++) {
    addPreview(files[i]);
  }
  uploadInput.value = '';
});

// 监听确认上传按钮的点击事件
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'confirm-upload-button') {
    // TODO: 将照片上传至在线相册
    preview.innerHTML = '';
  }
});