# pumprofessionals.org
Next.js overview documentation guide: https://docs.google.com/document/d/1ElPavrzWHcNjwqCyV2-TlAyOdshDsEC0lc215Xf_VhM/edit

Our website is built with [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting-started with the database
We use ```Prisma``` for our ORM and use ```PostgreSQL``` for our database (in ```prisma``` folder). We also have a cache incase anything goes wrong found in ```cache/cache.js```. 
Feel free to read the ```Prisma``` documentation.

To update the cache, run ```npm run cache-posts``` to run the script. This is just a backup
option if our database fails but it is used in some utility files as well.

To run the database run 
```npx prisma generate``` and ```npx prisma studio``` to open up the db at ```localhost:5555```. You will need to get the correct ```postgresql``` variable from me. 
Feel free to PM if it is needed. To seed the database, run ```npx prisma db seed --preview-feature```

If the database schema is changed run ```npx prisma migrate dev --name <name-of-migration>```

## Troubleshooting with husky
No pre-commits? Run the following commands 
```
npm uninstall husky

npm install -D husky@4

npm install -D husky
```
