import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="30df5162-8529-4ebc-bb86-2ccfa6b233d5"
            userName="AsTunO"
            userSecret="juliocesar27"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} /> }
        />
    );
}

export default App; 