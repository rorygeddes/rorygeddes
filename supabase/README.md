# Supabase Integration for Rory Ventures

This document explains how to set up and use the Supabase integration for Rory Ventures.

## Setup Instructions

### 1. Database Setup

Run the SQL script in the Supabase SQL Editor:

1. Log in to your Supabase dashboard at [https://app.supabase.io](https://app.supabase.io)
2. Select your project "rorygeddes"
3. Go to the SQL Editor tab
4. Copy and paste the contents of `setup.sql` into the editor
5. Click "Run" to execute the SQL commands

This will create the necessary tables and security policies for the contact form.

### 2. Row Level Security (RLS)

The setup script configures Row Level Security (RLS) as follows:

- Anyone can insert new messages (for the contact form)
- Only authenticated users can read messages (you need to be logged in to see the submissions)

If you want to allow public reading of messages, uncomment the alternative policy in the SQL script.

## Contact Form Usage

The contact form is implemented in the `SupabaseExample` component and is accessible at the `/contact` route. It allows users to:

1. Submit their name, email, and message
2. The data is saved to the Supabase `messages` table
3. The component displays all submitted messages (visible only to authenticated users)

## Supabase Client

The Supabase client is configured in `src/utils/supabase.ts`. It includes:

- Connection setup with your project URL and anon key
- Helper functions for common database operations:
  - `fetchData`: Retrieve data from a table
  - `insertData`: Add new data to a table
  - `updateData`: Modify existing data
  - `deleteData`: Remove data from a table

## Authentication (Optional Expansion)

Your current setup doesn't include user authentication. If you want to add login functionality:

1. Enable auth providers in the Supabase Auth settings
2. Use the `supabase.auth` methods to implement sign-up, sign-in, etc.
3. Create a user context in your React app to track authentication state

## Environment Variables

For production, you should move the Supabase URL and key to environment variables:

1. Create a `.env` file (and add it to `.gitignore`)
2. Add your environment variables:
   ```
   REACT_APP_SUPABASE_URL=https://fjvguqktsexwztguvtqa.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdmd1cWt0c2V4d3p0Z3V2dHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNjYwNDksImV4cCI6MjA1OTY0MjA0OX0.BU9Qqs1AAX3tig4CzHnnSn6hQKYsAa8mZzpb-zNfI3c
   ```
3. Update the `supabase.ts` file to use these variables:
   ```typescript
   const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
   const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;
   ```

## Resources

- [Supabase Documentation](https://supabase.io/docs)
- [Supabase JavaScript Client](https://supabase.io/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.io/docs/guides/auth/row-level-security) 