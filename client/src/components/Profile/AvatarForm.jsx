import SelectComponent from "./SelectComponent";

const AvatarForm = (props) => {
  const randColorGen = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userConfig = {
      bgColor: `${randColorGen()}`,
      earSize: e.target.earSize?.value || props.config.earSize,
      eyeBrowStyle: props.config.eyeBrowStyle,
      eyeStyle: e.target.eyeStyle?.value || props.config.eyeStyle,
      faceColor: "#AC6651",
      glassesStyle: e.target.glassesStyle?.value || props.config.glassesStyle,
      hairColor: `${randColorGen()}`,
      hairStyle: e.target.hairStyle?.value || props.config.hairStyle,
      hatColor: `${randColorGen()}`,
      hatStyle: e.target.hatStyle?.value || props.config.hatStyle,
      mouthStyle: e.target.mouthStyle?.value || props.config.mouthStyle,
      noseStyle: e.target.noseStyle?.value,
      sex: e.target.sex?.value || props.config.mouthStyle,
      shirtColor: `${randColorGen()}`,
      shirtStyle: "polo",
    };
    props.updateConfig(userConfig);
    if (e.target?.shape) props.updateShape(e.target.shape.value);
  };

  return (
    <form
      className="gap-3 flex justify-center items-center flex-col"
      onSubmit={formSubmitHandler}
    >
      <div className="select-elements flex flex-wrap justify-center gap-3 w-1/2">
        <SelectComponent
          name="shape"
          label="Select a shape"
          options={["circle", "rounded", "sqaure"]}
        />
        {/* sex */}
        <SelectComponent
          name="sex"
          label="Select a sex"
          options={["man", "woman"]}
        />
        {/* face color */}

        {/* ear size */}
        <SelectComponent
          name="earSize"
          label="Select a ear size"
          options={["small", "big"]}
        />
        {/* hair style */}
        <SelectComponent
          name="hairStyle"
          label="Select a hair style"
          options={["normal", "thick", "mohawk", "womanLong", "womanShort"]}
        />
        {/* hat style */}
        <SelectComponent
          name="hatStyle"
          label="Select a hat style"
          options={["none", "beanie", "turban"]}
        />
        {/* eye style */}
        <SelectComponent
          name="eyeStyle"
          label="Select a eye style"
          options={["circle", "oval", "smile"]}
        />
        {/* glasses style */}
        <SelectComponent
          name="glassesStyle"
          label="Select a glass style"
          options={["none", "round", "square"]}
        />
        {/* nose style */}
        <SelectComponent
          name="noseStyle"
          label="Select a nose style"
          options={["short", "long", "round"]}
        />
        {/* mouth style */}
        <SelectComponent
          name="mouthStyle"
          label="Select a mouth style"
          options={["laugh", "smile", "peace"]}
        />
      </div>

      <button className="btn btn-sm bg-peach hover:bg-brick" type="submit">
        DONE
      </button>
    </form>
  );
};

export default AvatarForm;
