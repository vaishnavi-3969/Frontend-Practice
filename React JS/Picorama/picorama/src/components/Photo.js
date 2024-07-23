import React, { useState } from 'react';

const Photo = ({ photo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(photo.description);

  const handleEdit = () => {
    onEdit(photo.id, description);
    setIsEditing(false);
  };

  return (
    <div className="photo">
      <img src={photo.src} alt={photo.description} className="photo-image" />
      {isEditing ? (
        <>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <p>{photo.description}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => onDelete(photo.id)}>Delete</button>
    </div>
  );
};

export default Photo;