
const ws = new WebSocket("ws://localhost:8765");
ws.onopen = () => ws.send("hello");
ws.onmessage = event => console.log(event.data);