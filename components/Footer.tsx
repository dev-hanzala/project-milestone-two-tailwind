import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/dev-hanzala/" className="text-white hover:underline">
            LinkedIn
          </Link>
          <Link href="mailto:hanzala-waseem@proton.me" className="text-white hover:underline">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
