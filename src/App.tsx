import React, { useState } from "react";
import AgoraUIKit, { PropsInterface, layout } from "agora-react-uikit";

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(false)
  const [isPinned, setPinned] = useState(false)
  const props: PropsInterface = {
    rtcProps: {
      appId: "<Your Agora App ID>",
      channel: "test",
      role: isHost ? 'host' : 'audience',
      layout: isPinned ? layout.pin : layout.grid,
      token: null, // pass in channel token if the app is in secure mode
    },
    callbacks: {
      EndCall: () => setVideocall(false),
    },
    styleProps: {
      localBtnContainer: { backgroundColor: "yellow" },
    },
  };
  return (
    <div style={styles.container}>
        {videocall ? (<>
          <div style={styles.nav}>
            <p style={{ fontSize: 20, width: 200 }}>You're {isHost ? 'a host' : 'an audience'}</p>
            <p style={styles.btn} onClick={() => setRole(!isHost)}>Change Role</p>
            <p style={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p>
          </div>
          <AgoraUIKit
            rtcProps={props.rtcProps}
            callbacks={props.callbacks}
            styleProps={props.styleProps} /></>
        ) : (
          <h3 style={styles.btn} onClick={() => setVideocall(true)}>Start Call</h3>
        )}
      </div>
  )
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
  heading: { textAlign: 'center' as const, marginBottom: 0 },
  videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 } as React.CSSProperties,
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: 5, color: '#ffffff', fontSize: 20 },
}

export default App