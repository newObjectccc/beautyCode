import * as vscode from '@vscode-use/utils';
import fs from 'node:fs';
import path from 'node:path';
import * as _vscode from 'vscode';

export function activate(context: _vscode.ExtensionContext) {
  vscode.registerCommand('extension.beautyCode', () => {
    const selection = vscode.getSelection();
    const locale = vscode.getLocale();
    const language = vscode.getActiveTextEditorLanguageId();
    const panel = _vscode.window.createWebviewPanel(
      'beautyCode',
      'Beauty Code',
      _vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true
      }
    );
    panel.webview.html = fs.readFileSync(
      path.join(context.extensionPath, 'src', 'webview.html'),
      'utf8'
    );
    // vscode.nextTick(() => {

    panel.webview.onDidReceiveMessage(
      (event: { eventName: string }) => {
        if (event.eventName === 'loaded') {
          panel.webview.postMessage({
            eventName: 'render',
            value: selection,
            locale,
            language
          });
        }
      },
      undefined,
      context.subscriptions
    );
    // });
  });
}
