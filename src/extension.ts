import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "fbvscodeext" is now active!');

	context.subscriptions.push(
        vscode.commands.registerCommand('extension.helloWorld', () => {
		    vscode.window.showInformationMessage('Information World!');
	}));
    
}

export function deactivate() {}
