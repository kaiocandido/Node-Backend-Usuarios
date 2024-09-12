const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
import cors from 'cors'

const app = express();
app.use(cors())
const PORT = 3000;
const CONFIG_FILE_PATH = '/etc/quagga/bgpd.conf'; // Caminho para o arquivo de configuração do Quagga

app.use(bodyParser.json());

app.post('/configure_bgp', (req, res) => {
    const { neighbor, weight, remote_as, description } = req.body;

    if (!neighbor || !weight || !remote_as || !description) {
        return res.status(400).json({ error: 'Missing data fields' });
    }

    const bgpConfig = `
router bgp ${remote_as}
 bgp router-id ${neighbor}
 neighbor ${neighbor} remote-as ${remote_as}
 neighbor ${neighbor} route-map RM-${neighbor} in
 neighbor ${neighbor} description ${description}
`;

    // Adiciona a configuração ao arquivo
    fs.appendFile(CONFIG_FILE_PATH, bgpConfig, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ error: 'Failed to write configuration' });
        }

        res.status(200).json({ message: 'BGP configuration added successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});