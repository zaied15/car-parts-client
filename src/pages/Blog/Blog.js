import React from "react";

const Blog = () => {
  return (
    <div className="text-left bg-base-100 px-10 py-20">
      <div>
        <h2 className="text-xl text-primary font-bold">
          Q1. How will you improve the performance of a React Application?
        </h2>
        <p>
          We can optimize or improve the performance of a react application in
          many ways. Some of these are mentioned in below. <br />
          a) Using Immutable Data Structures <br />
          b) Keeping component state local where necessary <br />
          c) Memoizing React components to prevent unnecessary re-renders <br />
          d) Using Production Mode Flag in Webpack <br />
          e) Dependency optimization
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary font-bold">
          Q2. What are the different ways to manage a state in a React
          application?
        </h2>
        <p>
          There are four kinds of react state to manage it. These are... <br />
          a) Local state (Local state is data we manage in one or another
          component.) <br />
          b) Global state (Global state is data we manage across multiple
          components.) <br />
          c) Server state (Data that comes from an external server that must be
          integrated with our UI state.) <br />
          d) URL state (Data that exists on our URLs, including the pathname and
          query parameters.) <br />
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary font-bold">
          Q3. How does prototypical inheritance work?
        </h2>
        <p>
          We know that JavaScript is a prototype-based, Object Oriented
          programming language. After releasing ES6 JavaScript allowed for
          prototypal inheritance means objects and methods can be shared,
          extended, and copied. Sharing amid objects makes for easy inheritance
          of structure, behavior, and state. Javascript is the most popular
          prototype-capable language and its potentiality are relatively unique.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary font-bold">
          Q4. How will you implement a search to find products by name from an
          array of object?
        </h2>
        <p>
          {`
            const arr = [ 
              { id: 1, title: 'Apple', description: 'Description of post 1' }, 
              { id: 2, title: 'Orange', description: 'Description of post 2' }, 
              { id: 3, title: 'Guava', description: 'Description of post 3' }, 
              { id: 4, title: 'Banana', description: 'Description of post 4' }
            ];
            `}
          <br />
          {`const searchText = 'Guava'`}
          <br />
          {`const searchResult = arr.find(product => post.title.toLowerCase() === searchText.toLowerCase()
          });
          `}
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl text-primary font-bold">
          Q5. What is a unit test? Why should write unit tests?
        </h2>
        <p>
          JavaScript Unit Testing or A unit test is an automated test of a unit
          of source code. A unit test asserts if the unit's behavior matches
          expectations. A unit is usually a line of code, function, or class.
          <br />
          It is then combined with HTML as an inline event handler and executed
          in the browser to test if all functionalities are working as desired.
          These unit tests are then organized in the test suite.
        </p>
      </div>
    </div>
  );
};

export default Blog;
