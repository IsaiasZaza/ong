// components/VideoSection.js
import Image from 'next/image';

const VideoSection = () => {
  return (
    <div className="relative flex items-center justify-center bg-gray-100 h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/valor.png" // replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Main content with the video preview */}
      <div className="relative z-10 w-full max-w-3xl px-4">
        <div className="relative overflow-hidden pb-[56.25%]"> {/* Aspect Ratio for 16:9 videos */}
          {/* Video Thumbnail */}
          <iframe
            src="https://www.youtube.com/embed/U1NP1EnFtso?si=KaiSaxAdrt890wOs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
