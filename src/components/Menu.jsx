import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MenuCustomList = ({ buttonText, menuItems }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 text-base font-normal capitalize tracking-normal"
        >
          {buttonText}
        </Button>
      </MenuHandler>
      <MenuList className="menuu gap-2 px-2 mt-1 pb-0 overflow-visible">
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ title, description }) => (
            <li key={title}>
              <a href="#" className="block">
                <MenuItem>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {title}
                  </Typography>
                  {description && (
                    <Typography variant="small" color="gray" className="mt-1">
                      {description}
                    </Typography>
                  )}
                </MenuItem>
              </a>
            </li>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default MenuCustomList;
