import React, {Component} from 'react';

import './archive.css';
import Title from '../../components/title/title';

class Archive extends Component {
    render() {
        return (
            <div className="archive">
                <Title title="List of archive tasks" />
                <ul className="list-group to-do-list">
                    {/*{tasks.map(({id, text, isCompleted}) => {*/}
                        {/**/}
                    {/*})}*/}
                    <li className="list-group-item to-do-item">
                        <span className="to-do-text">bla-bla-bla</span>
                        {/*{isCompleted ? <span className="to-do-text"><del>{text}</del></span> : <span className="to-do-text">{text}</span>}*/}
                        <button type="button" className="button btn btn-outline-dark">Unarchive</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Archive;