
select e.empid, e.name, p.pname, p.pid, p.pmanager from hcmmaster as e INNER JOIN projectmaster as p on e.manager = p.pmanager
where e.manager = 'Mr X';

SELECT `hcmmaster`.`empid`,
    `hcmmaster`.`name`,
    `hcmmaster`.`manager`
FROM `grms`.`hcmmaster`;

SELECT `projectmaster`.`pid`,
    `projectmaster`.`pname`,
    `projectmaster`.`pmanager`
FROM `grms`.`projectmaster`;

SELECT * FROM hcmmaster;

SELECT avg(empid) FROM hcmmaster 
WHERE NOT name='Jack' ORDER BY empid desc, name asc;

INSERT INTO `grms`.`hcmmaster`
(
`name`,
`empid`)
VALUES
('Kurt', 5);

SELECT * FROM hcmmaster
where manager is not null;

update hcmmaster set manager = 'Mr Z' where empid = 6;

delete from hcmmaster where empid = 5;

select * from hcmmaster
where manager = 'Mr Y' ORDER BY empid desc;


select * from hcmmaster where name like '_a%';	

select * from hcmmaster where name in ('Jack', 'Mike');

SELECT `hcmmaster`.`empid`,
    `hcmmaster`.`name`,
    `hcmmaster`.`manager`
FROM `grms`.`hcmmaster`;

select * from projectmaster;

-- Inner Join
select * from hcmmaster hm INNER JOIN projectmaster pm on hm.manager = pm.pmanager;

-- Right Join
select * from hcmmaster hm RIGHT JOIN projectmaster pm on hm.manager = pm.pmanager;

-- Left Join
select * from projectmaster pm LEFT JOIN hcmmaster hm on pm.pmanager = hm.manager;

-- Union 
select * from hcmmaster hm left JOIN projectmaster pm on hm.manager = pm.pmanager union all select * from hcmmaster hm RIGHT JOIN projectmaster pm on hm.manager = pm.pmanager;


INSERT INTO `grms`.`employee`
(`emp_id`,
`emp_name`,
`working_date`,
`working_hours`,`salary`)
VALUES
(1, 'Ajeet', '2018-01-24', 12, 1000),
(2, 'Ayaan', '2018-01-24', 8, 2000),
(3, 'Ajeet', '2018-01-25', 10, 3000),
(4, 'Ayaan', '2018-01-25', 7, 4000);


select emp_id, emp_name, sum(working_hours) as sumhrs from employee GROUP BY emp_name having sum(working_hours) BETWEEN 10 and 15;



select * from employee ORDER BY salary desc limit 2,1;  

SELECT max(salary) from employee where salary < (SELECT max(salary) from employee where salary < (SELECT max(salary) from employee where salary));

SELECT emp_name, max(salary) from employee GROUP BY emp_name;

SELECT current_date();

SELECT date('1/08/13') AS 'MM/DD/YY'; 

SELECT DISTINCT emp_name from employee where working_date between '2018-01-24' and '2018-01-25';

select emp_name from employee where salary >= 2000; 

select DISTINCT emp_name from employee where emp_name like 'A%'; 

select * from employee where upper(emp_name) like '%JEE%'; 

select year(now())












