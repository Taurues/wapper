import { useState } from "react";
import { View, Input, Button } from "@tarojs/components";
import WallpaperCard from "../../components/WallpaperCard";
import "./index.less";

const mockHistory = [
  "夏日森林",
  "城市夜景",
  "抽象",
  "猫咪",
  "艺术",
  "山川",
  "湖泊",
  "极光",
  "星空",
  "海边",
  "花卉",
];
const mockWallpapers = [
  { id: 101, title: "推荐壁纸1" },
  { id: 102, title: "推荐壁纸2" },
  { id: 103, title: "推荐壁纸3" },
];

export default function Search() {
  const [history, setHistory] = useState(mockHistory.slice(0, 10));
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.detail.value);
  const handleSearch = () => {
    if (!input.trim()) return;
    setHistory((h) => [input, ...h.filter((i) => i !== input)].slice(0, 10));
    setInput("");
  };
  const handleClear = () => setHistory([]);
  const handleHistoryClick = (val) => setInput(val);

  return (
    <View className="search-page">
      <View className="search-bar">
        <Input
          className="search-input"
          value={input}
          onInput={handleInput}
          placeholder="搜索关键词/颜色/风格..."
        />
        <Button className="search-btn" onClick={handleSearch}>
          搜索
        </Button>
      </View>
      <View className="history-section">
        <View className="history-title">历史搜索</View>
        <View className="history-list">
          {history.length === 0 ? (
            <View className="history-empty">暂无历史</View>
          ) : (
            history.map((item, idx) => (
              <View
                className="history-item"
                key={idx}
                onClick={() => handleHistoryClick(item)}
              >
                {item}
              </View>
            ))
          )}
        </View>
        {history.length > 0 && (
          <Button className="clear-btn" onClick={handleClear}>
            清空
          </Button>
        )}
      </View>
      <View className="section-title">推荐壁纸</View>
      <View className="wallpaper-list">
        {mockWallpapers.map((wp) => (
          <WallpaperCard
            key={wp.id}
            title={wp.title}
            onFav={() => {}}
            onSet={() => {}}
            onClick={() => {}}
          />
        ))}
      </View>
    </View>
  );
}
