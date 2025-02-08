```javascript
// pages/index.js
export default function Home() {
  const [showComponent, setShowComponent] = React.useState(true);
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
      {showComponent && <MyComponent/>}
      <button onClick={() => setShowComponent(!showComponent)}>Toggle Component</button>
    </div>
  );
}

// components/MyComponent.js
function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```