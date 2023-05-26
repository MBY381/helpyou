var menuList = document.getElementById('menuList');
var addButton = document.getElementById('addButton');
var removeButton = document.getElementById('removeButton');
var saveButton = document.getElementById('saveButton');
var cancelButton = document.getElementById('cancelButton');
var uploadButton = document.getElementById('uploadButton');
var fileInput = document.getElementById('fileInput');
var editor = document.getElementById('editor');
var content = document.querySelector('#editor .content');
var nameInput = document.querySelector('#editor .name-input');
var content_show = document.getElementById("content_show");

var menus = [
    {
        name: '菜单项1',
        content: ''
    },
    {
        name: '菜单项2',
        content: ''
    },
    {
        name: '菜单项3',
        content: ''
    }
];

var lastEditedMenuIndex = 0;


//原来的generate函数：
function generateMenu() {
    var id = 1;
    menuList.innerHTML = '';
    menus.forEach(function (menu, index) {
        var li = document.createElement('li');
        var x = 'li' + id
        id = id + 1
        li.classList.add(x)
        li.innerText = menu.name;
        li.addEventListener('click', function () {
            setActiveMenu(index);
            lastEditedMenuIndex = index;
        });
        li.classList.add('menus_name')

        var editButton = document.createElement('button');
        editButton.innerText = '编辑';
        editButton.classList.add('menus_button')
        editButton.addEventListener('click', function (event) {
            event.stopPropagation();
            showEditor(index);
            lastEditedMenuIndex = index;
        });
        li.appendChild(editButton);
        menuList.appendChild(li);
    });
}

function setActiveMenu(index) {
    menuList.childNodes.forEach(function (node, i) {
        if (i === index) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
    content.innerHTML = menus[index].content;
    nameInput.value = menus[index].name;
}

function addMenu() {
    var name = prompt('请输入菜单名称：');
    if (name) {
        menus.push({
            name: name,
            content: ''
        });
        generateMenu();
    }
    var edit_btn_4 = document.querySelector('.li4 .menus_button')
    var menu_show_1 = document.querySelector(".menu_show_1");
    var menu_show_2 = document.querySelector(".menu_show_2");
    var menu_show_3 = document.querySelector(".menu_show_3");
    var menu_show_4 = document.querySelector(".menu_show_4");
    // 对第4个菜单项进行编辑
    edit_btn_4.addEventListener('click', function () {
        console.log('edit4');
        menu_show_1.style.display = 'none'
        menu_show_2.style.display = 'none'
        menu_show_3.style.display = 'none'
        menu_show_4.style.display = 'none'
        saveButton.addEventListener('click', function () {
            var x = content.innerHTML
            console.log(x);
            var data = { content: x }
            data = JSON.stringify(data)
            console.log(data)
            $.ajax({
                method: 'POST',
                url: 'http://127.0.0.1:5000/Save/content',
                data: data,
                ContentType: "application/json",
                success: function (res) {
                    console.log(res)
                    menu_show_4.innerHTML = x
                    menu_show_4.classList.add('content_pic')
                }
            })
        })
    })
}

function removeMenu() {
    var index = -1;
    menuList.childNodes.forEach(function (node, i) {
        if (node.classList.contains('active')) {
            index = i;
        }
    });
    if (index >= 0) {
        menus.splice(index, 1);
        generateMenu();
    }
}

function showEditor(index) {
    setActiveMenu(index);
    content_show.classList.remove('show_info')
    editor.style.display = 'block';
    nameInput.focus();
}

function hideEditor() {
    editor.style.display = 'none';
}

function saveContent() {
    menus[lastEditedMenuIndex].name = nameInput.value;
    menus[lastEditedMenuIndex].content = content.innerHTML;
    generateMenu();
    hideEditor();
}

function uploadImage(file) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var imageUrl = event.target.result;
        document.execCommand('insertImage', false, imageUrl);
    };
    reader.readAsDataURL(file);
}

content.addEventListener('input', function () {
    saveButton.disabled = false;
    cancelButton.disabled = false;
});

content.addEventListener('paste', function (event) {
    event.preventDefault();
    var files = event.clipboardData.files;
    if (files.length > 0) {
        uploadImage(files[0]);
    } else {
        document.execCommand('insertHTML', false, event.clipboardData.getData('text/html'));
    }
});

