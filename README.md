## Getting Started and running on local machine

1. Download extract the zip file on your local machine.
2. Open with any code editor of your choice.
3. Run npm install or yarn install to install all the necessary dependencies.

## Create .env.local file inside the root of the project

Set NEXT_PUBLIC_API_URL= the api given in the test

## Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Framework: Next.js

In as much as I could have built this challenge with vanilla Javascript, I chose Next.js which is a framework on top of React for the obvious reasons:

## Faster page loading

Apps built with Next.js is faster when rendering pages than apps built with Create React App

## File system routing

Apps built with Next.js do not need extra libraries such as React Router or Reach Router. You just have to create file under pages and you get automatic routing. This helps to speed up development time and ship application more faster.

## Automatic code spliting.

Code splitting makes it possible to split application code up into a series of lightweight bundles. Instead of loading all of our JavaScript, our application will only load the bundle needed.

## SEO

Next.js is Search Engine Optimization (SEO) friendly as it uses Server-Side Rendering which makes site accessible to web crawlers.

Note that, the above reasons might not be applicable to this challenge. However, I wanted to mention these to support my decision for using Next.js. It doesn't mean I will build every project with this framework.
