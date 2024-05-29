### This is source code backend

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

Create file .env into root `my-project` folder then copy and paste texe below to file .env

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=IcrR/baZVMWLOxsW6rw7Fw==,rmDsx098J4L0TO8WMnyQDg==,LhkLDlN8mId/c0NSzS5Mvw==,FNJtDalaoZYyIm7/I4MKoQ==
API_TOKEN_SALT=ftq4zUkMCaLojjEnuA5kaw==
ADMIN_JWT_SECRET=cg768ISBCCatkaRxVwgTOA==
TRANSFER_TOKEN_SALT=lUKSR9aAHtBLdXASSoNo+g==
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=p0PBe4eq+6rVtBvnCwnBbQ==
```

To import data, please run:

```
npm run strapi import -- -f export_20240528182840.tar.gz
```

Then, in terminal `my-project` type `npm run dev`, then, in tab Settings choose API token and copy it and save.

Create file .env into root `fe-app-project` folder then copy and fill YOUR_API_KEY to file .env
NEXT_PUBLIC_API_KEYTOKEN=YOUR_API_KEY
