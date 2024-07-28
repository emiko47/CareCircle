import React, { useRef, useState } from 'react';

import '../styles/resources.css';

import {Heading} from '@chakra-ui/react'


const Resources = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
      e.preventDefault();
      if (query.trim() === '') {
        return;
      }
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${query}&format=json`
      );
      const data = await response.json();
      setResults(data.RelatedTopics);

    };


    return (
      <div className='fullpage-resources'>
           <Heading as="h1" size="2xl" style={{margin: '20px 0px 0px 0px', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', fontSize: '5rem'}}>CareCircle</Heading>
        <div>
          <Heading as="h2" size="l" style={{margin: '20px', color: '#605c5c', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Condition Information</Heading>
          <p>Find helpful resources to assist you in caring for your loved ones.</p>
          <p>Together, we can make a difference in the lives of those we care about.</p>
        </div>

        <div >
        <Heading as="h2" size="l" style={{margin: '20px', color: '#605c5c', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Search for Crucial Information</Heading>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search for resources regarding condition...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: '10px', width: '80%', margin: '20px 0', fontSize: '1rem' }}
          />
           <button type="submit" style={{ padding: '10px 20px', fontSize: '1rem', color: '#fff', backgroundColor: '#70C0F9', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Search
          </button>
        </form>

        <div className='results' style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          {results.filter(results => results && results.FirstURL && results.Text).map((result, index) => (
            <div key={index} style={{ margin: '10px 0' }}>
              <i className='fa-solid fa-link'></i>
              <a href={result.FirstURL} target='_blank' rel='noopener noreferrer'  style={{  }}>
                {result.Text}
              </a>
              </div>
          ))}
        </div>
        <div  style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} >
          <p>Need help?</p>
          <button>Contact Support</button>
        </div>
      </div>
      </div>
    );
  }
  
  export default Resources;
  