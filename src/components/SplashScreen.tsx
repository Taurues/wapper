import { useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
import "./SplashScreen.less";

export default function SplashScreen({ onClose }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  if (!visible) return null;
  return (
    <View className="splash-mask">
      <View className="splash-content">
        <View className="splash-img">LOGO图片占位</View>
        <View
          className="splash-close"
          onClick={() => {
            setVisible(false);
            onClose && onClose();
          }}
        >
          ×
        </View>
      </View>
    </View>
  );
}
