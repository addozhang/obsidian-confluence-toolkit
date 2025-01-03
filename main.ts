import {MarkdownView, Notice, Plugin} from 'obsidian';
import {marked, Hooks, TokensList, Token} from "marked";
import {AtlassianWikiMarkupRenderer, MarkdownToAtlassianWikiMarkupOptions} from "./confluenceRender";
import ConverterSettingTab from "./converterSettingTab";

interface ConverterSettings {
	codeBlockTheme: string;
	codeBlockShowLineNumbers: boolean;
	codeBlockCollapse: boolean;
	debug: boolean;
}

const DEFAULT_SETTINGS: ConverterSettings = {
	codeBlockTheme: "Confluence",
	codeBlockShowLineNumbers: false,
	codeBlockCollapse: false,
	debug: false
}

export default class ConfluenceConverter extends Plugin {

	settings: ConverterSettings;

	async onload() {
		await this.loadSettings();
		this.addCommand({
			id: 'convert-to-confluence-to-clipboard',
			name: 'Convert to Confluence and Copy to Clipboard',
			editorCheckCallback: (checking: boolean, editor, ctx) => {
				if (ctx instanceof MarkdownView) {
					if (!checking) {
						this.convert2Clipboard();
					}
					return true;
				}
				return false;
			}
		});
		// this.addRibbonIcon('home', 'Confluence Wiki Markup', async () => {
		// 	await this.convert2Clipboard();
		// });
		this.addSettingTab(new ConverterSettingTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, (await this.loadData()) as ConverterSettings);
	}

	private async convert2Clipboard() {
		const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
		if(!editor) {
			return
		}
		const options: MarkdownToAtlassianWikiMarkupOptions = {
			codeBlock: {
				theme: this.settings.codeBlockTheme as any,
				showLineNumbers: this.settings.codeBlockShowLineNumbers,
				collapse: this.settings.codeBlockCollapse
			}
		}
		let content = editor.getSelection() ? editor.getSelection() : editor.getValue();
		let converted = marked.parse(content, {
			renderer: new AtlassianWikiMarkupRenderer(options),
			async: false,
			hooks: this.settings.debug ? new TokenPrint() : null,
		});
		navigator.clipboard.writeText(converted)
			.then(_ => new Notice("Copied to clipboard"));
	}
}

class TokenPrint extends Hooks {

	processAllTokens(tokens: Token[] | TokensList): Token[] | TokensList {
		console.log("parsed tokens",tokens)
		return super.processAllTokens(tokens);
	}
}

