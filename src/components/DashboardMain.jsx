import './DashboardMain.css'

const DashboardMain = () => {
  return (
    <div className="dashboard__main">
        <div className='dashboard__header'>
           <div className='dashboard__title'></div>
            <button className='dashboard__button'>
                Upgarde Plan
            </button>
        </div>
        <div className="dashboard__body">
            <div className="dashboard__mode">
                <h3>Choose mode</h3>
                <div className="mode__itemcontainer">
                    <button className="mode__button active">
                        Auto</button>
                        <button className="mode__button">
                        Manual</button>
                      
                </div>                
            </div>
            <div className="dashboard__form">
                <div className="dashboard__form__header">
                    <h5>  Describe the Blog post you want to create?</h5>
                    <p>This is the most important step in helping Texta understand 
                        what you want to write about. The better you describe what you want, 
                        the better material Texta will help you create.</p>
                </div>

                <input type="text" className='dashboard__form__input'/>
          

               <button className="dashboard__form__button">
                Generate Article
               </button>
            </div>
        </div>
    </div>
   

  )
}

export default DashboardMain