import { useEffect } from "react";

const Pagination = ({
  setCurrentPage,
  pageNumbers,
  currentButton,
  setCurrentButton,
}) => {
  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  const clickPrevHandler = (e) => {
    e.preventDefault();
    setCurrentButton((prev) => (prev === 1 ? prev : prev - 1));
  };

  const clickNextHandler = (e) => {
    e.preventDefault();
    setCurrentButton((prev) => (prev === pageNumbers.length ? prev : prev + 1));
  };

  const clickPaginationHandler = (e, pageNumber) => {
    e.preventDefault();
    setCurrentButton(pageNumber);
  };

  return (
    <nav className="flex items-center sm:inline-flex sm:-space-x-px sm:shadow-lg">
      <button
        disabled={currentButton === 1}
        className={`border-none outline-none bg-transparent mr-1 sm:block sm:py-2 sm:px-3 sm:ml-0 sm:rounded-tl-xl sm:border  sm:border-wetAsphalt sm:text-concrete ${
          currentButton === 1
            ? "text-asbestos sm:bg-wetAsphalt"
            : "text-silver hover:text-clouds sm:hover:bg-wetAsphalt sm:bg-midnightBlue"
        }`}
        onClick={(e) => clickPrevHandler(e)}
      >
        <i className="bx bx-chevron-left text-2xl"></i>
      </button>
      <ul className="grid grid-cols-5 gap-2 sm:flex sm:items-center sm:gap-0">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              onClick={(e) => clickPaginationHandler(e, pageNumber)}
              href="#!"
              className={`py-2 px-3 w-10 h-10 sm:w-12 sm:h-12 leading-tight border inline-flex items-center justify-center border-midnightBlue ${
                currentButton === pageNumber
                  ? "bg-midnightBlue text-clouds"
                  : "bg-wetAsphalt hover:bg-midnightBlue hover:text-clouds text-concrete"
              }`}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
      <button
        disabled={currentButton === pageNumbers.length}
        className={`border-none outline-none bg-transparent mr-1 sm:block sm:py-2 sm:px-3 sm:ml-0 sm:rounded-br-xl sm:border  sm:border-wetAsphalt sm:text-concrete ${
          currentButton === pageNumbers.length
            ? "text-asbestos sm:bg-wetAsphalt"
            : "text-silver hover:text-clouds sm:hover:bg-wetAsphalt sm:bg-midnightBlue"
        }`}
        onClick={(e) => clickNextHandler(e)}
      >
        <i className="bx bx-chevron-right text-2xl"></i>
      </button>
    </nav>
  );
};

export default Pagination;
