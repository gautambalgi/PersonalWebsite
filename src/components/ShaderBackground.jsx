import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// Cinematic version: mostly dark, muted colors, slow drift.
// To tweak: shadergradient.co → lower Brightness + Speed, pick darker
// colors → Export → paste the new URL into `urlString`.
export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23050610&bgColor2=%23050610&brightness=0.8&cAzimuthAngle=180&cDistance=4.2&cPolarAngle=90&cameraZoom=1&color1=%231b3b5f&color2=%23122a44&color3=%23201538&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.2&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=waterPlane&uDensity=1.1&uFrequency=5&uSpeed=0.14&uStrength=1.6&uTime=0&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
  );
}