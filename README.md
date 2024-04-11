## 2D Sky Animation in HTML5 Canvas
![Storyboard](<CG project Storyboard.PNG>)
This project involves creating a simple 2D animation of a sky with an airplane and a hot air balloon. The animation is built using HTML5 Canvas and JavaScript, showcasing the objects moving across a blue sky dotted with clouds.

The animation's visual storyboard can be seen above, illustrating the planned sequence of movements across the canvas. The sky serves as a static backdrop, while the dynamic elements, the airplane and hot air balloon, provide a contrast with their motion. The clouds may also be animated to drift slowly, enhancing the scene's depth and realism.

### Storyboard Overview

The storyboard image displays a series of frames indicating the progression of the animation:

1. **Frame 1**: The airplane enters from the left, flying towards the right side of the canvas. A hot air balloon floats gently upwards in the background.
2. **Frames 2-3**: As the airplane continues its flight path, the hot air balloon ascends and moves in a slight arc, possibly influenced by a gentle breeze in the upper atmosphere.
3. **Frame 4**: Both the airplane and the hot air balloon reach their final positions on the canvas, completing one loop of the animation cycle.

### Implementation Details

- The **airplane** will be animated to move across the canvas from left to right, looping back to the left side once it exits the frame, creating a continuous flight path.
- The **hot air balloon** will have a more complex path, simulating the effect of wind currents that affect its vertical and horizontal positioning.
- **Clouds** will slowly traverse the sky behind the main animated elements.

### Animation Flow

- The animation starts with a clear blue sky, followed by the entry of the airplane from the left edge.
- As the airplane flies across the sky, the hot air balloon begins its slow ascent, starting from the lower part of the canvas.
- The movement of clouds, airplane, and balloon will be synchronized to create a believable and visually appealing scene.
- Upon reaching the edge of the canvas, the airplane and balloon will reset their positions off-screen, ensuring a smooth transition for their re-entry, thus creating an endless loop of motion.

### Possible Enhancements

- To add further interactivity, user input could alter the flight speed or direction of the airplane and the ascent of the hot air balloon.
- Day to night transition effects can be implemented, adding dynamic lighting and allowing for a transition to a starry night sky with a moon instead of the sun.
- Sound effects such as the hum of the airplane engine or the whoosh of the hot air balloon burner could provide auditory feedback alongside the visual movements.
