export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  liveDemo?: boolean;
  blogSlug: string;
}

export const projects: Project[] = [
  {
    slug: "ai-racer",
    title: "AI Racer",
    shortDescription:
      "A 2D racing game where a trained AI model learns to navigate any custom track layout — so fast that it's physically impossible to drive manually.",
    tags: ["Python", "Reinforcement Learning", "PPO", "Pygame"],
    image: "/images/projects/ai-racer-cover.png",
    liveDemo: true,
    blogSlug: "racing-ai-too-fast",
  },
  {
    slug: "digit-classifier",
    title: "Handwritten Digit Classifier",
    shortDescription:
      "A custom CNN tested against noise and rotation to find the limits of what a model can actually learn from isolated handwritten digits.",
    tags: ["Python", "Deep Learning", "CNN", "TensorFlow"],
    image: "/images/projects/digit-classifier-cover-v2.png",
    blogSlug: "noise-rotation-cnn",
  },
  {
    slug: "ai-image-generator",
    title: "AI Mosaic Generator",
    shortDescription:
      "Take a photo, tile it out, and have AI regenerate each section in a different artistic style — all while keeping the overall composition intact.",
    tags: ["Python", "Stability AI", "GPT-4o-mini", "Image Generation"],
    image: "/images/projects/ai-mosaic-generator-cover.png",
    blogSlug: "ai-mosaic-generator",
  },
];
