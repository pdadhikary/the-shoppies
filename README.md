# The Shoppies: Shopify Web Development Challenge

A web application that aggregates moviegoer's top 5 picks to win The Shoppies!

## Resources Used

-   [OMDb RESTful API](http://www.omdbapi.com/)
-   Axios
-   React
-   React-Bootstrap

# Planning Stage

### Why React?

I have seen similar projects being done with the React framework and I think it is good choice for a few reasons:

-   This will be a simple one page application and React excels in that paradigm
-   The application's functionality is alot like a cart in an e-commerce website with a bunch of event handlers and state changes. This can be easily implemented with React-Hooks, making the code easy to read and maintainable.
-   I want this application to be nimble and, frameworks like express.js would be an overkill

### Fetching Data

I am going to use the Axios HTTP client instead of ES6 fetch(). I am planning on having a simple loding animation while fetching data. However, in the future if I want to add a progess bar, that will be much easier to do in Axios than with ES6 fetch().

### Styles and CSS

React-Bootstrap because its awesome!
