import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <article className="card">
            <NavLink to={`/appartment?id=${props.id}`} className="card--link">
                <div className="card--content">
                    <img
                        src={props.cover}
                        className="card--cover"
                        alt={props.title}
                    />
                    <p className="card--title">{props.title}</p>
                </div>
            </NavLink>
        </article>
    );
};

export default Card;
