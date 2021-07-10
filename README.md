# Mongodb example

To run you just have to call `docker-compose up`

You should see an error like

```
nodeserver_1  | trying to connect to mongodb://db:27017/database...
nodeserver_1  | /app/node_modules/mongoose/lib/connection.js:846
nodeserver_1  |   const serverSelectionError = new ServerSelectionError();
nodeserver_1  |                                ^
nodeserver_1  |
nodeserver_1  | MongooseServerSelectionError: getaddrinfo EAI_AGAIN db
nodeserver_1  |     at NativeConnection.Connection.openUri (/app/node_modules/mongoose/lib/connection.js:846:32)
```