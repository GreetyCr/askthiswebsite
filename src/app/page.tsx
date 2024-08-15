"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  const [urlPath, setUrlPath] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlPath) {
      router.push(`/${urlPath}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-24 text-center">
      <h1 className="text-3xl font-bold">Welcome to the <br/><span className="text-6xl font-extrabold bg-clip-text text-transparent bg-[length:200%_auto] bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] animate-gradient">AskThisWebsite</span> app</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 w-full max-w-md">
        <label className="text-xl font-semibold">
          Enter a URL to start:
        </label>
        <input
          type="url"
          onChange={(e) => setUrlPath(e.target.value)}
          placeholder="https://example.com"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
        >
          Start Asking
        </button>
      </form>

    </main>
  );
}
