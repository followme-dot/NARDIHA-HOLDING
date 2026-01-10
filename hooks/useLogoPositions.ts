import { useEffect, useState } from 'react';

interface LogoPosition {
  x: number;
  y: number;
  z: number;
  color: [number, number, number];
}

export function useLogoPositions(logoPath: string) {
  const [positions, setPositions] = useState<LogoPosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractPositions = async () => {
      try {
        // Create image element
        const img = new Image();
        img.crossOrigin = 'anonymous';

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = logoPath;
        });

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not get canvas context');

        // Set canvas size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image
        ctx.drawImage(img, 0, 0);

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const extractedPositions: LogoPosition[] = [];

        // Sample every 2nd pixel for performance
        const step = 2;

        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            const i = (y * canvas.width + x) * 4;
            const alpha = imageData.data[i + 3];

            // Only include visible pixels
            if (alpha > 128) {
              // Map to 3D coordinates centered at origin
              const posX = (x - canvas.width / 2) * 0.015;
              const posY = -(y - canvas.height / 2) * 0.015;

              // Extract color
              const r = imageData.data[i] / 255;
              const g = imageData.data[i + 1] / 255;
              const b = imageData.data[i + 2] / 255;

              extractedPositions.push({
                x: posX,
                y: posY,
                z: Math.random() * 0.5 - 0.25, // Add slight depth variation
                color: [r, g, b],
              });
            }
          }
        }

        setPositions(extractedPositions);
        setLoading(false);
      } catch (error) {
        console.error('Error extracting logo positions:', error);
        setLoading(false);
      }
    };

    extractPositions();
  }, [logoPath]);

  return { positions, loading };
}
