/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2025-07-22 18:51:03
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2025-07-24 15:50:06
 * @FilePath: /wapper/src/pages/index/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import { View, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import DailyBanner from "../../components/DailyBanner";
import CategoryTabs from "../../components/CategoryTabs";
import WallpaperCard from "../../components/WallpaperCard";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded!");
  });

  // 静态壁纸数据
  const wallpapersInit = [
    {
      id: 1,
      title: "夏日森林",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      fav: false,
      hot: 123,
      color: "#a7d8c7",
    },
    {
      id: 2,
      title: "城市夜景",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      fav: true,
      hot: 88,
      color: "#b5d0e6",
    },
    {
      id: 3,
      title: "抽象色块",
      img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=400&q=80",
      fav: false,
      hot: 66,
      color: "#f7cac9",
    },
    {
      id: 4,
      title: "可爱猫咪",
      img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
      fav: false,
      hot: 99,
      color: "#f7cac9",
    },
    {
      id: 5,
      title: "艺术涂鸦",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      fav: false,
      hot: 77,
      color: "#b5d0e6",
    },
    {
      id: 6,
      title: "山川湖泊",
      img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=400&q=80",
      fav: false,
      hot: 55,
      color: "#a7d8c7",
    },
  ];

  const [wallpapers, setWallpapers] = useState(wallpapersInit);

  // 收藏/取消收藏
  const toggleFav = (id) => {
    setWallpapers(
      wallpapers.map((wp) => (wp.id === id ? { ...wp, fav: !wp.fav } : wp))
    );
  };

  // 跳转函数
  const goDetail = (id = 1) => {
    Taro.navigateTo({ url: `/pages/detail/index?id=${id}` });
  };
  const goSearch = () => {
    Taro.navigateTo({ url: "/pages/search/index" });
  };
  const goFav = () => {
    Taro.navigateTo({ url: "/pages/favorites/index" });
  };

  return (
    <View className="index">
      {/* 顶部收藏按钮 */}
      <View className="topbar">
        <View className="topbar-title">壁纸乐园</View>
        <Button className="topbar-btn" onClick={goFav}>
          收藏夹
        </Button>
      </View>
      <DailyBanner onClick={goDetail} />
      <View className="search-bar-large" onClick={goSearch}>
        <View className="search-bar-placeholder">🔍 搜索壁纸/颜色/风格</View>
      </View>
      <View className="category-bar">
        <CategoryTabs onChange={() => {}} />
      </View>
      <View className="section-title">热门推荐</View>
      <View className="wallpaper-list">
        {wallpapers.slice(0, 3).map((wp) => (
          <WallpaperCard
            key={wp.id}
            img={wp.img}
            title={wp.title}
            fav={wp.fav}
            hot={wp.hot}
            color={wp.color}
            onFav={() => toggleFav(wp.id)}
            onSet={() => {}}
            onClick={() => goDetail(wp.id)}
          />
        ))}
      </View>
      <View className="section-title">最新上传</View>
      <View className="wallpaper-list">
        {wallpapers.slice(3, 6).map((wp) => (
          <WallpaperCard
            key={wp.id}
            img={wp.img}
            title={wp.title}
            fav={wp.fav}
            hot={wp.hot}
            color={wp.color}
            onFav={() => toggleFav(wp.id)}
            onSet={() => {}}
            onClick={() => goDetail(wp.id)}
          />
        ))}
      </View>
    </View>
  );
}
