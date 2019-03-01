-- CREATE DUMMY TABLE

create table dummy(
    id serial primary key,
    first_name varchar,
    last_name varchar,
    email varchar,
    age int
),

-- DUMMY DATA

insert into dummy(first_name, last_name, email, age)
values
('John', 'Johnson', 'john@johnjohnson.com', 56),
('Steven', 'Stevenson', 'steven@stevenstevenson.com', 48),
('Lars', 'Larson', 'lars@larslarson.com', 73),
('Erick', 'Erickson', 'erick@erickerickson.com', 25),

-- CREATE USERS TABLE

create table users(
    id serial primary key,
    username varchar,
    password varchar
    )

-- CREATE USER

insert into users (username, password)
values
(${username}, ${password}),

-- CHECK USERNAME ON LOGIN

select count(*)
from users
where username= ${username}

