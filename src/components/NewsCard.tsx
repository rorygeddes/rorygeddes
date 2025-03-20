'use client';

interface NewsCardProps {
  title: string;
  timeAgo: string;
  readers: number;
}

export default function NewsCard({ title, timeAgo, readers }: NewsCardProps) {
  return (
    <div className="mb-6 hover:bg-gray-50 p-2 rounded transition-colors">
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <div className="text-sm text-gray-500">
        {timeAgo} · {readers.toLocaleString()} readers
      </div>
    </div>
  );
} 