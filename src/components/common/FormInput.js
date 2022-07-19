const FormInput = ({ placeholder, type, name, value, onChange, min }) => {
  return (
    <input
      className="w-full p-2 mb-6 text-imperialPrimer bg-lightBlueBallerina border-b-2 border-none outline-none rounded-md focus:bg-stormPetrel"
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min || null}
    />
  );
};

export default FormInput;
