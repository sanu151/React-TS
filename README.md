# React-TS

## **React and TypeScript: A Powerful Combination**

React and TypeScript are two of the most popular tools in modern web development. When combined, they offer a robust, type-safe, and efficient way to build complex user interfaces.

**What is React?**

React is a JavaScript library for building user interfaces. It's component-based, which means you break down your UI into reusable components. This makes it easier to manage and maintain your code.

**What is TypeScript?**

TypeScript is a superset of JavaScript that adds optional static typing. This means you can declare the types of variables, function parameters, and return values. This can help catch errors early in the development process and improve code readability.

**Why use React and TypeScript together?**

- **Early Error Detection:** TypeScript's type system can identify potential errors during development, leading to more reliable code.
- **Improved Code Readability:** Type annotations make code more self-documenting, enhancing code understanding and collaboration.
- **Enhanced Code Reliability:** Strong typing ensures that components receive the correct types of props and state, preventing unexpected behavior and crashes.
- **Better IDE Support:** Modern IDEs, like Visual Studio Code, provide advanced features like autocompletion, code navigation, and refactoring, which are significantly improved with TypeScript.

**Basic Example of a React Component in TypeScript:**

```typescript
import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

**Key Concepts in React and TypeScript:**

- **Components:** The building blocks of React applications. They can be functional or class-based.
- **Props:** Data passed from a parent component to a child component.
- **State:** Data that can change within a component.
- **JSX:** A syntax extension for JavaScript that lets you write HTML-like structures directly in your JavaScript code.
- **TypeScript Types:** Basic types (number, string, boolean), complex types (arrays, objects, tuples), and type inference.

**Getting Started:**

1. **Set up a React project:** Use Create React App or a similar tool to quickly set up a new project.
2. **Install TypeScript:** Run `npm install --save-dev typescript @types/react @types/react-dom`.
3. **Configure TypeScript:** Create a `tsconfig.json` file and configure the TypeScript compiler options.
4. **Start writing TypeScript code:** Write your React components in TypeScript, leveraging the benefits of strong typing.

By combining React and TypeScript, you can build robust, scalable, and maintainable web applications.

## **Setting Up a React Project with TypeScript and Vite in VS Code**

### 1. **Install Necessary Tools**

- **Node.js and npm (or yarn):** Ensure you have the latest versions installed.
- **Visual Studio Code:** Download and install the latest version.

### 2. **Create a New Project**

1. **Open your terminal** and navigate to your desired project directory.
2. **Initialize a new project:**
   ```bash
   npx create-vite@latest my-react-app --template react-ts
   ```
   Replace `my-react-app` with your desired project name.

### 3. **Start the Development Server**

1. **Navigate to your project directory:**
   ```bash
   cd my-react-app
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```

### 4. **Open the Project in VS Code**

1. **Open VS Code** and open your project folder.

### 5. **Install Additional Extensions (Optional)**

While not strictly necessary, these extensions can significantly enhance your development experience:

- **TypeScript Vue Plugin:** Provides syntax highlighting, code completion, and other features for TypeScript in Vue files.
- **ESLint:** A linter to help identify and fix potential problems in your code.
- **Prettier - Code formatter:** Automatically formats your code according to a set of style rules.
- **VSCodeVim:** If you're a Vim user, this extension brings Vim keybindings to VS Code.

### 6. **Start Developing**

Now you're ready to start developing your React application using TypeScript. You can create components, manage state, and use all the powerful features of both React and TypeScript.

**Basic React Component in TypeScript:**

```typescript
import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

**Key Points:**

- **TypeScript Configuration:** Vite handles TypeScript configuration for you, so you don't need to manually create a `tsconfig.json` file.
- **Hot Module Replacement:** Vite provides fast HMR, making development efficient.
- **Built-in TypeScript Support:** Vite offers built-in support for TypeScript, including type checking and code completion.
- **Vite's Performance:** Vite is known for its fast build times and efficient development server.

### Built-in prop types in React TypeScript.

**1. Using Basic Data Types Directly**

- You can directly use primitive data types like `string`, `number`, `boolean`, `null`, `undefined` as prop types.

**Example:**

