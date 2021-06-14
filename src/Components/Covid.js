import React, { useEffect, useState } from "react";

export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise);
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
        <tbody>
          <tr>
            <th scope="row">Andhra Pradesh</th>
            <td>{data[2].confirmed}</td>
            <td>{data[2].recovered}</td>
            <td>{data[2].deaths}</td>
            <td>{data[2].active}</td>
          </tr>
          <tr>
            <th scope="row">Arunachal Pradesh</th>
            <td>{data[3].confirmed}</td>
            <td>{data[3].recovered}</td>
            <td>{data[3].deaths}</td>
            <td>{data[3].active}</td>
          </tr>
          <tr>
            <th scope="row">Assam</th>
            <td>{data[4].confirmed}</td>
            <td>{data[4].recovered}</td>
            <td>{data[4].deaths}</td>
            <td>{data[4].active}</td>
          </tr>
          <tr>
            <th scope="row">Bihar</th>
            <td>{data[5].confirmed}</td>
            <td>{data[5].recovered}</td>
            <td>{data[5].deaths}</td>
            <td>{data[5].active}</td>
          </tr>
          <tr>
            <th scope="row">Chhattisgarh</th>
            <td>{data[7].confirmed}</td>
            <td>{data[7].recovered}</td>
            <td>{data[7].deaths}</td>
            <td>{data[7].active}</td>
          </tr>
          <tr>
            <th scope="row">Goa</th>
            <td>{data[10].confirmed}</td>
            <td>{data[10].recovered}</td>
            <td>{data[10].deaths}</td>
            <td>{data[10].active}</td>
          </tr>
          <tr>
            <th scope="row">Gujarat</th>
            <td>{data[11].confirmed}</td>
            <td>{data[11].recovered}</td>
            <td>{data[11].deaths}</td>
            <td>{data[11].active}</td>
          </tr>
          <tr>
            <th scope="row">Haryana</th>
            <td>{data[12].confirmed}</td>
            <td>{data[12].recovered}</td>
            <td>{data[12].deaths}</td>
            <td>{data[12].active}</td>
          </tr>
          <tr>
            <th scope="row">Himachal Pradesh</th>
            <td>{data[13].confirmed}</td>
            <td>{data[13].recovered}</td>
            <td>{data[13].deaths}</td>
            <td>{data[13].active}</td>
          </tr>
          <tr>
            <th scope="row">Jharkhand</th>
            <td>{data[15].confirmed}</td>
            <td>{data[15].recovered}</td>
            <td>{data[15].deaths}</td>
            <td>{data[15].active}</td>
          </tr>
          <tr>
            <th scope="row">Karnataka</th>
            <td>{data[16].confirmed}</td>
            <td>{data[16].recovered}</td>
            <td>{data[16].deaths}</td>
            <td>{data[16].active}</td>
          </tr>
          <tr>
            <th scope="row">Kerala</th>
            <td>{data[17].confirmed}</td>
            <td>{data[17].recovered}</td>
            <td>{data[17].deaths}</td>
            <td>{data[17].active}</td>
          </tr>
          <tr>
            <th scope="row">Madhya Pradesh</th>
            <td>{data[20].confirmed}</td>
            <td>{data[20].recovered}</td>
            <td>{data[20].deaths}</td>
            <td>{data[20].active}</td>
          </tr>
          <tr>
            <th scope="row">Maharashtra</th>
            <td>{data[21].confirmed}</td>
            <td>{data[21].recovered}</td>
            <td>{data[21].deaths}</td>
            <td>{data[21].active}</td>
          </tr>
          <tr>
            <th scope="row">Manipur</th>
            <td>{data[22].confirmed}</td>
            <td>{data[22].recovered}</td>
            <td>{data[22].deaths}</td>
            <td>{data[22].active}</td>
          </tr>
          <tr>
            <th scope="row">Meghalaya</th>
            <td>{data[23].confirmed}</td>
            <td>{data[23].recovered}</td>
            <td>{data[23].deaths}</td>
            <td>{data[23].active}</td>
          </tr>
          <tr>
            <th scope="row">Mizoram</th>
            <td>{data[24].confirmed}</td>
            <td>{data[24].recovered}</td>
            <td>{data[24].deaths}</td>
            <td>{data[24].active}</td>
          </tr>
          <tr>
            <th scope="row">Nagaland</th>
            <td>{data[25].confirmed}</td>
            <td>{data[25].recovered}</td>
            <td>{data[25].deaths}</td>
            <td>{data[25].active}</td>
          </tr>
          <tr>
            <th scope="row">Odisha</th>
            <td>{data[26].confirmed}</td>
            <td>{data[26].recovered}</td>
            <td>{data[26].deaths}</td>
            <td>{data[26].active}</td>
          </tr>
          <tr>
            <th scope="row">Punjab</th>
            <td>{data[28].confirmed}</td>
            <td>{data[28].recovered}</td>
            <td>{data[28].deaths}</td>
            <td>{data[28].active}</td>
          </tr>
          <tr>
            <th scope="row">Rajasthan</th>
            <td>{data[29].confirmed}</td>
            <td>{data[29].recovered}</td>
            <td>{data[29].deaths}</td>
            <td>{data[29].active}</td>
          </tr>
          <tr>
            <th scope="row">Sikkim</th>
            <td>{data[30].confirmed}</td>
            <td>{data[30].recovered}</td>
            <td>{data[30].deaths}</td>
            <td>{data[30].active}</td>
          </tr>
          <tr>
            <th scope="row">Tamil Nadu</th>
            <td>{data[32].confirmed}</td>
            <td>{data[32].recovered}</td>
            <td>{data[32].deaths}</td>
            <td>{data[32].active}</td>
          </tr>
          <tr>
            <th scope="row">Telangana</th>
            <td>{data[33].confirmed}</td>
            <td>{data[33].recovered}</td>
            <td>{data[33].deaths}</td>
            <td>{data[33].active}</td>
          </tr>
          <tr>
            <th scope="row">Tripura</th>
            <td>{data[34].confirmed}</td>
            <td>{data[34].recovered}</td>
            <td>{data[34].deaths}</td>
            <td>{data[34].active}</td>
          </tr>
          <tr>
            <th scope="row">Uttar Pradesh</th>
            <td>{data[35].confirmed}</td>
            <td>{data[35].recovered}</td>
            <td>{data[35].deaths}</td>
            <td>{data[35].active}</td>
          </tr>
          <tr>
            <th scope="row">Uttarakhand</th>
            <td>{data[36].confirmed}</td>
            <td>{data[36].recovered}</td>
            <td>{data[36].deaths}</td>
            <td>{data[36].active}</td>
          </tr>
          <tr>
            <th scope="row">West Bengal</th>
            <td>{data[37].confirmed}</td>
            <td>{data[37].recovered}</td>
            <td>{data[37].deaths}</td>
            <td>{data[37].active}</td>
          </tr>
        </tbody>
      </table>
      <table style={myStyle} className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col" style={tableStyle}>
              Union territories
            </th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Andaman and Nicobar Islands</th>
            <td>{data[1].confirmed}</td>
            <td>{data[1].recovered}</td>
            <td>{data[1].deaths}</td>
            <td>{data[1].active}</td>
          </tr>
          <tr>
            <th scope="row">Chandigarh</th>
            <td>{data[6].confirmed}</td>
            <td>{data[6].recovered}</td>
            <td>{data[6].deaths}</td>
            <td>{data[6].active}</td>
          </tr>
          <tr>
            <th scope="row">Dadra and Nagar Haveli and Daman and Diu</th>
            <td>{data[8].confirmed}</td>
            <td>{data[8].recovered}</td>
            <td>{data[8].deaths}</td>
            <td>{data[8].active}</td>
          </tr>
          <tr>
            <th scope="row">Delhi</th>
            <td>{data[9].confirmed}</td>
            <td>{data[9].recovered}</td>
            <td>{data[9].deaths}</td>
            <td>{data[9].active}</td>
          </tr>
          <tr>
            <th scope="row">Jammu and Kashmir</th>
            <td>{data[14].confirmed}</td>
            <td>{data[14].recovered}</td>
            <td>{data[14].deaths}</td>
            <td>{data[14].active}</td>
          </tr>
          <tr>
            <th scope="row">Ladakh</th>
            <td>{data[18].confirmed}</td>
            <td>{data[18].recovered}</td>
            <td>{data[18].deaths}</td>
            <td>{data[18].active}</td>
          </tr>
          <tr>
            <th scope="row">Lakshadweep</th>
            <td>{data[19].confirmed}</td>
            <td>{data[19].recovered}</td>
            <td>{data[19].deaths}</td>
            <td>{data[19].active}</td>
          </tr>
          <tr>
            <th scope="row">Puducherry</th>
            <td>{data[27].confirmed}</td>
            <td>{data[27].recovered}</td>
            <td>{data[27].deaths}</td>
            <td>{data[27].active}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
