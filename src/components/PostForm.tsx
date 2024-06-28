import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const PostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content && author) {
            try {
                const response = await api.post('/posts/', { title, content, author });
                navigate(`/posts/${response.data.id}`);
            } catch (error) {
                console.error('Error Creando el Post', error);
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Contenido"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
            />
            <TextField
                label="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Guardar Post
            </Button>
        </Box>
    );
};

export default PostForm;
