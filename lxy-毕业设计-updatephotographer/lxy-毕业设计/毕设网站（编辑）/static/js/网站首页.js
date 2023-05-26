$(function() {
    const user_profile = document.querySelector('#user_profile')
    const user_name_log = user_profile.nextElementSibling
    $.ajax({
        url: "http://127.0.0.1:5000/user/info",
        method: 'GET',
        success: function (res) {
            console.log(res);
            if (res.msg === 'success') {
                user_name_log.innerHTML = res.user_msg
                user_profile.style.opacity = '1'
            }
        }
    })
    user_name_log.addEventListener('click', function() {
        window.location.href="[05-14]个人主页.html"
    })
    user_profile.addEventListener('click', function() {
        window.location.href="[05-14]个人主页.html"
    })
})