import React from "react";
import { Dropdown, Menu } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        href="https://www.linkedin.com/in/gorkempasaoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
          alt="LinkedIn Logo"
          className="w-4 h-4 icon-white mr-5"
        />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        href="https://instagram.com/grkmpasaoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
          alt="Instagram Logo"
          className="w-4 h-4 icon-white mr-5"
        />
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        href="https://x.com/grkmpasaoglu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.etsystatic.com/47286684/r/il/d2aac4/5474882517/il_1140xN.5474882517_rsqo.jpg"
          alt="X Logo"
          className="w-4 h-4 icon-white"
        />
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        href="mailto:gorkempasaoglu@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 text-white"
        >
          <path
            fill="currentColor"
            d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
          />
        </svg>
      </a>
    ),
  },
];

const menu = (
  <Menu className="custom-dropdown-menu">
    {items.map((item) => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ))}
  </Menu>
);

const HeaderDrop = () => (
  <Dropdown overlay={menu} trigger={["click"]}>
    <div
      onClick={(e) => e.preventDefault()}
      className="relative inline-block text-custom-white text-sm xl:text-lg syne-header group custom-dropdown-trigger"
    >
      ILETISIM
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </div>
  </Dropdown>
);

export default HeaderDrop;
