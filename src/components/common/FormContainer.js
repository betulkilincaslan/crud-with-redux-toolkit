const FormContainer = (props) => {
  return (
    <div
      className={`w-full max-w-lg m-auto bg-slate-800 rounded px-6 py-10 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default FormContainer;
