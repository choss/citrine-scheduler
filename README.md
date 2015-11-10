**Overview**
[![Build Status](https://travis-ci.org/choss/citrine-scheduler.svg)](https://travis-ci.org/choss/citrine-scheduler)
This is a patched version of citrine with a couple of new features (when done)

* timezone aware, possibility to select timezone for schedule
  * in oder to configure which timezones are available in the dropdown a file named citrine_timezones.properties needs to be created and put into the classpath. An example can be found in src/main/resources called defaultTimeZones.properties, which is also used in case there is no specific one. The timezone of the server and GMT are always added to the dropdown. Default for new tasks is GMT.
* possibility to have directories enumerated and scripts available for quick selection to schedule
* Spring remoting added, to be able to interact with citrine from another frontend


**Citrine** is a Java web application which can be used to configure, manage and monitor the running of various tasks (typically, but not limited to, shell scripts). It can be thought of as a GUI replacement for cron with extra functionality. It can also be thought of as a GUI for the [Java Quartz Scheduler](http://quartz-scheduler.org/) ("citrine" is a type of quartz).

Citrine can be [downloaded here](https://code.google.com/p/citrine-scheduler/downloads/list).

Please refer to the project's [Wiki](https://github.com/massdosage/citrine-scheduler/wiki) for usage and other information.

**Latest news**
* **Project moved from Google Code to Github** (2015-06-31) - with Google Code's [impending closure] (http://google-opensource.blogspot.co.uk/2015/03/farewell-to-google-code.html) 
Citrine has been moved to a new home in Github. Citrine isn't actively developed any more but the code is still available here for future reference, forking or the consideration of pull requests.
* **4.2.1 release available** (2013-02-06) - Fixed issues with static files not being downloaded in Tomcat 7. [Download it](http://code.google.com/p/citrine-scheduler/downloads/list) and report any issues to the [Citrine group](http://groups.google.com/group/citrine-scheduler)

#Legal

This project is available under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

Copyright 2008-2015 Last.fm & Mass Dosage & choss
