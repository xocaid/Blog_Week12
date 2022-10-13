import Popup from 'reactjs-popup';
const Modal = () => (
  <Popup trigger={<button className="button"> Subscribe </button>} modal>
    <div className="subscribe">

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
  </Popup>
);
export default Modal;