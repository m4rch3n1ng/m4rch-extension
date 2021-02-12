import vscode from "vscode"
import fs from "fs"

export function activate (context: vscode.ExtensionContext) {
	let tsconfig = vscode.commands.registerCommand(
		'm4rch.tsconfig',
		function (): void {
			let editor: any = vscode.window.activeTextEditor

			if (!editor) {
				vscode.window.showErrorMessage("editor does not exist")
				return
			}

			let data: any = JSON.parse(fs.readFileSync(__dirname + "/../data/data.json").toString())

			editor.edit((edit: any) => {
				edit.replace(editor.selection, data.tsconfig.join("\n"))
			})
		}
	)

	context.subscriptions.push(tsconfig)
}

export function deactivate () {}
