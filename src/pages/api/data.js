export default async function handler(req, res) {
    try {
      const response = await fetch('http://localhost:4002/api/v1/account/email/jakirhasan718@gmail.com');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  