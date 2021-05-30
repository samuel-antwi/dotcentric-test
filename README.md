## Getting Started and running on local machine

1. Download extract the zip file on your local machine.
2. Open with any code editor of your choice.
3. Run npm install or yarn install to install all the necessary dependencies.

### Create .env.local file inside the root of the project

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

#### Faster page loading

Apps built with Next.js is faster when rendering pages than apps built with Create React App

#### File system routing

Apps built with Next.js do not need extra libraries such as React Router or Reach Router. You just have to create file under pages and you get automatic routing. This helps to speed up development time and ship application more faster.

#### Automatic code spliting.

Code splitting makes it possible to split application code up into a series of lightweight bundles. Instead of loading all of our JavaScript, our application will only load the bundle needed.

#### SEO

Next.js is Search Engine Optimization (SEO) friendly as it uses Server-Side Rendering which makes site accessible to web crawlers.

Note that, the above reasons might not be applicable to this challenge. However, I wanted to mention these to support my decision for using Next.js. It doesn't mean I will build every project with this framework.

## Component library: Tailwindcss

### I used Tailwindcss to style the application and the reasons are:

1. Easy to customise
2. Faster protyping any UI
3. Smaller bundle size in production
4. Team collaboration
5. Future Maintenance
6. Ability to build any complex UI without writing too much plain css

You can see with tailwind css, each component has its own inline styling which makes it easy for debugging and making changes in the future. It helps developers to always be on the same page when it come to component styling.

If you are worried about long css classes in the return JSX, there is a solution to that but I didn't need to implement all of them looking at size of this application

These are some options I had:

1. It's possible to extract the classes into react component and make it reuseable
2. I could have also used tailwind '@apply' functionality to clean the return JSX'
3. There are other libraries that can be used with tailwind to make life easy such as twin.macro

### You will notise that, when the classes get longer than needed I used a libary called 'clsx' together wit prettier to make the return JSX a bit cleaner.

You might be wondering why would you add extra library to a small web application and the answer is simple. With tailwind CSS, you have the abilty to ship to production only the tailwind classes used in the apllication. This is made possible by purging all unused classes and tailwind css will be smart enough not to ship them to producton. According to the documentation, an average website using tailwind css ships less than 20kb bundle size to production when purged is used. In this application, I purged all unused classes inside tailwind.config.js file.

## 3rd Party Libraries:

#### React-icons

#### clsx

In order not to defeat the purpose of this test, I decided not to rely too much on 3rd party libaries.
When I am building production app, there are other libraries that help to speed development process such as React-hook-form or Formik to handle the input form.

## Files and Component structure

One of the strongest architectuarl designs of React is its Component based approach. This makes it very intuitive to build reusable components, easy to maintain and encourages code readability in React applicaton.
Though this application is a sigle page with only few routing, yet it consists of different and many re-usable component.
