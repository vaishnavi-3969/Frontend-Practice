import React, { useState } from 'react';
import Photo from './Photo';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [newPhoto, setNewPhoto] = useState({ src: '', description: '' });

    const handleUpload = (e) => {
        e.preventDefault();
        const id = Date.now();
        setPhotos([...photos, { ...newPhoto, id }]);
        setNewPhoto({ src: '', description: '' });
    };

    const handleDelete = (id) => {
        setPhotos(photos.filter((photo) => photo.id !== id));
    };

    const handleEdit = (id, description) => {
        setPhotos(
            photos.map((photo) =>
                photo.id === id ? { ...photo, description } : photo
            )
        );
    };

    return (
        <div className="gallery">
            <form onSubmit={handleUpload}>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newPhoto.src}
                    onChange={(e) => setNewPhoto({ ...newPhoto, src: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newPhoto.description}
                    onChange={(e) =>
                        setNewPhoto({ ...newPhoto, description: e.target.value })
                    }
                    required
                />
                <button type="submit">Upload</button>
            </form>
            <div className="photo-grid">
                {photos.map((photo) => (
                    <Photo
                        key={photo.id}
                        photo={photo}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;