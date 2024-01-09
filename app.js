const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', async (req, res) => {
    try {
        const formData = req.body;
        await triggerAzurePipeline(formData);
        res.send('Pipeline triggered successfully');
    } catch (error) {
        console.error('Error triggering pipeline:', error);
        res.send('Failed to trigger pipeline');
    }
});

async function triggerAzurePipeline(data) {
    const url = "https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=6.0";
    const personalAccessToken = 'personal_access_token'; // Replace with token
    const authHeaderValue = Buffer.from(':' + personalAccessToken).toString('base64');

    const headers = {
        'Authorization': `Basic ${authHeaderValue}`,
        'Content-Type': 'application/json'
    };

    const payload = {
        "definition": {
            "id": 1 // ID of pipeline definition
        },
        "parameters": JSON.stringify({
            "sqlAuthPassword": data.sqlAuthPassword,
            "oidcTenantId": data.oidcTenantId,
            // Add other form fields as needed
        })
    };

    const response = await axios.post(url, payload, { headers: headers });
    console.log('Pipeline triggered:', response.data);
    // Handle the response
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});