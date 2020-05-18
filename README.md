# MELI-front-challenge
Test práctico frontend para Mercado Libre

### Proyecto
##### El desarrollo cuenta se divide en dos partes:

##### Servidor desarrollado en NodeJS y Express, que se comunica con las APIs de Mercado Libre y expone los siguientes endpoints:
* "/api/items?q=:query"
* "/api/items/:id"
* Utiliza el puerto 5000

##### Cliente desarrollado en React, que consume el servidor backend y permite navegar por:
* "/"
* "items?search=:query"
* "items/:id"

#### Instrucciones de instalación y uso
###### Una vez clonado el proyecto:
```
cd MELI-front-challenge
```

```
cd backend 
npm install
npm test (opcional)
npm start
```

```
cd frontend
npm install
npm test (opcional)
npm start
```

###### Navegue hacia http://localhost:3000
###### Enjoy!
