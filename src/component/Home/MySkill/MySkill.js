import React from 'react';
import './MySkill.css';

const MySkill = () => {
    return (
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <div>
                    <h3 class="progress-title">HTML5</h3>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style={{width:'95%'}}>
                            <div class="progress-value">95%</div>
                        </div>
                    </div>
        
                    <h3 class="progress-title">CSS3</h3>
                    <div class="progress yellow">
                        <div class="progress-bar" style={{width:'80%'}}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>
                    <h3 class="progress-title">Bootstrap</h3>
                    <div class="progress yellow">
                        <div class="progress-bar" style={{width:'85%'}}>
                            <div class="progress-value">85%</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="progress-title">JavaScript</h3>
                    <div class="progress">
                        <div class="progress-bar" style={{width:'90%'}}>
                            <div class="progress-value">90%</div>
                        </div>
                    </div>
        
                    <h3 class="progress-title">ReactJS</h3>
                    <div class="progress yellow">
                        <div class="progress-bar" style={{width:'90%'}}>
                            <div class="progress-value">90%</div>
                        </div>
                    </div>
                    <h3 class="progress-title">NodeJS</h3>
                    <div class="progress yellow">
                        <div class="progress-bar" style={{width:'80%'}}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;