import React from 'react';
import s from './Projects.module.css';
import f from "../common/styles/Container.module.css";



function Projects() {
    return (
        <div className={s.projectBlock}>
            <div className={`${f.container} ${s.projectContainer}`}>
                <h2>My projects</h2>
                <div className={s.project}>
                    <div>
                        <a href="">Watch</a>
                        <h3>Some project</h3>
                        <p>Very good project</p>
                    </div>
                    <div>
                        <a href="">Watch</a>
                        <h3>Some project</h3>
                        <p>Very good project</p>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default Projects;