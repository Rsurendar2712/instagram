import React, { useState, useEffect } from 'react';

export const GetValues = () => {
  const [data, setData] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData')) || [];
    setData(savedData);
  }, []);

  // Update localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data]);

  const enter = () => {
    const imgFile = document.getElementById('image').files[0];
    const vidFile = document.getElementById('vid').files[0];
    const title = document.getElementById('title').value;
    const typeElement = document.querySelector('input[name="type"]:checked');

    const type = typeElement ? typeElement.value : null;

    const objectval = {
      id: data.length + 1, // Unique ID
      title,
      vid: null,
      img: null,
      isBook: true,
      isLiked: true,
      type,
    };

    const reader = new FileReader();

    if (imgFile) {
      reader.readAsDataURL(imgFile); // Convert image to Base64
      reader.onload = () => {
        objectval.img = reader.result; // Store Base64 in the object

        // Handle video file if present
        if (vidFile) {
          const videoReader = new FileReader();
          videoReader.readAsDataURL(vidFile);
          videoReader.onload = () => {
            objectval.vid = videoReader.result; // Store video Base64
            saveData(objectval);
          };
        } else {
          saveData(objectval); // Save data if no video
        }
      };
    } else {
      saveData(objectval); // Save data if no image
    }
  };

  const saveData = (newObject) => {
    setData((prev) => [...prev, newObject]);
  };

  return (
    <div>
      <input type="file" id="image" placeholder="Image" />
      <input type="text" id="title" placeholder="Title" />
      <input type="file" id="vid" placeholder="Video" />
      <input type="radio" name="type" value="image" id="type-image" /> Image
      <input type="radio" name="type" value="mp4" id="type-mp4" /> MP4
      <button onClick={enter}>Submit</button>

      

      {data.map((value, id) => (
        <div key={id} style={{ margin: '20px 0' }}>
          {value.img && (
            <div>
              <h4>{value.title}</h4>
              
              
              {value.type ==="image" ? <img src={value.vid}style={{ maxWidth: '200px', maxHeight: '200px' }} />:<video src={value.vid} controls style={{ maxWidth: '200px', maxHeight: '200px' }} /> }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