```typescript
import React from "react";

interface MyComponentProps {
  name: string;
  age: number;
  isActive: boolean;
  optionalValue?: string; // Optional string prop
}

const MyComponent: React.FC<MyComponentProps> = ({
  name,
  age,
  isActive,
  optionalValue,
}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Active: {isActive ? "Yes" : "No"}</p>
      {optionalValue && <p>Optional Value: {optionalValue}</p>}
    </div>
  );
};

export default MyComponent;
```

In this example:

- `name` is expected to be a string.
- `age` is expected to be a number.
- `isActive` is expected to be a boolean.
- `optionalValue` is optional and can be a string.

**2. Using Arrays and Objects**

- You can also use arrays and objects as prop types.

**Example:**

```typescript
interface MyComponentProps {
  names: string[]; // Array of strings
  user: {
    id: number;
    username: string;
  };
}

const MyComponent: React.FC<MyComponentProps> = ({ names, user }) => {
  // ...
};
```

**Key Points:**

- TypeScript will infer the types of props if you don't explicitly define them, but it's always a good practice to define them for better code readability and maintainability.
- Using these basic data types directly provides a clear and concise way to define the expected props for your React components.

### User-Defined Prop Types in React TypeScript

In React TypeScript, you can define your own custom prop types using interfaces or type aliases. This allows you to create reusable and type-safe prop definitions for your components.

**1. Using Interfaces**

- Interfaces are a common way to define the structure and types of objects in TypeScript.

**Example:**

```typescript
interface UserProps {
  name: string;
  age: number;
  email: string;
}

const User: React.FC<UserProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};
```

In this example, the `UserProps` interface defines the expected props for the `User` component.

**2. Using Type Aliases**

- Type aliases provide another way to create custom types.

**Example:**

```typescript
type ProductProps = {
  name: string;
  price: number;
  description?: string; // Optional property
};

const Product: React.FC<ProductProps> = ({ name, price, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
    </div>
  );
};
```

**Benefits of User-Defined Prop Types:**

- **Improved Type Safety:** Ensures that components receive the correct types of props, preventing unexpected behavior and runtime errors.
- **Enhanced Code Readability:** Makes the code more self-documenting and easier to understand.
- **Better IDE Support:** Provides better code completion, type checking, and refactoring in your IDE.
- **Code Reusability:** Allows you to reuse the same prop definitions across multiple components.

**Example with Optional and Default Props:**

```typescript
interface ButtonProps {
  label: string;
  onClick?: () => void; // Optional function
  variant?: "primary" | "secondary"; // Optional with default value
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>
      {label}
    </button>
  );
};
```

### Table summarizing built-in and user-defined prop types in React TypeScript:

| Category         | Prop Type                                       | Description                                                                               | Example                                                     |
| ---------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------- | -------- |
| **Built-in**     | `React.HTMLAttributes<HTMLDivElement>`          | Props for HTML `<div>` element. Includes `id`, `className`, `style`, event handlers, etc. | `<div {...props}>...</div>`                                 |
| **Built-in**     | `React.SVGAttributes<SVGCircleElement>`         | Props for SVG `<circle>` element. Includes `cx`, `cy`, `r`, `fill`, `stroke`, etc.        | `<circle {...props} />`                                     |
| **Built-in**     | `React.AnchorHTMLAttributes<HTMLAnchorElement>` | Props for HTML `<a>` (anchor) element. Includes `href`, `target`, `rel`, etc.             | `<a {...props}>...</a>`                                     |
| **Built-in**     | `string`                                        | String values                                                                             | `name: string;`                                             |
| **Built-in**     | `number`                                        | Numeric values                                                                            | `age: number;`                                              |
| **Built-in**     | `boolean`                                       | Boolean values (true/false)                                                               | `isActive: boolean;`                                        |
| **Built-in**     | `array`                                         | Arrays of values (e.g., `string[]`, `number[]`)                                           | `names: string[];`                                          |
| **Built-in**     | `object`                                        | Objects with specific properties                                                          | `user: { id: number; name: string; };`                      |
| **Built-in**     | `any`                                           | Allows any type                                                                           | `value: any;`                                               |
| **User-Defined** | `interface MyProps`                             | Custom interface defining prop shapes                                                     | `interface MyProps { name: string; age: number; };`         |
| **User-Defined** | `type MyProps`                                  | Type alias defining prop shapes                                                           | `type MyProps = { name: string; age: number; };`            |
| **User-Defined** | `enum MyStatus`                                 | Defines a set of named constants                                                          | `enum MyStatus { Pending, Approved, Rejected }`             |
| **User-Defined** | `union`                                         | Combines multiple types                                                                   | `type MyColor = 'red'                                       | 'green' | 'blue';` |
| **User-Defined** | `custom type`                                   | Creates a reusable type for complex objects                                               | `type User = { id: number; name: string; email: string; };` |

