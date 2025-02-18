const express = require(`express`);
const app = express();
const port = 3000;

app.set(`json spaces`, 2);

app.get('/api/health', (req, res) => {
    res.json({
        status: "ok",
        "server-time": new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api/health`);
});

// taken help from chatgpt