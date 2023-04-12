export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Here, you can add your own logic to handle form submissions.
  // You can store the form data in a database, send an email, etc.

  res.status(200).json({ message: 'Message received' });
}
