import { useRef, useState, useEffect } from 'react';

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
  coverSrc: string;
}

const AudioPlayer = ({ audioSrc, title, coverSrc }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (sec: number) => {
    sec = Math.floor(sec);
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const handlePlayClick = () => {
    // Pause all other audio elements on the page
    document.querySelectorAll('audio').forEach(audio => {
      if (audio !== audioRef.current) {
        audio.pause();
      }
    });
    audioRef.current?.play();
  };

  const handlePauseClick = () => {
    audioRef.current?.pause();
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  return (
    <div className="box-audio w-full">
      <div 
        className="eaudio w-full" 
        data-audio={audioSrc}
        data-title={title}
        data-cover={coverSrc}
      >
        <div className="eaudio-main">
          {/* CAPA 1:1 */}
          <div className="eaudio-cover-wrap">
            <img 
              className="eaudio-cover" 
              src={coverSrc} 
              alt="Capa da Música"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/84?text=🎵';
              }}
            />
          </div>

          {/* CONTEÚDO */}
          <div className="eaudio-content">
            <h3 className="eaudio-title line-clamp-2">{title}</h3>

            <div className="eaudio-controls-line">
              {/* PLAY / PAUSE Button */}
              {!isPlaying ? (
                <button 
                  className="eaudio-btn eaudio-play" 
                  aria-label="Tocar"
                  onClick={handlePlayClick}
                >
                  ▶
                </button>
              ) : (
                <button 
                  className="eaudio-btn eaudio-pause" 
                  aria-label="Pausar"
                  onClick={handlePauseClick}
                >
                  ❚❚
                </button>
              )}

              {/* WRAPPER DA BARRA + TEMPOS */}
              <div className="eaudio-progress-wrap">
                <input 
                  type="range" 
                  className="eaudio-progress" 
                  min="0" 
                  max={duration || 100}
                  value={currentTime}
                  step="0.1"
                  onChange={handleProgressChange}
                />
                
                <div className="eaudio-time">
                  <span className="eaudio-time-current">{formatTime(currentTime)}</span>
                  <span className="eaudio-time-duration">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <audio 
          ref={audioRef}
          preload="metadata" 
          src={audioSrc}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
