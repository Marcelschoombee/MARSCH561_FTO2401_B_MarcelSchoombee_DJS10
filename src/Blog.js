import React, { useState, useEffect } from 'react'; // import useState and useEffect from react

// export Blog function
export default function Blog() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    // useEffect hook  to pull in the data for the post
    useEffect(() => {
        async function fetchPosts() {
            try {
                // Await fetch to get the API
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts'); // Error if post can not be fetched
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) { // Catch : Shows the error message
                setError(error.message);
            }
        }
        fetchPosts();
    }, []);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div className="blog-posts">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );


}