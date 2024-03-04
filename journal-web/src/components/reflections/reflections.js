import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import styles from "./reflections.module.css";
import writeImage from "./images/write.svg";
import dotsImage from "./images/dots.svg";
import WriteNew from "./writeNew";
import { Link } from "react-router-dom";
import UnlockedImage from "./images/unlocked.svg";
import LockedImage from "./images/locked.svg";

class Reflections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummydata: [
        {
          id: 1,
          title: "Reflection 1",
          content: "This is the first reflection.",
          status: "public",
          date: "2022-01-01",
          time: "12:00",
        },
        {
          id: 2,
          title: "Reflection 2",
          content: "This is the second reflection.",
          status: "private",
          date: "2022-01-02",
          time: "13:00",
        },
        {
          id: 3,
          title: "Reflection 3",
          content: "This is the third reflection.",
          status: "public",
          date: "2022-01-03",
          time: "14:00",
        },
      ],
    };
  }

  render() {
    return (
      <main className={styles["reflections"]}>
        <div className={styles["reflections__info"]}>
          <h1 className={styles["reflections__title"]}>My reflections</h1>
          <Link to="/reflections/write-new" className={styles.newEntrylink}>
            + new entry
          </Link>
        </div>

        <div className={styles["reflections__list"]}>
          {this.state.dummydata.map((reflection) => (
            <div
              key={reflection.id}
              className={styles["reflections__list__item"]}
            >
              <div>
                <h2 className={styles["reflections__list__item-title"]}>
                  {reflection.title}
                </h2>
                <div className={styles.flexrow}>
                  <img
                    src={
                      reflection.status === "public"
                        ? UnlockedImage
                        : LockedImage
                    }
                    alt="Status"
                  />
                  <p className={styles["reflections__list__item-status"]}>
                    {reflection.status}
                  </p>
                </div>
              </div>
              <div>
                <p className={styles["reflections__list__item-date"]}>
                  {reflection.date}
                </p>
                <p className={styles["reflections__list__item-time"]}>
                  {reflection.time}
                </p>
              </div>
              <div>
                <img src={writeImage} />
                <img src={dotsImage} />
              </div>
            </div>
          ))}
        </div>
        <Routes>
          <Route path="/write-new" element={<WriteNew />} />
        </Routes>
      </main>
    );
  }
}

export default Reflections;
