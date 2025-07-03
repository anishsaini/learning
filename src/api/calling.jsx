import React, { useEffect, useState } from 'react';

const Calling = () => {
  const [posts, setPosts] = useState([]);
  const[count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, []);

  const Card = ({ title, body, id }) => {
    return (
      <div className="card" style={{ border: "2px solid red", padding: "10px", margin: "10px", boxShadow: "0 6px 4px rgba(0,0,0,0.1)", borderRadius: "5px" }}>
        <h2>{title}</h2>
        <p>{body}</p>
        <li>{id}</li>
      </div>
    );
  };

  return (
    <div className="App">

      <h1>Count: {count}</h1>
      <button onClick={incrementCount} >add</button>

      <h1>Post List</h1>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
      
    </div>
  );
};

export default Calling;
