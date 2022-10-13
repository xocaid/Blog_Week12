const SubscribeForm = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-box">
        <div className="subscribe-box-left">
          <h2>Never miss an update!</h2>
          <p>Subscribe to your favorite blog!</p>
          <div className="subscribe-box-left-box">
            <span>01</span>
            <small>Stay up to date on all your favorite news!</small>
          </div>
          <div className="subscribe-box-left-box">
            <span>02</span>
            <small>Stay up to date on all the blogs!!</small>
          </div>
          <div className="subscribe-box-left-input">
            <input type="email" placeholder="enter email" /><button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default SubscribeForm;