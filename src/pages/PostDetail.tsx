import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Button } from '@mui/material';
import formatDateString from '../js/DateFormat';
import api from '../api';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
}

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                setError('Post no encontrado');
            }
        };

        fetchPost();
    }, [id]);

    if (error) {
        return <Typography variant="h6">{error}</Typography>;
    }

    return (
        <div>
            {post ? (
                <>
                    <Card className="w-full max-w-md">
                        <CardContent className="p-0">
                            <div className="p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Typography variant="h4">{post.title}</Typography>
                                        <Typography variant="subtitle1">Autor: {post.author} - {formatDateString(post.created_at)}</Typography>
                                    </div>
                                </div>
                                <hr/>
                                <p className="text-muted-foreground">
                                        {post.content}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </>
            ) : (
                <Typography variant="h6">Cargando...</Typography>
            )}
        </div>
    );
};

export default PostDetail;