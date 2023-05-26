# 第一部分是API接口所需的文件包
import os
import time

from flask import Flask, request, jsonify, session, render_template
from werkzeug.utils import redirect
from functools import wraps
from flask_cors import CORS
import json
import pymysql

# from flask_wtf import FlaskForm
# from flask_wtf.csrf import CSRFProtect
# from flask_uploads import UploadSet, IMAGES, configure_uploads

# 接口
app = Flask(__name__)
app.secret_key = "123123123"
CORS(app)

# 用于记住用户的登录信息
name_index = None
number = 0


def get_conn():
    # 1. 连接数据库，
    conn = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        password='root',
        db='lxy',
        charset='utf8',
        autocommit=True,  # 如果插入数据，， 是否自动提交? 和conn.commit()功能一致。
    )
    # ****python, 必须有一个游标对象， 用来给数据库发送sql语句， 并执行的.
    # 2. 创建游标对象，
    cursor = conn.cursor()
    print("what?")
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    """
    封装通用的查询
    :param sql:
    :param args:
    :return:
    """
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


# 获取用户登录数据
def get_acc_data(name, pwd):
    # 这里写sql语句，用来查数据
    sql = f"select * from user_info WHERE uname = '{name}' and password = '{pwd}'"
    res = query(sql)
    return res


# 获取表格数据
def pic_data(tb_name):
    sql = f"select * from {tb_name}"
    res = query(sql)
    return res


# 用户登录接口
@app.route("/user/login", methods=["POST"])
def user_login():
    try:
        # 从前端获取数据
        data = request.get_data()
        data = json.loads(data)
        print(data)  # data是字典类型的数据
        username = data['username']
        pwd = data['pwd']

        # 在数据库中查询相应的数据
        database = get_acc_data(username, pwd)
        global number
        number = len(database)
        print(number)

        # 判断是否查询到账号密码
        if number >= 1:
            global name_index
            name_index = username
            print(name_index)
            return jsonify(msg="success")


    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 用户是否登录，登录后出现用户名及用户头像
@app.route("/user/info", methods=["GET"])
def user_info():
    try:
        # 判断是否查询到账号密码
        global number
        if number >= 1:
            return jsonify(msg="success", user_msg=name_index)
        else:
            return jsonify(msg="fail", message='用户未登录')
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 用户上传图片文件
@app.route("/Save/content", methods=["POST"])
def Save_content():
    try:
        # 从前端获取数据
        data = request.get_data()
        data = json.loads(data)
        print(data)  # data是字典类型的数据
        # admin = data['admin']
        # pwd = data['pwd']
        return jsonify(msg="测试成功")
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第1个菜单项：用户上传图片，点击保存后将图片的路径插入到数据库中
@app.route("/upload/pic1", methods=["POST"])
def upload_pic_1():
    print("wdnmd")
    try:
        file = request.files.get("image")
        if not file:
            return "No file provided", 400
        filename = file.filename

        # 保存文件到指定位置
        save_dir = "./imgs"
        if not os.path.exists(save_dir):
            os.makedirs(save_dir)
        now = time.time()
        last_three_digits = int(now * 1000 % 1000)

        file.save(os.path.join(save_dir, filename))

        # 返回成功或失败消息
        return "File uploaded successfully.", 200
    except Exception as e:
        print(e)
        return jsonify(msg="error", message='出错了，请检查是否正确上传和保存')


# 第1个菜单：从数据库中拿出图片地址，并把图片地址赋值给img的src属性
@app.route("/menu_1_show", methods=["POST", "GET"])
def menu_1_show():
    try:
        data = pic_data('user_upload_1')
        id, path = [], []
        for a, b in data:
            id.append(a)
            path.append(b)
        return jsonify({"id": id, "path": path})
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第2个菜单项：用户上传图片，点击保存后将图片的路径插入到数据库中
@app.route("/upload/pic2", methods=["POST"])
def upload_pic_2():
    try:
        data = request.get_data()
        data = json.loads(data)
        print(data)
        data_para = ['upload_1', 'upload_2', 'upload_3', 'upload_4', 'upload_5', 'upload_6', 'upload_7', 'upload_8']

        i = 0
        for each in data:
            sql = f"INSERT INTO user_upload_2 VALUES ('{i}','http://127.0.0.1:5500/static/picture/upload/{data[data_para[i]]}');"
            res = query(sql)
            i += 1

        return jsonify(msg="success", message='插入地址成功')

    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第2个菜单：从数据库中拿出图片地址，并把图片地址赋值给img的src属性
