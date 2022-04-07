import React, { useState, setState, state } from "react";
import { storage } from "../../Firebase/firebase.js"
import AddNewImage from '../../components/AddNewImage';

import { CardMedia, Avatar, IconButton, Container, Hidden, Box, Grid, Button, Input, Divider } from '@material-ui/core'
import { Add, AddCircleOutline } from '@material-ui/icons'
import Image from "material-ui-image/lib/components/Image/Image";
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import classes from './ImageUpload.module.css';
import { useMediaQuery } from '@material-ui/core';



const ImageUpload = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  let xsAmount = 3;
  let contentDirs = [];

  const handleUpload = (e) => {
    var reader = new FileReader();

    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i];
      reader.onload = function (e) {
        document.getElementById("imgContainer").innerHTML.Add("<div>test</div>")

      }
      reader.readAsDataURL(file);
    }

    console.log(contentDirs)
  };

  return (
    <div>
      {(matches) ? (
        <Hidden mdDown mdUp>{xsAmount = 3}</Hidden>
      ) : (<Hidden smDown>{xsAmount = 6}</Hidden>)}
      <Grid container >
        <Grid item xs={xsAmount} id="imgContainer">
          {/* 
        <Box boxShadow={3} borderRadius={15}>
          <Image cover id="imgTag"
            src={contentDirs[i]}
          />
        </Box> 
        */}
        </Grid>

        <Grid item xs={xsAmount}>
          <div className="App">
            <Box boxShadow={3} height={"100%"} width={"100%"} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
              <Image cover />
              <IconButton variant="contained" component="label">
                <input type="file" onChange={handleUpload} multiple hidden />
                <AddCircleOutline type="file" fontSize="large" >
                </AddCircleOutline>
              </IconButton>
            </Box>
          </div>
        </Grid>
      </Grid>
      <span></span>
    </div >
  )
}

export default ImageUpload;



// return (
//   <div>
//     {(matches) ? (
//       <Hidden mdDown mdUp>{xsAmount = 3}</Hidden>
//     ) : (<Hidden smDown>{xsAmount = 6}</Hidden>)}
//     <Grid container>
//       {contentDirs.map((url, i) => (
//         <Grid key={i} item xs={xsAmount}>
//           {(contentDirs[0] != null) ? (
//             <Box boxShadow={3} borderRadius={15}>
//               <Image cover id="imgTag"
//                 src={contentDirs[i]}
//               />
//             </Box>
//           ) : (<div></div>)}
//         </Grid>
//       ))}
//       {(contentDirs[0] == null) ? (
//         <Grid item xs={xsAmount}>
//           <div className="App">
//             <Box boxShadow={3} height={"100%"} width={"100%"} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
//               <Image cover />
//               <IconButton variant="contained" component="label">
//                 <input type="file" onChange={handleUpload} multiple hidden />
//                 <AddCircleOutline type="file" fontSize="large" >
//                 </AddCircleOutline>
//               </IconButton>
//             </Box>
//           </div>
//         </Grid>
//       ) : (<span></span>)}
//     </Grid>
//     <span></span>
//   </div >
// )