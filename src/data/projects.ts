export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveDemo?: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-racer",
    title: "AI Racer",
    shortDescription:
      "A 2D racing game where a trained AI model learns to navigate any custom track layout.",
    description: `The AI Racer is a personal project where I trained a machine learning model to autonomously navigate 2D racetracks. The model learns through reinforcement learning, improving its driving ability over time until it can handle any track layout you throw at it.

The system ran continuously for over 3 days without crashing, demonstrating the stability and robustness of the training pipeline and the resulting model.

Players can design custom tracks and watch the AI learn to navigate them in real-time, making it both a technical showcase and an interactive experience.`,
    tags: ["Python", "Machine Learning", "Reinforcement Learning", "AI"],
    image: "/images/projects/ai-racer-placeholder.png",
    liveDemo: true,
    highlights: [
      "Trained model navigates arbitrary track layouts",
      "Ran for 3+ days continuously without crashing",
      "Custom map designer for creating new tracks",
      "Real-time visualization of AI decision-making",
    ],
  },
  {
    slug: "digit-classifier",
    title: "Handwritten Digit Classifier",
    shortDescription:
      "A custom-trained neural network that classifies handwritten digits with high accuracy.",
    description: `Built a convolutional neural network from scratch to classify handwritten digits. This project involved designing the model architecture, training pipeline, and evaluation framework.

The model was trained on standard digit datasets and achieves high accuracy across all digit classes. The project includes detailed metrics, confusion matrices, and training curves that demonstrate the model's learning progression.

This project showcases fundamental deep learning skills including data preprocessing, model architecture design, hyperparameter tuning, and performance evaluation.`,
    tags: ["Python", "Deep Learning", "CNN", "TensorFlow", "Computer Vision"],
    image: "/images/projects/digit-classifier-placeholder.png",
    highlights: [
      "Custom CNN architecture designed from scratch",
      "Comprehensive training metrics and evaluation",
      "Confusion matrix and per-class accuracy analysis",
      "Full training pipeline with data augmentation",
    ],
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    shortDescription:
      "Splits images into a checkerboard grid, generates themed variations of each segment, and reassembles them into creative collages.",
    description: `This project takes an input image, divides it into a checkerboard pattern of segments, and generates new images for each segment based on wildly different themes. When the pieces are reassembled, the result is a creative collage that still resembles the original image but with each segment reimagined in a different style.

The effect creates visually striking compositions where you can recognize the original subject but each piece has been transformed into something entirely new — different art styles, color palettes, and visual themes all coming together in one cohesive piece.`,
    tags: ["Python", "AI", "Image Generation", "Creative AI"],
    image: "/images/projects/image-gen-placeholder.png",
    highlights: [
      "Checkerboard segmentation algorithm",
      "Multi-theme generation per segment",
      "Automated reassembly into cohesive collages",
      "Visually striking before/after results",
    ],
  },
  {
    slug: "senior-design-unity-game",
    title: "Warehouse Learning Game",
    shortDescription:
      "A Unity-based gamified learning tool designed for special-needs students, teaching real-world warehouse skills.",
    description: `For my senior design project at Stevens Institute of Technology, I led a team building a gamified learning tool designed specifically for special-needs students. The game uses a warehouse theme to teach practical real-world skills like barcode scanning, inventory management, and spatial organization.

As Team Leader and Game Designer, I managed the full project lifecycle from concept through design, implementation, and iterative refinement. I served as the primary liaison with the project client, gathering requirements and incorporating feedback throughout the development process.

The game was built in Unity and designed to be accessible, engaging, and educational — balancing fun gameplay with meaningful learning outcomes.`,
    tags: ["Unity", "C#", "Game Design", "Accessibility", "Team Leadership"],
    image: "/images/projects/unity-game-placeholder.png",
    highlights: [
      "Led team as Team Leader & Game Designer",
      "Built for special-needs students",
      "Full lifecycle: concept → design → implementation → refinement",
      "Primary client liaison at Stevens Institute",
    ],
  },
];
