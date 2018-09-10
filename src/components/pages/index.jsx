import React, { Component } from 'react'
import './home.css'
import { categories, courses, teachers } from '../../data/'
import CoursesList from '../courses/CoursesList'
import Eventos from '../media/eventos.jpg'
export default class Home extends Component {

	constructor(...props) {
    super(...props)

    this.state = {
      courses: courses,
      teachers: teachers,
			categories: categories
		}
	}
	render() {
		return (
			<article className="Main-Container-Home">
				<h1>¡Bienvenido a Exposer!</h1>
				<spam className='Main-text'>Estos son algunos de los eventos más importantes</spam>
				<div className="Main-Container-Courses">
					<CoursesList courses={ this.state.courses }/> 
				</div>
				<div className="Container-Info">
					<spam className="Container-Info-titulo">¡Crea tus propios eventos!</spam>
					<img className="Container-Info_img" src={Eventos} alt="Eventos"/>
				</div>
			</article>
		)
	}
}