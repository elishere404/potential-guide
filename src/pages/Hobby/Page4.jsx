import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page4() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">

      <button
        className="absolute top-4 right-4 text-gray-600 text-xl font-bold hover:text-gray-800"
        onClick={() => navigate(-1)}
      >
        X
      </button>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Playing board games</div>
          <p className="text-gray-700 text-base">
           I like board games, like monopoly, chess and other real life toys too. fyi i had action figures back then
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#boardgames</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#chess</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#catan</span>
        </div>
      </div>
    </div>
  );
}
