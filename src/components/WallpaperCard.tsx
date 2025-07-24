import { View, Button, Image } from "@tarojs/components";
import "./WallpaperCard.less";

const demoImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";

export default function WallpaperCard({
  title = "壁纸标题",
  onFav,
  onSet,
  onClick,
}) {
  return (
    <View className="wallpaper-card" onClick={onClick}>
      <View className="wallpaper-img-placeholder">
        <Image className="wallpaper-img" src={demoImg} mode="aspectFill" />
      </View>
      <View className="wallpaper-info">
        <View className="wallpaper-title">{title}</View>
        <View className="wallpaper-actions">
          <Button
            className="fav-btn"
            onClick={(e) => {
              e.stopPropagation();
              onFav && onFav();
            }}
          >
            收藏
          </Button>
          <Button
            className="set-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSet && onSet();
            }}
          >
            设为壁纸
          </Button>
        </View>
      </View>
    </View>
  );
}
