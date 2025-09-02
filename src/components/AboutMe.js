import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>Информация обо мне</h2>
      <div className="profile">
        <div className="avatar"></div>
        <div className="info">
          <h3>Кондитер-профессионал</h3>
          <p>Более 5 лет создаю уникальные десерты ручной работы. Специализация: авторские торты, пирожные и десертные композиции.</p>
          <div className="contacts">
            <p>✉️ example@email.com</p>
            <p>📱 +7 (XXX) XXX-XX-XX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
