import Popup from 'reactjs-popup';

const Subscribe = () => (
  <Popup trigger={<button className="subscribe-button"> Subscribe </button>} modal>

    {close => (
      <div className="subscribe">
        {/* This is the 'x' sign with close functionality */}
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="subscribe-box">

          <div className="subscribe-box-left">
            <h2>Never miss an update!</h2>
            <p>Subscribe to your favorite blog!</p>

            <div className="subscribe-box-left-input">
              <input type="email" placeholder="enter email" /><button>Subscribe</button>
            </div>

          </div>
          
        </div>
      </div>
    )}
  </Popup>
);
export default Subscribe;