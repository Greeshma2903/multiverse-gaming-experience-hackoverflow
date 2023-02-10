import './profile.css'

const SelectComponent = (props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label text-sm text-peach">
        <span className="label-text">{props.label}</span>
      </label>
      <select className="profile-select select select-bordered select-sm" name={props.name}>
        <option disabled selected value="">
          Pick one
        </option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
