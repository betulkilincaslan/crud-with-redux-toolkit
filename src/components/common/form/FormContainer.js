const FormContainer = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-lg m-auto rounded-tl-xl rounded-br-xl bg-wetAsphalt p-6 ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
