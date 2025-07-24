import { View } from "@tarojs/components";
import { useState } from "react";
import "./CategoryTabs.less";

const categories = [
  { key: "nature", label: "自然" },
  { key: "city", label: "城市" },
  { key: "abstract", label: "抽象" },
  { key: "animal", label: "动物" },
  { key: "art", label: "艺术" },
];

export default function CategoryTabs({ onChange }) {
  const [active, setActive] = useState("nature");

  const handleTabClick = (key) => {
    setActive(key);
    onChange && onChange(key);
  };

  return (
    <View className="category-tabs">
      {categories.map((cat) => (
        <View
          key={cat.key}
          className={`tab-item${active === cat.key ? " active" : ""}`}
          onClick={() => handleTabClick(cat.key)}
        >
          {cat.label}
        </View>
      ))}
    </View>
  );
}
