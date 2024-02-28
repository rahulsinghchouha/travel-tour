import { useState } from "react";

function Card({ id, info, image, name, price, removeTour}) {
    //for set read more
    const [readmore, setReadmore] = useState(false);
    //for set description
    const description = readmore ? info :`${info.substring(0, 200)}...`;
    function readMoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">

            <img src={image} className="image" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="tour-description">{description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? `Show Less` : `Read More`}</span>
                </div>

            </div>


           
            <button className="btn-red" onClick={()=> removeTour(id)}>
                Not Interested</button>

        </div>

    );
}
export default Card;