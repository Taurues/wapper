/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2025-07-22 18:51:03
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2025-07-24 15:50:06
 * @FilePath: /wapper/src/pages/index/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import DailyBanner from "../../components/DailyBanner";
import CategoryTabs from "../../components/CategoryTabs";
import WallpaperCard from "../../components/WallpaperCard";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded!");
  });

  // 静态壁纸数据占位
  const wallpapers = [
    { id: 1, title: "夏日森林" },
    { id: 2, title: "城市夜景" },
    { id: 3, title: "抽象色块" },
    { id: 4, title: "可爱猫咪" },
    { id: 5, title: "艺术涂鸦" },
    { id: 6, title: "山川湖泊" },
  ];

  const noop = () => {};

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
        <CategoryTabs onChange={noop} />
      </View>
      <View className="section-title">热门推荐</View>
      <View className="wallpaper-list">
        {wallpapers.slice(0, 3).map((wp) => (
          <WallpaperCard
            key={wp.id}
            title={wp.title}
            onFav={noop}
            onSet={noop}
            onClick={() => goDetail(wp.id)}
          />
        ))}
      </View>
      <View className="section-title">最新上传</View>
      <View className="wallpaper-list">
        {wallpapers.slice(3, 6).map((wp) => (
          <WallpaperCard
            key={wp.id}
            title={wp.title}
            onFav={noop}
            onSet={noop}
            onClick={() => goDetail(wp.id)}
          />
        ))}
      </View>
    </View>
  );
}
