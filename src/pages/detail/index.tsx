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

// SVG icon组件
const IconStar = ({ active }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className="icon-star">
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={active ? "#ffb74d" : "none"}
      stroke="#ffb74d"
      strokeWidth="2"
    />
  </svg>
);
const IconShare = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" className="icon-share">
    <circle cx="12" cy="12" r="10" fill="#4ec16c" opacity="0.15" />
    <path
      d="M18 8.59l-6.59 6.59-4.24-4.24"
      stroke="#4ec16c"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconDownload = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" className="icon-download">
    <circle cx="12" cy="12" r="10" fill="#6c7cf3" opacity="0.15" />
    <path
      d="M12 5v10m0 0l-4-4m4 4l4-4"
      stroke="#6c7cf3"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconWallpaper = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" className="icon-wallpaper">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="4"
      fill="#a7d8c7"
      opacity="0.15"
    />
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="4"
      stroke="#a7d8c7"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" fill="#a7d8c7" />
  </svg>
);

export default function Detail() {
  const [{ time, date }] = useState(getNow());
  const [fav, setFav] = useState(false);
  // 假设页码数据
  const [page, setPage] = useState(4);
  const total = 10;

  // 设为壁纸、下载、分享功能可后续接入原生API
  const handleSet = () => {};
  const handleDownload = () => {};
  const handleShare = () => {};

  return (
    <View className="detail-page">
      <View className="wallpaper-placeholder">
        <View className="wallpaper-time">
          <View className="wallpaper-time-hm">{time}</View>
          <View className="wallpaper-time-date">{date}</View>
        </View>
        <Image src={Img} className="wallpaper-img" mode="aspectFill" />
        {/* 页码指示器 */}
        <View className="page-indicator">
          {page}/{total}
        </View>
        {/* 底部操作栏 */}
        <View className="detail-actions-bar">
          <View className="action-btn" onClick={() => setFav((f) => !f)}>
            <IconStar active={fav} />
            <View className="action-label">收藏</View>
          </View>
          <View className="action-btn" onClick={handleShare}>
            <IconShare />
            <View className="action-label">分享</View>
          </View>
          <View className="action-btn" onClick={handleDownload}>
            <IconDownload />
            <View className="action-label">下载</View>
          </View>
          <View className="action-btn" onClick={handleSet}>
            <IconWallpaper />
            <View className="action-label">设为壁纸</View>
          </View>
        </View>
      </View>
    </View>
  );
}
