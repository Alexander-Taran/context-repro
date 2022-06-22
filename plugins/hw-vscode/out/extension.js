"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const TreeViewExample_1 = require("./TreeViewExample");
let testContext = false;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    vscode.commands.executeCommand('setContext', 'testContext', true);
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "hw-vscode" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let noConditionCommand = vscode.commands.registerCommand('hw-vscode.helloWorldNoCondition', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World Without Condition from hw-vscode!');
    });
    context.subscriptions.push(noConditionCommand);
    let commandCondition = vscode.commands.registerCommand('hw-vscode.helloWorldCommandCondition', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World With Condition In Command from hw-vscode!');
    });
    context.subscriptions.push(commandCondition);
    let menuCondition = vscode.commands.registerCommand('hw-vscode.helloWorldContextMenuCondition', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World With Condition In Context Menu from hw-vscode!');
    });
    context.subscriptions.push(menuCondition);
    let toggleContext = vscode.commands.registerCommand('hw-vscode.togleContext', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        testContext = !testContext;
        vscode.window.showInformationMessage(`Switched context to ${testContext}`);
    });
    context.subscriptions.push(toggleContext);
    vscode.commands.registerCommand('vscode.test.hello', () => {
        vscode.window.showInformationMessage('Hello!');
    });
    vscode.window.registerTreeDataProvider('testTreeView', new TreeViewExample_1.TestTreeViewDataProvider());
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map