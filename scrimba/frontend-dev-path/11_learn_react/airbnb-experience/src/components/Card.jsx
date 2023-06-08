import star from '../assets/images/star.svg';
import '../assets/css/Card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`../src/assets/images/${props.img}`} />
        <div className="status">{props.status}</div>
      </div>
      <div className="description">
        <div className="rating">
          <img src={star} alt="star" />
          <span className="stars">{props.rating}</span>
          <span className="ratings">({props.reviewCount})·</span>
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
