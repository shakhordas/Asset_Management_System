
async function fetchCount() {
    try {
      const response = await fetch('http://localhost:2233/counts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const registerCount = document.getElementById('registerCount');
      registerCount.textContent = data.count;
    } catch (error) {
      console.error('Error fetching count:', error);
      document.getElementById('registerCount').textContent = 'Error';
    }
  }