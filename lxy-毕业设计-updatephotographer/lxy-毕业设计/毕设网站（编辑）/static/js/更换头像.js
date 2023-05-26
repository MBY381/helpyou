const avatar = document.getElementById('avatar');
const input = document.getElementById('input-file');

// 显示头像
function showAvatar(url) {
  avatar.style.backgroundImage = `url(${url})`;
}

// 上传头像到服务器
function uploadAvatar(file) {
  const formData = new FormData();
  formData.append('avatar', file);
  fetch('/upload', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.ok) {
      response.json().then(data => {
        showAvatar(data.url);
      });
    } else {
      alert('上传失败');
    }
  });
}

// 监听头像点击事件
avatar.addEventListener('click', function() {
  input.click();
});

// 监听文件上传事件
input.addEventListener('change', function(event) {
  const file = event.target.files[0];
  uploadAvatar(file);
});