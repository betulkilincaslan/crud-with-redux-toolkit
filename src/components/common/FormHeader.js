const FormHeader = (props) => {
  return (
    <h1 className="text-center font-semibold mb-3 tracking-wide">
      {props.children}
    </h1>
  );
};

export default FormHeader;
