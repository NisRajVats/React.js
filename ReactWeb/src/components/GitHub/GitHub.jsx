import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData();
  if (!data || typeof data !== 'object' || !data.avatar_url) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 py-10">
        <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
          <span className="text-white text-lg">Unable to load GitHub data. Please try again later.</span>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 py-10">
      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
        <div className="relative mb-6">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 rounded-full border-4 border-orange-500 shadow-lg object-cover mx-auto"
          />
          <span className="absolute bottom-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">@{data.login}</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">{data.name || data.login}</h2>
        <p className="text-orange-400 font-semibold mb-4">{data.bio || 'GitHub User'}</p>
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{data.followers}</span>
            <span className="text-gray-300 text-sm">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{data.following}</span>
            <span className="text-gray-300 text-sm">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{data.public_repos}</span>
            <span className="text-gray-300 text-sm">Repos</span>
          </div>
        </div>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-lg transition"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default GitHub


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/NisRajVats')
  if (!response.ok) {
    return null
  }
  return response.json()
}