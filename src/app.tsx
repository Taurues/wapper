import { PropsWithChildren, useState } from "react";
import { useLaunch } from "@tarojs/taro";
import SplashScreen from "./components/SplashScreen";
import "./app.less";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash && <SplashScreen onClose={() => setShowSplash(false)} />}
      {children}
    </>
  );
}

export default App;
