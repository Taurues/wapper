import { View, Button } from "@tarojs/components";
import "./index.less";

// 静态模拟数据
const wallpapers = [
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
  // 静态视图切换、排序、筛选状态
  const view = "grid"; // 'grid' or 'list'
  const sort = "latest"; // 'latest' | 'oldest' | 'hot'
  const color = "";

  return (
    <View className="favorites-page">
      <View className="favorites-header">
        <View className="favorites-title">我的收藏</View>
        <View className="favorites-actions">
          <Button className="view-btn active">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <rect x="2" y="2" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="12" y="2" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="2" y="12" width="6" height="6" rx="2" fill="#a7d8c7" />
              <rect x="12" y="12" width="6" height="6" rx="2" fill="#a7d8c7" />
            </svg>
          </Button>
          <Button className="view-btn">
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
          <select className="sort-select" value={sort}>
            <option value="latest">最新收藏</option>
            <option value="oldest">最早收藏</option>
            <option value="hot">按热度</option>
          </select>
          <select className="color-select" value={color}>
            <option value="">全部颜色</option>
            <option value="#a7d8c7">绿色</option>
            <option value="#b5d0e6">蓝色</option>
            <option value="#f7cac9">粉色</option>
          </select>
        </View>
      </View>
      <View className={`favorites-content ${view}`}>
        {wallpapers.map((wp) => (
          <View className="favorites-card" key={wp.id}>
            <View className="favorites-img-wrap">
              <img className="favorites-img" src={wp.img} alt={wp.title} />
              <View className="favorites-fav-icon">
                {/* 填充心形icon表示已收藏 */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 21s-6.5-5.2-8.5-8.1C1.2 10.1 2.1 7 5 7c1.7 0 3.1 1.2 3.7 2.2C9.9 8.2 11.3 7 13 7c2.9 0 3.8 3.1 1.5 5.9C18.5 15.8 12 21 12 21z"
                    fill="#f7cac9"
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
