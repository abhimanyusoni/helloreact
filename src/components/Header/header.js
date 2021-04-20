import Logo from './images/atom.png';
import translateLogo from './images/translate.svg';
import './header.css';

const Header = () => {


    return(

        <header className="site_header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-2">
                        <div className="logo_wrap d-flex align-items-center">
                            <img src={Logo}></img> React
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="left_nav">
                            <ul className="d-flex align-items-center mb-0">
                                <li><a href="#">Docs</a></li>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="right_content d-flex align-items-center justify-content-end">
                            <input type="text" placeholder="Search"></input>
                            <ul className="d-flex align-items-center mb-0">
                                <li><a href="#">v17.0.2</a></li>
                                <li><a href="#"><img src={translateLogo}></img>Languages</a></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Header;