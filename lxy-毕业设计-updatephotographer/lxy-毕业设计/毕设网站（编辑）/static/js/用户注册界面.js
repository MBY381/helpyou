const username = document.querySelector('#r_c_name')
const pwd1 = document.getElementById('r_password')
const pwd2 = document.querySelector('#r_c_password')

function verifypwd() {
    const span = pwd2.nextElementSibling
    if (pwd1.value !== pwd2.value) {
        span.innerHTML = '*两次密码不一致'
        return false
    }
    span.innerHTML = ''
    return true
}

pwd2.addEventListener('change', verifypwd)


const btn = document.querySelector('#register_btn')
btn.addEventListener('click', function (e) {
    if (!verifypwd()) e.preventDefault()

    if (verifypwd()) {
        data = { name: username.value, pwd: pwd1.value }
        data = JSON.stringify(data)
        console.log(data)

        $.ajax({
            url: "http://127.0.0.1:5000/user/sign",
            method: 'POST',
            data: data,
            success: function (res) {
                console.log(res)
                if (res.msg === 'success') {
                    alert('注册成功')
                    window.location.href = "login.html"
                }
                else {
                    alert('注册失败')
                }
            },
            error: function (xhr, type, errorThrown) {
            }
        })

    }


})
