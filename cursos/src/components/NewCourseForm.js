import React, { Component } from "react";

class NewCourseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            image: '',
            category: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        onAdd: () => {},
        listCategories: []
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { name, image, category } = this.state;

        if(name !== '' && image !== '' && category !== '') {
            const newCourse = {
                name,
                image,
                category
            }
            this.props.onAdd(newCourse);

            this.setState({
                name: '',
                image: '',
                category: ''
            });
        }
    }

    render() {
        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input name="image" value={this.state.image} onChange={this.handleChange} />
                </label>
                <label>
                    <span>Categoria:</span>
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="">Selecionar...</option>
                        {
                            this.props.categories.map(category => <option value={category.name}>{category.name}</option>)
                        }
                    </select>
                </label>
                <button type="submit">Criar Curso</button>
            </form>
        );
    }
}

export default NewCourseForm;