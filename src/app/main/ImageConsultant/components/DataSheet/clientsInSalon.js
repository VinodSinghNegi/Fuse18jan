import React, { Component } from "react";
class Content extends Component {
  state = {
    order: [
      {
        id: 1,
        image: "assets/images/avatars/Boyle.jpg",
        name: "Jeene Doe",
        data: "Test Service",
        time: "09:05",
        status: "Ready"
      },
      {
        id: 2,
        image: "assets/images/avatars/alice.jpg",
        name: "John Doe",
        data: "Test Service",
        time: "09:15",
        status: "Waiting"
      },
      {
        id: 3,
        image: "assets/images/avatars/Arnold.jpg",
        name: "Jeene Doe",
        data: "Test Service",
        time: "09:05",
        status: "Ready"
      },
      {
        id: 4,
        image: "assets/images/avatars/Copeland.jpg",
        name: "John Doe",
        data: "Test Service",
        time: "09:15",
        status: "Waiting"
      },
      {
        id: 5,
        image: "assets/images/avatars/joyce.jpg",
        name: "Jeene Doe",
        data: "Test Service",
        time: "09:05",
        status: "Ready"
      },
      {
        id: 6,
        image: "assets/images/avatars/Mai.jpg",
        name: "John Doe",
        data: "Test Service",
        time: "09:15",
        status: "Waiting"
      }
    ]
  };
  render() {
    const { order } = this.state;
    return (
      <div className="table-responsive">
        <table className="simple">
          <thead></thead>
          <tbody>
            {order.map(customer => (
              <tr key={customer.id}>
                <td className="w-80">
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%"
                    }}
                    className="customer-image"
                    src={customer.image}
                    alt="Profile"
                  />
                </td>
                <td className="w-64 text-left">
                  <span className="truncate">
                    {customer.name}
                    <div style={{ color: "grey" }}>{customer.data}</div>
                  </span>
                </td>
                <td className="w-64 text-center">
                  <span className="truncate">{customer.time}</span>
                  {customer.status === "Ready" ? (
                    <div
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "green",
                        color: "white"
                      }}
                    >
                      {customer.status}
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "orange",
                        color: "white"
                      }}
                    >
                      {customer.status}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Content;
