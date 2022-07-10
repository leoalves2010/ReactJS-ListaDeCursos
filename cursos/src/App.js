import React, { Component } from "react";
import "../src/App.css";

import { CourseService } from "./services/CourseService";
import { CategoryService } from "./services/CategoryService";

import Course from "../src/components/Course";
import NewCourseForm from "../src/components/NewCourseForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourses: [],
            listCategories: []
        };

        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.startData = this.startData.bind(this);

        this.startData();
    }

    async startData(){
        let { listCourses, listCategories } = this.state;

        [listCourses, listCategories] = await Promise.all([
            CourseService.list(),
            CategoryService.list()
        ])

        this.setState({listCourses, listCategories});
    }

    async add(course){
        let { listCourses } = this.state;
        let newCourse = await CourseService.create(course);

        listCourses.push(newCourse);
        this.setState({listCourses});
    }

    async remove(courseId){
        let { listCourses } = this.state;

        let courseIndex = listCourses.findIndex(course => course.id === courseId);
        await CourseService.delete(courseId);
        listCourses.splice(courseIndex, 1);
        this.setState({listCourses})
    }

    render() {
        return (
            <div className="App">
                <NewCourseForm onAdd={this.add} categories={this.state.listCategories}/>
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
