import React, { Component } from "react";

class Course extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    static defaultProps = {
        course: {},
        onRemove: () => {}
    }

    remove(){
        this.props.onRemove(this.props.course.id);
    }

    render() {
        return (
            <li className="course" key={this.props.course.id}>
                <div>{this.props.course.category}</div>
                <button onClick={this.remove}>X</button>
                <img src={this.props.course.image} alt={this.props.course.name} />
                <div>{this.props.course.name}</div>
            </li>
        );
    }
}

export default Course;