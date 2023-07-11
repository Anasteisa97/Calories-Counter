const AddingMeal = ({ serving, food_name, ...props }) => {
  if (serving) {
    return (
      <>
        <button
          className="text-4xl absolute top-4 left-4"
          onClick={() => props.backToSearch()}
        >
          ←
        </button>
        <h2>{food_name}</h2>

        <input
          type="number"
          className="border-2 my-6 w-16"
          value={serving.totalNumberOfUnits}
          min={0}
          onChange={(e) => props.setNumberOfUnits(e.target.value)}
        />

        <select
          name="measurement"
          value={serving.measurement_description}
          onChange={(e) => {
            props.setMeasurement(e.target.value);
            props.handleChangeServing(e.target.options.selectedIndex);
          }}
        >
          {props.servings &&
            props.servings.map((s) => (
              <option
                value={s.measurement_description}
                key={s.measurement_description}
              >
                {s.measurement_description}
              </option>
            ))}
        </select>

        <select
          name="ingestion"
          value={props.selectedIngestionType}
          onChange={(e) => props.setSelectedIngestionType(e.target.value)}
        >
          {props.ingestionTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="text-xl mt-6">
          {(serving.calories * serving.totalNumberOfUnits) / serving.number_of_units} cal
        </div>

        <button
          className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
          onClick={() => props.handleBtnAddClick()}
        >
          ADD
        </button>
      </>
    );
  }
};

export default AddingMeal;
