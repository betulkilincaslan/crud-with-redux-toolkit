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
    <nav>
      <ul className="inline-flex items-center -space-x-px shadow-lg">
        <li>
          <button
            disabled={currentButton === 1}
            className={`${
              currentButton === 1
                ? "bg-asbestos"
                : "block py-2 px-3 ml-0 leading-tight rounded-tl-xl border bg-midnightBlue border-wetAsphalt text-concrete hover:bg-wetAsphalt hover:text-clouds"
            }`}
            onClick={(e) => clickPrevHandler(e)}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              onClick={(e) => clickPaginationHandler(e, pageNumber)}
              href="#!"
              className={`${
                currentButton === pageNumber
                  ? "z-10 py-2 px-3 leading-tight border border-midnightBlue bg-midnightBlue text-clouds"
                  : "py-2 px-3 leading-tight border bg-wetAsphalt border-midnightBlue text-concrete hover:bg-midnightBlue hover:text-clouds"
              }`}
            >
              {pageNumber}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#!"
            className={`${
              currentButton === pageNumbers.length
                ? "bg-asbestos"
                : "block py-2 px-3 ml-0 leading-tight rounded-br-xl border bg-midnightBlue border-wetAsphalt text-concrete hover:bg-wetAsphalt hover:text-clouds"
            }`}
            onClick={(e) => clickNextHandler(e)}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
