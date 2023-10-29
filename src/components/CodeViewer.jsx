import React, { useState } from 'react';
import './CodeViewer.css';
import ResponsiveAppBar from './App-bar';

function CodeViewer(props) {
  const [text, setText] = useState(`
    # Python program to check if the input number is odd or even.
    # A number is even if division by 2 gives a remainder of 0.
    # If the remainder is 1, it is an odd number.

    num = int(input("Enter a number: "))
    if (num % 2) == 0:
      print("{0} is Even".format(num))
    else:
      print("{0} is Odd".format(num))
      # Python program to check if the input number is odd or even.
  `);

  const handleTextChange = (event) => {
    setText(event.target.textContent);
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div>
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <div className="codeViewer">
        <body>
          <h4 className="fid">Func_ID</h4>
          <button className="copybtn" onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
            <svg
              className="copybtnimg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </button>
        </body>
        <div
          className="mainCode"
          style={{ backgroundColor: '#E6F1F6', whiteSpace: 'pre-wrap' }}
          contentEditable="true"
          onBlur={handleTextChange}
          suppressContentEditableWarning={true}
        >
          {text}
        </div>
      </div>
      <div className= "FooterBox" >
        esggswg
      </div>
    </div>
  );
}

export default CodeViewer;
