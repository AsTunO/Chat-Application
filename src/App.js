import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '6875f6d3-9ab5-460e-a15e-8a4a68e773b5';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
		<ChatEngine
			height='100vh'
			userName='Root'
			userSecret='1234'
			projectID='6875f6d3-9ab5-460e-a15e-8a4a68e773b5'
		/>
	);
};

export default App; 
