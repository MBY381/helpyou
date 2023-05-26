const text = document.querySelector('#username')
const text_pwd = document.querySelector('#password')

const form = document.querySelector('#login_form')
const btn = document.querySelector('[name=login]')
btn.addEventListener('click', function (e) {
    var username = text.value
    var pwd = text_pwd.value
    if (text.length <= 0) {
        e.preventDefault()
        return false
    }
    else if (text_pwd.length <= 0) {
        e.preventDefault()
        return false
    }

    var data = {username: username, pwd: pwd}
    data = JSON.stringify(data)
    console.log(data)

    $.ajax({
        url: "http://127.0.0.1:5000/user/login",
        method: 'POST',
        data: data,
        success: function (res) {
            console.log(res)
            if (res.msg === 'success') {
                alert('登录成功')
                window.location.href = "01网站首页.html"
            }
            else {
                alert('登录失败，用户名或密码错误')
            }
        },
        error: function (xhr, type, errorThrown) {
        }
    })
})