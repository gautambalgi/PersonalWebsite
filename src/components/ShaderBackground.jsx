import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// Cinematic WHITE version: soft pale wash over a warm off-white page.
// Kept subtle (low opacity) so the light background stays dominant.
// Tweak on shadergradient.co → keep colors pale + high brightness → Export → paste URL.
export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.55,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23f4f1ea&bgColor2=%23f4f1ea&brightness=1.3&cAzimuthAngle=180&cDistance=4.2&cPolarAngle=90&cameraZoom=1&color1=%23e8d3c4&color2=%23cdd9e6&color3=%23efe7da&embedMode=off&envPreset=dawn&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.2&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=waterPlane&uDensity=1.1&uFrequency=5&uSpeed=0.13&uStrength=1.5&uTime=0&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
  );
}