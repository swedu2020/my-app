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

select * from dept;
select * from emp;

-- 1. emp 테이블을 직업(오름차순), 입사일(오름차순)순으로 정렬하기
select * from emp order by job, hiredate;
-- 2. 부서가 sales인 사람의 이름을 조회하기
select dept.dname, emp.ename from emp join dept
 on emp.deptno=dept.deptno where dept.dname='sales';
-- 3. 가장 많은 급여를 받는 사원의 이름과 부서명 조회하기
select emp.ename as '사원이름', dept.dname as '부서명', emp.sal as '급여'
 from emp join dept on emp.deptno=dept.deptno
 where emp.sal=(select max(sal) from emp);
-- 4. 사번, 이름, 부서명, 입사일을 조회하기. sales 부서를 입사일로 정렬
select emp.empno, emp.ename, dept.dname, emp.hiredate
 from emp join dept on emp.deptno=dept.deptno
 where dept.dname='sales' order by hiredate;