const AddingMeal = (props) => {

  return <>
    <button
      className="text-4xl absolute top-4 left-4"
      onClick={() => props.setSearchScreenIsActive(true)}
    >
      ←
    </button>
    <h2>{props.food_name}</h2>

    {props.numberOfUnits && <input
      type="number"
      className="border-2 my-6 w-16"
      value={props.numberOfUnits}
      onChange={(e) => props.setNumberOfUnits(e.target.value)}
    />}

    {props.measurement && <select
      name="measurement"
      value={props.measurement}
      onChange={(e) => props.setMeasurement(e.target.value)}
    >
      {props.servings && props.servings.map(s => (
        <option value={s.measurement_description} key={s.measurement_description} >
          {s.measurement_description}
        </option>
      ))}
    </select>}

    <select
      name="ingestion"
      value={props.selectedIngestionType}
      onChange={(e) => props.setSelectedIngestionType(e.target.value)}
    >
      {props.ingestionTypes.map(type => (
        <option value={type} key={type}>
          {type}
        </option>
      ))}
    </select>

    <div className="text-xl mt-6">
      {props.servingCalories * props.numberOfUnits} cal
    </div>

    <button
      className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
      onClick={() => props.handleBtnAddClick()}
    >
      ADD
    </button>
  </>
};

export default AddingMeal;
