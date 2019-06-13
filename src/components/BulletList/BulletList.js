import React from 'react';
import './BulletList.css';

function BulletList(props) {
    return (
        <div className='bullet-list'>
            <h4 className='bullet-list-header'>{props.title}</h4>
            <ul>
                {
                    props.items.map(
                        (item, index) => (<li key={index}>{item}</li>)
                    )
                }
            </ul>
        </div>
    );
}

export default BulletList;
