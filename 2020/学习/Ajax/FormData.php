<?php
// 把提交过来的数据，存放到一个文件中
// print_r 的第二个参数为true，表示不输出内容，而是将输出的内容返回
file_put_contents('post.txt',print_r($_POST,true));
// 把获取的图片信息，存放到一个文件
file_put_contents('file.txt',print_r($_FILES,true));