import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Find the absolute path of the JSON directory
    const jsonDirectory = path.join(process.cwd(), 'json');

    // Read the JSON data file (blog-posts.json)
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'blog-posts.json'), 'utf8');

    // Parse the file contents as JSON
    const jsonData = JSON.parse(fileContents);

    // Return the parsed JSON data
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

