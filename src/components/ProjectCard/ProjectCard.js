import React, { Component, } from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

class ProjectCard extends Component {
    render() {
        return (
            <Link to={this.props.routerPath} className='project-card'>
                <img src={this.props.imgSrc} className='project-card-image' alt='Project thumbnail' />
                <div className='project-card-description'>
                    <img src={this.props.logoSrc} alt="Project Logo" className='project-card-logo' />
                    <div className='project-card-text'>
                        <h4 className='project-card-title'>
                            {this.props.cardTitle}
                        </h4>
                        <div className='project-card-subtitle'>
                            {this.props.cardDescription}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProjectCard;