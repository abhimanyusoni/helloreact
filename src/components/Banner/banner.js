import '../Banner/banner.css';

const Banner = () => {

    return(
        <div className="banner_wrapper">
            <div className="banner_inner">
                <h1 className="banner_title">React</h1>
                <p className="banner_tagline">A JavaScript library for building user interfaces</p>
                <div className="banner_btns">
                    <a href="javascript:void(0)"><button className="btn">Get Started</button></a>
                    <a href="javascript:void(0)">Take a tutorial ></a>
                </div>
            </div>
        </div>
    );

}

export default Banner;