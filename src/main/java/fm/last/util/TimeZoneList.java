package fm.last.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TimeZone;

import org.apache.commons.configuration.PropertiesConfiguration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class TimeZoneList {

	private static final List<TimeZone> allTimeZones;
	public static final String GMT_TIMEZONE_ID = "GMT";
	public static final String BOX_DEFAULT_TIMEZONE_ID = TimeZone.getDefault().getID();

	static {
		Set<String> tzIDs = getConfiguredTimezones();
		tzIDs.add(BOX_DEFAULT_TIMEZONE_ID);
		tzIDs.add(GMT_TIMEZONE_ID);

		allTimeZones = new ArrayList<TimeZone>();
		for (String id : tzIDs) {
			allTimeZones.add(TimeZone.getTimeZone(id));
		}
		Collections.sort(allTimeZones, new TimeZoneComperator());
	}

	private static Set<String> getConfiguredTimezones() {
		Resource resource = new ClassPathResource("citrine_timezones.properties");
		final String[] tzIDs;
		if (resource.exists()) {
			tzIDs = readToArray(resource);
		} else {
			tzIDs = readToArray(new ClassPathResource("defaultTimeZones.properties"));
		}
		Set<String> timeZoneSet = new HashSet<String>();
		timeZoneSet.addAll(Arrays.asList(tzIDs));
		timeZoneSet.remove(null);
		return timeZoneSet;
	}

	private static String[] readToArray(Resource resource) {
		try {
			PropertiesConfiguration pc = new PropertiesConfiguration(resource.getURL());
			List<Object> enabledIds = pc.getList("enabledTimeZone");
			return enabledIds.toArray(new String[enabledIds.size()]);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public static List<TimeZone> getAllAvailableTimeZones() {
		return allTimeZones;
	}

	private static class TimeZoneComperator implements Comparator<TimeZone> {

		@Override
		public int compare(TimeZone o1, TimeZone o2) {
			int thisVal = o1.getRawOffset();
			int anotherVal = o2.getRawOffset();
			return (thisVal < anotherVal ? -1 : (thisVal == anotherVal ? 0 : 1));
		}

	}

}
