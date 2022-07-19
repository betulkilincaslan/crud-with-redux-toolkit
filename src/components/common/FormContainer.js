const FormContainer = ({ children }) => {
  return (
    <div className="w-full max-w-lg m-auto bg-slate-800 p-6 min-w-[200px]">
      {children}
    </div>
  );
};

export default FormContainer;
