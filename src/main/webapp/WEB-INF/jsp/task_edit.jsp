<%@ include file="/WEB-INF/jsp/include/taglibs.jsp" %>
<html>
  <head>
    <title>Task Edit</title>
    <link rel="stylesheet" href="css/generic.css" type="text/css"/>
     <link href="external/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="external/bootstrap/css/bootstrap.css" rel="stylesheet"> 
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="javascript/cronGen.old.js"></script>
  </head>
  <body>
    <form:form commandName="taskDTO" method="POST" action="task_edit.do">
      <form:hidden path="selectedGroupName"/>
      <form:hidden path="task.id"/>
      <form:hidden path="task.version"/>
      <table>
        <tr>
          <td align="right">* Name:</td>
          <td>
            <form:input path="task.name" size="30"/>
            <span class="error"><form:errors path="task.name" /></span>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">Description:</td>
          <td>
            <form:textarea path="task.description" rows="5" cols="80"/>
          </td>
        </tr>
        <tr>
          <td align="right">Timer Schedule<span class="reference"><a href="http://quartz-scheduler.org/documentation/quartz-1.x/tutorials/crontrigger" target="_blank">[?]</a></span> <span class="reference"><a href="http://cronmaker.com" target="_blank">[1]</a></span>:</td>
          <td>
            <form:input path="task.timerSchedule" />
            <span class="error"><form:errors path="task.timerSchedule" /></span>
          </td>
        </tr>
        <tr>
          <td align="right">Command:</td>
          <td>
            <form:input path="task.command" size="80"/>
          </td>
        </tr>
        <tr>
          <td align="right">Prepared Command:</td>
          <td>
            <form:select path="preparedCommand">
                <form:options items="${allCommands}" />
             </form:select>
          </td>
        </tr>
        <tr>
          <td align="right">Bean name:</td>
          <td>
            <form:select path="task.beanName">
              <form:options items="${jobBeans}"/>
            </form:select>
          </td>
        </tr>
        <tr>
          <td align="right">Timezone:</td>
          <td>
            <form:select path="task.timeZone">
                <form:options items="${timeZones}" itemValue="iD" itemLabel="iD" />
             </form:select>
	    </td>
	    </tr>
        <tr>
          <td align="right">Priority:</td>
          <td>
            <form:input path="task.priority"/>
            <span class="error"><form:errors path="task.priority" /></span>
          </td>
        </tr>
        <tr>
          <td align="right">* Group Name:</td>
          <td>
            <form:input path="task.groupName"/>
            <span class="error"><form:errors path="task.groupName" /></span>
          </td>
        </tr>
        <tr>
          <td align="right">Enabled:</td>
          <td>
            <form:checkbox path="task.enabled"/>
          </td>
        </tr>
        <tr>
          <td align="right">Stop On Error:</td>
          <td>
            <form:checkbox path="task.stopOnError"/>
          </td>
        </tr>
        <tr>
          <td align="right">Error If Running:</td>
          <td>
            <form:checkbox path="task.errorIfRunning"/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">Notification Recipients:</td>
          <td>
            <form:input path="task.notification.recipients" size="80"/><br/> 
            (comma-separated list of e-mail addresses)
          </td>
        </tr>
        <tr>
          <td align="right">Notify on success:</td>
          <td>
            <form:checkbox path="task.notification.notifyOnSuccess"/>
          </td>
        </tr>
        <tr>
          <td align="right">Notify on failure:</td>
          <td>
            <form:checkbox path="task.notification.notifyOnFailure"/>
          </td>
        </tr>
        <tr>
          <td/>
          <td align="right">
            <c:if test="${not empty taskDTO.task.id && taskDTO.task.id != 0}">
              <a href="task_children.do?taskId=${taskDTO.task.id}&selectedGroupName=${selectedGroupName}">Manage child tasks</a>
            </c:if>
          </td>
        </tr>
        <tr>
          <td/>
          <td align="right">
            <input type="submit" value="Save" name="update"/>
            <c:if test="${not empty taskDTO.task.id && taskDTO.task.id != 0}">
              <input type="submit" value="Delete" name="delete" onClick="return confirm('Are you sure you want to delete this task?')"/>
            </c:if>
            <input type="submit" value="Cancel" name="cancel"/>
          </td>
        </tr>
      </table>
    </form:form>
    <script>
            $(function () {
                $("#task\\.timerSchedule").cronGen();                
            });
        </script>
        <script src="external/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>