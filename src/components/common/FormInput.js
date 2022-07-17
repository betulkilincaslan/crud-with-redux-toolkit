const FormInput = (props) => {
  return (
    <input
      className="w-full p-2 mb-6 text-slate-800 bg-slate-400 border-b-2 border-none outline-none focus:bg-slate-300"
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      min={props.min || null}
    />
  );
};

export default FormInput;
