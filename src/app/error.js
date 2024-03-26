"use client"; // Error components must be Client Components

import Error from "@/components/Error";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center pb-2">
        Something went wrong!
      </h1>
      <Error />
      <h2>{error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <span className="text-xl font-bold text-center pt-2"> Try again </span>
      </button>
    </div>
  );
}
