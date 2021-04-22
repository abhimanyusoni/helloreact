import './compType.css';


const Comptype = (props) => {
    
    var hook = true;

    return(
        <div className="comptype_wrapper">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <h2 className="comptype_ttl">{props.title}</h2>
                    <p className="comptype_dtl">{props.content}</p>
                    {
                        hook === true ? (
                        <p>{props.contentMore}</p>
                        ) : (
                            null
                        )
                    }
                </div>
                <div className="col-md-8 text-right">
                    <img src={props.imgsrc}></img>
                </div>
            </div>
        </div>    
    )

}

export default Comptype;