import React from 'react';   
import { useState, useEffect } from 'react';
import axios from 'axios';
import sulogo from '../assets/sulogo.png';

const flagURL = 'data:image/png;base64,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';

const containerStyle = {
    width: '100vw',
    overflowX: 'hidden',
};

function Words() {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await axios.get('http://localhost:3000/words');
                setWords(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching words:', err);
                setError(err.response?.data?.error || err.message || 'Failed to fetch words');
            } finally {
                setLoading(false);
            }
        };
    
        fetchWords();
    }, []);
    
    if (loading) {
        return <div className="loading">Loading words...</div>;
    }
    
    if (error) {
        return <div className="error">Error: {error}</div>;
    }
    
    if (words.length === 0) {
        return <div>No words found in the database</div>;
    }

    return (
        <div className="flex flex-col justify-start overflow-x-hidden">
            <div className="flex justify-center items-center mb-4">
                <img 
                    src={ sulogo }
                    alt="Salymbekov University Logo" 
                    className="h-16 sm:h-20 lg:h-24 mr-4"
                />
                <img 
                    src={flagURL}
                    alt="South Korean Flag" 
                    className="h-16 sm:h-20 lg:h-24"
                />
            </div>
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">All Words</h4>
            <div className="overflow-x-auto">
                <table className="words-table min-w-full border-collapse border">
                    <thead>
                        <tr>
                            <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium">ID</th>
                            <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium">English</th>
                            <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium">Korean</th>
                            <th className="border px-2 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium">Part of Speech</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words.map((word) => (
                            <tr key={word.id}>
                                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{word.id}</td>
                                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{word.english_word}</td>
                                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{word.korean_word}</td>
                                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{word.part_of_speech}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Words;