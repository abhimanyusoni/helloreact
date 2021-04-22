import '../Footer/footer.css';
import footerimg from './images/fb.png';

const footer = () => {

    return(
        <footer className="site_footer">
            <div className="footer_top">
                <div className="banner_btns">
                    <a href="javascript:void(0)"><button className="btn">Get Started</button></a>
                    <a href="javascript:void(0)">Take a tutorial ></a>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footerleft">
                                <img src={footerimg}></img>
                                <p className="copyrights">Copyright © 2021 Abhimanyu Soni.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footeright">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="menu_ind">
                                            <h4 className="menu_ttl">Docs</h4>
                                            <ul>
                                                <li><a href="javascript:void(0)">Installation</a></li>
                                                <li><a href="javascript:void(0)">Main Concepts</a></li>
                                                <li><a href="javascript:void(0)">Advanced Guides</a></li>
                                                <li><a href="javascript:void(0)">API Reference</a></li>
                                                <li><a href="javascript:void(0)">Hooks</a></li>
                                                <li><a href="javascript:void(0)">Testing</a></li>
                                                <li><a href="javascript:void(0)">Concurrent Mode (Experimental)</a></li>
                                                <li><a href="javascript:void(0)">Contributing</a></li>
                                                <li><a href="javascript:void(0)">FAQ</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="menu_ind">
                                            <h4 className="menu_ttl">Channals</h4>
                                            <ul>
                                                <li><a href="javascript:void(0)">Github</a></li>
                                                <li><a href="javascript:void(0)">Stack Overflow</a></li>
                                                <li><a href="javascript:void(0)">Discussion Forums</a></li>
                                                <li><a href="javascript:void(0)">Reactiflux Chat</a></li>
                                                <li><a href="javascript:void(0)">DEV Community</a></li>
                                                <li><a href="javascript:void(0)">Facebook</a></li>
                                                <li><a href="javascript:void(0)">Twitter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="menu_ind mb-0">
                                            <h4 className="menu_ttl">Community</h4>
                                            <ul>
                                                <li><a href="javascript:void(0)">Code of Conduct</a></li>
                                                <li><a href="javascript:void(0)">Community Resources</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="menu_ind mb-0">
                                            <h4 className="menu_ttl">More</h4>
                                            <ul>
                                                <li><a href="javascript:void(0)">Tutorial</a></li>
                                                <li><a href="javascript:void(0)">Blog</a></li>
                                                <li><a href="javascript:void(0)">Acknowledgements</a></li>
                                                <li><a href="javascript:void(0)">React Native</a></li>
                                                <li><a href="javascript:void(0)">Privacy</a></li>
                                                <li><a href="javascript:void(0)">Terms</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default footer;