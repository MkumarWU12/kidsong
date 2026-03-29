import React, { useState } from 'react';
import VideoPreview from './VideoPreview';

const App: React.FC = () => {
    const [rhymeText, setRhymeText] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRhymeText(event.target.value);
    };

    const generateVideo = () => {
        if (rhymeText) {
            setIsGenerating(true);
            // Simulating video generation
            setTimeout(() => {
                setVideoUrl('https://path.to.generated.video'); // replace with actual video url generation
                setIsGenerating(false);
            }, 2000);
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Kids Song Generator</h1>
            <h2>Enter your rhyme and generate a video!</h2>
            <input type='text' value={rhymeText} onChange={handleInputChange} placeholder='Type your rhyme here...' />
            <button onClick={generateVideo} disabled={isGenerating}>Generate Video</button>
            {rhymeText && <VideoPreview videoUrl={videoUrl} />}
        </div>
    );
};

export default App;