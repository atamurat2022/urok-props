import React from "react";
import ClassComp from "./ClassComp";
import Header from "./Header";
import Coods from "./Coods";

export default function Com() {
  const headerData = {
    siteName: "TExt Site name",
    nav: [
      {
        link: "nav1",
        text: "my-Link",
      },
      {
        link: "nav2",
        text: "my-Link 2",
      },
      {
        link: "nav3",
        text: "my-Link 3",
      },
      {
        link: "nav4",
        text: "my-Link 4",
      },
      {
        link: "nav5",
        text: "my-Link 5",
      },
      {
        link: "na6",
        text: "my-Link 6",
      },
      {
        link: "nav7",
        text: "my-Link 7",
      },
    ],
  };
  const goods = [
    {
      title: "apple",
      cost: "200",
      imege:
        "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-256.png",
    },
    {
      title: "banana",
      cost: "100",
      imege:
        "https://cdn1.iconfinder.com/data/icons/food-111/512/banana-512.png",
    },
    {
      title: "pera",
      cost: "220",
      imege: "https://cdn3.iconfinder.com/data/icons/veggies/512/pear.png",
    },
    {
      title: "Watermelon",
      cost: "200",
      imege:
        "https://cdn0.iconfinder.com/data/icons/fruits-82/128/Fruits_-_Color-07-512.png",
    },
  ];

  return (
    <>
      <ClassComp />
      <Header data={headerData} />

      {goods.map((item) => (
        <Coods title={item.title} cost={item.cost} imege={item.imege} />
      ))}

      <Coods
        title={goods[0].title}
        cost={goods[0].cost}
        imege={goods[0].imege}
      />
    </>
  );
}
