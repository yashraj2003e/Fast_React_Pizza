import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <h1>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
