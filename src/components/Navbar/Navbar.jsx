import React from "react";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        MovieMania
      </Link>
      <div className={styles.right}>
        {/* <div className={styles.search}>
          <input type="text" placeholder="Search movie..." />
          <FaSearch />
        </div> */}
        <p className={styles.link}>
          <Link to="/explore">Explore</Link>
        </p>
      </div>
    </div>
  );
}

