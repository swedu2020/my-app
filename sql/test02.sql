use testdb;
-- dept, emp talbe 

-- Creating DEPT table.
CREATE TABLE dept(
    deptno INT,  -- 부서번호
    dname VARCHAR(14),  -- 부서명
    loc VARCHAR(13),  -- 지역
       constraint pk_dept primary key (deptno)
);

-- Creating EMP table.
CREATE TABLE emp(
    empno INT,  -- 사원번호(사번)
    ename VARCHAR(10),  -- 사원이름
    job VARCHAR(9),  -- 직업
    mgr INT,  -- 상사의 사원번호
    hiredate DATE,  -- 입사일
    sal DECIMAL(7,2),  -- 급여
    comm DECIMAL(7,2),  -- 모름(무시)
    deptno INT,  -- 부서번호(외래키)
   constraint pk_emp primary key (empno),
   constraint fk_deptno foreign key (deptno) references dept (deptno)
);

-- Data Insertion in DEPT table
INSERT INTO dept(deptno, dname, loc) VALUES
(10, 'ACCOUNTING', 'NEWYORK'),
(20, 'RESEARCH', 'DALLAS'),
(30, 'SALES', 'CHICAGO'),
(40, 'OPERATIONS', 'BOSTON');

-- Data Insertion in EMP table
INSERT INTO emp VALUES
(7839, 'KING', 'PRESIDENT', null, '1981-11-17', 5000, null, 10),
(7698, 'BLAKE', 'MANAGER', 7839,'1981-05-01', 2850, null, 30),
(7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450, null, 10),
(7566, 'JONES', 'MANAGER', 7839, '1981-04-02',2975, null, 20),
(7788, 'SCOTT', 'ANALYST', 7566, '1981-04-19',3000, null, 20),
(7902, 'FORD', 'ANALYST', 7566, '1981-03-12', 3000, null, 20),
(7369, 'SMITH', 'CLERK', 7902,'1980-12-17', 800, null, 20),
(7499, 'ALLEN', 'SALESMAN', 7698,'1981-02-20', 1600, 300, 30),
(7521, 'WARD', 'SALESMAN', 7698, '1981-02-22',1250, 500, 30),
(7654, 'MARTIN', 'SALESMAN', 7698,'1981-09-28',1250, 1400, 30),
(7844, 'TURNER', 'SALESMAN', 7698,'1981-09-08',1500, 0, 30),
(7876, 'ADAMS', 'CLERK', 7788, '1987-05-23',1100, null, 20),
(7900, 'JAMES', 'CLERK', 7698,'1981-03-12',950, null, 30),
(7934, 'MILLER', 'CLERK', 7782,'1982-01-23',1300, null, 10);
use testdb;
select * from dept;
select * from emp;

-- 1. emp 테이블을 직업(오름차순), 입사일(오름차순)순으로 정렬하기
select * from emp order by job, hiredate;
-- 1. 직업을 오름차순으로 정렬하고 같은 직업에서는 급여가 높은 순으로 정렬하여 
-- 이름과 급여, 직업을 조회하시오
SELECT ename AS 이름, sal AS 급여, job as 직업 FROM emp
 ORDER BY job, sal desc;

-- 2. 부서가 sales인 사람의 이름을 조회하기
select dept.dname, emp.ename from emp join dept
 on emp.deptno=dept.deptno where dept.dname='sales';
-- 2. 부서가 SALES인 사람의 이름과 입사일을 조회하는 SQL문을 ANSI 표준으로 작성하시오. 
select dept.dname, emp.ename, emp.hiredate 
 from emp join dept on emp.deptno=dept.deptno where dept.dname='SALES';

 
-- 3. 가장 많은 급여를 받는 사원의 이름과 부서명 조회하기
select emp.ename as '사원이름', dept.dname as '부서명', emp.sal as '급여'
 from emp join dept on emp.deptno=dept.deptno
 where emp.sal=(select max(sal) from emp);
-- 3. 서브쿼리와 조인을 이용하여 가장 적은 급여를 받는 
-- 사원의 사번, 이름, 급여, 부서명을 출력하는 쿼리를 작성하시오. 
select e.empno, e.ename, e.sal, d.dname 
 from emp e join dept d on e.deptno=d.deptno
 where e.sal = (select min(sal) from emp);
 
 
-- 4. 사번, 이름, 부서명, 입사일을 조회하기. sales 부서를 입사일로 정렬
select emp.empno, emp.ename, dept.dname, emp.hiredate
 from emp join dept on emp.deptno=dept.deptno
 where dept.dname='sales' order by hiredate;
