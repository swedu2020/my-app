show databases;  -- db 목록 조회
use information_schema; -- 사용할 db 선택
show tables;  -- table 목록 조회
-- table 내용 조회
-- select 컬럼 from 데이터베이스명.테이블명; 
select * from information_schema.schemata; 
select * from schemata;
select table_schema, table_name, engine, 
  data_length, create_time
  from tables limit 10;
  
  
create database testdb;  -- 새로운 db 생성
show databases;
use testdb;
show tables;
create table tb01(
	num int auto_increment,
	name varchar(50) not null,
    email varchar(50) unique,
    pass tinyint default 0,
    primary key(num)
);
desc tb01;  -- 테이블 구조 확인
select * from tb01;  -- 테이블 내용 확인 

-- insert into 테이블명(컬럼리스트) values(데이터리스트);
-- insert into 테이블명 values(데이터리스트);
-- 선언한 모든 컬럼을 순서대로 입력할 경우 (컬럼리스트)는 생략가능
insert into tb01(name, email, pass) values('kim', 'kim@naver.com', 11);
insert into tb01(name, email) values('lee', 'lee@gmail.com');
insert into tb01(name) values('park');
insert into tb01(name) values('hong');
insert into tb01(name, email) values('lee', 'lee2@gmail.com');
insert into tb01(email) values('hong@naver.com'); -- error

-- 테이블의 제약조건 확인하기
select * from information_schema.table_constraints where table_name='tb01';

-- 테이블 만들기 연습 (pk, check 사용)
-- 1. 회원정보 테이블 member(id, pw, name, email, tel, age)
create table member(
	id varchar(20) primary key,
    pw varchar(200) not null,
    name varchar(20) not null,
    email varchar(50) not null,
    tel varchar(20),
    age tinyint constraint age_limit check(age>15)
);
desc member;
select * from information_schema.table_constraints where table_name='member';

insert into member(id, pw, name, email, tel, age)
 values('kim', sha1('kimpw'), 'kim00', 'kim@naver.com', '010-1111-2222', 20);
select * from member where id='kim' and pw=sha1('kimpw');

insert into member(id, pw, name, email, tel, age) values('lee', 
  sha1('leepw'), 'lee00', 'lee@naver.com', '010-1111-3333', 10); -- error
 
-- 2. 학생성적 테이블 score(sno, kor, eng, math)
drop table score;
create table score(
	sno char(10) primary key,
    kor tinyint default 0,
    eng tinyint default 0,
    math tinyint default 0,
    constraint kor_limit check(kor>=0 and kor<=100),
    constraint eng_limit check(eng>=0 and eng<=100),
    constraint math_limit check(math>=0 and math<=100)
);
desc score;
select * from information_schema.table_constraints where table_name='score';
insert into score(sno, kor, eng, math) values('2023010203', 100, 90, 80);
insert into score(sno, kor, eng, math) values('2023010201', 111, 22, 33); -- error
insert into score(sno, kor, eng, math) values('2023010201', -111, 22, 33); -- error
insert into score(sno, kor, eng, math) values('2023010201', 11, 22, 33);
select * from score;


drop table customer;
create table customer(
	cid varchar(16),
    cname varchar(50) not null,
    cpass varchar(256) not null,
    primary key(cid)
);
desc customer;
select * from information_schema.table_constraints where table_name='customer';
create table _order(
	oid varchar(16),
    cid varchar(16) not null,
    odate date not null,
    price decimal(15, 2) not null,
    address varchar(256) not null,
    ddate date,
    money decimal(15, 2) not null,
    dmoney decimal(15, 2) not null,
    spoint decimal(15, 2) not null,
    primary key(oid),
    foreign key(cid) references customer(cid)
);
desc _order;
select * from information_schema.table_constraints where table_name='_order';

insert into customer(cid, cname, cpass)
 values('C0001', '홍길동', sha1('hong'));
insert into _order(oid, cid, odate, price, address, ddate, money, dmoney, spoint)
 values('A0100', 'C0001', '2023-10-04', 55000, '서울',
		'2023-10-05', 45000, 10000,  450);
        
INSERT INTO customer VALUES
 ('C0002', '양바른', sha1('ybl1234')),
 ('C0003', '유코식', sha1('uu1234')),
 ('C0004', '김구', sha1('pass1234')),
 ('C0005', '신사임당', sha1('pass1234'));
 
INSERT INTO _order (oid, cid, odate, price, address, ddate, money, dmoney, spoint) VALUES
 ('O1001', 'C0001', '2021-12-01', 10000, '서울시', '2021-12-01', 10000, 0, 100),
 ('O1002', 'C0001', '2021-12-03', 4500, '부산시', '2021-12-03', 4500, 0, 45),
 ('O1003', 'C0004', '2021-12-07', 100000, '수원시', '2021-12-07', 90000, 10000, 1000),
 ('O1004', 'C0003', '2021-12-07', 55000, '안양시', '2021-12-07', 55000, 0, 550),
 ('O1005', 'C0002', '2021-12-17', 85000, '대구시', '2021-12-17', 85000, 0, 850),
 ('O1006', 'C0002', '2021-12-18', 23000, '성남시', '2021-12-18', 23000, 0, 230),
 ('O1007', 'C0004', '2021-12-21', 5000, '대전시', '2021-12-21', 5000, 0, 50),
 ('O1008', 'C0001', '2021-12-22', 8300, '광주시', '2021-12-22', 8300, 0, 83),
 ('O1009', 'C0002', '2021-12-25', 45000, '고양시', '2021-12-25', 45000, 0, 450),
 ('O1010', 'C0003', '2021-12-31', 9000, '원주시', '2021-12-31', 9000, 0, 90);
select * from customer;
select * from _order;
select customer.*, _order.* from customer, _order;

-- 조인의 첫번째 방법
select c.cid, c.cname, o.oid, o.odate, o.price 
 from customer c, _order o where c.cid=o.cid and c.cid='C0001';
-- 조인의 두번째 방법
select c.cid, c.cname, o.oid, o.odate, o.price 
 from customer c inner join _order o on c.cid=o.cid
 where c.cid='C0001';


