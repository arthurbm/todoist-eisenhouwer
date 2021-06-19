import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router';

// import { Container } from './styles';

const Home: React.FC = () => {
  const [makeRequest, setMakeRequest] = useState<boolean>();

  const todoistRequest = async () => {
    const res = await axios.post('https://todoist.com/oauth/access_token/client_id=/client_secret=/code=abcdef/redirect_uri=https://example.com', {
      access_token: 'bea2846be11898a3dea3746c6351d37ded182a5e',
      token_type: 'Bearer'
    })
    console.log(res.status);
  };

  useEffect(() => {
    todoistRequest();
  }, [])

  if (makeRequest) {
    return<Redirect exact to={'https://todoist.com/oauth/authorize?client_id=&scope=data:read,data:delete&state='} />
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setMakeRequest(true)} >Make request</button>
    </>
  );
}

export default Home;