import Produts from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import Provider from './components/context/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Sidebar/>
        <Produts/>
      </Provider>
      
    </div>
  );
}

export default App;
