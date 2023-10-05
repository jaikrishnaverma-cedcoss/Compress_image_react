import Compressor from "compressorjs";
import "./App.css";
import { useState } from "react";

function App() {
  const [compressedFile,setCompressedFile]=useState('')
  const handler = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {      
      quality: 0.6,
      height:200,
      width:200,
      resize:true,
      success: (compressedResult) => {
        console.log({compressedResult,orginal:e.target.files[0]})
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(compressedResult)
      },
    });
  };
  return (
    <>
      <input type="file" onChange={handler} />
      <img src={compressedFile?URL.createObjectURL(compressedFile):''}/>
    </>
  );
}

export default App;
