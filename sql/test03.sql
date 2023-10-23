show databases;
create schema `nodejs` default character set utf8mb4 default collate utf8mb4_general_ci;
use nodejs;
show tables;
drop table nodejs.users;
create table nodejs.users(
	id int not null auto_increment,
    name varchar(20) not null,
    age int unsigned not null,
    married tinyint not null,
    comment text null,
    created_at datetime not null default now(),
    primary key(id),
    unique index name_unique (name asc))
    comment = '사용자 정보'
    engine = InnoDB;
desc users;
drop table nodejs.comments;
create table nodejs.comments(
	id int not null auto_increment,
    commenter int not null,
    comment varchar(100) not null,
    created_at datetime not null default now(),
    primary key(id),
    index commenter_idx (commenter asc),
    constraint commenter 
    foreign key(commenter) references nodejs.users(id)
     on delete cascade on update cascade)
	comment = '댓글'
    engine = InnoDB;
desc comments;


select * from users;
select * from comments;