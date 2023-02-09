const ProfileBar = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label
        tabIndex={0}
        className="p-3 bg-purple-300 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-sm"
        htmlFor="my-modal"
      >
        profile
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>logout</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileBar;
