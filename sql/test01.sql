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
select * from member;

-- 2. 학생성적 테이블 score(sno, kor, eng, math)

