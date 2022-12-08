import './PlanScreen.css';

const PlanScreen = () => {
  return (
    <div className='plan__container'>
      <div className="plan__header">
        <div className="plan__title">
        Plans & Pricing
        </div>
        <label className="plan__label" for="Notifications"><span className="plan__inner"></span><span className="plan__switch"></span></label>
      </div>
    </div>
  )
}

export default PlanScreen