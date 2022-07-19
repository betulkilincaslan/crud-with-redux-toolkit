const FormInput = ({ placeholder, type, name, value, onChange, min }) => {
  return (
    <input
      className="w-full p-2 mb-6 text-slate-800 bg-slate-400 border-b-2 border-none outline-none focus:bg-slate-300"
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
