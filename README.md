El proyecto de login básicamente consta de tres subproyectos :
1- Proyecto de Login :     login-app-reactjs
2- Servidor que procesa la autenticación:      auth-api-nodejs
3- Servidor que procesa las peticiones REST del sistema:    json-server

Para iniciar el sistema habria que hacer lo siguiente: 
1- Se descarga el proyecto login-app-reactjs. Se instalan las dependencias con npm install . Y el proyecto se inicia en el puerto 3000.
2- Iniciar el servidor de autenticacion : auth-api-nodejs. Se inicia el servidor de autenticacion que valida un token y permite que el usuario con las siguientes credendiales
Username : cluemediator
password: 123456
en la pantalla de login . Por defecto de inicia en el puerto 4000.
3- Iniciar el servidor de peticiones REST del sistema : para ello se inicia el proyecto json-server , con npm start y por defecto se inicia el proyecto en el puerto 3005.En el fichero db.json aparece el esquema de bases de datos del sistema.


Una vez se inicia el sistema vamos a la pantalla de login : http://localhost:3000 y sale la pantalla de autenticación . A partir de ahí ingresamos usuario y contraseña :
Username : cluemediator
password: 123456
Y se puede acceder al menú de productos y clientes.


