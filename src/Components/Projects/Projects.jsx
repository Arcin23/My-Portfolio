import React from 'react';
import { getImageUrl } from '../../util';

export const Projects = () => {
  return (
    <section>
        <div>
            <h2>PROJECTS</h2>
            <div>
                <img src={(getImageUrl('project.png'))}/>
                <h3>Weather-App</h3>
                <p>This is web application made to tell the weather of different cities around the world</p>
            </div>
        </div>
    </section>
  )
}
