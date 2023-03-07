import { List, ListItem } from '@mui/material';
import React from 'react';

type ListItmProps = {
  children: React.ReactNode;
  title: string;
};

const ListItm = ({ children, title }: ListItmProps) => {
  return (
    <ListItem>
      <p>
        <i>
          <u>{title}</u>:{' '}
        </i>
        {children}
      </p>
    </ListItem>
  );
};

export function JsStack() {
  return (
    <List>
      <ListItm title="Object-oriented programming">
        understand object-oriented programming concepts. Able to implement them in JavaScript using
        classes and prototypes.
      </ListItm>
      <ListItm title="ES6 features">
        arrow functions, template literals, destructuring, and spread/rest operators.
      </ListItm>
      <ListItm title="Asynchronous programming">
        understand asynchronous programming concepts such as callbacks, promises, and async/await
        and able to apply them in real-world scenarios.
      </ListItm>
      <ListItm title="DOM manipulation">
        understand the Document Object Model (DOM) and able to manipulate it efficiently to create
        dynamic web applications.
      </ListItm>
    </List>
  );
}

export function ReactStack() {
  return (
    <List>
      <ListItm title="React concepts">
        understand the core concepts of React such as components, state, props, JSX, and the
        component lifecycle. Understand how to use React to build reusable UI components.
      </ListItm>
      <ListItm title="React libraries and tools">
        using Redux, React Router, and Jest. Understand how to use these tools to build scalable and
        maintainable React applications
      </ListItm>
      <ListItm title="Responsive Design">
        comfortable with responsive design concepts and techniques such as media queries, grid and
        flexbox.
      </ListItm>
    </List>
  );
}

export function TypescriptStack() {
  return (
    <List>
      <ListItm title="Typescript features">
        interfaces, types, generics, type inference, namespaces, enumerations
      </ListItm>
      <ListItm title="TypeScript ecosystem">typization of redux</ListItm>
    </List>
  );
}

export function ReduxtStack() {
  return (
    <List>
      <ListItm title="Redux concepts">
        understanding actions, reducers, middlewares, stores and how they work together to manage
        application state
      </ListItm>
      <ListItm title="Redux Toolkit features">
        using createSlice, createAsyncThunk, RTKQuerry
      </ListItm>
    </List>
  );
}

export function MUIStack() {
  return (
    <List>
      <ListItm title="MUI concepts">
        trying to use the all MUI components with maximum accessibility. Don't put redundant divs
        where it isn't need.
      </ListItm>
      <ListItm title="MUI features">
        understand how to configure custom theme, override styles and access to root styles.
      </ListItm>
    </List>
  );
}

export function HtmlCssStack() {
  return (
    <List>
      <ListItm title="HTML">
        periodically read html tags and trying to use most appropriate tags. Trying to follow
        accessibility semantic. Can write simple SVG.
      </ListItm>
      <ListItm title="CSS">
        understand how to use flexbox and grid. Can build responsive via media and interactive
        design via animation (keyframes). Simple animation for SVG.
      </ListItm>
      <ListItm title="SCSS preprocessor">variables, mixins, functions</ListItm>
    </List>
  );
}

export function GitStack() {
  return (
    <List>
      <ListItm title="Basic Git commands">
        git init, git add, git commit, git status, git push, and git pull.
      </ListItm>
      <ListItm title="Branching and merging">
        understand how to create and switch between Git branches, merge changes, and resolve merge
        conflicts .
      </ListItm>
      <ListItm title="Reverting changes">
        Understand how to revert changes using reset soft/hard.
      </ListItm>
    </List>
  );
}
