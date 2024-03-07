import * as vscode from '@vscode-use/utils';

export function activate() {
  vscode.registerCommand('extension.beautyCode', () => {
    const selection = vscode.getSelection();
    console.log('selection', selection);
  });
}
