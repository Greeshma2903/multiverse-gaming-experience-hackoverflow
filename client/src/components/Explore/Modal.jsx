import { Link } from "react-router-dom";

const Modal = (props) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="container bg-white rounded w-[40rem] absolute z-50 top-0 left-0 right-0">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.name}</h3>
          <p className="py-4">{props.about}</p>
          <h4>Let's explore our planet in this Universe!</h4>
          <button className="btn border-2 border-solid border-brick">
            <Link to={props.content.to}>Check this out</Link>
          </button>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn border bg-peach">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
