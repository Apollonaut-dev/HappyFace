import React, { useState, Item } from "react";
import { render } from "react-dom";
import { storage } from "../../Firebase/firebase.js"
import { Typography, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Icon, Button, object, ObjectsRow, item, Container, Box, ListItem, List, ListItemText, Grid } from '@material-ui/core'
import { shadows, FormRow } from '@material-ui/system';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { CardMedia, Avatar, Paper, CardHeader } from '@material-ui/core'
import { Comment, FormatBold, ImageRounded, Share, ThumbUp, AddCircleOutline } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share';
import { ThemeProvider } from '@material-ui/core/styles';
import { Divider, Switch, FormControlLabel, FormGroup } from '@material-ui/core';


const contentDirs = [1, 2, 3];
const postContent = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

const CreatePost = () => {
  return (
    <div></div>
  );
};

export default CreatePost;

// const CreatePost = () => {
//   return (
//     <div>
//       <Container style={{ maxWidth: "60rem" }}>
//         <Container style={{ maxWidth: "45rem" }}>
//           <Box boxShadow={3} borderRadius={5} m={2} padding={3} alignItems="center">
//             <span style={{ fontSize: "20px", color: "black" }}>
//               Share your story
//             </span>
//             <br />
//             <br />
//             <div container style={{ display: "flex" }}>
//               <TextField variant="outlined" label="Tell the world..." multiline fullWidth minRows="2" />
//             </div>
//             <br />
//             <Divider></Divider>
//             <br />
//             <input type="file" multiple onChange={handleChange} />
//             <button onClick={handleUpload}>Upload</button>
//             <br />
//             <br />
//             <Grid container spacing={20}>
//               <br />
//               {urls.map((url, i) => (
//                 <Grid key={i} item xs={4}>
//                     <img
//                       style={{
//                         width: "100%", borderRadius: "10px", padding: "5px"
//                       }}
//                       src={url || "http://via.placeholder.com/300"}
//                       alt="firebase-image"
//                     />
//                 </Grid>
//               ))}
//             </Grid>

//             <br />
//             <Divider></Divider>
//             <br />
//             <TextField variant="outlined" label="Tags" size="small" margin="none" multiline fullWidth />
//             <br />
//           </Box>
//         </Container>
//       </Container>
//     </div>
//   );
// };




  // const [images, setImages] = useState([]);
  // const [urls, setUrls] = useState([]);
  // const [progress, setProgress] = useState(0);

  // const handleChange = (e) => {
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     const newImage = e.target.files[i];
  //     newImage["id"] = Math.random();
  //     setImages((prevState) => [...prevState, newImage]);
  //   }
  // };

  // const handleUpload = () => {
  //   const promises = [];
  //   images.map((image) => {
  //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //     promises.push(uploadTask);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         setProgress(progress);
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       async () => {
  //         await storage
  //           .ref("images")
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then((urls) => {
  //             setUrls((prevState) => [...prevState, urls]);
  //           });
  //       }
  //     );
  //   });

  //   Promise.all(promises)
  //     .then(() => alert("All images uploaded"))
  //     .catch((err) => console.log(err));
  // };

  // console.log("images: ", images);
  // console.log("urls", urls);

















// import React, { useState, setState, state } from "react";
// import { storage } from "../../Firebase/firebase.js"

// import { CardMedia, Card, Avatar, IconButton, Container, Box, Grid } from '@material-ui/core'
// import { Comment, Share, ThumbUp, Add } from '@material-ui/icons'

// import ImageUpload from '../../components/ImageUpload'

// const CreatePost = () => {
//   const [image, setImage] = useState(null);

//   const handleChange = e => {
//     for (let i = 0; i < e.target.files; i++)
//       if (e.target.files[i]) {
//         setImage(e.target.files[i]);
//       }
//       handleUpload();
//   }

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => { },
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             console.log(url);
//           })
//       }
//     )
//   }

//   return (
//     <Box boxShadow={3} borderRadius={5} m={2} align="center" alignSelf="center" sx={{ height: 600 }}>
//       <br/>
//       <Box boxShadow={3} borderRadius={5} m={2} sx={{ width: 250, height: 267 }}>
//         <Card>
//           Add Pics n' Clips
//         </Card>
//         <br/><br/><br/><br/><br/>
//         <IconButton variant="contained" component="label" style={{ transform: "scale(5)" }}>
//           <input type="file" multiple onChange={handleChange} hidden></input>
//           <Add />
//         </IconButton>
//       </Box>
//       <span/>
//     </Box>
//   )
// }

// export default CreatePost;


// const [image, setImage] = useState(null);

//   const handleChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//     console.log( "console.log output: " + e);
//   }

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => { },
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             console.log(url);
//           })
//       }
//     )
//   }





 // let files = useState(null);

  // const handleChange = e => {
  //   files = e.target.files;
  //   const file = Array.from(files);
  //   this.setState({ file });
  // }

  // const handleUpload = e => {
  //   const storageRef = storage.ref();
  //   files.forEach((file) => {
  //     storage
  //       .ref("images")
  //       .child(`images/${file.name}`)
  //       .putFile(file).then((snapshot) => {
  //       })
  //   });
  // }