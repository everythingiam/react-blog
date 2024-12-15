import { usePagination } from "../hooks/usePagination";

const Pagination = ({totalPages, changePage, page}) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          className={p === page ? 'current' : ''}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
