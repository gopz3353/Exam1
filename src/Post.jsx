import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Posts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setItems(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <TableContainer component={Paper}sx={{ maxWidth: 800, margin: '20px auto', borderRadius: 2, boxShadow: 2 }} >
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Id</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Title</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <TableRow key={item.id}>
                            <TableCell sx={{ fontSize: '0.8rem' }}>{item.id}</TableCell>
                            <TableCell sx={{ fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 200 }}>
                                {item.title}
                            </TableCell>
                            <TableCell sx={{ fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 300 }}>
                                {item.body}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Posts;
