import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [apiKeyInput, setApiKey] = useState('');
  const [apiKeyValid, setApiKeyValid] = useState(false);

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      validateApiKey();
    }
  };

  const validateApiKey = () => {
    const valid = apiKeyInput.trim() !== '';
    setApiKeyValid(valid);
  };
  console.log(apiKeyInput)
  return (
    <div className="home">
      <div className="api-key-input">
        <input
          type="text"
          placeholder="Enter your API key..."
          value={apiKeyInput}
          onChange={handleApiKeyChange}
          onKeyDown={handleEnterKey}
        />
        <button onClick={validateApiKey}>Enter</button>
      </div>


      <div className="services-box">
        <h2>Our Services</h2>
        <div className="options">
          {apiKeyValid ? (
            <>
              <Link
                to="/service-1"
                className="option"
                state={{ apiKey: apiKeyInput }}
              >
                services 1
              </Link>

              <Link
                to="/service-2"
                className="option"
                state={{ apiKey: apiKeyInput }}
              >
                services 2
              </Link>
            </>
          ) : (
            <p>Please enter a valid API key to proceed.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
