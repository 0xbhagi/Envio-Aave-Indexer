## Envio Aave Indexer
### Prerequisites
[https://docs.envio.dev/docs/installation#prerequisites](https://docs.envio.dev/docs/installation#prerequisites)
### Steps
1. Clone this repo.
``` 
git clone https://github.com/0xbhagi/Envio-Aave-Indexer.git 
``` 
2. Go to dir.
```
cd Envio-Aave-Indexer/v3/mainnet
```
3. Generate code.
```
envio codegen
```
4. Start the indexer
```
envio dev
```
5. View the indexed results.
```
open http://localhost:8080
```
The hasura admin-secret is testing and the tables can be viewed in the data tab or queried from the playground

*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all Envio indexer features*

*[Aave docs](https://docs.aave.com/developers/getting-started/readme)*