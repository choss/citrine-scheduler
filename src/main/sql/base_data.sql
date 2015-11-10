INSERT INTO tasks (command, description, enabled, beanName, name, groupName, priority,timeZone, timerSchedule, VERSION, errorIfRunning, stopOnError, notifyOnSuccess, notifyOnFailure) VALUES ('clear_log_files 30','Cleans up Citrine log files older than N days.
By default N is 30, this can be set as the first argument to the job.', TRUE, 'adminJob', 'Log File Cleaner', 'admin', 0, 'GMT', '0 0 3 * * ?', 0, TRUE, TRUE, FALSE, TRUE);
INSERT INTO tasks (command, description, enabled, beanName, name, groupName, priority,timeZone, timerSchedule, VERSION, errorIfRunning, stopOnError, notifyOnSuccess, notifyOnFailure) VALUES ('clear_task_runs 30', 'Cleans up Task Runs in the database older than N days.
By default N is 30, this can be set as the first argument to the job.', TRUE, 'adminJob', 'Task Run Cleaner', 'admin', 0, 'GMT', '0 0 3 * * ?', 0, TRUE, TRUE, FALSE, TRUE); 
 
