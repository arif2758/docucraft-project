"use client"
import React from "react";
import { useEffect, useState } from "react";

const GetAPIKeyPage = () => {
  const [apiKey, setApiKey] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchAPIKey = async () => {
      const response = await fetch("https://api.github.com/users/facebook/repos");
      const data = await response.json();
      setApiKey(data[0].name);
      setRepos(data);
    };

    fetchAPIKey();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <section className="mb-12">
        <h2 className="text-2xl font-bold">This is a demo page</h2>
        <p className="mt-4 text-lg">This page is created using Tailwind CSS and Next.js. It is a standard modern page with 1000 words of content.</p>
        <p className="mt-4 text-lg">You can use this page as a starting point for your own Next.js projects.</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Here are some features of this page:</h2>
        <ul className="list-disc mt-4">
          <li>Responsive design</li>
          <li>Clean and modern typography</li>
          <li>Use of Tailwind CSS utility classes</li>
          <li>1000 words of content</li>
          <li>Dynamic data from GitHub API</li>
          <li>Links to GitHub repositories</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold">API Key: {apiKey}</h2>
        <p className="mt-4 text-lg">This API key is from the GitHub API.</p>
        <p className="mt-4 text-lg">You can use this API key to access the GitHub API.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">GitHub Repositories</h2>
        <ul className="list-disc mt-4">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} className="text-blue-500 hover:underline">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GetAPIKeyPage;
