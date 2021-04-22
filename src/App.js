import Header from './components/Header/header';
import './App.css';
import Banner from './components/Banner/banner';
import LightTitleContent from './components/Light-title-content/light-title-content';
import Data from './components/Light-title-content/data';
import compData from './components/comp-type/data';
import CompType from './components/comp-type/comptype';
import Footer from './components/Footer/footer';

const createLightContent = (onedata) => {
  return(
    <div className="col-lg-4">
      <LightTitleContent 
        title = {onedata.title}
        content1 = {onedata.content1}
        content2 = {onedata.content2}
      />
    </div>
  )
}

const createCompType = (onecomp) => {
  return(
    <CompType
      title = {onecomp.title}
      content = {onecomp.content}
      imgsrc = {onecomp.imgsrc}
      contentMore = {onecomp.contentMore}
    />
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
     
      <div className="container">
        <div className="lightWeightWrapper">
          <div className="row">
            {Data.map(createLightContent)}
          </div>
        </div>
        {compData.map(createCompType)}
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
