import React from "react";

function XcountriesSearch({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <p>{country.name.common}</p>
    </div>
  );
}

export default XcountriesSearch;
