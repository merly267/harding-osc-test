# OSC technical test

## Project overview

Product page using information from https://mock.shop/ at http://localhost:5173/7982905098262, with a fake navigation at the top containing a persistent basket.

## Setup instructions

```shellscript
npm install
```

### Development

Run the dev server:

```shellscript
npm run dev
```

## Technical decisions and reasoning

- I decided to use Remix.run, as that was mentioned in the brief, I've wanted to learn more about Remix for a while, and I thought its nested UI/route setup could be an interesting way to handle the mini basket. In hindsight this maybe wasn't the best approach to a timed exercise! But Remix was enjoyable to work with, even if everything was slower and more exploratory. I used `npx create-remix@latest` to create the app.

## Potential improvements if given more time

- Move the GraphQL query into a separate component, get a selection of products, and pass the params to the product page component (and type the response)
- Unit test to check the query is returning what is expected
- Implement the basket. I like the idea of form actions and coupling routes with components in Remix, but found it hard to map that onto where I could replace traditional React state management. I felt like the way to do it would be to set up a basket route and use form actions to update that from the other product page.. but.. for the mini-basket, I don't want to change the route, and the component is tied to the route, so maybe would need to have it as a separate component and manage the state with React Context or similar anyway..
- Sort the styles out
