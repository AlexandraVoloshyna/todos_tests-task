
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={number === currentPage ? 'active' : ''}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
}

export default Pagination