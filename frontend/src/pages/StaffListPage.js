import React, { useState } from 'react';
import StaffListRow from "../components/StaffListRow.js"

function StaffListPage() {
  const [content, setContent] = useState([]);
  const getContent = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((answer) => answer.json())
      .then((answer) => {
        setContent(answer.results)
      })
      .catch(() => {
        alert("There was a problem with the random generator.")
      });
  };

  return(
    <>
      <h2>Staff List</h2>
      <article>
      <p>
        <button id="fromGenerator" onClick={getContent} value="append">Appends</button>
        &nbsp; a new set of ten staff members using the
        <a href="https://randomuser.me/" target="_blank" rel="noreferrer">Randomized Staff Generator</a>
      </p>

      <h3>The chosen staff members:</h3>
      <table>
        <caption>Staff Details</caption>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Number</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {content.map((staffMember, j) => <StaffListRow staffMember={staffMember} key={j} />)}
        </tbody>
      </table>
      </article>
    </>
  )
}

export default StaffListPage;