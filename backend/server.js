const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health endpoint for Kubernetes and Prometheus monitoring
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'Hello-Backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));