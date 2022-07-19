const FormContainer = ({ children }) => {
  return (
    <div className="w-full max-w-lg m-auto rounded-tl-xl rounded-br-xl bg-imperialPrimer p-6 min-w-[200px]">
      {children}
    </div>
  );
};

export default FormContainer;
