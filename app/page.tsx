import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Pets Paw</h1>
      <Link href="/voting">Voting</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/breeds">Breeds</Link>
    </div>
  );
}
