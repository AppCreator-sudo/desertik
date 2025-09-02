import React, { useState } from 'react';
import Carousel from './components/Carousel';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  const desserts = [
    {
      id: 1,
      title: "десерт - 1",
      description: "описание",
      price: "цена?",
      image: "/photo_2025-09-02_18-50-35.jpg"
    },
    {
      id: 2,
      title: "десерт - 2",
      description: "описание",
      price: "цена?",
      image: "/photo_2025-09-02_18-50-45.jpg"
    },
    {
      id: 3,
      title: "десерт - 3",
      description: "описание",
      price: "цена?",
      image: "/photo_2025-09-02_18-50-55.jpg"
    },
    {
      id: 4,
      title: "десерт - 4",
      description: "описание",
      price: "цена?",
      image: "/photo_2025-09-02_18-50-58.jpg"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Вкуснейшие десерты ручной работы</h1>
        <p>Свежие домашние десерты на заказ с доставкой</p>
      </header>

      <Carousel items={desserts} />

      <AboutMe />
    </div>
  );
}

export default App;
