import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>

      <p className="text-lg text-gray-600 mb-8">Page not found.</p>

      <Link
        href="/"
        className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
      >
        Go Home
      </Link>
    </div>
  );
}
