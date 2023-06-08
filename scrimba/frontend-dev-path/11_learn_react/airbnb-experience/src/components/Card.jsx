import star from '../assets/images/star.svg';
import '../assets/css/Card.css';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={`../src/assets/images/${props.coverImg}`} />
        {badgeText && <div className="status">{badgeText}</div>}
      </div>
      <div className="description">
        <div className="rating">
          <img src={star} alt="star" />
          <span className="stars">{props.stats.rating}</span>
          <span className="ratings">({props.stats.reviewCount})·</span>
          <span className="country">{props.country}</span>
        </div>
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="pricing">
          <p>
            <span className="bold">${props.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}
