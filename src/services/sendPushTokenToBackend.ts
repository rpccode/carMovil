async function sendPushTokenToBackend(token: any) {
    try {
      const response = await fetch('https://tu-backend.com/api/save-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log('Token saved successfully:', data);
    } catch (error) {
      console.error('Error saving token to backend:', error);
    }
  }
  