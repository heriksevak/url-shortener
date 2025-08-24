export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).send('Please provide a URL to shorten.');
  }

  // Generate a simple, unique ID.
  const shortCode = Math.random().toString(36).substring(2, 8);

  // We'll add the database logic here later. For now, it just returns a mock URL.
  const shortUrl = `${req.headers.host}/${shortCode}`;

  return res.status(200).json({ shortUrl: shortUrl });
}