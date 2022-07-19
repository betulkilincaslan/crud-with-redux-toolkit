const FormContainer = ({ children }) => {
  return (
    <div className="w-full shadow-xl max-w-lg m-auto rounded-tl-xl rounded-br-xl bg-wetAsphalt p-6 min-w-[200px]">
      {children}
    </div>
  );
};

export default FormContainer;
