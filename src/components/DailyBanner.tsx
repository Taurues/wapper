import { View, Button } from "@tarojs/components";
import "./DailyBanner.less";

export default function DailyBanner({ onClick }) {
  return (
    <View className="daily-banner">
      <View className="banner-content">
        <View className="banner-title">每日精选壁纸</View>
        <View className="banner-desc">发现今日最美壁纸，点我查看详情！</View>
        <Button className="banner-btn" onClick={onClick}>
          立即查看
        </Button>
      </View>
    </View>
  );
}
