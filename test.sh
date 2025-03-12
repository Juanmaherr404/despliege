curl -X POST http://localhost:3000/recon -H "Content-Type: application/json" -d '{"domain": "example.com", "APIKEY": "your_api_key"}'

curl -X POST "http://localhost:3000/recon?domain=example.com&APIKEY=your_api_key"

curl -X POST "http://localhost:3000/recon" -H "Content-Type: application/json" -d '{"domain": "example.com && touch output.txt", "APIKEY": "your_api_key"}'
