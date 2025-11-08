
ip = "wss://upgraded-eureka-wwx94794pgxh59rw-8765.app.github.dev/"

const ws = new WebSocket(ip);
ws.onopen = () => ws.send("hello");
ws.onmessage = event => alert(event.data);