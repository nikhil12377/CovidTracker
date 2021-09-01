import React, { useEffect, useState } from "react";
export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  let myStyle = {
    margin: "50px 0px",
  };

  let tableStyle = {
    width: "500px",
  };

  let dateStyle = {
    textAlign: "right",
    marginRight: "10px",
  };

  if (data === undefined || data.length === 0) {
    getCovidData();
  }

  if (data === undefined || data.length === 0) return <h2>no data found</h2>;

  return (
    <>
      <h2 style={myStyle} className="text-center">
        COVID 19 INDIA TRACKER
      </h2>

      <p style={dateStyle}>{data[1].lastupdatedtime}</p>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col" style={tableStyle}>
              State
            </th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Active</th>
          </tr>
        </thead>

        {data.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.state}</th>
                <td>{item.confirmed}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
                <td>{item.active}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
