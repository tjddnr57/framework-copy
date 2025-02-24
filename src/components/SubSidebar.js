import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SubSidebar.css";

function SubSidebar({ onSendMessage }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  const handleSendMessage = (categoryname) => {
    setSelectedCategory(categoryname);
    onSendMessage(categoryname);
  };

  const titleMap = {
    "/ProductGroup": ["https://localhost:7204/api/department", "사업부 정보", "interx", "departmentCode","departmentName"],
    "/ItemMaster": ["https://localhost:7204/api/itemClassification", "품목 분류", "전체","itemClassification","itemClassificationCode"],
    "/Factory": ["https://localhost:7204/api/department", "사업부 정보", "interx","departmentCode","departmentName"],
    "/Line": ["https://localhost:7204/api/factory", "공장 조직도", "interx","factoryCode","factoryName"],
    "/Process": ["https://localhost:7204/api/department", "사업부 정보", "interx","departmentCode","departmentName"],
    "/Equipment": ["https://localhost:7204/api/factory", "공장 조직도", "interx","factoryCode","factoryName"],
    "/Mold": ["https://localhost:7204/api/factory", "공장 조직도", "interx","factoryCode","factoryName"],
  };
  const title = titleMap[pathname] || titleMap["/ProductGroup"];

  useEffect(() => {
    setSelectedCategory("all")
    fetch(title[0])
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [pathname]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{title[1]}</h2>
      <ul className="space-y-2">
        <li className={`subtitle-parentnode-${selectedCategory === "all"
                ? "before"
                : "after"}`}   onClick={() => 
          handleSendMessage("all")
        }>
          <p>{title[2]}</p>
        </li>
        {categories.map((category) => (
          <li
            key={category[title[3]]}  // departmentCode를 key로 사용
            className={`subsidelist-${
              selectedCategory === category[title[4]]
                ? "before"
                : "after"
            }`}
            onClick={() => handleSendMessage(category[title[4]])}
          >
            {category[title[4]]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubSidebar;
