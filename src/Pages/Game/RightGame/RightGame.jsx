import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faBullhorn,
  faDollarSign,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./RightGame.css";
function RightGame() {
  return (
    <div className="right-game">
      <div className="top-right">
        <div className="right-box">
          <FontAwesomeIcon icon={faFireFlameCurved} />
          <h2>Total $BY Burned 56,712</h2>
        </div>
        <div className="right-box">
          <FontAwesomeIcon icon={faBullhorn} />
          <h2>Total $BY Prizes 331,721</h2>
        </div>
        <div className="right-box">
          <FontAwesomeIcon icon={faDollarSign} />
          <h2>Total $BY Earned 21,357</h2>
        </div>
      </div>
      <div className="left-table">
        <h2 className="heading">Winning History</h2>
        <table className="table">
          <tr>
            <th>Wallet</th>
            <th>Number</th>
            <th>Type</th>
            <th>Round</th>
            <th>Prize</th>
            <th>
              <FontAwesomeIcon icon={faLink} />
            </th>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>245</td>
            <td>DAILY</td>
            <td>4</td>
            <td>5,627</td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>245</td>
            <td>DAILY</td>
            <td>4</td>
            <td>5,627</td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>245</td>
            <td>DAILY</td>
            <td>4</td>
            <td>5,627</td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>245</td>
            <td>DAILY</td>
            <td>4</td>
            <td>5,627</td>
            <td>LINK</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>245</td>
            <td>DAILY</td>
            <td>4</td>
            <td>5,627</td>
            <td>LINK</td>
          </tr>
        </table>
      </div>
      <div className="left-table">
        <h2 className="heading">Recent Entries</h2>
        <table className="table">
          <tr>
            <th>Wallet</th>
            <th>Tickets</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
        </table>
      </div>
      <div className="left-table">
        <h2 className="heading">
          Leaderboard <br />
          <span>Biggest Squeezers</span>
        </h2>
        <table className="table">
          <tr>
            <th>Wallet</th>
            <th>Tickets</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>5</td>
            <td>25 $BY</td>
          </tr>
        </table>
      </div>
      <div className="left-table">
        <h2 className="heading">Most Fortunate</h2>
        <table className="table">
          <tr>
            <th>Wallet</th>
            <th>Total Amount Won</th>
          </tr>
          <tr>
            <td>0x...e2c</td>
            <td>56,236 $BY</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RightGame;
