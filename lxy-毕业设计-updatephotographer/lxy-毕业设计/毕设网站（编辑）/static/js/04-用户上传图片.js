$(function () {
    // 1.获取菜单项的按钮
    const list1 = document.querySelector('.list1')
    const list2 = document.querySelector('.list2')
    const list3 = document.querySelector('.list3')

    // 2.查看菜单内容框
    const show_box = document.querySelector('.show_box')
    const menu_box_1 = document.querySelector('.menu_box_1')
    const menu_box_2 = document.querySelector('.menu_box_2')
    const menu_box_3 = document.querySelector('.menu_box_3')
    const menu_box_4 = document.querySelector('.menu_box_4')
    const menu_box_5 = document.querySelector('.menu_box_5')

    // 3.删除图片按钮
    const del1 = document.querySelector('.menu_box_1 .del1')
    const del2 = document.querySelector('.menu_box_1 .del2')
    const del3 = document.querySelector('.menu_box_1 .del3')
    const del4 = document.querySelector('.menu_box_1 .del4')

    // 4.添加图像框
    const add_pic1 = document.querySelector('.menu_box_1 .add_pic')
    const add_pic2 = document.querySelector('.menu_box_2 .add_pic')
    const add_pic3 = document.querySelector('.menu_box_3 .add_pic')

    // 5.整个图片的无序列表
    const pic_list1 = document.querySelector('.menu_box_1 .pic_list')
    const pic_list2 = document.querySelector('.menu_box_2 .pic_list')
    const pic_list3 = document.querySelector('.menu_box_3 .pic_list')

    // 6.保存按钮
    const save_btn_1 = document.querySelector('.menu_box_1 .save_btn')

    // 7.编辑按钮
    const edit_btn1 = document.querySelector('.menu_list_1 .edit_btn1')
    const edit_btn2 = document.querySelector('.menu_list_2 .edit_btn2')
    const edit_btn3 = document.querySelector('.menu_list_3 .edit_btn3')

    // 8.查看框，不可编辑
    const not_edit_box = document.querySelector('.not_edit_box')
    const box1 = document.querySelector('.not_edit_box .box1')
    const box2 = document.querySelector('.not_edit_box .box2')
    const box3 = document.querySelector('.not_edit_box .box3')
    const box4 = document.querySelector('.not_edit_box .box4')
    const box5 = document.querySelector('.not_edit_box .box5')

    // 9.查看框的图片
    const box_pic1 = document.querySelector('.box1 .box_pic1')
    const box_pic2 = document.querySelector('.box1 .box_pic2')
    const box_pic3 = document.querySelector('.box1 .box_pic3')
    const box_pic4 = document.querySelector('.box1 .box_pic4')
    const box_pic5 = document.querySelector('.box1 .box_pic5')
    const box_pic6 = document.querySelector('.box1 .box_pic6')
    const box_pic7 = document.querySelector('.box1 .box_pic7')
    const box_pic8 = document.querySelector('.box1 .box_pic8')

    const box_pic9 = document.querySelector('.box2 .box_pic1')
    const box_pic10 = document.querySelector('.box2 .box_pic2')
    const box_pic11 = document.querySelector('.box2 .box_pic3')
    const box_pic12 = document.querySelector('.box2 .box_pic4')
    const box_pic13 = document.querySelector('.box2 .box_pic5')
    const box_pic14 = document.querySelector('.box2 .box_pic6')
    const box_pic15 = document.querySelector('.box2 .box_pic7')
    const box_pic16 = document.querySelector('.box2 .box_pic8')

    const box_pic17 = document.querySelector('.box3 .box_pic1')
    const box_pic18 = document.querySelector('.box3 .box_pic2')
    const box_pic19 = document.querySelector('.box3 .box_pic3')
    const box_pic20 = document.querySelector('.box3 .box_pic4')
    const box_pic21 = document.querySelector('.box3 .box_pic5')
    const box_pic22 = document.querySelector('.box3 .box_pic6')
    const box_pic23 = document.querySelector('.box3 .box_pic7')
    const box_pic24 = document.querySelector('.box3 .box_pic8')

    const box_pic25 = document.querySelector('.box4 .box_pic1')
    const box_pic26 = document.querySelector('.box4 .box_pic2')
    const box_pic27 = document.querySelector('.box4 .box_pic3')
    const box_pic28 = document.querySelector('.box4 .box_pic4')
    const box_pic29 = document.querySelector('.box4 .box_pic5')
    const box_pic30 = document.querySelector('.box4 .box_pic6')
    const box_pic31 = document.querySelector('.box4 .box_pic7')
    const box_pic32 = document.querySelector('.box4 .box_pic8')

    const box_pic33 = document.querySelector('.box5 .box_pic1')
    const box_pic34 = document.querySelector('.box5 .box_pic2')
    const box_pic35 = document.querySelector('.box5 .box_pic3')
    const box_pic36 = document.querySelector('.box5 .box_pic4')
    const box_pic37 = document.querySelector('.box5 .box_pic5')
    const box_pic38 = document.querySelector('.box5 .box_pic6')
    const box_pic39 = document.querySelector('.box5 .box_pic7')
    const box_pic40 = document.querySelector('.box5 .box_pic8')

    var text = null
    var menu_name = null

    // ========================================添加功能============================================

    // 更换头像的功能
    const uploadImage = document.getElementById('avatar');
    uploadImage.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                uploadImage.src = reader.result;
            };
        };
        input.click();
    });

    // 删除菜单功能
    $('.menu_list_1 .del_btn1').on('click', function () {
        const itemToRemove = document.querySelector(".menu_list_1");
        itemToRemove.remove();
    })

    $('.menu_list_2 .del_btn2').on('click', function () {
        const itemToRemove = document.querySelector(".menu_list_2");
        itemToRemove.remove();
    })

    $('.menu_list_3 .del_btn3').on('click', function () {
        const itemToRemove = document.querySelector(".menu_list_3");
        itemToRemove.remove();
    })

    $('.catalogue').on('click', '.del_btn4', function () {
        const itemToRemove = document.querySelector(".menu_list_4");
        itemToRemove.remove();
    })

    $('.catalogue').on('click', '.del_btn5', function () {
        const itemToRemove = document.querySelector(".menu_list_5");
        itemToRemove.remove();
    })

    // =====================================1.第1个菜单栏==========================================
    // 1.1 第一个菜单项的编辑菜单内容
    edit_btn1.addEventListener('click', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'block'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'
        not_edit_box.style.display = 'none'

        // 需要8个变量，把用户上传的图片的路径进行记录
        var upload_1 = null
        var upload_2 = null
        var upload_3 = null
        var upload_4 = null
        var upload_5 = null
        var upload_6 = null
        var upload_7 = null
        var upload_8 = null

        // 填补默认菜单名
        text = list1.textContent
        const menu_name_1 = document.querySelector('.menu_box_1 .menu_name')
        menu_name_1.value = text

        // 先给出菜单名称的变量
        var name_1 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_1.addEventListener('change', function () {
            name_1 = menu_name_1.value
        })


        // 上传图片
        const pic1 = document.querySelector('.menu_box_1 .pic1');
        pic1.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic1.src = reader.result;
                    upload_1 = file.name
                };
            };
            input.click();
        });

        const pic2 = document.querySelector('.menu_box_1 .pic2');
        pic2.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic2.src = reader.result;
                    upload_2 = file.name;
                };
            };
            input.click();
        });

        const pic3 = document.querySelector('.menu_box_1 .pic3');
        pic3.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic3.src = reader.result;
                    upload_3 = file.name;
                };
            };
            input.click();
        });

        const pic4 = document.querySelector('.menu_box_1 .pic4');
        pic4.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic4.src = reader.result;
                    upload_4 = file.name;
                };
            };
            input.click();
        });


        // 1.2 第一个菜单项的增加图像框
        var id = 5
        add_pic1.addEventListener('click', function () {
            if (id <= 8) {
                var add_li = document.createElement('li')
                add_li.innerHTML = '<li id="li' + id + '"><div class="pic" id="pic_container_save"><img src="static/picture/white.png" width="200px" height="150px" class="pic' + id + '"><input type="file" name="file" id="file-input11" style="display:none"><span class="del del' + id + '">×</span></div></li>'
                id = id + 1
                pic_list1.appendChild(add_li)
            } else {
                alert('一次最多添加8张图像')
            }
        })

        // 1.3 第一个菜单项的删除图片功能(内定的图片框)
        del1.addEventListener('click', function () {
            const itemToRemove1 = document.querySelector(".menu_box_1 #li1");
            itemToRemove1.remove();

        })

        del2.addEventListener('click', function () {
            const itemToRemove2 = document.querySelector(".menu_box_1 #li2");
            itemToRemove2.remove();
        })

        del3.addEventListener('click', function () {
            const itemToRemove3 = document.querySelector(".menu_box_1 #li3");
            itemToRemove3.remove();
        })

        del4.addEventListener('click', function () {
            const itemToRemove4 = document.querySelector(".menu_box_1 #li4");
            itemToRemove4.remove();
        })

        // 1.4 对新增元素进行删除按钮的代理
        $('.menu_box_1 .pic_list').on('click', '.del5', function () {
            const itemToRemove5 = document.querySelector(".menu_box_1 .pic_list #li5");
            itemToRemove5.remove();
        })

        $('.menu_box_1 .pic_list').on('click', '.del6', function () {
            const itemToRemove6 = document.querySelector(".menu_box_1 .pic_list #li6");
            itemToRemove6.remove();
        })

        $('.menu_box_1 .pic_list').on('click', '.del7', function () {
            const itemToRemove7 = document.querySelector(".menu_box_1 .pic_list #li7");
            itemToRemove7.remove();
        })

        $('.menu_box_1 .pic_list').on('click', '.del8', function () {
            const itemToRemove8 = document.querySelector(".menu_box_1 .pic_list #li8");
            itemToRemove8.remove();
        })

        // 1.5 对新增元素添加上传图片的功能
        $('.menu_box_1 .pic_list').on('click', '.pic5', function () {
            const pic5 = document.querySelector('.menu_box_1 .pic_list .pic5')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic5.src = reader.result;
                    upload_5 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_1 .pic_list').on('click', '.pic6', function () {
            const pic6 = document.querySelector('.menu_box_1 .pic_list .pic6')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic6.src = reader.result;
                    upload_6 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_1 .pic_list').on('click', '.pic7', function () {
            const pic7 = document.querySelector('.menu_box_1 .pic_list .pic7')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic7.src = reader.result;
                    upload_7 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_1 .pic_list').on('click', '.pic8', function () {
            const pic8 = document.querySelector('.menu_box_1 .pic_list .pic8')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic8.src = reader.result;
                    upload_8 = file.name;
                };
            };
            input.click();
        })


        // 1.5 保存按钮需要把图片放到数据库里面
        save_btn_1.addEventListener('click', function () {
            console.log(111)
            // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
            list1.textContent = name_1
            var fileInput = document.getElementById("file-input11");
            var picContainer = document.getElementById("pic_container_save");
            var imgElement = picContainer.querySelector("img");
            var imageUrl = imgElement.src;
            var xhr = new XMLHttpRequest();


            var formData = new FormData();
            var imageFile = dataURItoBlob(imageUrl);
            const now = new Date();
            const lastThreeDigits = parseInt(now.getTime() / 1000 % 1000);
            formData.append("image", imageFile, "18777804941-雨季-5"+lastThreeDigits+".jpg");


            xhr.open("POST", "http://127.0.0.1:5000/upload/pic1", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 上传成功
                    alert('保存成功！')
                    console.log(xhr.responseText);
                } else if (xhr.readyState === 4) {
                    // 上传失败
                    alert('保存失败！')
                    console.error(xhr.statusText);
                }
            };
            xhr.send(formData);

            function dataURItoBlob(dataURI) {
                var byteString = atob(dataURI.split(",")[1]);
                var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ab], {type: mimeString});
            }



            var data = []
            var json_data = {}

            // 1.5.2 获取用户上传的图片的路径
            if (upload_1 !== null) {
                data.push(upload_1)
                json_data["upload_1"] = upload_1

            }
            if (upload_2 !== null) {
                data.push(upload_2)
                json_data["upload_2"] = upload_2
            }
            if (upload_3 !== null) {
                data.push(upload_3)
                json_data["upload_3"] = upload_3
            }
            if (upload_4 !== null) {
                data.push(upload_4)
                json_data["upload_4"] = upload_4
            }
            if (upload_5 !== null) {
                data.push(upload_5)
                json_data["upload_5"] = upload_5
            }
            if (upload_6 !== null) {
                data.push(upload_6)
                json_data["upload_6"] = upload_6
            }
            if (upload_7 !== null) {
                data.push(upload_7)
                json_data["upload_7"] = upload_7
            }
            if (upload_8 !== null) {
                data.push(upload_8)
                json_data["upload_8"] = upload_8
            }
            json_data = JSON.stringify(json_data)
            console.log(json_data);

            // 1.5.3 获得用户之后，开始进行插入操作
            // $.ajax({
            //     url: 'http://127.0.0.1:5000/upload/pic1',
            //     method: 'POST',
            //     data: json_data,
            //     success: function (res) {
            //         console.log(res);
            //         if (res.msg === 'success') {
            //             alert('保存成功')
            //         } else {
            //             alert('保存失败')
            //         }
            //     }
            // })
        })
    })

    // 1.2 查看第一个菜单的内容
    list1.addEventListener('click', function () {
        show_box.style.display = 'none'
        not_edit_box.style.display = 'block'
        box1.style.display = 'block'
        box2.style.display = 'none'
        box3.style.display = 'none'
        box4.style.display = 'none'
        box5.style.display = 'none'

        // 从数据库读取一下图片的地址
        var box_pic = [box_pic1, box_pic2, box_pic3, box_pic4, box_pic5, box_pic6, box_pic7, box_pic8]

        $.ajax({
            url: 'http://127.0.0.1:5000/menu_1_show',
            method: 'GET',
            success: function (res) {
                console.log(res.path);
                var x = res.path
                for (var i = 0; i < x.length; i++) {
                    box_pic[i].src = res.path[i]
                }
            }
        })

    })

    // =====================================2.第2个菜单栏==========================================
    // 2.1 第2个菜单项的编辑菜单内容
    edit_btn2.addEventListener('click', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'block'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'
        not_edit_box.style.display = 'none'

        // 需要8个变量，把用户上传的图片的路径进行记录
        var upload_1 = null
        var upload_2 = null
        var upload_3 = null
        var upload_4 = null
        var upload_5 = null
        var upload_6 = null
        var upload_7 = null
        var upload_8 = null

        // 预设菜单名称
        text = list2.textContent
        const menu_name_2 = document.querySelector('.menu_box_2 .menu_name')
        menu_name_2.value = text

        // 先给出菜单名称的变量
        var name_2 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_2.addEventListener('change', function () {
            name_2 = menu_name_2.value
        })

        // 上传图片
        const pic1 = document.querySelector('.menu_box_2 .pic1');
        pic1.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic1.src = reader.result;
                    upload_1 = file.name;
                };
            };
            input.click();
        });

        const pic2 = document.querySelector('.menu_box_2 .pic2');
        pic2.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic2.src = reader.result;
                    upload_2 = file.name;
                };
            };
            input.click();
        });

        const pic3 = document.querySelector('.menu_box_2 .pic3');
        pic3.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic3.src = reader.result;
                    upload_3 = file.name;
                };
            };
            input.click();
        });

        const pic4 = document.querySelector('.menu_box_2 .pic4');
        pic4.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic4.src = reader.result;
                    upload_4 = file.name;
                };
            };
            input.click();
        });

        // 1.2 第2个菜单项的增加图像框
        var id = 5
        add_pic2.addEventListener('click', function () {
            if (id <= 8) {
                var add_li = document.createElement('li')
                add_li.innerHTML = '<li id="li' + id + '"><div class="pic"><img src="static/picture/2.jpg" width="200px" height="150px" class="pic' + id + '"><span class="del del' + id + '">×</span></div></li>'
                id = id + 1
                pic_list2.appendChild(add_li)
            } else {
                alert('一次最多添加8张图像')
            }

        })

        // 1.3 第2个菜单项的删除图片功能(内定的图片框)
        $('.menu_box_2 .del1').on('click', function () {
            const itemToRemove1 = document.querySelector(".menu_box_2 #li1");
            itemToRemove1.remove();
        })

        $('.menu_box_2 .del2').on('click', function () {
            const itemToRemove2 = document.querySelector(".menu_box_2 #li2");
            itemToRemove2.remove();
        })

        $('.menu_box_2 .del3').on('click', function () {
            const itemToRemove3 = document.querySelector(".menu_box_2 #li3");
            itemToRemove3.remove();
        })

        $('.menu_box_2 .del4').on('click', function () {
            const itemToRemove4 = document.querySelector(".menu_box_2 #li4");
            itemToRemove4.remove();
        })

        // 1.4 对新增元素进行删除按钮的代理
        $('.menu_box_2 .pic_list').on('click', '.del5', function () {
            const itemToRemove5 = document.querySelector(".menu_box_2 .pic_list #li5");
            itemToRemove5.remove();
        })

        $('.menu_box_2 .pic_list').on('click', '.del6', function () {
            const itemToRemove6 = document.querySelector(".menu_box_2 .pic_list #li6");
            itemToRemove6.remove();
        })

        $('.menu_box_2 .pic_list').on('click', '.del7', function () {
            const itemToRemove7 = document.querySelector(".menu_box_2 .pic_list #li7");
            itemToRemove7.remove();
        })

        $('.menu_box_2 .pic_list').on('click', '.del8', function () {
            const itemToRemove8 = document.querySelector(".menu_box_2 .pic_list #li8");
            itemToRemove8.remove();
        })

        // 2.5 对新增元素添加上传图片的功能
        $('.menu_box_2 .pic_list').on('click', '.pic5', function () {
            const pic5 = document.querySelector('.menu_box_2 .pic_list .pic5')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic5.src = reader.result;
                    upload_5 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_2 .pic_list').on('click', '.pic6', function () {
            const pic6 = document.querySelector('.menu_box_2 .pic_list .pic6')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic6.src = reader.result;
                    upload_6 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_2 .pic_list').on('click', '.pic7', function () {
            const pic7 = document.querySelector('.menu_box_2 .pic_list .pic7')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic7.src = reader.result;
                    upload_7 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_2 .pic_list').on('click', '.pic8', function () {
            const pic8 = document.querySelector('.menu_box_2 .pic_list .pic8')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic8.src = reader.result;
                    upload_8 = file.name;
                };
            };
            input.click();
        })

        // 2.6 保存按钮需要把图片放到数据库里面
        $('.menu_box_2 .save_btn').on('click', function () {
            list2.textContent = name_2

            var data = []
            var json_data = {}

            // 1.5.1 获取用户上传的图片的路径
            if (upload_1 !== null) {
                data.push(upload_1)
                json_data["upload_1"] = upload_1

            }
            if (upload_2 !== null) {
                data.push(upload_2)
                json_data["upload_2"] = upload_2
            }
            if (upload_3 !== null) {
                data.push(upload_3)
                json_data["upload_3"] = upload_3
            }
            if (upload_4 !== null) {
                data.push(upload_4)
                json_data["upload_4"] = upload_4
            }
            if (upload_5 !== null) {
                data.push(upload_5)
                json_data["upload_5"] = upload_5
            }
            if (upload_6 !== null) {
                data.push(upload_6)
                json_data["upload_6"] = upload_6
            }
            if (upload_7 !== null) {
                data.push(upload_7)
                json_data["upload_7"] = upload_7
            }
            if (upload_8 !== null) {
                data.push(upload_8)
                json_data["upload_8"] = upload_8
            }
            json_data = JSON.stringify(json_data)
            console.log(json_data);

            // 1.5.2 获得用户之后，开始进行插入操作
            $.ajax({
                url: 'http://127.0.0.1:5000/upload/pic2',
                method: 'POST',
                data: json_data,
                success: function (res) {
                    if (res.msg === 'success') {
                        alert('保存成功')
                    }
                    console.log(res);
                }
            })
        })
    })

    // 2.2 查看第2个菜单的内容
    list2.addEventListener('click', function () {
        show_box.style.display = 'none'
        not_edit_box.style.display = 'block'
        box1.style.display = 'none'
        box2.style.display = 'block'
        box3.style.display = 'none'
        box4.style.display = 'none'
        box5.style.display = 'none'


        // 从数据库读取一下图片的地址
        var box_pic = [box_pic9, box_pic10, box_pic11, box_pic12, box_pic13, box_pic14, box_pic15, box_pic16,]

        $.ajax({
            url: 'http://127.0.0.1:5000/menu_2_show',
            method: 'GET',
            success: function (res) {
                console.log(res.path);
                var x = res.path
                for (var i = 0; i < x.length; i++) {
                    box_pic[i].src = res.path[i]
                }
            }
        })

    })

    // =====================================3.第3个菜单栏==========================================

    // 3.1 第3个菜单项的编辑菜单内容
    edit_btn3.addEventListener('click', function () {
        show_box.style.display = 'block'
        not_edit_box.style.display = 'none'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'block'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'

        // 需要8个变量，把用户上传的图片的路径进行记录
        var upload_1 = null
        var upload_2 = null
        var upload_3 = null
        var upload_4 = null
        var upload_5 = null
        var upload_6 = null
        var upload_7 = null
        var upload_8 = null

        // 预设的菜单名称
        text = list3.textContent
        const menu_name_3 = document.querySelector('.menu_box_3 .menu_name')
        menu_name_3.value = text

        // 先给出菜单名称的变量
        var name_3 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_3.addEventListener('change', function () {
            name_3 = menu_name_3.value
        })

        // 上传图片
        const pic1 = document.querySelector('.menu_box_3 .pic1');
        pic1.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic1.src = reader.result;
                    upload_1 = file.name;
                };
            };
            input.click();
        });

        const pic2 = document.querySelector('.menu_box_3 .pic2');
        pic2.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic2.src = reader.result;
                    upload_2 = file.name;
                };
            };
            input.click();
        });

        const pic3 = document.querySelector('.menu_box_3 .pic3');
        pic3.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic3.src = reader.result;
                    upload_3 = file.name;
                };
            };
            input.click();
        });

        const pic4 = document.querySelector('.menu_box_3 .pic4');
        pic4.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic4.src = reader.result;
                    upload_4 = file.name;
                };
            };
            input.click();
        });

        // 1.2 第3个菜单项的增加图像框
        var id = 5
        add_pic3.addEventListener('click', function () {
            if (id <= 8) {
                var add_li = document.createElement('li')
                add_li.innerHTML = '<li id="li' + id + '"><div class="pic"><img src="static/picture/3.jpg" width="200px" height="150px" class="pic' + id + '"><span class="del del' + id + '">×</span></div></li>'
                id = id + 1
                pic_list3.appendChild(add_li)
            } else {
                alert('一次最多添加8张图像')
            }

        })

        // 1.3 第一个菜单项的删除图片功能(内定的图片框)
        $('.menu_box_3 .del1').on('click', function () {
            const itemToRemove1 = document.querySelector(".menu_box_3 #li1");
            itemToRemove1.remove();
        })

        $('.menu_box_3 .del2').on('click', function () {
            const itemToRemove2 = document.querySelector(".menu_box_3 #li2");
            itemToRemove2.remove();
        })

        $('.menu_box_3 .del3').on('click', function () {
            const itemToRemove3 = document.querySelector(".menu_box_3 #li3");
            itemToRemove3.remove();
        })

        $('.menu_box_3 .del4').on('click', function () {
            const itemToRemove4 = document.querySelector(".menu_box_3 #li4");
            itemToRemove4.remove();
        })

        // 1.5 对新增元素添加上传图片的功能
        $('.menu_box_3 .pic_list').on('click', '.pic5', function () {
            const pic5 = document.querySelector('.menu_box_3 .pic_list .pic5')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic5.src = reader.result;
                    upload_5 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_3 .pic_list').on('click', '.pic6', function () {
            const pic6 = document.querySelector('.menu_box_3 .pic_list .pic6')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic6.src = reader.result;
                    upload_6 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_3 .pic_list').on('click', '.pic7', function () {
            const pic7 = document.querySelector('.menu_box_3 .pic_list .pic7')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic7.src = reader.result;
                    upload_7 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_3 .pic_list').on('click', '.pic8', function () {
            const pic8 = document.querySelector('.menu_box_3 .pic_list .pic8')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic8.src = reader.result;
                    upload_8 = file.name;
                };
            };
            input.click();
        })

        // 1.6 保存按钮需要把图片放到数据库里面
        $('.menu_box_3 .save_btn').on('click', function () {
            list3.textContent = name_3

            var data = []
            var json_data = {}

            // 1.5.1 获取用户上传的图片的路径
            if (upload_1 !== null) {
                data.push(upload_1)
                json_data["upload_1"] = upload_1

            }
            if (upload_2 !== null) {
                data.push(upload_2)
                json_data["upload_2"] = upload_2
            }
            if (upload_3 !== null) {
                data.push(upload_3)
                json_data["upload_3"] = upload_3
            }
            if (upload_4 !== null) {
                data.push(upload_4)
                json_data["upload_4"] = upload_4
            }
            if (upload_5 !== null) {
                data.push(upload_5)
                json_data["upload_5"] = upload_5
            }
            if (upload_6 !== null) {
                data.push(upload_6)
                json_data["upload_6"] = upload_6
            }
            if (upload_7 !== null) {
                data.push(upload_7)
                json_data["upload_7"] = upload_7
            }
            if (upload_8 !== null) {
                data.push(upload_8)
                json_data["upload_8"] = upload_8
            }
            json_data = JSON.stringify(json_data)
            console.log(json_data);

            // 1.5.2 获得用户之后，开始进行插入操作
            $.ajax({
                url: 'http://127.0.0.1:5000/upload/pic3',
                method: 'POST',
                data: json_data,
                success: function (res) {
                    if (res.msg === 'success') {
                        alert('保存成功')
                    }
                    console.log(res);
                }
            })
        })
    })

    // 3.2 查看第3个菜单的内容
    list3.addEventListener('click', function () {
        show_box.style.display = 'none'
        not_edit_box.style.display = 'block'
        box1.style.display = 'none'
        box2.style.display = 'none'
        box3.style.display = 'block'
        box4.style.display = 'none'
        box5.style.display = 'none'


        // 从数据库读取一下图片的地址
        var box_pic = [box_pic17, box_pic18, box_pic19, box_pic20, box_pic21, box_pic22, box_pic23, box_pic24]

        $.ajax({
            url: 'http://127.0.0.1:5000/menu_3_show',
            method: 'GET',
            success: function (res) {
                console.log(res.path);
                var x = res.path
                for (var i = 0; i < x.length; i++) {
                    box_pic[i].src = res.path[i]
                }
            }
        })

    })


    // =====================================4.第4个菜单栏==========================================
    // 4.1增加菜单栏的功能
    const add_menu = document.querySelector('.add_menu')
    const catalogue = document.querySelector('.catalogue')
    // 动态添加元素
    var id = 4
    add_menu.addEventListener('click', function () {
        var add_li = document.createElement('li')
        var name = prompt('请输入菜单名称：');
        add_li.innerHTML = '<li class="menu_list menu_list_' + id + ' "><span class="list' + id + '">' + name + '</span><button class="edit_btn' + id + '">编辑</button class="del_btn' + id + '"><button class="del_btn' + id + '">删除</button></li>'
        id = id + 1
        catalogue.appendChild(add_li)
    })

    $('.catalogue').on('click', '.edit_btn4', function () {
        show_box.style.display = 'block'
        not_edit_box.style.display = 'none'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'block'
        menu_box_5.style.display = 'none'

        // 需要8个变量，把用户上传的图片的路径进行记录
        var upload_1 = null
        var upload_2 = null
        var upload_3 = null
        var upload_4 = null
        var upload_5 = null
        var upload_6 = null
        var upload_7 = null
        var upload_8 = null

        // 预设的菜单名称
        const list4 = document.querySelector('.catalogue .list4')
        text = list4.textContent
        const menu_name_4 = document.querySelector('.menu_box_4 .menu_name')
        menu_name_4.value = text

        // 先给出菜单名称的变量
        var name_4 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_4.addEventListener('change', function () {
            name_4 = menu_name_4.value
        })

        // 4.1 上传图片
        const pic1 = document.querySelector('.menu_box_4 .pic1');
        pic1.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic1.src = reader.result;
                    upload_1 = file.name
                };
            };
            input.click();
        });

        const pic2 = document.querySelector('.menu_box_4 .pic2');
        pic2.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic2.src = reader.result;
                    upload_2 = file.name;
                };
            };
            input.click();
        });

        const pic3 = document.querySelector('.menu_box_4 .pic3');
        pic3.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic3.src = reader.result;
                    upload_3 = file.name;
                };
            };
            input.click();
        });

        const pic4 = document.querySelector('.menu_box_4 .pic4');
        pic4.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic4.src = reader.result;
                    upload_4 = file.name;
                };
            };
            input.click();
        });

        // 4.2 第一个菜单项的增加图像框
        var id = 5
        const add_pic4 = document.querySelector('.menu_box_4 .add_pic')
        const pic_list4 = document.querySelector('.menu_box_4 .pic_list')
        add_pic4.addEventListener('click', function () {
            if (id <= 8) {
                var add_li = document.createElement('li')
                add_li.innerHTML = '<li id="li' + id + '"><div class="pic"><img src="static/picture/white.png" width="200px" height="150px" class="pic' + id + '"><span class="del del' + id + '">×</span></div></li>'
                id = id + 1
                pic_list4.appendChild(add_li)
            } else {
                alert('一次最多添加8张图像')
            }
        })

        // 4.3 第4个菜单项的删除图片功能(内定的图片框)
        $('.menu_box_4 .del1').on('click', function () {
            const itemToRemove1 = document.querySelector(".menu_box_4 #li1");
            itemToRemove1.remove();
        })

        $('.menu_box_4 .del2').on('click', function () {
            const itemToRemove2 = document.querySelector(".menu_box_4 #li2");
            itemToRemove2.remove();
        })

        $('.menu_box_4 .del3').on('click', function () {
            const itemToRemove3 = document.querySelector(".menu_box_4 #li3");
            itemToRemove3.remove();
        })

        $('.menu_box_4 .del4').on('click', function () {
            const itemToRemove4 = document.querySelector(".menu_box_4 #li4");
            itemToRemove4.remove();
        })

        // 4.4 对新增元素进行删除按钮的代理
        $('.menu_box_4 .pic_list').on('click', '.del5', function () {
            const itemToRemove5 = document.querySelector(".menu_box_4 .pic_list #li5");
            itemToRemove5.remove();
        })

        $('.menu_box_4 .pic_list').on('click', '.del6', function () {
            const itemToRemove6 = document.querySelector(".menu_box_4 .pic_list #li6");
            itemToRemove6.remove();
        })

        $('.menu_box_4 .pic_list').on('click', '.del7', function () {
            const itemToRemove7 = document.querySelector(".menu_box_4 .pic_list #li7");
            itemToRemove7.remove();
        })

        $('.menu_box_4 .pic_list').on('click', '.del8', function () {
            const itemToRemove8 = document.querySelector(".menu_box_4 .pic_list #li8");
            itemToRemove8.remove();
        })

        // 4.5 对新增元素添加上传图片的功能
        $('.menu_box_4 .pic_list').on('click', '.pic5', function () {
            const pic5 = document.querySelector('.menu_box_4 .pic_list .pic5')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic5.src = reader.result;
                    upload_5 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_4 .pic_list').on('click', '.pic6', function () {
            const pic6 = document.querySelector('.menu_box_4 .pic_list .pic6')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic6.src = reader.result;
                    upload_6 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_4 .pic_list').on('click', '.pic7', function () {
            const pic7 = document.querySelector('.menu_box_4 .pic_list .pic7')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic7.src = reader.result;
                    upload_7 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_4 .pic_list').on('click', '.pic8', function () {
            const pic8 = document.querySelector('.menu_box_4 .pic_list .pic8')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic8.src = reader.result;
                    upload_8 = file.name;
                };
            };
            input.click();
        })

        // 2.6 保存按钮需要把图片放到数据库里面
        $('.menu_box_4 .save_btn').on('click', function () {
            list4.textContent = name_4

            var data = []
            var json_data = {}

            // 1.5.1 获取用户上传的图片的路径
            if (upload_1 !== null) {
                data.push(upload_1)
                json_data["upload_1"] = upload_1

            }
            if (upload_2 !== null) {
                data.push(upload_2)
                json_data["upload_2"] = upload_2
            }
            if (upload_3 !== null) {
                data.push(upload_3)
                json_data["upload_3"] = upload_3
            }
            if (upload_4 !== null) {
                data.push(upload_4)
                json_data["upload_4"] = upload_4
            }
            if (upload_5 !== null) {
                data.push(upload_5)
                json_data["upload_5"] = upload_5
            }
            if (upload_6 !== null) {
                data.push(upload_6)
                json_data["upload_6"] = upload_6
            }
            if (upload_7 !== null) {
                data.push(upload_7)
                json_data["upload_7"] = upload_7
            }
            if (upload_8 !== null) {
                data.push(upload_8)
                json_data["upload_8"] = upload_8
            }
            json_data = JSON.stringify(json_data)
            console.log(json_data);

            // 1.5.2 获得用户之后，开始进行插入操作
            $.ajax({
                url: 'http://127.0.0.1:5000/upload/pic4',
                method: 'POST',
                data: json_data,
                success: function (res) {
                    if (res.msg === 'success') {
                        alert('保存成功')
                    }
                    console.log(res);
                }
            })
        })
    })

    $('.catalogue').on('click', '.list4', function () {
        show_box.style.display = 'none'
        not_edit_box.style.display = 'block'
        box1.style.display = 'none'
        box2.style.display = 'none'
        box3.style.display = 'none'
        box4.style.display = 'block'
        box5.style.display = 'none'

        // 从数据库读取一下图片的地址
        var box_pic = [box_pic25, box_pic26, box_pic27, box_pic28, box_pic29, box_pic30, box_pic31, box_pic32]

        $.ajax({
            url: 'http://127.0.0.1:5000/menu_4_show',
            method: 'GET',
            success: function (res) {
                console.log(res.path);
                var x = res.path
                for (var i = 0; i < x.length; i++) {
                    box_pic[i].src = res.path[i]
                }
            }
        })
    })

    // =====================================5.第5个菜单栏==========================================
    $('.catalogue').on('click', '.edit_btn5', function () {
        show_box.style.display = 'block'
        not_edit_box.style.display = 'none'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'block'

        // 需要8个变量，把用户上传的图片的路径进行记录
        var upload_1 = null
        var upload_2 = null
        var upload_3 = null
        var upload_4 = null
        var upload_5 = null
        var upload_6 = null
        var upload_7 = null
        var upload_8 = null

        // 预设的菜单名称
        const list5 = document.querySelector('.catalogue .list5')
        text = list5.textContent
        const menu_name_5 = document.querySelector('.menu_box_5 .menu_name')
        menu_name_5.value = text

        // 先给出菜单名称的变量
        var name_5 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_5.addEventListener('change', function () {
            name_5 = menu_name_5.value
        })

        // 4.1 上传图片
        const pic1 = document.querySelector('.menu_box_5 .pic1');
        pic1.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic1.src = reader.result;
                    upload_1 = file.name
                };
            };
            input.click();
        });

        const pic2 = document.querySelector('.menu_box_5 .pic2');
        pic2.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic2.src = reader.result;
                    upload_2 = file.name;
                };
            };
            input.click();
        });

        const pic3 = document.querySelector('.menu_box_5 .pic3');
        pic3.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic3.src = reader.result;
                    upload_3 = file.name;
                };
            };
            input.click();
        });

        const pic4 = document.querySelector('.menu_box_5 .pic4');
        pic4.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic4.src = reader.result;
                    upload_4 = file.name;
                };
            };
            input.click();
        });

        // 4.2 第一个菜单项的增加图像框
        var id = 5
        const add_pic5 = document.querySelector('.menu_box_5 .add_pic')
        const pic_list5 = document.querySelector('.menu_box_5 .pic_list')
        add_pic5.addEventListener('click', function () {
            if (id <= 8) {
                var add_li = document.createElement('li')
                add_li.innerHTML = '<li id="li' + id + '"><div class="pic"><img src="static/picture/white.png" width="200px" height="150px" class="pic' + id + '"><span class="del del' + id + '">×</span></div></li>'
                id = id + 1
                pic_list5.appendChild(add_li)
            } else {
                alert('一次最多添加8张图像')
            }
        })

        // 4.3 第4个菜单项的删除图片功能(内定的图片框)
        $('.menu_box_5 .del1').on('click', function () {
            const itemToRemove1 = document.querySelector(".menu_box_5 #li1");
            itemToRemove1.remove();
        })

        $('.menu_box_5 .del2').on('click', function () {
            const itemToRemove2 = document.querySelector(".menu_box_5 #li2");
            itemToRemove2.remove();
        })

        $('.menu_box_5 .del3').on('click', function () {
            const itemToRemove3 = document.querySelector(".menu_box_5 #li3");
            itemToRemove3.remove();
        })

        $('.menu_box_5 .del4').on('click', function () {
            const itemToRemove4 = document.querySelector(".menu_box_5 #li4");
            itemToRemove4.remove();
        })

        // 4.4 对新增元素进行删除按钮的代理
        $('.menu_box_5 .pic_list').on('click', '.del5', function () {
            const itemToRemove5 = document.querySelector(".menu_box_5 .pic_list #li5");
            itemToRemove5.remove();
        })

        $('.menu_box_5 .pic_list').on('click', '.del6', function () {
            const itemToRemove6 = document.querySelector(".menu_box_5 .pic_list #li6");
            itemToRemove6.remove();
        })

        $('.menu_box_5 .pic_list').on('click', '.del7', function () {
            const itemToRemove7 = document.querySelector(".menu_box_5 .pic_list #li7");
            itemToRemove7.remove();
        })

        $('.menu_box_5 .pic_list').on('click', '.del8', function () {
            const itemToRemove8 = document.querySelector(".menu_box_5 .pic_list #li8");
            itemToRemove8.remove();
        })

        // 4.5 对新增元素添加上传图片的功能
        $('.menu_box_5 .pic_list').on('click', '.pic5', function () {
            const pic5 = document.querySelector('.menu_box_5 .pic_list .pic5')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic5.src = reader.result;
                    upload_5 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_5 .pic_list').on('click', '.pic6', function () {
            const pic6 = document.querySelector('.menu_box_5 .pic_list .pic6')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic6.src = reader.result;
                    upload_6 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_5 .pic_list').on('click', '.pic7', function () {
            const pic7 = document.querySelector('.menu_box_5 .pic_list .pic7')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic7.src = reader.result;
                    upload_7 = file.name;
                };
            };
            input.click();
        })

        $('.menu_box_5 .pic_list').on('click', '.pic8', function () {
            const pic8 = document.querySelector('.menu_box_5 .pic_list .pic8')
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    pic8.src = reader.result;
                    upload_8 = file.name;
                };
            };
            input.click();
        })

        // 2.6 保存按钮需要把图片放到数据库里面
        $('.menu_box_5 .save_btn').on('click', function () {
            var data = []
            var json_data = {}

            // 1.5.1 获取用户上传的图片的路径
            if (upload_1 !== null) {
                data.push(upload_1)
                json_data["upload_1"] = upload_1

            }
            if (upload_2 !== null) {
                data.push(upload_2)
                json_data["upload_2"] = upload_2
            }
            if (upload_3 !== null) {
                data.push(upload_3)
                json_data["upload_3"] = upload_3
            }
            if (upload_4 !== null) {
                data.push(upload_4)
                json_data["upload_4"] = upload_4
            }
            if (upload_5 !== null) {
                data.push(upload_5)
                json_data["upload_5"] = upload_5
            }
            if (upload_6 !== null) {
                data.push(upload_6)
                json_data["upload_6"] = upload_6
            }
            if (upload_7 !== null) {
                data.push(upload_7)
                json_data["upload_7"] = upload_7
            }
            if (upload_8 !== null) {
                data.push(upload_8)
                json_data["upload_8"] = upload_8
            }
            json_data = JSON.stringify(json_data)
            console.log(json_data);

            // 1.5.2 获得用户之后，开始进行插入操作
            $.ajax({
                url: 'http://127.0.0.1:5000/upload/pic5',
                method: 'POST',
                data: json_data,
                success: function (res) {
                    if (res.msg === 'success') {
                        alert('保存成功')
                    }
                    console.log(res);
                }
            })
        })
    })

    $('.catalogue').on('click', '.list5', function () {
        show_box.style.display = 'none'
        not_edit_box.style.display = 'block'
        box1.style.display = 'none'
        box2.style.display = 'none'
        box3.style.display = 'none'
        box4.style.display = 'none'
        box5.style.display = 'block'

        // 从数据库读取一下图片的地址
        var box_pic = [box_pic33, box_pic34, box_pic35, box_pic36, box_pic37, box_pic38, box_pic39, box_pic40]

        $.ajax({
            url: 'http://127.0.0.1:5000/menu_5_show',
            method: 'GET',
            success: function (res) {
                console.log(res.path);
                var x = res.path
                for (var i = 0; i < x.length; i++) {
                    box_pic[i].src = res.path[i]
                }
            }
        })
    })
})