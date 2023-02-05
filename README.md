# Next.js MySQL CRUD

This application is an example of the use of Next.js in which we make CRUD requests to the [MySQL](https://dev.mysql.com/doc/) database.

We can create products through a form and then list them on the main page of the web. We can also consult a specific product, modify it and delete it.

To style it we have used the [TailwindCss](https://tailwindcss.com/docs/guides/nextjs) library.

![](https://i.ibb.co/rxVPmQS/nextjs-mysql-crud-list.png)
![](https://i.ibb.co/SQQk20D/nextjs-mysql-crud-form.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First you will need to install the node modules packages via the `npm i` command in the main project path.

Create an `.env` file in the main project directory and place the following environment variables that configure your mysql session:

    MYSQL_HOST=<MySQL hostname>
    MYSQL_PORT=<MySQL port>
    MYSQL_USER=<MySQL user>
    MYSQL_PWD=<MySQL password>

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/products](http://localhost:3000/api/products). This endpoint can be edited in `pages/api/products/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
