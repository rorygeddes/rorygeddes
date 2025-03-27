# Personal AI Website

A minimalist, AI-integrated personal website built for Rory Geddes.

## Features

- Clean black and white UI
- AI-powered responses
- No scrolling, all content on a single screen
- Mobile-responsive design
- Predefined prompt buttons for quick navigation

## Technical Stack

- React
- Vite
- Tailwind CSS
- Headless UI

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd personal-ai-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to http://localhost:5173

## Customization

### Updating Your Profile

1. Edit the default AI response in `App.jsx` to include your personal information
2. Replace the placeholder profile photo with your own by updating the image path
3. Modify the predefined prompts list to include topics relevant to you

### AI Integration

This project includes integration with Anthropic's Claude API for AI responses.

### Setup

1. Create a `.env` file in the project root with your Anthropic API key:
```bash
VITE_ANTHROPIC_API_KEY=your-anthropic-api-key
```

2. The application uses Claude 3 Sonnet model for high-quality, natural-sounding responses.

3. You can customize the AI personality by editing the context prompt in `src/services/anthropicService.js`.

### Customizing Responses

To personalize the AI responses, edit the `personalContext` variable in `src/services/anthropicService.js` with your own information:

```javascript
const personalContext = `
  You are an AI assistant representing Rory Geddes on their personal website.
  Only answer questions about Rory based on the context provided.
  Keep responses concise, professional, and in first person as if Rory is speaking directly.
  
  Information about Rory:
  - Background: [Add your background details]
  - Skills: [Add your skills]
  - Experience: [Add your experience]
  - Education: [Add your education details]
  - Projects: [Add your projects]
  - Hobbies: [Add your hobbies]
`;
```

## Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## License

MIT
