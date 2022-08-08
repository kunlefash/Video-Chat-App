import React, { useState } from "react";
import AgoraUIKit, { PropsInterface } from "agora-react-uikit";

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: "<Your Agora App ID>",
      channel: "test",
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
      {videocall ? (
        <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} />
      ) : null}
    </div>
  );
};

const styles = {
  container: { width: "100vw", height: "100vh", display: "flex", flex: 1 },
};
