// File: src/App.js
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './styles.css';

const App = () => {
  const [mode, setMode] = useState('encrypt');
  const [algorithm, setAlgorithm] = useState('AES');
  const [input, setInput] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const algorithms = {
    AES: {
      encrypt: (text, key) => CryptoJS.AES.encrypt(text, key).toString(),
      decrypt: (text, key) => {
        try {
          return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
          return 'Error: Invalid encrypted text or key';
        }
      }
    },
    DES: {
      encrypt: (text, key) => CryptoJS.DES.encrypt(text, key).toString(),
      decrypt: (text, key) => {
        try {
          return CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
          return 'Error: Invalid encrypted text or key';
        }
      }
    },
    TripleDES: {
      encrypt: (text, key) => CryptoJS.TripleDES.encrypt(text, key).toString(),
      decrypt: (text, key) => {
        try {
          return CryptoJS.TripleDES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
          return 'Error: Invalid encrypted text or key';
        }
      }
    },
    Rabbit: {
      encrypt: (text, key) => CryptoJS.Rabbit.encrypt(text, key).toString(),
      decrypt: (text, key) => {
        try {
          return CryptoJS.Rabbit.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
          return 'Error: Invalid encrypted text or key';
        }
      }
    },
    RC4: {
      encrypt: (text, key) => CryptoJS.RC4.encrypt(text, key).toString(),
      decrypt: (text, key) => {
        try {
          return CryptoJS.RC4.decrypt(text, key).toString(CryptoJS.enc.Utf8);
        } catch (e) {
          return 'Error: Invalid encrypted text or key';
        }
      }
    }
  };

  const handleProcess = () => {
    if (!input || !secretKey) {
      setOutput('Please enter both text and secret key');
      return;
    }

    if (mode === 'encrypt') {
      setOutput(algorithms[algorithm].encrypt(input, secretKey));
    } else {
      setOutput(algorithms[algorithm].decrypt(input, secretKey));
    }
  };

  const copyToClipboard = () => {
    if (output && output.indexOf('Error:') !== 0) {
      navigator.clipboard.writeText(output).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="container">
      <h1>Encryption/Decryption Tool</h1>
      
      <div className="mode-select">
        <button 
          className={mode === 'encrypt' ? 'active' : ''} 
          onClick={() => setMode('encrypt')}
        >
          Encrypt
        </button>
        <button 
          className={mode === 'decrypt' ? 'active' : ''} 
          onClick={() => setMode('decrypt')}
        >
          Decrypt
        </button>
      </div>
      
      <div className="form-group">
        <label>Algorithm:</label>
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          {Object.keys(algorithms).map(algo => (
            <option key={algo} value={algo}>{algo}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label>Secret Key:</label>
        <input 
          type="text" 
          value={secretKey} 
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter your secret key"
        />
      </div>
      
      <div className="form-group">
        <label>{mode === 'encrypt' ? 'Text to Encrypt:' : 'Text to Decrypt:'}</label>
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'encrypt' ? 'Enter text to encrypt' : 'Enter text to decrypt'}
          rows="4"
        />
      </div>
      
      <button className="process-btn" onClick={handleProcess}>
        {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
      </button>
      
      <div className="form-group">
        <label>Result:</label>
        <div className="result-container">
          <textarea readOnly value={output} rows="4" />
          <button 
            className="copy-btn" 
            onClick={copyToClipboard} 
            disabled={!output || output.indexOf('Error:') === 0}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
