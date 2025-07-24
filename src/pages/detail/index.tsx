import { View, Button, Image } from "@tarojs/components";
import { useState } from "react";
import "./index.less";
import Img from "../../assets/imgs/warpper.jpeg";

function getNow() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return {
    time: `${hour}:${min}`,
    date: `${year}年${month}月${day}日`,
  };
}

export default function Detail() {
  const [{ time, date }] = useState(getNow());
  return (
    <View className="detail-page">
      <View className="wallpaper-placeholder">
        <View className="wallpaper-time">
          <View className="wallpaper-time-hm">{time}</View>
          <View className="wallpaper-time-date">{date}</View>
        </View>
        <Image src={Img} className="wallpaper-img" mode="aspectFill" />
        <View className="actions">
          <Button className="set-btn">设为壁纸</Button>
          <Button className="fav-btn">收藏</Button>
        </View>
      </View>
    </View>
  );
}