-- 4. 사번, 이름, 부서명, 입사일만 조회되는 뷰를 생성하고, 
-- 생성된 뷰를 이용하여 SALES 부서인 사람을 입사일이 빠른 순으로 조회하는 쿼리를 작성하시오.
create view v_member as select e.empno, e.ename, d.dname, e.hiredate
 from emp e join dept d on d.deptno=d.deptno;
select * from v_member where dname='SALES' order by hiredate;


-- 5. MEMBER 테이블을 생성하려고한다. 
-- 해당 테이블의 컬럼은 ID, PASSWORD, NAME, EMAIL, ADDREESS로 구성할 예정이다.
-- ID는 VARCHAR(10)의 널이 들어갈 수 없으며 기본키이다. 
-- PASSWORD는 VARCHER(128)의 널이 들어갈수 없으며, 
-- NAME 은 VARCHAR(20) 널이 들어갈 수 없고, 
-- EMAIL은 VARCHER(128)이며 널이 들어갈 수 없고, 
-- ADDRESS는 VARCHAR(128)이고 널이 들어갈 수 있다. 
-- 해당 테이블을 생성하는 SQL문을 작성하시오.
CREATE TABLE MEMBER(
	ID VARCHAR(10),
	PASSWORD VARCHAR(128) NOT NULL,
	NAME VARCHAR(12) NOT NULL,
	EMAIL VARCHAR(128) NOT NULL,
	ADDRESS VARCHAR(128),
	PRIMARY KEY(ID)
);
/*
CREATE TABLE MEMBER(
	ID VARCHAR(10) PRIMARY KEY,
	PASSWORD VARCHAR(128) NOT NULL,
	NAME VARCHAR(12) NOT NULL,
	EMAIL VARCHAR(128) NOT NULL,
         ADDRESS VARCHAR(128)
);
*/


-- SQL 문제해결 시나리오
-- 1. 메뉴와 카테고리 테이블 생성 구문을 1_DDL_홍길동.sql 파일에 작성한다.
CREATE TABLE TBL_CATEGORY(
 CATEGORY_CODE INT AUTO_INCREMENT PRIMARY KEY,
 CATEGORY_NAME VARCHAR(30) NOT NULL,
 REF_CATEGORY_CODE INT,
 FOREIGN KEY(REF_CATEGORY_CODE) REFERENCES TBL_CATEGORY(CATEGORY_CODE)
);

CREATE TABLE TBL_MENU(
 MENU_CODE INT AUTO_INCREMENT PRIMARY KEY,
 MENU_NAME VARCHAR(30) NOT NULL,
 MENU_PRICE INT NOT NULL,
 CATEGORY_CODE INT NOT NULL,
 ORDERABLE_STATUS VARCHAR(2) NOT NULL,
 FOREIGN KEY(CATEGORY_CODE) REFERENCES TBL_CATEGORY(CATEGORY_CODE)
);

-- 2. 샘플 데이터는 카테고리와 메뉴를 3행 이상을 테이블에 삽입하는 
-- SQL문을 작성하여 2_DML_홍길동.sql 파일에 작성한다.
INSERT INTO TBL_CATEGORY(CATEGORY_NAME, REF_CATEGORY_CODE) VALUES ('식사', null);
INSERT INTO TBL_CATEGORY(CATEGORY_NAME, REF_CATEGORY_CODE) VALUES ('음료', null);
INSERT INTO TBL_CATEGORY(CATEGORY_NAME, REF_CATEGORY_CODE) VALUES ('디저트', null);

INSERT INTO TBL_MENU(MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS) VALUES ('열무김치라떼', 4500, 2, 'Y');
INSERT INTO TBL_MENU(MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS) VALUES ('우럭스무디', 5000, 2, 'Y');
INSERT INTO TBL_MENU(MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS) VALUES ('생갈치쉐이크', 6000, 2,'Y');
INSERT INTO TBL_MENU(MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS) VALUES ('갈릭미역파르페', 7000, 3, 'Y');
INSERT INTO TBL_MENU(MENU_NAME, MENU_PRICE, CATEGORY_CODE, ORDERABLE_STATUS) VALUES ('앙버터김치찜', 13000, 1, 'Y');

select * from TBL_CATEGORY;
select * from TBL_MENU;

-- 3. 샘플 데이터 삽입 후 조회하는 SQL문은 3_SELECT_홍길동.sql 파일에 작성한다.
-- 조회하는 SQL은 메뉴 목록에 카테고리 정보가 함께 조회되도록 두 개 테이블을 조인해서 조회한다.
SELECT A.MENU_CODE, A.MENU_NAME, A.MENU_PRICE, A.CATEGORY_CODE,
 A.ORDERABLE_STATUS, B.CATEGORY_CODE, B.CATEGORY_NAME, B.REF_CATEGORY_CODE
FROM TBL_MENU A
JOIN TBL_CATEGORY B ON (A.CATEGORY_CODE = B.CATEGORY_CODE);