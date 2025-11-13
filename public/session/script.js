//c - new user connected


ip = "wss://upgraded-eureka-wwx94794pgxh59rw-8765.app.github.dev/"
username = "user1"

const ws = new WebSocket(ip);
ws.onopen = () => ws.send("c:"+ username);
ws.onmessage = event => alert(event.data);