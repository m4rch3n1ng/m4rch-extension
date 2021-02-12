"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = __importDefault(require("vscode"));
const fs_1 = __importDefault(require("fs"));
function activate(context) {
    let tsconfig = vscode_1.default.commands.registerCommand('m4rch.tsconfig', function () {
        let editor = vscode_1.default.window.activeTextEditor;
        if (!editor) {
            vscode_1.default.window.showErrorMessage("editor does not exist");
            return;
        }
        let data = JSON.parse(fs_1.default.readFileSync(__dirname + "/../data/data.json").toString());
        editor.edit((edit) => {
            edit.replace(editor.selection, data.tsconfig.join("\n"));
        });
    });
    context.subscriptions.push(tsconfig);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
