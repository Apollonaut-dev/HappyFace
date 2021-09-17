import React from "react";
import { Container, Input, TextField, Button } from "@material-ui/core";

export default function CreatePost() {
    const [postInput, updatePostInput] = React.useState("");
    console.log(postInput);
    return (
        <Container>
            <form>
                <TextField
                    rows={4}
                    value={postInput}
                    onChange={e => updatePostInput(e.target.value)}
                />
                <Button>Submit</Button>

            </form>
        </Container>
    )

}