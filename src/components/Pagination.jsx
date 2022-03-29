export const Pagination = ({countriesPerPage, totalCountries}) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-item">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
