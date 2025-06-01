import MenuItem from "./MenuItem";

const hotCoffee = [
  {
    image: "./images/menu-1.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$5",
  },
  {
    image: "./images/menu-2.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$7",
  },
  {
    image: "./images/menu-3.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$9",
  },
];
const coldCoffee = [
  {
    image: "./images/menu-1.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$6",
  },
  {
    image: "./images/menu-2.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$8",
  },
  {
    image: "./images/menu-3.jpg",
    title: "Black Coffee",
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
    price: "$10",
  },
];

const MenuItemGrid = () => {
  return (
    <div className="page_width page_max_width mx_auto menu_container_grid grid gap_30 pd_block_40">
      <div className="grid-item">
        <h2 className="scroll_left fn_5">Hot Coffee</h2>
        <div className="flex fl_dir_col gap_20 pd_block_40">
          {hotCoffee.map((item, index) => {
            return (
              <MenuItem
                image={item.image}
                price={item.price}
                title={item.title}
                desc={item.desc}
                classes={'scroll_left'}
              />
            );
          })}
        </div>
      </div>
      <div className="grid-item">
        <h2 className="scroll_right fn_5">Cold Coffee</h2>
        <div className="flex fl_dir_col gap_20 pd_block_40">
          {coldCoffee.map((item, index) => {
            return (
              <MenuItem
                image={item.image}
                price={item.price}
                title={item.title}
                desc={item.desc}
                classes={'scroll_right'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuItemGrid;
