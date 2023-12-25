// ImageInputComponent.js
import React, { useState } from 'react';

const ImageInputComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // You can perform additional validations or operations here if needed
      setSelectedImage(URL.createObjectURL(file));
      // console.log(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageInputComponent;