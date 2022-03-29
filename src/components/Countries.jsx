export const Countries = ({countries, isLoading}) => {
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className="list-group mb-2">
      {countries.map((country, i) => (
        <li key={i} className="list-group-item">
          {country.name.common}
          <img
            src={country.flags.svg}
            alt="flag"
            className="mt-2"
            style={{width: 25}}
          />
        </li>
      ))}
    </ul>
  )
}
