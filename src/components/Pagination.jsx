export const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
