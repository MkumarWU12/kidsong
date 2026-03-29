import React, { useState } from 'react';

const RhymeInput: React.FC = () => {
    const [scene, setScene] = useState('');
    const [frame, setFrame] = useState('');

    const handleSceneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScene(event.target.value);
    };

    const handleFrameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrame(event.target.value);
    };

    return (
        <div>
            <h2>KidSong Video Generator</h2>
            <div>
                <label>
                    Scene:
                    <input type="text" value={scene} onChange={handleSceneChange} />
                </label>
            </div>
            <div>
                <label>
                    Frame:
                    <input type="text" value={frame} onChange={handleFrameChange} />
                </label>
            </div>
        </div>
    );
};

export default RhymeInput;