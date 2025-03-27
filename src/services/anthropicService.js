// Anthropic API service
const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || 'YOUR_ANTHROPIC_API_KEY_HERE';

// Use the proxy in production, direct API in development
const isDevelopment = import.meta.env.DEV;
const API_URL = isDevelopment 
  ? 'https://api.anthropic.com/v1/messages'
  : '/proxy.php'; // This will call the PHP proxy in production

// Function to call the Claude API
export async function askClaude(prompt, context = '') {
  try {
    const requestBody = {
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: context ? `${context}\n\nQuestion: ${prompt}` : prompt
        }
      ]
    };

    // Set headers based on environment
    const headers = {
      'Content-Type': 'application/json',
    };
    
    // Only add API key headers in development
    // In production, the PHP proxy will add them
    if (isDevelopment) {
      headers['x-api-key'] = ANTHROPIC_API_KEY;
      headers['anthropic-version'] = '2023-06-01';
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
}

// For personal information queries
export async function getPersonalInfo(topic) {
  // Define a context with information about Rory
  const personalContext = `
    You are an AI assistant representing Rory Geddes on their personal website.
    Only answer questions about Rory based on the context provided.
    Keep responses concise, professional, and in first person as if Rory is speaking directly.
    If you don't know something specific about Rory, provide a general response that would be reasonable for a personal website.
    
    Information about Rory:
    - Background: [Your background details would go here]
    - Skills: [Your skills would go here]
    - Experience: [Your experience would go here]
    - Education: [Your education details would go here]
    - Projects: [Your projects would go here]
    - Hobbies: [Your hobbies would go here]
  `;

  return askClaude(topic, personalContext);
} 