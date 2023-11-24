import React from 'react';
import team from '../../images/team.png';
import '../../css/Team.css'; // Import your custom CSS file (create a new one)

function Team() {
  return (
    <section className="seven">
      <div className="profile">
        <img src={team} alt="Team" />
      </div>
    </section>
  );
}

export default Team;
