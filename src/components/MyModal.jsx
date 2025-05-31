import React, { useState } from 'react';

export default function MyModal({ title, description, details, ...rest }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
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
            <div
              className="text-sm whitespace-pre-wrap text-gray-800"
              dangerouslySetInnerHTML={{ __html: details }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

