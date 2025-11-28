"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="lg:text-5xl text-xl font-bold mb-4 text-red-600">
        Something went wrong
      </h1>

      <p className="text-lg mb-8 text-gray-600">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}
