import videoMobile from './assets/SPARKS_Banner_414x684_mobile_x2LoopnoNoise.mp4';

function App() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{
        __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            preload="metadata"
          >
            <source src=${videoMobile} type="video/mp4" />
          </video>`
        }}
      />
    </div>
  );
}

export default App;