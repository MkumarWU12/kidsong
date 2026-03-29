// rhymeParser.ts

interface Scene {
    lines: string[];
}

const parseRhymeText = (text: string): Scene[] => {
    const scenes: Scene[] = [];
    const lines = text.split('\n'); // Split text into lines
    let currentScene: Scene = { lines: [] };

    lines.forEach((line) => {
        line = line.trim(); // Trim whitespace
        if (line) {
            currentScene.lines.push(line);
        } else if (currentScene.lines.length > 0) {
            scenes.push(currentScene); // Push current scene if it has lines
            currentScene = { lines: [] }; // Create new scene
        }
    });

    if (currentScene.lines.length > 0) {
        scenes.push(currentScene); // Push last scene if it has lines
    }

    return scenes;
};

// Exporting the function for external usage
export { parseRhymeText };