import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import csv from 'csv-parser';

const initializeDatabase = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const csvFilePath = path.join(__dirname, 'encoded_data.csv');

        if (!fs.existsSync(csvFilePath)) {
            console.error('CSV file not found');
            return;
        }

        const results= [];
        fs.createReadStream(csvFilePath, { encoding: 'utf8' })
            .pipe(csv())
            .on('data', (data) => {
                const normalizedData = {};
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        const normalizedKey = key.trim();
                        let value= data[key].trim();

                        if (!isNaN(value) && value !== '') {
                            value = parseFloat(value);
                        }
                        (normalizedData)[normalizedKey] = value;
                    }
                }
                results.push(normalizedData);
            })
            .on('end', () => {
                console.log('CSV data successfully read and normalized');
                // console.log(JSON.stringify(results, null, 2)); // Print the JSON output

                const jsonFilePath = path.join(__dirname, 'data.json');
                fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
                console.log(`JSON data saved to ${jsonFilePath}`);
                console.log('Initialization completed successfully');
            })
            .on('error', (error) => {
                console.error('Error reading CSV file:', error);
            });

    } catch (error) {
        console.error('Initialization failed:', error);
    }
};

initializeDatabase();