export const particleVertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;

  void main() {
    // Create circular point with magical glow
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // Magical glow effect
    float glow = 1.0 - (dist * 2.0);
    glow = pow(glow, 1.5);

    // Add extra brightness at center
    float brightness = 1.0 + (1.0 - dist * 2.0) * 0.5;

    gl_FragColor = vec4(vColor * brightness, glow);
  }
`;
