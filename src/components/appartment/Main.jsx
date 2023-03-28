import React from 'react';
import Accordeon from '../multi/Accordeon';

import Rating from './Rating';
import Tag from './Tag';

const Main = (props) => {
    const buildTag = props.tags.map((tag) => <Tag tag={tag} key={tag}/>);

    return (
        <main>
            <section className="appartment-info">
                <div className="appartment-info--top">
                    <div className="appartment-info--left">
                        <h1 className="appartment-info--title">
                            {props.title}
                        </h1>
                        <p className="appartment-info--location">
                            {props.location}
                        </p>
                        <div className="appartment-tags">{buildTag}</div>
                    </div>
                    <div className="appartment-info--right">
                        <div className="appartment-info--host">
                            <p className="appartment-info--host-name">
                                {props.hostName}
                            </p>
                            <img
                                src={props.hostPicture}
                                alt="Hôte"
                                className="appartment-info--host-picture"
                            />
                        </div>
                        <Rating rating={props.rating} />
                    </div>
                </div>

                <div className="appartment-info--bottom">
                    <Accordeon
                        title="Description"
                        description={props.description}
                        key={"description"}
                    />
                    <Accordeon
                        title="Équipements"
                        equipments={props.equipments}
                        key={"equipment"}
                    />
                </div>
            </section>
        </main>
    );
};

export default Main;
