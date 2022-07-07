import React, { Component } from "react";
import "../src/App.css";

import Course from "../src/components/Course";
import NewCourseForm from "../src/components/NewCourseForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourses: [],
        };
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
    }

    add(course){
        const { listCourses } = this.state;

        listCourses.push(course);
        this.setState(listCourses);
    }

    remove(courseId){
        const { listCourses } = this.state;

        const courseIndex = listCourses.findIndex(course => course.id === courseId);
        listCourses.splice(courseIndex, 1);

        this.setState(listCourses)
    }

    render() {
        return (
            <div className="App">
                <NewCourseForm onAdd={this.add}/>
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
