import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../Firebase/firebase.js"

const CreatePost = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };

  console.log("images: ", images);
  console.log("urls", urls);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {urls.map((url, i) => (
        <div key={i}>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ))}
      <br />
      {urls.map((url, i) => (
        <img
          key={i}
          style={{ width: "500px" }}
          src={url || "http://via.placeholder.com/300"}
          alt="firebase-image"
        />
      ))}
    </div>
  );
};

export default CreatePost;

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