import ModelViewer from "@/components/external/ModelViewer";

export default function HighlightSection() {

  return (
    <div className="z-40 w-full h-full">
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
          fadeIn={true}
          showScreenshotButton={false}
        />
      </div>
      <div className="absolute bottom-0 py-10 w-full px-40 z-20">
        <h2 className="text-6xl tracking-tighter mb-[25px]">Highlights</h2>
        <p className="text-lg w-[50%]">
          A curated selection of my favorite design work, showcasing projects
          that best represent my style and approach. These designs reflect my
          focus on minimal aesthetics and interests.
        </p>
      </div>
    </div>
  );
}
