import Header from './components/Header/header';
import './App.css';
import Banner from './components/Banner/banner';
import LightTitleContent from './components/Light-title-content/light-title-content';
import Data from './components/Light-title-content/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
            <LightTitleContent 
              title={Data[0].title}
              content1={Data[0].content1}
              content2={Data[0].content2}
            />
          </div>
          <div className="col-md-4">
            <LightTitleContent 
              title={Data[1].title}
              content1={Data[1].content1}
              content2={Data[1].content2}
            />
          </div>
          <div className="col-md-4">
            <LightTitleContent 
              title={Data[2].title}
              content1={Data[2].content1}
              content2={Data[2].content2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
