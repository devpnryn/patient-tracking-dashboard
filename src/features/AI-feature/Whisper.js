// Import React and Whisper SDK
import React, { useEffect, useState } from 'react';
import { Whisper } from '@oliveai/ldk';

// Create a component to display a whisper
function Whisper() {
    // Initialize state with an empty whisper object
    const [whisper, setWhisper] = useState(null);

    // Create a whisper when the component mounts
    useEffect(() => {
        // Define the whisper content
        const content = {
            label: 'Hello World',
            components: [
                {
                    type: Whisper.ComponentType.Markdown,
                    body: 'This is a simple whisper using React and Whisper API.',
                },
            ],
        };

        // Create and update the whisper object in the state
        Whisper.create(content).then((whisper) => {
            setWhisper(whisper);
        });

        // Close the whisper when the component unmounts
        return () => {
            // Check if the whisper object exists in the state
            if (whisper) {
                // Close and update the whisper object in the state
                whisper.close().then(() => {
                    setWhisper(null);
                });
            }
        };
    }, []);

    // Render the component
    return (
        <div>
            <h1>Whisper Component</h1>
            <p>This component displays a whisper using React and Whisper API.</p>
        </div>
    );
}
