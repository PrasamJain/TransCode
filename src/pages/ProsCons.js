import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import './ProsCons.css';

const ProsCons = () => {

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

    const handleMessageSend = async() => {
        if (inputValue.trim() !== ''){
            try {
                const response = await openai.chat.completions.create({
                    model: "gpt-4",
                    prompt: `Analyze the pros and cons of a given topic\n\n ${inputValue}`,
                    temperature: 0.8,
                    max_tokens: 1024,
                });

                const enhancedText = response.data.choices[0].text;
                console.log(enhancedText);
                setOutputValue(enhancedText);
                 
            } catch (error) {
                console.log('API call error:', error);
                setOutputValue('Failed to perform grammar correction. Please try again.');
            }
        }
    };


  return (
    <div className="Pros">
      <h2>Code Converter</h2>
      <div className="box-container">
        <div className="input-box">
        <h3>Input:</h3>
          <textarea
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleMessageSend}>Send</button>
        <div className="output-box">
          <h3>Output:</h3>
          <div className="output">{outputValue}</div>
        </div>
      </div>
    </div>
  )
}

export default ProsCons
