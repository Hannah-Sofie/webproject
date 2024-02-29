import React from "react";
import './classes.css';

function ClassesPage() {
    return (
        <body>
            <header>
                <img src="logo.png" alt="logo" />
                Sustainability Diary
            </header>
            <main>
                <div>
                    <div id="page-header">
                        <h1><img src="people-icon.png" alt="3 people icon" />Class 1</h1>
                        <button id="new-entry-button">+ New entry</button>
                    </div>
                    <div id="class-container">

                        <img src="test-img.png" alt="test class header picture" />
                        <div id="class-description">
                            <h2>Class 1</h2>
                            <p>Description of the class. Here you will learn things. Incredible.</p>
                        </div>

                        <div id="lectures-container">
                            <div className="lecture">
                                <img src="test-img.png" className="class-img" alt="Class header image" />
                                <h2>Lecture 1</h2>
                                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                                <hr />
                                <h3>Author Name</h3>
                                <a href="#" className="open-lecture-link">Open</a>
                            </div>
                            <div className="lecture">
                                <img src="test-img.png" className="class-img" alt="Class header image" />
                                <h2>Lecture 2</h2>
                                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                                <hr />
                                <h3>Author Name</h3>
                                <a href="#" className="open-lecture-link">Open</a>
                            </div>
                            <div className="lecture">
                                <img src="test-img.png" className="class-img" alt="Class header image" />
                                <h2>Lecture 3</h2>
                                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                                <hr />
                                <h3>Author Name</h3>
                                <a href="#" className="open-lecture-link">Open</a>
                            </div>
                            <div className="lecture">
                                <img src="test-img.png" className="class-img" alt="Class header image" />
                                <h2>Lecture 4</h2>
                                <p>Lecture description. This is where the description of the Lecture goes. Wow.</p>
                                <hr />
                                <h3>Author Name</h3>
                                <a href="#" className="open-lecture-link">Open</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default ClassesPage;