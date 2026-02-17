import Image from "next/image";
import Link from "next/link";

export default function Tools() {
  return (
    <div className="bg-background font-serif px-40 py-10 h-full w-full flex flex-col">
      <h1 className="text-9xl font-sans font-black tracking-tighter px-10 text-left translate-y-5">
        Tech Stuff
      </h1>
      <div className="bg-foreground w-full flex-1 rounded-4xl flex flex-col overflow-hidden p-10 text-background font-sans">
        <div className="flex w-full h-[50%] justify-around">
          <Link
            href="https://code.visualstudio.com/"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/vscode.png"
              alt="Visual Studio Code"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">Visual Studio Code</h2>
          </Link>
          <Link
            href="https://developer.apple.com/xcode/"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/xcode.png"
              alt="XCode"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">XCode</h2>
          </Link>
          <Link
            href="https://zed.dev/"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/zed.png"
              alt="Zed"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">Zed</h2>
          </Link>
        </div>
        <div className="flex w-full h-[50%] justify-around">
          <Link
            href="https://www.adobe.com/products/photoshop.html"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/photoshop.png"
              alt="Adobe Photoshop"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">Adobe Photoshop</h2>
          </Link>
          <Link
            href="https://www.figma.com/"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/figma.png"
              alt="Figma"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">Figma</h2>
          </Link>
          <Link
            href="https://www.notion.so/"
            className="flex flex-col items-center justify-center"
          >
            <Image
              className="transform transition-transform duration-200 hover:scale-110"
              src="/icons/notion.png"
              alt="Notion"
              width={200}
              height={200}
            />
            <h2 className="text-3xl font-medium mt-5">Notion</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
