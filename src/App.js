import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Topic3 from './Topic3';
import RenderingMultipleComponentsOrElement from './RenderingMultipleComponentsOrElement';
import ValidateTheForm from './ValidateTheForm';

function App() {
  return (
    <div className="App">
      {/* <Topic3 isLoggedIn={false} /> */}
      <RenderingMultipleComponentsOrElement />
      {/* <ValidateTheForm /> */}
    </div>
  );
}

export default App;
