import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../api';
import BlogPost from '../components/BlogPost'

interface Post {
    id: number;
    title: string;
}

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <List>
            {posts.map((post) => (
                <ListItem button component={Link} to={`/posts/${post.id}`} key={post.id}>
                    <ListItemText primary={post.title}/>
                </ListItem>
            ))}
        </List>
    );
};

export default PostList;
