import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

const Code = () => {
  
    const location = useLocation();
    const { apiKey } = location.state;

    console.log(apiKey);

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
                    prompt: `Explain a complicated piece of code\n\n ${inputValue}`,
                    temperature: 0,
                    max_tokens: 1024,
                });

                const enhancedText = response.data.choices[0].text;
                console.log(enhancedText);
                setOutputValue(enhancedText);
                 
            } catch (error) {
                console.log('API call error:', error);
                setOutputValue('Failed to perform code correction. Please try again.');
            }
        }
      }

  return (
    <div className="Pros">
    <h2>Code Explaination</h2>
    <div className="box-container">
      <div className="input-box">
      <h3>Input Code</h3>
        <textarea
          placeholder="Write a code here..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleMessageSend}>Send</button>
      <div className="output-box">
        <h3>Explaination</h3>
        <div className="output">{outputValue}</div>
      </div>
    </div>
  </div>
  )
}

export default Code
