// import './Card.css';
function Card({ id,
    organization,
    title,
    city,
    location,
    image, link }) {
    return (
        <div className='dd'>
           <div className="card">
            <img src={image} alt="error" className="image" />
                <div>
                    <a href={link}>{location}</a>
                    <p className='organization'>Organization:- {organization}</p>
                    <p className="city">City:- {city}</p>
                    <p className="title">Title:- {title}</p>
                </div>
            </div> 
        </div>
        
    )
}

export default Card;

