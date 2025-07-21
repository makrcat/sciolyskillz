import React, { useEffect, useState } from "react";
import styles from "./CatFactCard.module.css";

export default function CatFactCard() {
  const [fact, setFact] = useState("loading...");

  useEffect(() => {
    fetchCatFact();
  }, []);

  function fetchCatFact() {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact("Cat did not load :("));
  }

  return (
    <div className={styles['catfact-card']}>
      <h3>🐾 Cat Fact</h3>
      <p className={styles['fact-text']}>

        {fact}

        {Array(Math.max(0, 8 - Math.ceil(fact.length / 20)))
          .fill(0)
          .map((_, i) => (
            <br key={i} />
          ))}
      </p>
      <button onClick={fetchCatFact}>Another one!</button>
    </div>
  );
}