- **`enum`:** Defines a set of named constants. For example:

  ```typescript
  enum MyStatus {
    Pending,
    Approved,
    Rejected,
  }

  interface MyItemProps {
    status: MyStatus;
  }
  ```

- **`union`:** Combines multiple types into a single type. For example:

  ```typescript
  type MyColor = "red" | "green" | "blue";

  interface MyBoxProps {
    color: MyColor;
  }
  ```

- **`any`:** Allows any type of value to be assigned to a variable. **Use with caution**, as it can undermine type safety.

- **`custom type`:** Creates a reusable type for complex objects. This improves code readability and maintainability.

  ```typescript
  type User = {
    id: number;
    name: string;
    email: string;
  };

  interface MyUserCardProps {
    user: User;
  }
  ```

**Key Differences:**

- **Built-in:** Provided by React for common HTML/SVG elements and basic data types.
- **User-Defined:** Created by the developer to define custom prop structures for specific components.

**Benefits of Using Prop Types:**

- **Type Safety:** Prevents unexpected behavior and runtime errors.
- **Improved Readability:** Makes code more self-documenting and easier to understand.
- **Better IDE Support:** Enables better code completion, type checking, and refactoring.
- **Maintainability:** Enhances code maintainability and reduces the risk of errors.

### Array of user objects as props.

**Each user object will have two properties: `name` (a string) and `age` (a number).**

First, we define our user type and the props type for our component. Then, we create a functional component that renders the list of users. Here's the complete example:

```tsx
import React from "react";

// Define the User type
type User = {
  name: string;
  age: number;
};

// Define the props type for the component
type UserListProps = {
  users: User[];
};

// Create the UserList component
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage of the UserList component
const App: React.FC = () => {
  const users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
```

### Explanation:

1. **User Type Definition:**
   We define a `User` type with `name` and `age` properties.

2. **Props Type Definition:**
   We define a `UserListProps` type that has a `users` property, which is an array of `User` objects.

3. **UserList Component:**

   - The `UserList` component is a functional component that takes `UserListProps` as its props.
   - It renders a list of users using the `map` function.

4. **App Component:**
   - The `App` component provides an example of how to use the `UserList` component.
   - It creates an array of user objects and passes it to the `UserList` component as a prop.

### Prop types using a union.

Example

1. **Define the Props Type:**
   We will define a type that uses a union of `string` and `number` for the prop.

2. **Create the Component:**
   The component will render differently based on whether it receives a string or a number.

Here's how you can do it:

```tsx
import React from "react";

// Define the Prop type using a union of string and number
type DisplayProps = {
  value: string | number;
};

// Create the Display component
const Display: React.FC<DisplayProps> = ({ value }) => {
  // Check if value is a string or a number
  if (typeof value === "string") {
    return <p>The string value is: {value}</p>;
  } else {
    return <p>The number value is: {value}</p>;
  }
};

// Example usage of the Display component
const App: React.FC = () => {
  return (
    <div>
      {/* Pass a string */}
      <Display value="Hello, World!" />
      {/* Pass a number */}
      <Display value={42} />
    </div>
  );
};

export default App;
```

### Explanation:

1. **DisplayProps Type Definition:**

   - We define a `DisplayProps` type with a `value` property that can be either a `string` or a `number` (`string | number`).

