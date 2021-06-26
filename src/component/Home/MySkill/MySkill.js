import React from 'react';
import './MySkill.css';

const MySkill = () => {
    return (
        <div class="container py-5">
                <h2 className="text-brand pb-4 mb-2">My Skills</h2>
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <h3 class="progress-title">HTML5</h3>
                    <div class="progress orange">
                        <div class="progress-bar" style={{width: '90%', background: '#fe3b3b'}}>
                            <div class="progress-value">90%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">CSS3</h3>
                    <div class="progress blue">
                        <div class="progress-bar" style={{width:'80%', background:'#1a4966'}}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">BOOTSTRAP</h3>
                    <div class="progress green">
                        <div class="progress-bar" style={{width: '85%', background: '#53aa2c'}}>
                            <div class="progress-value">85%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">WORDPRESS</h3>
                    <div class="progress purple">
                        <div class="progress-bar" style={{width: '60%', background:'#66406f'}}>
                            <div class="progress-value">60%</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-offset-3 col-md-6">
                    <h3 class="progress-title">JAVASCRIPT</h3>
                    <div class="progress orange">
                        <div class="progress-bar" style={{width: '80%', background: '#fe3b3b'}}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">REACT</h3>
                    <div class="progress blue">
                        <div class="progress-bar" style={{width:'90%', background:'#1a4966'}}>
                            <div class="progress-value">90%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">REACT NATIVE</h3>
                    <div class="progress green">
                        <div class="progress-bar" style={{width: '50%', background: '#53aa2c'}}>
                            <div class="progress-value">50%</div>
                        </div>
                    </div>

                    <h3 class="progress-title">NODE</h3>
                    <div class="progress purple">
                        <div class="progress-bar" style={{width: '80%', background:'#66406f'}}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MySkill;