import { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState({
        posts: [],
        errorMsg: ""
    });


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts({
                    posts: data,
                    errorMsg: ""
                });
            } catch (error) {
                setPosts({ postst: [], errorMsg: "Failed to fetch posts" });
            }
        };

        fetchPosts();
    }, []);


    return (
        <>
        <h1>List of posts</h1>
        {posts.errorMsg && <p>{posts.errorMsg}</p>}
        <ul>
            {posts.posts.map((post) => (
                <li key={post.id}>
                    <strong>ID:</strong> {post.id}<br/>
                    <strong>Title:</strong> {post.title}<br/>
                    <strong>Body:</strong> {post.body}<br/>
                    </li>
            ))}
        </ul>
        </>
    );
};

export default PostList;