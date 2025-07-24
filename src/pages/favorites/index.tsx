import { View, Button, Picker } from "@tarojs/components";
import { useState } from "react";
import "./index.less";

// 静态模拟数据
const wallpapersInit = [
  {
    id: 1,
    title: "夏日森林",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    fav: true,
    hot: 123,
    color: "#a7d8c7",
    time: "2024-07-01 10:00",
  },
  {
    id: 2,
    title: "城市夜景",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    fav: true,
    hot: 88,
    color: "#b5d0e6",
    time: "2024-07-02 09:30",
  },
  {
    id: 3,
    title: "抽象色块",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=400&q=80",
    fav: true,
    hot: 66,
    color: "#f7cac9",
    time: "2024-07-03 08:20",
  },
];

export default function Favorites() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("latest");
  const [color, setColor] = useState("");
  const [wallpapers, setWallpapers] = useState(wallpapersInit);

  const sortOptions = [
    { label: "最新收藏", value: "latest" },
    { label: "最早收藏", value: "oldest" },
    { label: "按热度", value: "hot" },
  ];
  const colorOptions = [
    { label: "全部颜色", value: "" },
    { label: "绿色", value: "#a7d8c7" },
    { label: "蓝色", value: "#b5d0e6" },
    { label: "粉色", value: "#f7cac9" },
  ];

  // 收藏/取消收藏
  const toggleFav = (id: number) => {
    setWallpapers(
      wallpapers.map((wp) => (wp.id === id ? { ...wp, fav: !wp.fav } : wp))
    );
  };

  return (
    <View className="favorites-page">
      <View className="favorites-header">
        <View className="favorites-title">我的收藏</View>
        <View className="favorites-actions">
          <Button
            className={`view-btn${view === "grid" ? " active" : ""}`}
            onClick={() => setView("grid")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <rect x="2" y="2" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="12" y="2" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="2" y="12" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="12" y="12" width="6" height="6" rx="2" fill="#a7d8c7" />
            </svg>
          </Button>
          <Button
            className={`view-btn${view === "list" ? " active" : ""}`}
            onClick={() => setView("list")}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <rect x="2" y="4" width="16" height="3" rx="1.5" fill="#bfae9e" />
              <rect x="2" y="9" width="16" height="3" rx="1.5" fill="#bfae9e" />
              <rect
                x="2"
                y="14"
                width="16"
                height="3"
                rx="1.5"
                fill="#bfae9e"
              />
            </svg>
          </Button>
          <Picker
            mode="selector"
            range={sortOptions}
            rangeKey="label"
            value={sortOptions.findIndex((item) => item.value === sort)}
            onChange={(e) => setSort(sortOptions[e.detail.value].value)}
          >
            <View className="sort-select">
              {sortOptions.find((item) => item.value === sort)?.label}
            </View>
          </Picker>
          <Picker
            mode="selector"
            range={colorOptions}
            rangeKey="label"
            value={colorOptions.findIndex((item) => item.value === color)}
            onChange={(e) => setColor(colorOptions[e.detail.value].value)}
          >
            <View className="color-select">
              {colorOptions.find((item) => item.value === color)?.label}
            </View>
          </Picker>
        </View>
      </View>
      <View className={`favorites-content ${view}`}>
        {wallpapers
          .filter((wp) => !color || wp.color === color)
          .sort((a, b) => {
            if (sort === "latest") return b.time.localeCompare(a.time);
            if (sort === "oldest") return a.time.localeCompare(b.time);
            if (sort === "hot") return b.hot - a.hot;
            return 0;
          })
          .map((wp) => (
            <View className="favorites-card" key={wp.id}>
              <View className="favorites-img-wrap">
                <img className="favorites-img" src={wp.img} alt={wp.title} />
                <View
                  className="favorites-fav-icon"
                  onClick={() => toggleFav(wp.id)}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.15s",
                    transform: wp.fav ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <path
                      d="M12 21s-6.5-5.2-8.5-8.1C1.2 10.1 2.1 7 5 7c1.7 0 3.1 1.2 3.7 2.2C9.9 8.2 11.3 7 13 7c2.9 0 3.8 3.1 1.5 5.9C18.5 15.8 12 21 12 21z"
                      fill={wp.fav ? "#f7cac9" : "none"}
                      stroke="#bfae9e"
                      strokeWidth="2"
                    />
                  </svg>
                </View>
              </View>
              <View className="favorites-info">
                <View className="favorites-title-row">
                  <View className="favorites-title">{wp.title}</View>
                  <View className="favorites-hot">🔥{wp.hot}</View>
                </View>
                <View className="favorites-meta">
                  <View className="favorites-time">{wp.time}</View>
                  <View
                    className="favorites-color"
                    style={{ background: wp.color }}
                  />
                </View>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
