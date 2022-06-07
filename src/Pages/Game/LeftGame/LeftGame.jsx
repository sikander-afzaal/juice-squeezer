import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faLink } from "@fortawesome/free-solid-svg-icons";

import "./LeftGame.css";
function LeftGame() {
  return (
    <div className="left-game">
      <h1>Juice Squeeze</h1>
      <div className="left-row">
        <h2>Daily Round #1</h2>
        <p>Tickets Entered: 100</p>
      </div>
      <div className="left-row">
        <h2>Buy Tickets</h2>
        <p>1 Ticket = 5$BY</p>
      </div>
      <div className="balance-div">
        <div className="left-row">
          <h2>My Balance: 100$BY</h2>
          <p>Max</p>
        </div>
        <div className="balance-row">
          <h2>2</h2>
          <p>Tickets</p>
        </div>
        <p>Total Price = 10$BY</p>
      </div>
      <p>+2 Weekly</p>
      <p>+2 Monthly</p>
      <p>+2 Yearly</p>
      <button className="buy-tickets">BUY TICKETS</button>
      <div className="left-table">
        <h2 className="heading">My History</h2>
        <table className="table">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Cost</th>
            <th>Type</th>
            <th>Status</th>
            <th>
              <FontAwesomeIcon icon={faLink} />
            </th>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>01/01/22</td>
            <td>5</td>
            <td>25$BY</td>
            <td>DAILY</td>
            <td>
              <FontAwesomeIcon icon={faHourglass} />
            </td>
            <td>LINK</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default LeftGame;
