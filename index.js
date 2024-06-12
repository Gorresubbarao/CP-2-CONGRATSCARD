const element = (
  // Write your code here.

  <div className='congrats-card-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='images-cntainer'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img'
      />
      <h1 className='name-heading'>Kiran V</h1>
      <p className='description'>
        Vishnu Institue of computer educations and Technology Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
