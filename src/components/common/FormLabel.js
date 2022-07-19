const FormLabel = ({ children, htmlFor }) => {
  return (
    <label
      className="block mb-2 text-sm text-lightBlueBallerina"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default FormLabel;
