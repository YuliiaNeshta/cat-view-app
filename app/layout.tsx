import './globals.css';
import { Providers } from '@/providers/Providers';
import type { Metadata } from 'next';
import { Inter, Jost } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pets Paw',
  description: 'Pets Paw! Find your Cat!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