2. **Display Component:**

   - The `Display` component is a functional component that takes `DisplayProps` as its props.
   - Inside the component, we use `typeof` to check if the `value` prop is a string or a number.
   - If `value` is a string, we render it inside a `<p>` tag with a message indicating it's a string.
   - If `value` is a number, we render it inside a `<p>` tag with a message indicating it's a number.

3. **App Component:**
   - The `App` component demonstrates how to use the `Display` component by passing both a string and a number as the `value` prop.

This example shows how to use union types in TypeScript to create flexible and type-safe React components that can handle multiple types of data.

### Typing Children Props

In React, when you're using TypeScript, you often need to type the `children` prop, which represents the nested elements or components that you pass to a component. Typing `children` properly ensures that you get type safety and better developer experience.

Here’s a simple example of how to type the `children` prop in a React component using TypeScript:

### Example

1. **Define the Props Type:**
   We will define a type for the props that includes `children`.

2. **Create the Component:**
   The component will render the `children` prop.

```tsx
import React, { ReactNode } from "react";

// Define the props type including children
type ContainerProps = {
  children: ReactNode;
};

// Create the Container component
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Example usage of the Container component
const App: React.FC = () => {
  return (
    <Container>
      <h1>Hello, World!</h1>
      <p>
        This is a simple example of typing children props in a React component.
      </p>
    </Container>
  );
};

export default App;
```

### Explanation:

1. **ContainerProps Type Definition:**

   - We define a `ContainerProps` type with a `children` property of type `ReactNode`.
   - `ReactNode` is a type provided by React that represents any valid React child (strings, numbers, elements, fragments, portals, etc.).

2. **Container Component:**

   - The `Container` component is a functional component that takes `ContainerProps` as its props.
   - It renders the `children` prop inside a `<div>` with a class of "container".

3. **App Component:**
   - The `App` component demonstrates how to use the `Container` component.
   - It passes `h1` and `p` elements as children to the `Container` component.

### Why Type `children`?

Typing `children` helps ensure that the components you pass as children are valid React nodes, which improves type safety and developer experience. It also makes the code more readable and maintainable.

## **Typing `useState` Hook in React TypeScript**

When using the `useState` hook in React TypeScript, it's essential to provide type information for the state and setter function. This ensures type safety and helps prevent potential runtime errors.

**Basic Usage:**

```typescript
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, `useState(0)` returns an array with two elements:

1. **`count`:** The current state value, initially set to `0`. TypeScript infers its type as `number`.
2. **`setCount`:** A function to update the state. It takes a new value of type `number` as an argument.

**Explicit Typing:**

While TypeScript often infers types correctly, you can explicitly declare them for better readability and maintainability:

```typescript
const [count, setCount] = useState<number>(0);
```

**Using a Tuple Type:**

For more complex state scenarios, you can use a tuple type to explicitly define the types of the state and setter:

```typescript
const [user, setUser] = useState<{ name: string; age: number }>({
  name: "John Doe",
  age: 30,
});
```

**Key Points:**

- **Type Safety:** Explicitly typing the state and setter helps prevent type errors and ensures correct usage.
- **Readability:** Clear type annotations make the code more understandable.
- **IDE Support:** Modern IDEs leverage type information to provide better code completion, refactoring, and error highlighting.

### Typing Style Props

```typescript
import React, { useState } from "react";

interface MyComponentProps {
  style?: React.CSSProperties; // Optional CSS style prop
}

function MyComponent({ style }: MyComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div style={style}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

**Explanation:**

1. **`React.CSSProperties` Interface:**

   - This built-in interface defines the type for CSS styles in React.
   - It allows you to pass a JavaScript object containing CSS properties as the `style` prop to your component.

2. **`MyComponentProps` Interface:**

   - Defines the props for the `MyComponent`.
   - `style?: React.CSSProperties;`: This makes the `style` prop optional. If not provided, the component will render with default styles.

3. **Component Usage:**
   - The `MyComponent` receives the `style` prop.
   - The `style` prop is then applied to the `div` element using the `style` attribute in JSX.

**Example Usage:**

```typescript
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default App;
```

In this example, the `App` component passes a style object to the `MyComponent`, which will then render with the specified background color, padding, and border radius.

**Key Points:**

- `React.CSSProperties` provides a type-safe way to define and pass CSS styles to your React components.
