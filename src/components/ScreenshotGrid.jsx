import { useState } from "react";
import { ImageOff } from "lucide-react";

function Shot({ src }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="aspect-video rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden flex items-center justify-center">
      {!failed ? (
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <ImageOff size={16} className="text-[var(--color-border)]" />
      )}
    </div>
  );
}

export default function ScreenshotGrid({ slug }) {
  // Dépose tes 4 images ici : public/projects/<slug>/capture1.jpg (à capture4.jpg)
  // Exemple pour ce projet : public/projects/{slug}/capture1.jpg
  const shots = [
    `/projects/${slug}/capture1.jpg`, // capture1 ici
    `/projects/${slug}/capture2.jpg`, // capture2 ici
    `/projects/${slug}/capture3.jpg`, // capture3 ici
    `/projects/${slug}/capture4.jpg`, // capture4 ici
  ];

  return (
    <div className="mt-4 pt-4 border-t border-[var(--color-border)]/60">
      <p className="font-mono text-[10px] text-[var(--color-muted)] mb-2">captures/</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {shots.map((src) => (
          <Shot key={src} src={src} />
        ))}
      </div>
    </div>
  );
}
