import React from "react";
import './scores.css';

export function Scores() {
    return (
        <main>
            <h3>Scores</h3>

            <div className="user_score">
                <div>
                    <label htmlFor="user-score">Your score: </label>
                </div>
                <div>
                    <input type="number" className="display-user-score" id="score" value="0" readonly />
                </div>
            </div>

            <div className="scoreboard-div">
                <table className="scoreboard">
                    <thead>
                        <tr>
                            <th>Placement</th>
                            <th>Username</th>
                            <th>Points</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Matt</td>
                            <td>21</td>
                            <td> 🥇 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kayla</td>
                            <td>17</td>
                            <td> 🥈 </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tim</td>
                            <td>9</td>
                            <td> 🥉 </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Emma</td>
                            <td>7</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>john_smith</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}