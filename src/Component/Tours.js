import Card from "./Card";
function Tours({tours,removeTour}){
    return(
    <div className="container">
        <div>
            <h2 className="title">Plan With Rahul</h2>
        </div>
        <div className="cards">
        {
            tours.map( (tour) => {
                // clonong
                return <Card{...tour} key={tour.id} removeTour={removeTour}></Card>
                })
            }
        </div>

    </div>
    )
}
export default Tours;