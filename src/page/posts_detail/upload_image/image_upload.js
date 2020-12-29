import React, { useState } from "react";
import "./image_upload.scss";

export default function MultipleImageUploadComponent() {
  const [fileUrl, setFileUrl] = useState([]);
  function uploadMultipleFiles(e) {
    const fileList = e.target.files;
    let urls = [];
    for (let i = 0; i < fileList.length; i++) {
      urls.push(URL.createObjectURL(fileList[i]));
    }
    setFileUrl(urls);
  }

  function removeImage(url){
      console.log("clicked");
    
    const newFileUrl = fileUrl.filter((item) => {
        return (item != url);
    });
    
    setFileUrl(newFileUrl);
  }

  return (
    <div className="upload_image">
      <div className="form-group">
        <input
          type="file"
          className="form-control"
          onChange={uploadMultipleFiles}
          multiple
        />
      </div>
      <div className="form-group multi-preview">
        {fileUrl.map((url, index) => (
          <div className="image_container">
            <img key={index} src={url} alt="..." className="img_comment" />
            <i
              className="far fa-times-circle remove__image"
              onClick={()=>removeImage(url)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
}
