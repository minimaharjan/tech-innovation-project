import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {AppProvider } from 'context/Provider';
import reducer, { initialState } from "./../context/reducer";


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <AppProvider initialState={initialState} reducer={reducer}>
<App />
</AppProvider>
);



// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
