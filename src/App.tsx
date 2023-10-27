import { useState } from 'react';

import './App.css';
import httpClient from './http';


interface JoinGroup {
  id: string;
  participant: string;
}

function randomUUID() {
  
  return window.crypto.randomUUID()
}

function App() {
  const [name, setName] = useState('');
  const [groupId, setGroupId] = useState('');

  const createGroup = async (participant: string) => {
    console.log()
    await httpClient.post('/groups', {
      id: randomUUID(),
      participants: [participant]
    })

  };

  const joinGroup = async (payload: JoinGroup) => {
    await httpClient.post(`/groups/${payload.id}`, payload)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Group App</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {name.length > 1 ?
          <>
            <button onClick={() => createGroup(name)}>Create Group</button>

            <div>
              <input
                type="text"
                placeholder="Enter group id to join"
                value={groupId}
                onChange={(e) => setGroupId(e.target.value)}
              />
              <button onClick={() => joinGroup({ id: groupId, participant: name })}>Join Group</button>
            </div>
          </>
          : null
        }
      </header>
    </div>
  );
}

export default App;