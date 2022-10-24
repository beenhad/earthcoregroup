const VideoPlayer = () => {
  return (
    <>
      <video
        src="/videos/ECG.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="w-full object-cover grow"
      ></video>
    </>
  );
};

export default VideoPlayer;
