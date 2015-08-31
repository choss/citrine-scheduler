package fm.last.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.TimeZone;

public class TimeZoneList {
  
  private static final List<TimeZone> allTimeZones;

  static {
    String boxDefaultTimezone = TimeZone.getDefault().getID();
    String[] tzIDs = { "GMT", "Europe/Berlin", "Europe/Paris", "Europe/Sofia", "Europe/Moscow", "Europe/Brussels",
        "Europe/Amsterdam", "Europe/London", "Europe/Dublin", "Europe/Budapest", "Europe/Luxembourg", "Europe/Madrid",
        "Europe/Prague", "Europe/Zurich", "Europe/Vienna", "Europe/Athens", "America/New_York", "US/Pacific",
        "US/Hawaii", "PST", "Asia/Beirut", "Asia/Tel_Aviv", "Asia/Baghdad", "Asia/Dubai", "Asia/Tehran",
        "Asia/Calcutta", "Asia/Bangkok", "Asia/Jakarta", "Asia/Saigon", "Asia/Hong_Kong", "Asia/Kuala_Lumpur",
        "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Seoul", "Asia/Tokyo", "Australia/Sydney",
        "Australia/Melbourne", "IST" };
    allTimeZones = new ArrayList<TimeZone>();
    for (Object id : Arrays.asList(tzIDs)) {
      allTimeZones.add(TimeZone.getTimeZone((String) id));
    }
  }

  public static List<TimeZone> getAllAvailableTimeZones() {
    return allTimeZones;
  }
  
}
