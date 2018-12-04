import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { remote, ipcRenderer } from "electron";
update()
function update() {
    ReactDOM.render(
        <div></div>,
        document.getElementById('root')
    )
}