uploadButton.addEventListener('click', function () {
    fileInput.click();
});

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        uploadImage(fileInput.files[0]);
    }
});

addButton.addEventListener('click', addMenu);
removeButton.addEventListener('click', removeMenu);
saveButton.addEventListener('click', saveContent);
cancelButton.addEventListener('click', hideEditor);

generateMenu();
setActiveMenu(0);

//拖曳功能=====================================

// 创建拖拽菜单项的变量
var dragItem = null;
// 创建目标菜单项的变量
var targetItem = null;

// 将菜单项元素添加draggable属性
menuList.childNodes.forEach(function (node) {
    node.draggable = true;
});

// 为菜单项添加拖拽事件
menuList.addEventListener('dragstart', function (event) {
    dragItem = event.target;
});

menuList.addEventListener('dragover', function (event) {
    event.preventDefault();
});

menuList.addEventListener('dragenter', function (event) {
    if (event.target.tagName === 'LI') {
        targetItem = event.target;
        targetItem.classList.add('dropzone');
    }
});

menuList.addEventListener('dragleave', function (event) {
    if (event.target.tagName === 'LI') {
        targetItem.classList.remove('dropzone');
        targetItem = null;
    }
});

menuList.addEventListener('drop', function (event) {
    if (targetItem) {
        var dragIndex = Array.prototype.indexOf.call(menuList.childNodes, dragItem);
        var targetIndex = Array.prototype.indexOf.call(menuList.childNodes, targetItem);
        // 将拖拽的菜单项插入到目标菜单项下面
        menus.splice(targetIndex + 1, 0, menus.splice(dragIndex, 1)[0]);
        generateMenu();
    }
    targetItem.classList.remove('dropzone');
    targetItem = null;
});
//==================================
function handleDragStart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.dataset.id);

    // 记录菜单项层次信息
    itemLevel = parseInt(ev.target.dataset.level);
    if (itemLevel === 1) {
        parentLevel = parseInt(
            document.querySelector(
                'li[data-id="' + ev.target.dataset["parent-id"] + '"]'
            ).dataset.level
        );
    }
}

function handleDragOver(ev) {
    ev.preventDefault();

    // 判断当前目标是否可以放置
    if (
        ev.target.nodeName === "LI" &&
        ev.target.dataset.level <= itemLevel + 1 &&
        ev.target.dataset.level >= itemLevel - 1 &&
        ev.target.dataset.id !== currentItem
    ) {
        ev.dataTransfer.dropEffect = "move";
        ev.target.parentNode.classList.add("over");

        // 记录菜单项层次信息
        dropLevel = parseInt(ev.target.dataset.level);
        if (dropLevel === 0) {
            parentLevel = -1;
        } else if (dropLevel === 1) {
            parentLevel = parseInt(
                document.querySelector(
                    'li[data-id="' + ev.target.dataset["parent-id"] + '"]'
                ).dataset.level
            );
        }
    }
}

function handleDrop(ev) {
    ev.preventDefault();
    var oldIndex = parseInt(ev.dataTransfer.getData("text/plain"));
    var newIndex = parseInt(currentItem);

    // 更新菜单数据
    var item = menus.splice(oldIndex, 1)[0];
    menus.splice(newIndex, 0, item);

    // 重新生成菜单
    generateMenu();

    // 根据层次信息设置缩进、错排效果和显示/隐藏子菜单
    var sortedUl = menuList.querySelector("ul");
    var maxLevel = 0;
    var siblings = sortedUl.childNodes;

    for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];
        var level = parseInt(sibling.dataset.level);
        var marginLeft = level * 20;

        if (level > maxLevel) {
            sibling.style.marginTop = "10px";
            maxLevel = level;
        } else {
            sibling.style.marginTop = "-26px";
        }

        sibling.style.marginLeft = marginLeft + "px";

        if (level === parentLevel || level === parentLevel + 1) {
            sibling.style.opacity = "0.4";
        } else {
            sibling.style.opacity = "1";
        }

        if (level === itemLevel + 1 && parentLevel === itemLevel) {
            sibling.classList.add("visible");
        } else {
            sibling.classList.remove("visible");
        }
    }
}
