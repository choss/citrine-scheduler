create table task_child_task (task_id int8 not null, child_task_id int8 not null, primary key (task_id, child_task_id));
create table task_runs (id  bigserial not null, endDate timestamp, stackTrace text, startDate timestamp, status varchar(255), sysErr text, sysOut text, taskId int8 not null, version int4 not null, primary key (id));
create table tasks (id  bigserial not null, beanName varchar(255) not null, command varchar(255), description varchar(4000), enabled bool not null, errorIfRunning bool not null, groupName varchar(255) not null, name varchar(255) not null, notifyOnFailure bool, notifyOnSuccess bool, recipients varchar(4000), priority int4, stopOnError bool, timeZone varchar(255), timerSchedule varchar(255), version int4 not null, primary key (id));
alter table task_child_task add constraint FK3A35B5C2831F2EC2 foreign key (task_id) references tasks;
alter table task_child_task add constraint FK3A35B5C27809EE9F foreign key (child_task_id) references tasks;
create index i_task_runs_taskId_startDate on task_runs (taskId, startDate);
