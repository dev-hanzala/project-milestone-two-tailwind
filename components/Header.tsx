import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap p-6 pb-4 md:p-8 md:pb-6 bg-gray-800 min-h-fit">
      <div className="flex items-center space-x-2 mb-2">
        <Image
          src="/images/profile-picture.png"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-white">
          Hanzala Waseem
        </span>
      </div>
      <nav className="flex space-x-4 mb-2">
        <Link
          href="/"
          className="relative bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded overflow-hidden"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="relative bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded overflow-hidden"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="relative bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded overflow-hidden"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}


