import Card from "./CardEvent";
import Loading from "./Loading";
function Container({ campaign, cityName, setmyLocation }) {
    console.log(cityName);
    return (
        <div className='Card-outer'>
            <p>{cityName}</p>
            {
                campaign.map((obj) => {
                    if (obj.city === cityName) { return <Card key={obj.id} {...obj} ></Card> }//We have to use key when we are using map function.It is thumb rule
                })
            }
        </div>
    );
}

export default Container;