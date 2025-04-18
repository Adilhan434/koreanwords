import React from 'react';
import sulogo from '/sulogo.png';

import {
  food,
  animals,
  bodyparts,
  clothing,
  objects,
  people,
  actions,
  Miscellaneous,
} from './words.js';

const containerStyle = {
  width: '100vw',
  overflowX: 'hidden',
};

const categories = [
  { name: "Food", data: food },
  { name: "Animals", data: animals },
  { name: "Body Parts", data: bodyparts },
  { name: "Clothing", data: clothing },
  { name: "Objects", data: objects },
  { name: "People", data: people },
  { name: "Actions", data: actions },
  { name: "Miscellaneous", data: Miscellaneous },
];

function Words() {
  return (
    <div className="flex flex-col justify-start overflow-x-hidden">
      <div className="flex justify-center items-center mb-4">
        <img
          src={sulogo}
          alt="Salymbekov University Logo"
          className="h-16 sm:h-20 lg:h-24 mr-4"
        />
      </div>
      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        All Words
      </h4>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-8">
          <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 px-4 sm:px-6">
            {category.name}
          </h5>
          <div className="overflow-x-auto">
            <table className="words-table min-w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium">ID</th>
                  <th className="border px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium">Korean</th>
                  <th className="border px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium">Russian</th>
                  <th className="border px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium">English</th>
                </tr>
              </thead>
              <tbody>
                {category.data.map((word, index) => (
                  <tr key={index}>
                    <td className="border px-4 sm:px-6 py-2 text-xs sm:text-sm">{index + 1}</td>
                    <td className="border px-4 sm:px-6 py-2 text-xs sm:text-sm">{word.korean}</td>
                    <td className="border px-4 sm:px-6 py-2 text-xs sm:text-sm">{word.russian}</td>
                    <td className="border px-4 sm:px-6 py-2 text-xs sm:text-sm">{word.english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Words;

