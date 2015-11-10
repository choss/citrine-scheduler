package fm.last.util;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.apache.commons.io.FileUtils;

public class PreparedCommandUtils {

	private static final List<PreparedCommandConfigElement> CONFIGURED_DIRECTORIES;
	
	static {
		CONFIGURED_DIRECTORIES = new ArrayList<PreparedCommandConfigElement>();
	}

	public static Collection<? extends String> getAllScriptsList() {
		// TODO Auto-generated method stub
		// getAllStartScripts("/path/to/directories");
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

}
