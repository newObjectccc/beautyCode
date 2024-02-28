import * as vscode from '@vscode-use/utils';

export function activate() {
  vscode.registerCommand('extension.helloWorld', () => {
    vscode.message.info('Hello, World!');
    console.log('Hello, World!');
  });
}
