package fm.last.util;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class PreparedCommandUtils {

	private static final String CONFIG_PROPERTY_PREFIX = "prepcmd";
	private static final List<PreparedCommandConfigElement> CONFIGURED_DIRECTORIES;

	static {

		Resource resource = new ClassPathResource("citrine_preparedcommands.properties");
		if (!resource.exists()) {
			CONFIGURED_DIRECTORIES = new ArrayList<PreparedCommandConfigElement>();
		} else {
			List<PreparedCommandConfigElement> result = getPreparedCommands(resource);
			CONFIGURED_DIRECTORIES = result;
		}
	}

	public static Collection<? extends String> getAllScriptsList() {
		getAllStartScripts(CONFIGURED_DIRECTORIES);
		return Collections.emptyList();
	}

	public static List<File> getAllStartScripts(PreparedCommandConfigElement singleDirectory) {
		Collection<File> unsortedFiles = FileUtils.listFiles(new File(singleDirectory.getBaseDirectory()), singleDirectory.getUsableExtensions(), true);
		List<File> files = sortFiles(unsortedFiles);
		List<File> result = new ArrayList<File>(files.size());
		for (File file : files) {
			boolean shouldAdd = false;

			for (String prefix : singleDirectory.getManditoryPrefixes()) {
				if (file.getName().startsWith(prefix)) {
					shouldAdd = true;
				}
			}

			for (String suffix : singleDirectory.getExcludedSuffixes()) {
				if (file.getName().endsWith(suffix)) {
					shouldAdd = false;
				}
			}
			if (shouldAdd) {
				result.add(file);
			}
		}
		return result;
	}

	public static List<String> getAllStartScripts(List<PreparedCommandConfigElement> baseDirs) {
		List<String> result = new ArrayList<String>();
		for (PreparedCommandConfigElement element : baseDirs) {
			File baseDir = new File(element.getBaseDirectory());
			String baseDirString = baseDir.getName();
			result.add("- " + baseDirString + " -");
			List<File> allScripts = getAllStartScripts(element);
			for (File file : allScripts) {
				result.add("'" + file.getAbsolutePath() + "'");
			}
		}
		return result;
	}

	private static List<File> sortFiles(Collection<File> files) {
		List<File> sortedFiles = new ArrayList<File>(files);
		Collections.sort(sortedFiles, new Comparator<File>() {

			@Override
			public int compare(File o1, File o2) {
				return o1.getAbsolutePath().compareTo(o2.getAbsolutePath());
			}
		});
		return sortedFiles;
	}

	private static List<PreparedCommandConfigElement> getPreparedCommands(Resource resource) {
		try {
			PropertiesConfiguration pc = new PropertiesConfiguration(resource.getURL());
			int i = 1;
			while (pc.containsKey(CONFIG_PROPERTY_PREFIX + i)) {
				String baseDirectory = pc.getString(CONFIG_PROPERTY_PREFIX + i + ".baseDirectory");
				List usableExtensions = pc.getList(CONFIG_PROPERTY_PREFIX + i + "usableExtension", new ArrayList<String>());
				List excludedSuffixes = pc.getList(CONFIG_PROPERTY_PREFIX + i + "excludedSuffix", new ArrayList<String>());
				List manditoryPrefixes = pc.getList(CONFIG_PROPERTY_PREFIX + i + "manditoryPrefix", Collections.singletonList(""));
				new PreparedCommandConfigElement(baseDirectory, usableExtensions, excludedSuffixes, manditoryPrefixes);
				i++;
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return null;
	}

}
