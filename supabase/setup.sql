-- Create a table for contact form messages
CREATE TABLE public.messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the contact form)
CREATE POLICY "Allow inserts from anyone" ON public.messages FOR INSERT WITH CHECK (true);

-- Create policy to allow reading only by authenticated users
-- This prevents public access to the messages while allowing you to view them
CREATE POLICY "Allow reading only by authenticated users" ON public.messages FOR SELECT USING (auth.role() = 'authenticated');

-- If you want to allow reading by the public, use this instead:
-- CREATE POLICY "Allow reading by anyone" ON public.messages FOR SELECT USING (true);

-- Comments to explain usage
COMMENT ON TABLE public.messages IS 'Table for storing contact form submissions';
COMMENT ON COLUMN public.messages.id IS 'Unique identifier for each message';
COMMENT ON COLUMN public.messages.name IS 'Name of the person submitting the message';
COMMENT ON COLUMN public.messages.email IS 'Email of the person submitting the message';
COMMENT ON COLUMN public.messages.message IS 'Content of the message';
COMMENT ON COLUMN public.messages.created_at IS 'Timestamp when the message was created'; 