import React from 'react';
import './TagsList.css';

function TagsList(props) {
    return (
        <div className='tags-category'>
            <h4 className='tags-header'>{props.title}</h4>
            <ul className='tags tags-list'>
                {
                    props.skills.map(
                        (skill) => (<li>{skill}</li>)
                    )
                }
            </ul>
        </div>
    );
}

export default TagsList;
