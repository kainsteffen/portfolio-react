import React, { Component } from 'react';
import './SkillsSection.css';
import SectionHeader from '../../SectionHeader/SectionHeader.js';

class SkillsSection extends Component {
    render() {
        return (
            <section className='skills-section'>
                <SectionHeader text='Things I&apos;m good at' />
                <div className='skills-section-content'>
                    <div className='motto-group'>
                        <MottoCard
                            index='01'
                            title='Design'
                            description='I have a keen eye for aesthetics and am always in pursuit for the most visually pleasing product.'
                            image={require('./images/brush.svg')}
                        />
                        <div className='motto-spacer' />
                        <MottoCard
                            index='02'
                            title='Develop'
                            description='I strive for modular and understandable systems that consistently provide opportunities for extension and improvement.'
                            image={require('./images/wrench.svg')}
                        />
                        <div className='motto-spacer' />
                        <MottoCard
                            index='03'
                            title='Deliver'
                            description='I value products that offer quality experiences but are nevertheless finished in a timely manner.'
                            image={require('./images/clipboard.svg')}
                        />
                    </div>
                    <SkillsList
                        title='Technologies'
                        skills=
                        {[
                            'Java',
                            'C#',
                            'HTML',
                            'CSS',
                            'JavaScript',
                            'React',
                            'Flutter',
                            'Dart',
                            'Python',
                        ]}
                    />
                    <SkillsList
                        title='Tools'
                        skills=
                        {[
                            'Unity3D',
                            'Visual Studio',
                            'Figma',
                            'Android Studio',
                            'XCode',
                            'Jira / Trello',
                            'Slack / Microsoft Teams',
                            'Word',
                            'Excel',
                            'PowerPoint',
                        ]}
                    />
                    <SkillsList
                        title='Others'
                        skills=
                        {[
                            'English',
                            'German',
                            'Vietnamese',
                            'Design',
                            'Scrum',
                            'Quality Assurance',
                        ]}
                    />
                </div>
            </section>
        );
    }
}

function MottoCard(props) {
    return (
        <div className='motto'>
            <div className='motto-header'>
                <h4>
                    {props.index}
                    <br></br>
                    {props.title}
                </h4>
                <img src={props.image} alt="Placeholder" />
            </div>
            <div className='motto-description'>
                {props.description}
            </div>
        </div>
    );
}

function SkillsList(props) {
    return (
        <div className='skills-category'>
            <h4 className='skills-header'>{props.title}</h4>
            <ul className='skills-tech skills-list'>
                {
                    props.skills.map(
                        (skill) => (<li>{skill}</li>)
                    )
                }
            </ul>
        </div>
    );
}

export default SkillsSection;
