import React from 'react';
import './VideoPreview.css';

const VideoPreview = ({ progress, videoURL }) => {
    return (
        <div className="video-preview">
            {videoURL ? (
                <video width="400" controls>
                    <source src={videoURL} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            ) : (
                <p>Video is being generated...</p>
            )}
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{progress}%</p>
        </div>
    );
};

export default VideoPreview;