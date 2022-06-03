import videoMobile from './assets/SPARKS_Banner_414x684_mobile_x2LoopnoNoise.mp4';

function App() {
  const videClass = {
    overflow: "hidden",
    background: "#1b1b1b",
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{
        __html: `
          <video className=${videClass} autoPlay muted playsInline loop>
            <source src=${videoMobile} type="video/mp4" />
            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
          </video>`
        }}
      />
    </div>
  );
}

export default App;