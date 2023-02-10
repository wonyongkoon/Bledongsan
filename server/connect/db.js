require("dotenv").config();
const mysql=require("mysql");

// 데이터 베이스 선언 
const connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    port : '3306',
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    // database : process.env.DATABASE
    
});

connection.connect();   // DB 접속

// BLEDONGSAN_DB 라는 DATABASE 생성 : CREATE DATABASE if not exists <DATABASE NAME>
// connection.query("CREATE DATABASE if not exists BLEDONGSAN_DB", function(err, result){
//     if(err) return console.log(err);
//     // console.log(result);
//     console.log('BLEDONGSAN_DB 생성');
// })

// BLEDONGSAN_DB 라는 DATABASE 선택 : USE <DATABASE NAME>
connection.query("USE BLEDONGSAN_DB", function(err, result){
    if(err) return console.log(err);
    console.log('BLEDONGSAN_DB 접속');
})

// users 라는 테이블 생성 
connection.query("CREATE TABLE if not exists users(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY ,user_id varchar(255), user_password varchar(255), user_address varchar(255), user_name varchar(255))", 
function(err, result){
    if(err) return console.log(err);
})

// // items 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists items(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,metadata_url varchar(255), image_url varchar(255), item_name varchar(255), price varchar(255), rating varchar(255))", 
// function(err, result){
//     if(err) return console.log(err);
// })
// // nfts 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists nfts(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY, metadata_url varchar(255), image_url varchar(255), nft_name varchar(255), price varchar(255) )", 
// function(err, result){
//     if(err) return console.log(err);
// })
// // posts 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists posts(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY, user_address varchar(255), user_nickname varchar(255), user_img varchar(500), post_content varchar(1000), post_image MEDIUMBLOB, post_date timestamp default now(), post_categorie varchar(255))", 
// function(err, result){
//     if(err) return console.log(err);
// })
// // comments 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists comments(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY, post_id int(100), user_address varchar(255), user_nickname varchar(255), user_img varchar(500), comment_content varchar(1000), comment_date timestamp default now())", 
// function(err, result){
//     if(err) return console.log(err);
// })

// // usernft 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists usernft(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,onwer varchar(255), metadata_url varchar(255), image_url varchar(255), nft_name varchar(255), price varchar(255) )", 
// function(err, result){
//     if(err) return console.log(err);
// })
// // useritem 라는 테이블 생성 
// connection.query("CREATE TABLE if not exists useritem(id int(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,onwer varchar(255), metadata_url varchar(255), image_url varchar(255), item_name varchar(255), price varchar(255), rating varchar(255))", 
// function(err, result){
//     if(err) return console.log(err);
// })

// connection.end();   // DB 종료
module.exports={connection};

