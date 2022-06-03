import video from './assets/SPARKS_Banner_1440x754_web_x2Loop_noNoise.mp4';
import videoMobile from './assets/SPARKS_Banner_414x684_mobile_x2LoopnoNoise.mp4';


function App() {
  const videClass = {
    maxWidth: "100vw",
    width: "100%",
    height: "75vh",
    minHeight: "650px",
    maxHeight: "800px",
    overflow: "hidden",
    background: "#1b1b1b",
  };

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
        __html: `
          <video className=${videClass} autoPlay muted playsInline loop>
            <source src=${video} type="video/mp4" />
            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
          </video>`
      }}
      />
      <div
        dangerouslySetInnerHTML={{
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
