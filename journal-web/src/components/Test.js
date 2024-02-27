import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log(
      typeof window !== "undefined"
        ? "Running in browser"
        : "Running in Node.js"
    );
  }, []);

  return <div>Hello World</div>;
};

export default MyComponent;
