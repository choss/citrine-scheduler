**Overview**

[![Build Status](https://travis-ci.org/choss/citrine-scheduler.svg)](https://travis-ci.org/choss/citrine-scheduler)

This is a patched version of citrine with a couple of new features

* timezone aware, possibility to select timezone for schedule
  * in oder to configure which timezones are available in the dropdown a file named citrine_timezones.properties needs to be created and put into the classpath. An example can be found in src/main/resources called defaultTimeZones.properties, which is also used in case there is no specific one. The timezone of the server and GMT are always added to the dropdown. Default for new tasks is GMT.
* possibility to have directories enumerated and scripts available for quick selection to schedule
  * for the usages of this feature please see: src/main/conf/citrine_preparedcommands.properties.example
  * A file called citrine_preparedcommands.properties needs then to be put into the classpath of the application
* Spring remoting added, to be able to interact with citrine from another frontend
* A potential local to add files into the classpath is tomcat/libs. Changes to the features above will only take effect after restarting the tomcat

**Citrine** is a Java web application which can be used to configure, manage and monitor the running of various tasks (typically, but not limited to, shell scripts). It can be thought of as a GUI replacement for cron with extra functionality. It can also be thought of as a GUI for the [Java Quartz Scheduler](http://quartz-scheduler.org/) ("citrine" is a type of quartz).

Citrine can be [downloaded here](https://code.google.com/p/citrine-scheduler/downloads/list).

Please refer to the original project's [Wiki](https://github.com/massdosage/citrine-scheduler/wiki) for usage and other information.

#Legal

This project is available under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

Copyright 2008-2015 Last.fm & Mass Dosage & choss
