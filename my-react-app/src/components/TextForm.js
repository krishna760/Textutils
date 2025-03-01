import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [prefix, setPrefix] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [emails, setEmails] = useState([]);
    const [ips, setIps] = useState([]);
    const [urls, setUrls] = useState([]);


    

    // Handle prefix input change
    const handlePrefixChange = (event) => {
      setPrefix(event.target.value);
    };

    // Show input field when AddPrefix button is clicked
    const showPrefixInput = () => {
      setShowInput(true);
    };
    //text = "setText"; Wrong way to update the state
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)//Update text variable to upper case
        
    }
    const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)//Update text variable to upper case
    }

    const AddPrefix = () => {
        let newText = text
          .split(/\s+/)
          .map((word) => prefix + word)
          .join('\n');
        setText(newText);
        setPrefix(''); // Clear the prefix input
        setShowInput(false); // Hide input after applying prefix
      };
      
    const extractEmails = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const extractedEmails = text.match(emailPattern);
        if (extractedEmails) {
          setEmails(extractedEmails);
        } else {
          setEmails(['No emails found']);
        }
      };

      const extractIPs = () => {
        const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
        const extractedIPs = text.match(ipPattern);
        if (extractedIPs) {
          setIps(extractedIPs);
        } else {
          setIps(['No IPs found']);
        }
      };
    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    const extractDomainAndEndpoints = () => {
        // Regex to match domain and endpoint without https/http (captures subdomain.domain/endpoint)
        const urlPattern =
          /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,6})(?:\/[^\s]*)?/g;
        const extractedURLs = [];
        let match;
    
        // Match and store the domains and endpoints
        while ((match = urlPattern.exec(text)) !== null) {
          const domainAndEndpoint = match[1] + (match[2] || '');
          extractedURLs.push(domainAndEndpoint);
        }
    
        if (extractedURLs.length > 0) {
          setUrls(extractedURLs);
        } else {
          setUrls(['No domains or endpoints found']);
        }
      };
    return (
    <>
    
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor:"rgb(131, 187, 41)"}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={showPrefixInput}>AddPrefix</button>
        <button className="btn btn-primary mx-1" onClick={extractDomainAndEndpoints}>Extract URLs</button>

      {showInput && (
        <>
          <input
            type="text"
            value={prefix}
            onChange={handlePrefixChange}
            placeholder="Enter prefix"
          />
          <button className="btn btn-success mx-2" onClick={AddPrefix}>
            Apply Prefix
          </button>
        </>
      )}
        <button className="btn btn-primary mx-2" onClick={extractEmails}>Extract Email</button>
        <button className="btn btn-primary mx-2" onClick={extractIPs}>Extract IP</button>
    </div>
    <div className="container my-3">
        
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        {/* <h2>Preview</h2>
        <p>{text}</p>
        <p></p> */}
        <h3>Extracted Emails:</h3>
        <div style={{ whiteSpace: 'pre-line' }}>
        {emails.map((email, index) => (
        <div key={index}>{email}</div>
        ))}
        </div>
        <h3>Extracted IPs:</h3>
      <div style={{ whiteSpace: 'pre-line' }}>
        {ips.map((ip, index) => (
          <div key={index}>{ip}</div>
        ))}
      </div>
      <h3>Extracted URLs:</h3>
      <div style={{ whiteSpace: 'pre-line' }}>
        {urls.map((url, index) => (
          <div key={index}>{url}</div>
        ))}
      </div>
    </div>
    </>
  )
}
