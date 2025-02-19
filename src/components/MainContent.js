import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  const titleMap = {
    "/ProductGroup": ["/api/ProductGroup", "사업부정보", "interx"],
    "/ItemMaster": ["/api/ItemMaster", "품목분류", "전체"],
    "/Factory": ["/api/Factory", "사업부 정보", "interx"],
    "/Line": ["/api/Line", "공장 조직도", "interx"],
    "/Process": ["/api/Process", "사업부 정보", "interx"],
    "/Equipment": ["/api/Equipment", "공장 조직도", "interx"],
    "/Mold": ["/api/Mold", "공장 조직도", "interx"],
  };
  const title = titleMap[pathname] || titleMap["/ProductGroup"];
  useEffect(() => {

    fetch(title[0])
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [title]);

  return (
    
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{title[1]}</h2>
      <ul className="space-y-2">
        <li className="subtitle-parentnode">
          <p>{title[2]}</p>
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`p-2 rounded cursor-pointer ${selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default CategoryList;
