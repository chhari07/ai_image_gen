import React, { useState } from 'react';
import { content } from '../constant/index.js'; // Importing the content array

const CreatePost = () => {
    const [prompt, setPrompt] = useState(''); // User input for the prompt
    const [image, setImage] = useState(null); // Holds the generated image URL
    const [loading, setLoading] = useState(false); // Indicates if the request is in progress
    const [error, setError] = useState(null); // Holds any error messages

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!prompt.trim()) {
            alert('Please enter a valid prompt'); // Prompt validation
            return;
        }

        setLoading(true); // Show loading indicator
        setError(null); // Clear previous errors
        setImage(null); // Clear the previous image

        // Simulating image generation based on the prompt
        const matchedContent = content.find(item =>
            item.title.toLowerCase().includes(prompt.toLowerCase()) ||
            item.text.toLowerCase().includes(prompt.toLowerCase())
        );

        setTimeout(() => {
            if (matchedContent) {
                setImage(matchedContent.image); // Set the matched image URL
            } else {
                setError('No matching content found.'); // Handle no match
            }
            setLoading(false); // Hide loading indicator
        }, 2000);
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* Image Generation Form */}
            <div style={{ marginBottom: '40px' }}>
                <h2>Generate Image Based on Text</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input
                        type="text"
                        placeholder="Enter prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)} // Update prompt on input change
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {loading ? 'Generating...' : 'Generate Image'}
                    </button>
                </form>

                {loading && <p>Loading...</p>} {/* Show loading text */}

                {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>} {/* Show error if any */}

                {image && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>Generated Image Title: {prompt}</h3> {/* Display prompt as the title */}
                        <img
                            src={image}
                            alt={prompt}
                            style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}
                        />
                        <p>{prompt}</p> {/* Show the prompt as the alternate text */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePost;
