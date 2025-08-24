export default async function handler(req, res) {
  const { shortCode } = req.query;

  if (!shortCode) {
    return res.status(404).send('Short URL not found.');
  }

  // For now, this will always redirect to Google, since we haven't set up the database.
  const longUrl = "https://www.google.com";

  return res.redirect(301, longUrl);
}