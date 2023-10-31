import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Contact Us</Typography>

      <Typography variant="h6" sx={{ marginBottom: 1 }}>Contact Information:</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        123 Main Street, City, Country<br />
        Phone: 123-456-7890<br />
        Email: info@example.com
      </Typography>

      <form onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>Send us a message:</Typography>
        <TextField
          label="Name"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          fullWidth
          required
          type="email"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Subject"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>

      {/* Google Maps Integration */}
      <Box sx={{ height: '400px', marginTop: 4 }}>
        {/* Add your Google Maps integration code here */}
      </Box>
    </Box>
  );
}

export default ContactPage;
