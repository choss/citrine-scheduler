package fm.last.util;

import java.util.List;

/**
 * This class is the configuration to enumerate script which should be
 * selectable in citrine. The algorithm finds all files in the subdirs of the
 * basedire which have one of the "usableExtensions". If the file ends with an
 * "excludedSuffix" it will be excluded. Files also need to start with one of
 * the "manditoryPrefixes". An accepted "manditoryPrefix" is also the empty
 * string.
 *
 */
public class PreparedCommandConfigElement {

	private String baseDirectory;
	private List<String> usableExtensions;
	private List<String> excludedSuffixes;
	private List<String> manditoryPrefixes;

	private static final String[] extensions = { "sh" };
	private static final String[] excludeEndings = { "_nofind.sh" };
	private static final String[] includePrefix = { "run_", "prepare_" };

	
	public String getBaseDirectory() {
		return baseDirectory;
	}


	public String[] getUsableExtensions() {
		return usableExtensions.toArray(new String[usableExtensions.size()]);
	}


	public List<String> getExcludedSuffixes() {
		return excludedSuffixes;
	}


	public List<String> getManditoryPrefixes() {
		return manditoryPrefixes;
	}


	@Override
	public String toString() {
		return "PreparedCommandConfigElement [baseDirectory=" + baseDirectory + ", usableExtensions=" + usableExtensions + ", excludedSuffixes="
				+ excludedSuffixes + ", manditoryPrefixes=" + manditoryPrefixes + "]";
	}

}
