import { html } from '/web_modules/htm/react.js';
import React from '/web_modules/react.js';

export default function App() {
    const [count, setCount] = React.useState(0);

    return html`<button onClick=${() => setCount(count+1)}>Count: ${count}</button>`;
}