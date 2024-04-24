import locationPin from '../assets/Fill 219.svg'


export default function Card(props) {
  return (
    <div className="group">
      <img src={props.imageUrl} alt={`${props.title} image`} className='group-cover' />
      <div className="group-info">
        <div className='group-header'>
          <img src={locationPin} alt="location pin icon" className='group-location-icon' />
          <span className='group-location'>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className='group-title'>{props.title}</h2>
        <p className='group-date'>{props.startDate} - {props.endDate}</p>
        <p className='group-description'>{props.description}</p>
      </div>
    </div>
  )
}

/*
{
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
  }
*/
