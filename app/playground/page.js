import ModelViewer from "@/components/external/ModelViewer";
export default function PlayGround() {
  return (
    <div className="w-full h-[100vh] bg-foreground">
      <div className="w-full h-full flex items-center justify-center">
        <ModelViewer
          url="/models/scene.glb"
          width="100%"
          height="100%"
          defaultRotationX={-12} // <-- keep upright
          defaultRotationY={80} // <-- no sideways tilt
          enableManualRotation={false}
          enableManualZoom={false}
          modelYOffset={-2.05}
          modelXOffset={1}
          environmentPreset="sunset"
        />
      </div>
    </div>
  );
}
