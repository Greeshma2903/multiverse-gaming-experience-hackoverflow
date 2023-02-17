function Reload(props) {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold">Congratulations!! You Won</h1>
      <button
        className="btn bg-peach hover:bg-brick hover:text-white"
        onClick={props.reset}
      >
        Restart?
      </button>
    </div>
  );
}
export default Reload;
