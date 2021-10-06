import React from 'react';
import classes from './feed.module.css';
import { object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import Post from '../../components/Post'
import CreatePost from '../../components/CreatePost';

const posts = [{
    user: {
        name: 'Matteo',
        avatarUrl: './test.jpg'
    },
    postContentUrls: ["./test.jpg"],
    text: "Downtown Night City just after noon, what a site.",
    likes: 43,
    shares: 12,
    comments: [{
        user: "Matteo",
        comment: "What a view!"
    },
    {
        user: "Anthony",
        comment: "Nice!"
    },
    {
        user: "Joe",
        comment: "Amazing!"
    },
    {
        user: "Lucas",
        comment: "Beautiful!"
    },
    ]
},
{
    user: {
        name: 'Anthony',
        avatarUrl: './test2.jpg'
    },
    postContentUrls: ["./test2.jpg"],
    text: "Downtown Night City just after noon, what a site.",
    likes: 52,
    shares: 9,
    comments: [{
        user: "Matteo",
        comment: "What a view!"
    },
    {
        user: "Anthony",
        comment: "Nice!"
    },
    {
        user: "Joe",
        comment: "Amazing!"
    },
    {
        user: "Lucas",
        comment: "Beautiful!"
    },
    ]
},
]

const listItems = posts.map((post) =>
        <Post post={post}>        
        </Post>
);

export default function Feed(props) {
    return (
        // <div>
        //     <ul>{listItems}</ul>
        // </div>
        <CreatePost/>
    );
};

