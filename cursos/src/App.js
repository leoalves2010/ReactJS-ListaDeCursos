import React, { Component } from "react";
import "../src/App.css";

import Course from "../src/components/Course";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourses: [
                {
                    id: 1,
                    name: 'ReactJS',
                    category: 'Javascript',
                    image: 'http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png'
                },
                {
                    id: 2,
                    name: 'AngularJS',
                    category: 'Javascript',
                    image: 'https://logospng.org/download/angular-js/logo-angular-js-icon-1024.png'
                }
            ],
        };
        this.remove = this.remove.bind(this);
    }

    remove(courseId){
        const courseIndex = this.state.listCourses.findIndex(course => course.id === courseId);
        this.state.listCourses.splice(courseIndex, 1);

        this.setState(this.state.listCourses)
    }

    render() {
        return (
            <div className="App">
                <ul className="courses-list">
                    {
                        this.state.listCourses.map(course => <Course key={course.id} course={course} onRemove={this.remove}/>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;
