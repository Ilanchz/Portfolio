import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Your website description" />
        {/* You can add more meta tags or links here */}
      </head>
      <body className="font-sans bg-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}
