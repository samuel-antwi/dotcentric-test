## Getting Started and running on local machine

1. Download extract the zip file on your local machine.
2. Open with any code editor of your choice.
3. Run 'npm install' or 'yarn install' to install all the necessary dependencies.

### Create .env.local file inside the root of the project

Set NEXT_PUBLIC_API_URL= the api given in the test

## Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## View live [Demo](https://dotcentric-test.netlify.app/) on Netlify

## View live [Demo](https://dotcentric-test.vercel.app/) on Vercel

## Framework: Next.js

In as much as I could have built this challenge with vanilla Javascript, I chose Next.js which is a framework on top of React for the obvious reasons:

#### Faster page loading

Apps built with Next.js is faster when rendering pages than apps built with Create React App

#### File system routing

Apps built with Next.js do not need extra libraries such as React Router or Reach Router. You just have to create file under pages and you get automatic routing. This helps to speed up development time and ship application more faster.

#### Automatic code spliting.

Code splitting makes it possible to split application code up into a series of lightweight bundles. Instead of loading all of our Javascript, our application will only load the bundle needed.

#### SEO

Next.js is Search Engine Optimization (SEO) friendly as it uses Server-Side Rendering which makes site accessible to web crawlers.

#### Static Site Generation(SSG)

Note that, the above reasons might not be applicable to this challenge. However, I wanted to mention these to support my decision for using Next.js. It doesn't mean I will build every project with this framework.

## Component library: Tailwindcss

### I used Tailwindcss to style the application and the reasons are:

1. Easy to customise
2. Faster prototyping any UI
3. Smaller bundle size in production
4. Team collaboration
5. Future Maintenance
6. Ability to build any complex UI without writing too much custom css

You can see with tailwind css, each component has its own inline styling which makes it easy for debugging and making changes in the future. It helps developers to always be on the same page when it come to component styling.

If you are worried about long css classes in the return JSX, there is a solution to that but I didn't need to implement all of them looking at size of this application

These are some options I had:

1. It's possible to extract the classes into react component and make it reuseable
2. I could have also used tailwind '@apply' functionality to clean the return JSX'
3. There are other libraries that can be used with tailwind to make life easy such as twin.macro

You will notise that, when the classes get longer than needed I used a libary called 'clsx' together with prettier to make the html element a bit cleaner.

You might be wondering why would you add extra library to a small web application and the answer is simple. With tailwind CSS, you have the abilty to ship to production only the tailwind classes used in the apllication. This is made possible by purging all unused classes and tailwind css will be smart enough not to ship them to producton. According to the documentation, an average website using tailwind css ships less than 20kb bundle size to production when purged is used. In this application, I purged all unused classes inside tailwind.config.js file.

## 3rd Party Libraries:

#### React-icons

#### xcls

In order not to defeat the purpose of this test, I decided not to rely too much on 3rd party libaries.
When I am building production app, there are other libraries that help to speed up development process such as React-hook-form or Formik to handle the input form as well as form validation. I did not use any of these libraries and decided to implement my own form validation.

## Files and Component structure

One of the strongest architectuarl designs of React is its Component based approach. This makes it very intuitive to build re-usable components, easy to maintain and encourages code readability in React applicaton.
Though this application is a sigle page with only few routing, yet it consists of different and many re-usable component.

You can see that, I built the Testimonials, Heading and ContactForm component with re-usability in mind. These components can easily be used insde other pages of the application if needed.

I took advantage of Next.js static site generation to ensure that, the

## Performace

![Screenshot](google-lighthouse.png)

I built this app with performance in mind. There are four main performance indicators that I consider when building web applications.

1. #### performace
2. #### Accessibility
3. #### SEO
4. #### Best Practice

I use Google Lighthouse which is an open-source, automated tool for improving the quality of web pages. When I build websites, I use it to check the four indicators I mentioned above. By using this tool, you can check and make improvement of a web page. Due to time constraint, I couldn't resolve all the issues reported by Lighthouse. However, I made sure they were in good shape and ready for production.

## Cross Browser Compatibility

Using Lambdatest, I carried out cross browser compatibility on 4 different browsers including Chrome, Firefox, Safari and Edge. I had issue where most of the browsers didn't dispaly svg images as expected so I had to revert using jpg format to fix that issue.

## Git Flow

I implemented CI/CD and setup the application to run on two different environments on netlify. I then connected it to github repository. This esnures any code pushed to the main/master branch will automatically trigger the build command on netlify which then builds the production and preview vesions of the app.

The reason is that whenever I add new feature to the app, I can test it on the develoment environment which I called Preview. When the new feature is tested and approved, I then make a Pull Request which triggers the production build.

## Linting

I setup standard Eslint together with prettier. I find these two combination to be working fine for me when it comes to code formatting and warning whilst developing.

## Challenges

1. The mockup file was designed in sketch and I didn't have any experience with sketch prior to this test. I have worked with Figma before so I applied the basic knowledge. It still took me some time to figure out how to download some assets that I needed to build the appliation.

2. API. The api I was given returned data but the image url threw 404 error message. I am not sure if that was delibrate and it was part of the test. I did a bit of research to see if I could get it working but in the end I found no success. I made the decision to solve the problem in a different way. It would have been difficult if the length of the array was large and I have to mention that, I wouldn't have implemented this solution if I was dealing with a lager array.

## Conclusion

With all that said, I had a lot fun working on this project and in the process, learned a lot and made some vital decisions as a developer.
