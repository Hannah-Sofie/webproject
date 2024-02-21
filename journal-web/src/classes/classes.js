import React from "react";
import './classes.css'

function classes() {
    return (
        <body>
            <header>
                <img src="logo.png" alt="logo"/>
                    Sustainability Diary
            </header>
            <main>
                <nav>
                    <a href="#">My Reflections</a>
                    <a href="#" id="active">Class</a>
                </nav>

                <div>
                    <div id="page-header">
                        <h1><img src="people-icon.png" alt="3 people icon"/>Class</h1>
                        <button id="join-button">+ Join class</button>
                    </div>

                    <div id="classes-container">
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 1</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 2</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 3</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 4</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 5</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>
                        <div className="class-zone">
                            <img src="test-img.png" className="class-img" alt="Class header image"/>
                                <h2>Class 6</h2>
                                <p>Class description. This is where the description of the class goes. Wow.</p>
                                <a href="#" className="open-class-link">Open classroom</a>
                        </div>

                    </div>
                </div>
            </main>
        </body>
    );
}

export default classes