INSERT INTO tasks (id, beanname, command, description, enabled, errorifrunning, groupname, name, notifyonfailure, notifyonsuccess, recipients, priority, stoponerror, timezone, timerschedule, version) VALUES (2, 'adminJob', 'clear_task_runs 90', 'Cleans up Task Runs than N days.
Cleans up Task Runs in the database older than N days.
By default N is 30, this can be set as the first argument to the job.', true, true, 'admin', 'Task Run Cleaner', false, false, '', 0, true, 'GMT', '0 0 3 * * ?', 0);
INSERT INTO tasks (id, beanname, command, description, enabled, errorifrunning, groupname, name, notifyonfailure, notifyonsuccess, recipients, priority, stoponerror, timezone, timerschedule, version) VALUES (1, 'adminJob', 'clear_log_files 90', 'Cleans up Citrine log files older than N days.
By default N is 30, this can be set as the first argument to the job.', true, true, 'admin', 'Log File Cleaner', false, false, '', 0, true, 'GMT', '0 0 3 * * ?', 1);
