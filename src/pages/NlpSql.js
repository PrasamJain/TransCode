import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import './NlpSql.css';


function NlpSql() {

  const location = useLocation();
  const { apiKey } = location.state;

  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMessageSend = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `Convert natural language into SQL queries\n\n ${inputValue}`,
          temperature: 0,
          max_tokens: 1024,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        const enhancedText = response.data.choices[0].text;
        console.log(enhancedText);
        setOutputValue(enhancedText);
      } catch (error) {
        console.log('API call error:', error);
        setOutputValue('Failed to perform sql correction. Please try again.');
      }
    }
  };

  return (
    <div className="Grammar">
      <h2>Natural language to SQL</h2>
      <div className="box-container">
        <div className="input-box">
        <h3>Natural Language</h3>
          <textarea
            placeholder="Type a natural language query..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleMessageSend}>Send</button>
        <div className="output-box">
          <h3>SQL Query</h3>
          <div className="output">{outputValue}</div>
        </div>
      </div>
    </div>
  );
}


export default NlpSql;