@app.route("/menu_2_show", methods=["POST", "GET"])
def menu_2_show():
    try:
        data = pic_data('user_upload_2')
        id, path = [], []
        for a, b in data:
            id.append(a)
            path.append(b)
        return jsonify({"id": id, "path": path})
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第3个菜单项：用户上传图片，点击保存后将图片的路径插入到数据库中
@app.route("/upload/pic3", methods=["POST"])
def upload_pic_3():
    try:
        data = request.get_data()
        data = json.loads(data)
        print(data)
        data_para = ['upload_1', 'upload_2', 'upload_3', 'upload_4', 'upload_5', 'upload_6', 'upload_7', 'upload_8']

        i = 0
        for each in data:
            sql = f"INSERT INTO user_upload_3 VALUES ('{i}','http://127.0.0.1:5500/static/picture/upload/{data[data_para[i]]}');"
            res = query(sql)
            i += 1

        return jsonify(msg="success", message='插入地址成功')

    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第3个菜单：从数据库中拿出图片地址，并把图片地址赋值给img的src属性
@app.route("/menu_3_show", methods=["POST", "GET"])
def menu_3_show():
    try:
        sql = "select * from photographers"
        res = query(sql)
        print(res)
        id, path = [], []
        for a, b in res:
            id.append(a)
            path.append(b)
        print("id")
        print(id)
        print("path")
        print(path)
        return jsonify({"id": id, "path": path})
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第4个菜单项：用户上传图片，点击保存后将图片的路径插入到数据库中
@app.route("/upload/pic4", methods=["POST"])
def upload_pic_4():
    try:
        data = request.get_data()
        data = json.loads(data)
        print(data)
        data_para = ['upload_1', 'upload_2', 'upload_3', 'upload_4', 'upload_5', 'upload_6', 'upload_7', 'upload_8']

        i = 0
        for each in data:
            sql = f"INSERT INTO user_upload_4 VALUES ('{i}','http://127.0.0.1:5500/static/picture/upload/{data[data_para[i]]}');"
            res = query(sql)
            i += 1

        return jsonify(msg="success", message='插入地址成功')

    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第4个菜单：从数据库中拿出图片地址，并把图片地址赋值给img的src属性
@app.route("/menu_4_show", methods=["POST", "GET"])
def menu_4_show():
    try:
        data = pic_data('user_upload_4')
        id, path = [], []
        for a, b in data:
            id.append(a)
            path.append(b)
        return jsonify({"id": id, "path": path})
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第5个菜单项：用户上传图片，点击保存后将图片的路径插入到数据库中
@app.route("/upload/pic5", methods=["POST"])
def upload_pic_5():
    try:
        data = request.get_data()
        data = json.loads(data)
        print(data)
        data_para = ['upload_1', 'upload_2', 'upload_3', 'upload_4', 'upload_5', 'upload_6', 'upload_7', 'upload_8']

        i = 0
        for each in data:
            sql = f"INSERT INTO user_upload_5 VALUES ('{i}','http://127.0.0.1:5500/static/picture/upload/{data[data_para[i]]}');"
            res = query(sql)
            i += 1

        return jsonify(msg="success", message='插入地址成功')

    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# 第5个菜单：从数据库中拿出图片地址，并把图片地址赋值给img的src属性
@app.route("/menu_5_show", methods=["POST", "GET"])
def menu_5_show():
    try:
        data = pic_data('user_upload_5')
        id, path = [], []
        for a, b in data:
            id.append(a)
            path.append(b)
        return jsonify({"id": id, "path": path})
    except Exception as e:
        print(e)
        return jsonify(msg="出错了噢，请查看是否正确访问")


# host="0.0.0.0"代表所有的主机都可以这个程序


if __name__ == '__main__':
    app.run(host="0.0.0.0")
