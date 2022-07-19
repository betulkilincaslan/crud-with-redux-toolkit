const FormInput = ({ placeholder, type, name, value, onChange, min }) => {
  return (
    <div className="relative">
      <input
        id={name}
        className="block rounded-tl-xl rounded-br-xl my-3 px-2.5 pb-2.5 pt-5 w-full text-sm text-clouds bg-midnightBlue border-0 border-b-2 border-midnightBlue appearance-none  focus:outline-none focus:ring-0 focus:bg-midnightBlue peer-focus:bg-midnightBlue focus:border-belizeHole peer"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min || null}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-clouds dark:text-clouds duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-belizeHole peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FormInput;
