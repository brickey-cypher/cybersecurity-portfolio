import React, { useState } from 'react';

export default function ProjectCard({ title, description, details, link, tags, key }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      {link && (
        <a
          href={link}
          className="inline-block mb-2 text-blue-600 hover:underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      <button className="text-blue-500 hover:underline" onClick={toggleModal}>
        View Details
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={toggleModal}
            >
              ✖
            </button>
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <div className="text-sm whitespace-pre-wrap text-gray-800">{details}</div>
          </div>
        </div>
      )}
    </div>
  );
}
