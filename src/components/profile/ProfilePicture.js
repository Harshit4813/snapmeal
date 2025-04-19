import React, { useState } from 'react';
import { Container, Typography, Button, Paper, Box } from '@material-ui/core';
import axios from 'axios';

const ProfilePicture = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('profilePicture', selectedFile);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/profile/upload-photo', formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data'
        }
      });
      
      alert('Profile picture updated successfully!');
      // You might want to update the user's profile picture in your global state here
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('Failed to upload profile picture');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Profile Picture
        </Typography>
        {previewUrl && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          </Box>
        )}
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-picture-upload"
          type="file"
          onChange={handleFileSelect}
        />
        <label htmlFor="profile-picture-upload">
          <Button
            variant="contained"
            component="span"
            fullWidth
            sx={{ mb: 2 }}
          >
            Select Image
          </Button>
        </label>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Upload Picture
        </Button>
      </Paper>
    </Container>
  );
};

export default ProfilePicture;