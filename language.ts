/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Tadayuki Onishi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const SupportLanguage = {
	ActionScript: "actionscript",
	Ada: "ada",
	AppleScript: "applescript",
	Bash: "bash",
	C: "c",
	CSharp: "c#",
	CPlusPlus: "c++",
	CSS: "css",
	Erlang: "erlang",
	Go: "go",
	Groovy: "groovy",
	Haskell: "haskell",
	HTML: "html",
	Java: "java",
	JavaScript: "javascript",
	JSON: "json",
	Lua: "lua",
	Nyan: "nyan",
	ObjectiveC: "objc",
	Perl: "perl",
	PHP: "php",
	PowerShell: "powershell",
	Python: "python",
	R: "r",
	Ruby: "ruby",
	Sass: "sass",
	Scala: "scala",
	SQL: "sql",
	Swift: "swift",
	VisualBasic: "visualbasic",
	XML: "xml",
	YAML: "yaml",
} as const;
type SupportLanguage = typeof SupportLanguage[keyof typeof SupportLanguage];

/**
 * See also: https://confluence.atlassian.com/doc/code-block-macro-139390.html
 *           https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=advanced
 */
export const AtlassianSupportLanguage = {
	None: "none",
	...SupportLanguage,
} as const;
export type AtlassianSupportLanguage = typeof AtlassianSupportLanguage[keyof typeof AtlassianSupportLanguage];

type GitHubFlaveredMarkdownCodeBlockLanguageMapping = {
	[P in keyof typeof SupportLanguage]: string[];
};

// See also: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
export const GitHubFlaveredMarkdownCodeBlockLanguageMapping: GitHubFlaveredMarkdownCodeBlockLanguageMapping = {
	ActionScript: ["actionscript", "actionscript 3", "actionscript3", "as3"],
	Ada: ["ada", "ada95", "ada2005"],
	AppleScript: ["applescript", "osascript"],
	Bash: [
		"abuild",
		"alpine abuild",
		"apkbuild",
		"bash",
		"bash session",
		"console",
		"gentoo ebuild",
		"gentoo eclass",
		"openrc",
		"openrc runscript",
		"sh",
		"shell",
		"shell-script",
		"shellsession",
		"tcsh",
		"zsh",
	],
	C: ["c"],
	CSharp: ["c#", "csharp", "eq", "uno"],
	CPlusPlus: [
		"ags",
		"ags script",
		"asymptote",
		"byond",
		"c++",
		"cpp",
		"cuda",
		"dm",
		"dtrace",
		"dtrace-script",
		"edje data collection",
		"game maker language",
		"holyc",
		"metal",
		"mql4",
		"mql5",
		"oncrpc",
		"opencl",
		"rpc",
		"rpcgen",
		"squirrel",
		"swig",
		"unified parallel c",
		"x bitmap",
		"x pixmap",
		"xbm",
		"xc",
		"xdr",
		"xpm",
		"xs",
	],
	CSS: ["css"],
	Erlang: ["erlang"],
	Go: ["go", "golang", "v", "vlang"],
	Groovy: ["groovy", "nextflow"],
	Haskell: [
		"c2hs",
		"c2hs haskell",
		"cabal",
		"cabal config",
		"dhall",
		"frege",
		"gf",
		"grammatical framework",
		"haskell",
		"purescript",
	],
	HTML: ["html", "kit", "mtml", "riot", "svelte", "vue", "xhtml"],
	Java: ["apex", "chuck", "jasmin", "java", "unrealscript"],
	JavaScript: [
		"cycript",
		"javascript",
		"javascript+erb",
		"js",
		"json with comments",
		"json5",
		"jsonc",
		"jsonld",
		"jsx",
		"node",
		"tsx",
	],
	JSON: [
		"ecere projects",
		"ipython notebook",
		"json",
		"jupyter notebook",
		"max",
		"max/msp",
		"maxmsp",
	],
	Lua: ["lua", "terra"],
	Nyan: ["nyan"], // Not support in GitHub
	ObjectiveC: [
		"obj-c",
		"obj-c++",
		"objc",
		"objc++",
		"objective-c",
		"objective-c++",
		"objectivec",
		"objectivec++",
	],
	Perl: ["cperl", "perl", "perl-6", "perl6", "pod", "pod 6", "raku"],
	PHP: ["hack", "html+php", "inc", "php", "zephir"],
	PowerShell: ["posh", "powershell", "pwsh"],
	Python: [
		"bazel",
		"bzl",
		"easybuild",
		"gn",
		"python",
		"python3",
		"ren'py",
		"renpy",
		"rusthon",
		"sage",
		"starlark",
	],
	R: ["r", "rscript", "splus"],
	Ruby: [
		"crystal",
		"hcl",
		"jruby",
		"macruby",
		"mirah",
		"rake",
		"rb",
		"rbx",
		"ruby",
		"terraform",
	],
	Sass: ["sass", "scss"],
	Scala: ["scala"],
	SQL: ["hiveql", "plsql", "sql", "sqlpl", "tsql"],
	Swift: ["swift"],
	VisualBasic: [
		"vba",
		"vb6",
		"visual basic 6",
		"visual basic for applications",
		"visual basic .net",
		"vbnet",
		"vb .net",
		"vb.net",
	],
	XML: [
		"ant build system",
		"collada",
		"eagle",
		"genshi",
		"labview",
		"maven pom",
		"rss",
		"svg",
		"web ontology language",
		"wsdl",
		"xml",
		"xml property list",
		"xml+genshi",
		"xml+kid",
		"xpages",
		"xproc",
		"xsd",
		"xsl",
		"xslt",
	],
	YAML: [
		"common workflow language",
		"cwl",
		"lookml",
		"raml",
		"salt",
		"saltstack",
		"saltstate",
		"spline font database",
		"unity3d asset",
		"yaml",
		"yml",
	],
};

export const markdownToWikiMarkupLanguageMapping: Map<
	string,
	SupportLanguage
> = new Map(
	Object.entries(GitHubFlaveredMarkdownCodeBlockLanguageMapping).flatMap(
		([key, langs]) => {
			return langs.map((v) => [
				v,
				AtlassianSupportLanguage[
					key as keyof GitHubFlaveredMarkdownCodeBlockLanguageMapping
					],
			]);
		}
	)
);
