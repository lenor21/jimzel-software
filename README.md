# Coding Challenge: CRUD Functionality for ManilaPayroll.com Master File


Clone repository to your local:

```bash
$ git clone https://github.com/lenor21/jimzel-software.git
```


# Frontend Set up

Open client folder:

```bash
$ cd client
```

Install dependencies:

```bash
$ npm install
```

Run dev client:

```bash
$ npm run dev
```

Local Url Path:

```bash
http://localhost:3001/master-table/employees
```


# Backend Set up

Open server folder:

```bash
$ cd server
```
Install dependencies:

```bash
$ npm install
```

Run dev client:

```bash
$ npm run dev
```


# Database Set up

Use Mysql Database:

Database connection:

Folder Path:

```bash
/server/dbconfig.js
```

```bash
connectionLimit: 10,
queueLimit: 100,
host: "127.0.0.1",
port: 3306,
user: "root",
password: "",
database: "jimzel_software",
connectTimeout: 10000,
waitForConnections: true,
acquireTimeout: 10000,
debug: false,
```

Import employees.sql

Folder Path:

```bash
/server/db/employees.sql
```





