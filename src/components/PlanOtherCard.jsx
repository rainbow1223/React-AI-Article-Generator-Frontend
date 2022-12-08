import './PlanCard.css';

const PlanOtherCard = ({title, price_origin, price_current, price_annual, word, article, description1, description2, description3, description4, description5, description6}) => {
  return (
<div className='card__container'>
        <div className="card__header">
            <div className="card__title">
                {title}
            </div>
            <div className="card__price__origin">
                {price_origin}
            </div>
            <div className="card__price__current">
                {"$" + price_current}
                <p> / month</p> 
            </div>
            <div className="card__price__annual">
                {price_annual}    
            </div>   
            <div className="card__word">
                {word}
            </div>
            <div className="card__article">
                {article}
            </div>
        </div>
        <div className="card__body">
            <button className="card__button">
                Buy Now
            </button>
            <div className="card__description">
                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>
                <p>{description4}</p>
                <p>{description5}</p>
                <p>{description6}</p>
            </div>
        </div>
    </div>  )
}

export default PlanOtherCard