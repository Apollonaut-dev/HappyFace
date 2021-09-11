import React from 'react';
import { Box } from '@material-ui/core'

const posts = [1, 2, 3, 4, 5];

const listItems = posts.map((number, i) =>
    <li key={i}>

        <br></br>
        <Box boxShadow={3} borderRadius={5} className="classes post">
            <div>
                <div className="classes profile">
                    <ul>
                        <li className="classes pfp">PFP </li>
                        <li className="classes pfn">PFN </li>
                    </ul>
                </div>


                <h1 className="classes picture">
                    Picture(s) Here
                </h1>

                <div className="classes lcs"> {/*Like Comment Share*/}
                    <ul>
                        <li>Like </li>
                        <li>Comment </li>
                        <li>Share </li>
                    </ul>
                </div>

                <div className="classes comment">
                    <ul>

                    </ul>
                </div>

            </div>
        </Box>
    </li>
);

export default function Feed(props) {
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
};