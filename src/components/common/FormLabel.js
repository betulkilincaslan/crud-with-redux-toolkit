const FormLabel = (props) => {
  return (
    <label className="block mb-2 text-sm" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default FormLabel;
