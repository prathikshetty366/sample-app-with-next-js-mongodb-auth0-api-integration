This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/prathikshetty366/sample-app-with-next-js-mongodb-auth0-api-integration).

Update the `.env` file with your mongodb connection string.

```js

module.exports = {
    env: {
 MONGO_URI: "Your connection string"
 AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'
    }
}

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
