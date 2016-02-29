

Bids = React.createClass({


  render() {
    return (
      <div className="bids-wrapper">
        <h1>
          Incoming Bids
        </h1>
        <table className="highlight">
          <thead>
            <tr>
              <th data-field="id">Name</th>
              <th data-field="name">Amount</th>
              <th data-field="price">Price</th>
              <th data-field="action">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abbas</td>
              <td>2500</td>
              <td>9.15</td>
              <td>
                <button>Sell</button>
              </td>
            </tr>
            <tr>
              <td>Samy</td>
              <td>350</td>
              <td>9.45</td>
              <td>
                <button>Sell</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

});
