import { View, Button, Image } from "@tarojs/components";
import "./WallpaperCard.less";

export default function WallpaperCard({
  img,
  title = "壁纸标题",
  fav = false,
  hot = 0,
  color = "",
  onFav,
  onSet,
  onClick,
}) {
  return (
    <View className="wallpaper-card" onClick={onClick}>
      <View className="wallpaper-img-placeholder">
        <Image className="wallpaper-img" src={img} mode="aspectFill" />
        <View
          className="wallpaper-fav-icon"
          onClick={(e) => {
            e.stopPropagation();
            onFav && onFav();
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 21s-6.5-5.2-8.5-8.1C1.2 10.1 2.1 7 5 7c1.7 0 3.1 1.2 3.7 2.2C9.9 8.2 11.3 7 13 7c2.9 0 3.8 3.1 1.5 5.9C18.5 15.8 12 21 12 21z"
              fill={fav ? "#f7cac9" : "none"}
              stroke="#bfae9e"
              strokeWidth="2"
            />
          </svg>
        </View>
      </View>
      <View className="wallpaper-info">
        <View className="wallpaper-title">{title}</View>
        <View className="wallpaper-meta">
          <View className="wallpaper-hot">🔥{hot}</View>
          {color && (
            <View className="wallpaper-color" style={{ background: color }} />
          )}
        </View>
        <View className="wallpaper-actions">
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
