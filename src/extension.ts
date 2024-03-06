import * as vscode from '@vscode-use/utils';

export function activate() {
  vscode.registerCommand('extension.helloWorld', () => {
    vscode.message.info('Hello, World!');
    console.log('Hello, World!');
  });
  vscode.registerCommand('extension.smartConsole', () => {
    const selectInfo = vscode.getSelection();
    const curLanguageId = vscode.getActiveTextEditorLanguageId();
    console.log(selectInfo, curLanguageId, '111');
  });
}
