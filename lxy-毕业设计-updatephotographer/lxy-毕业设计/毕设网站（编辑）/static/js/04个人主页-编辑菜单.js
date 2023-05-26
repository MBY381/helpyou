$(function () {
    // 1.编辑框
    const edit_box = document.querySelector('.edit_box')
    const edit_box_1 = document.querySelector('.edit_box_1')
    const edit_box_2 = document.querySelector('.edit_box_2')
    const edit_box_3 = document.querySelector('.edit_box_3')
    const edit_box_4 = document.querySelector('.edit_box_4')
    const edit_box_5 = document.querySelector('.edit_box_5')

    // 2.查看菜单内容框
    const show_box = document.querySelector('.show_box')
    const menu_box_1 = document.querySelector('.menu_box_1')
    const menu_box_2 = document.querySelector('.menu_box_2')
    const menu_box_3 = document.querySelector('.menu_box_3')
    const menu_box_4 = document.querySelector('.menu_box_4')
    const menu_box_5 = document.querySelector('.menu_box_5')

    // 3.菜单的编辑按钮
    const edit_btn1 = document.querySelector('.edit_btn1')
    const edit_btn2 = document.querySelector('.edit_btn2')
    const edit_btn3 = document.querySelector('.edit_btn3')

    // 4.菜单的删除按钮
    const del_btn1 = document.querySelector('.del_btn1')
    const del_btn2 = document.querySelector('.del_btn2')
    const del_btn3 = document.querySelector('.del_btn3')

    // 5.编辑框里面的菜单名称
    const menu_name_1 = document.querySelector('.edit_box_1 .menu_name')
    const menu_name_2 = document.querySelector('.edit_box_2 .menu_name')
    const menu_name_3 = document.querySelector('.edit_box_3 .menu_name')
    const menu_name_4 = document.querySelector('.edit_box_4 .menu_name')
    const menu_name_5 = document.querySelector('.edit_box_5 .menu_name')


    // 6.菜单名称
    const list1 = document.querySelector('.list1')
    const list2 = document.querySelector('.list2')
    const list3 = document.querySelector('.list3')

    // 7.每个编辑框的保存按钮
    const save_btn_1 = document.querySelector('.edit_box_1 .save_btn')
    const save_btn_2 = document.querySelector('.edit_box_2 .save_btn')
    const save_btn_3 = document.querySelector('.edit_box_3 .save_btn')
    const save_btn_4 = document.querySelector('.edit_box_4 .save_btn')
    const save_btn_5 = document.querySelector('.edit_box_5 .save_btn')

    // 8. 编辑框中放置文本和图片的框
    const edit_content_1 = document.querySelector('.edit_content_1')
    const edit_content_2 = document.querySelector('.edit_content_2')
    const edit_content_3 = document.querySelector('.edit_content_3')
    const edit_content_4 = document.querySelector('.edit_content_4')
    const edit_content_5 = document.querySelector('.edit_content_5')

    // 9.菜单中的一个条目

    // 10.整个菜单项
    const catalogue = document.querySelector('.catalogue')

    // 11.添加元素
    const add_menu = document.querySelector('.add_menu')

    // 12.上传图片按钮
    const upload_img = document.querySelector('.edit_box_1 .upload_img')

    // 13.保存按钮

    var text = null


    // ========================================添加功能============================================

    // 进行菜单内容编辑
    edit_btn1.addEventListener('click', function () {
        show_box.style.display = 'none'
        edit_box.style.display = 'block'
        edit_box_1.style.display = 'block'
        edit_box_2.style.display = 'none'
        edit_box_3.style.display = 'none'
        edit_box_4.style.display = 'none'
        edit_box_5.style.display = 'none'


        // 填补默认菜单名
        text = list1.textContent
        menu_name_1.value = text

        // 先给出菜单名称的变量
        var name_1 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_1.addEventListener('change', function () {
            name_1 = menu_name_1.value
        })


        // 填写完成后将用户输入渲染到查看框中
        save_btn_1.addEventListener('click', function () {
            var x = edit_content_1.innerHTML
            console.log(x);
            menu_box_1.innerHTML = x
            list1.textContent = name_1
            alert('保存成功')
        })
    })

    edit_btn2.addEventListener('click', function () {
        show_box.style.display = 'none'
        edit_box.style.display = 'block'
        edit_box_1.style.display = 'none'
        edit_box_2.style.display = 'block'
        edit_box_3.style.display = 'none'
        edit_box_4.style.display = 'none'
        edit_box_5.style.display = 'none'

        // 预设菜单名称
        text = list2.textContent
        menu_name_2.value = text

        // 先给出菜单名称的变量
        var name_2 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_2.addEventListener('change', function () {
            name_2 = menu_name_2.value
        })

        save_btn_2.addEventListener('click', function () {
            var x = edit_content_2.innerHTML
            console.log(x);
            menu_box_2.innerHTML = x
            list2.textContent = name_2
            alert('保存成功')
        })
    })

    edit_btn3.addEventListener('click', function () {
        show_box.style.display = 'none'
        edit_box.style.display = 'block'
        edit_box_1.style.display = 'none'
        edit_box_2.style.display = 'none'
        edit_box_3.style.display = 'block'
        edit_box_4.style.display = 'none'
        edit_box_5.style.display = 'none'

        // 预设的菜单名称
        text = list3.textContent
        menu_name_3.value = text

        // 先给出菜单名称的变量
        var name_3 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_3.addEventListener('change', function () {
            name_3 = menu_name_3.value
        })

        save_btn_3.addEventListener('click', function () {
            var x = edit_content_3.innerHTML
            console.log(x);
            menu_box_3.innerHTML = x
            list3.textContent = name_3
            alert('保存成功')
        })
    })

    // 查看菜单内容
    list1.addEventListener('click', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'block'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'
        edit_box.style.display = 'none'
    })

    list2.addEventListener('click', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'block'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'
        edit_box.style.display = 'none'
    })

    list3.addEventListener('click', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'block'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'none'
        edit_box.style.display = 'none'
    })

    // 删除菜单
    del_btn1.addEventListener('click', function () {
        const itemToRemove1 = document.querySelector(".menu_list_1");
        itemToRemove1.remove();
    })

    del_btn2.addEventListener('click', function () {
        const itemToRemove2 = document.querySelector(".menu_list_2");
        itemToRemove2.remove();
    })

    del_btn3.addEventListener('click', function () {
        const itemToRemove3 = document.querySelector(".menu_list_3");
        itemToRemove3.remove();
    })


    // 上传图片的功能
    const fileInput = document.getElementById('file-input_1');
    const previewContainer = document.querySelector('.edit_content_1');
    document.querySelector('.edit_box_1 #upload-button').addEventListener('click', () => {
        const files = Array.from(fileInput.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                previewContainer.appendChild(img);
                previewContainer.classList.add('edit_box_pic')
                menu_box_1.classList.add('edit_box_pic')
            };
        });
    });

    const fileInput2 = document.getElementById('file-input_2');
    const previewContainer2 = document.querySelector('.edit_content_2');
    document.querySelector('.edit_box_2 #upload-button').addEventListener('click', () => {
        const files = Array.from(fileInput2.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                previewContainer2.appendChild(img);
                previewContainer2.classList.add('edit_box_pic')
                menu_box_2.classList.add('edit_box_pic')
            };
        });
    });

    const fileInput3 = document.getElementById('file-input_3');
    const previewContainer3 = document.querySelector('.edit_content_3');
    document.querySelector('.edit_box_3 #upload-button').addEventListener('click', () => {
        const files = Array.from(fileInput3.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                previewContainer3.appendChild(img);
                previewContainer3.classList.add('edit_box_pic')
                menu_box_3.classList.add('edit_box_pic')
            };
        });
    });


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

    // 动态添加元素
    var id = 4
    add_menu.addEventListener('click', function () {
        var add_li = document.createElement('li')
        var name = prompt('请输入菜单名称：');
        add_li.innerHTML = '<li class="menu_list menu_list ' + id + ' "><span class="list' + id + '">' + name + '</span><button class="edit_btn' + id + '">编辑</button class="del_btn' + id + '"><button class="del_btn' + id + '">删除</button></li>'
        id = id + 1
        catalogue.appendChild(add_li)
    })


    // ====================================为新增的第4个元素添加功能========================================


    // 给后面添加的元素添加功能——编辑功能
    $('.catalogue').on('click', '.edit_btn4', function () {
        show_box.style.display = 'none'
        edit_box.style.display = 'block'
        edit_box_1.style.display = 'none'
        edit_box_2.style.display = 'none'
        edit_box_3.style.display = 'none'
        edit_box_4.style.display = 'block'
        edit_box_5.style.display = 'none'

        const list4 = document.querySelector('.catalogue .list4')

        // 预设编辑菜单中的菜单名称
        text = list4.textContent
        menu_name_4.value = text

        // 先给出菜单名称的变量
        var name_4 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_4.addEventListener('change', function () {
            name_4 = menu_name_4.value
        })

        // 填写完成后将用户输入渲染到查看框中
        save_btn_4.addEventListener('click', function () {
            var x = edit_content_4.innerHTML
            console.log(x);
            menu_box_4.innerHTML = x
            list4.textContent = name_4
            alert('保存成功')
        })
    })

    // 给后面添加的地4个元素添加功能——查看功能
    $('.catalogue').on('click', '.list4', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'block'
        menu_box_5.style.display = 'none'
        edit_box.style.display = 'none'

    })

    // 给后面添加的第4个元素添加功能——上传图片功能
    const fileInput4 = document.getElementById('file-input_4');
    const previewContainer4 = document.querySelector('.edit_content_4');
    document.querySelector('.edit_box_4 #upload-button').addEventListener('click', () => {
        const files = Array.from(fileInput4.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                previewContainer4.appendChild(img);
                previewContainer4.classList.add('edit_box_pic')
                menu_box_4.classList.add('edit_box_pic')

            };
        });
    });

    // 给后面添加的第4个元素添加功能——删除菜单功能
    $('.catalogue').on('click', '.del_btn4', function () {
        // 获取最后一个li元素
        const itemToRemove4 = document.querySelector('.catalogue li:nth-of-type(4)')
        
        // 从DOM中删除最后一个li元素
        if (itemToRemove4) {
            itemToRemove4.remove();
        }
    })



    // ====================================为新增的第5个元素添加功能========================================

    // 给后面添加的第5个元素添加功能——编辑功能
    $('.catalogue').on('click', '.edit_btn5', function () {
        show_box.style.display = 'none'
        edit_box.style.display = 'block'
        edit_box_1.style.display = 'none'
        edit_box_2.style.display = 'none'
        edit_box_3.style.display = 'none'
        edit_box_4.style.display = 'none'
        edit_box_5.style.display = 'block'

        const list5 = document.querySelector('.catalogue .list5')

        // 预设编辑菜单中的菜单名称
        text = list5.textContent
        menu_name_5.value = text

        // 先给出菜单名称的变量
        var name_5 = text

        // 修改菜单名称:菜单名称发生变化的时候获取菜单名称的值
        menu_name_5.addEventListener('change', function () {
            name_5 = menu_name_5.value
        })

        // 填写完成后将用户输入渲染到查看框中
        save_btn_5.addEventListener('click', function () {
            var x = edit_content_5.innerHTML
            console.log(x);
            menu_box_5.innerHTML = x
            list5.textContent = name_5
            alert('保存成功')
        })
    })

    // 给后面添加的第5个元素添加功能——查看功能
    $('.catalogue').on('click', '.list5', function () {
        show_box.style.display = 'block'
        menu_box_1.style.display = 'none'
        menu_box_2.style.display = 'none'
        menu_box_3.style.display = 'none'
        menu_box_4.style.display = 'none'
        menu_box_5.style.display = 'block'
        edit_box.style.display = 'none'
    })

    // 给后面添加的第5个元素添加功能——上传图片功能
    const fileInput5 = document.getElementById('file-input_5');
    const previewContainer5 = document.querySelector('.edit_content_5');
    document.querySelector('.edit_box_5 #upload-button').addEventListener('click', () => {
        const files = Array.from(fileInput5.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                previewContainer5.appendChild(img);
                previewContainer5.classList.add('edit_box_pic')
                menu_box_5.classList.add('edit_box_pic')
            };
        });
    });

    // 给后面添加的第5个元素添加功能——删除菜单功能
    $('.catalogue').on('click', '.del_btn5', function () {
        // 获取最后一个li元素
        const itemToRemove5 = document.querySelector('.catalogue li:nth-of-type(5)')
        
        // 从DOM中删除最后一个li元素
        if (itemToRemove5) {
            itemToRemove5.remove();
        }
    })

})