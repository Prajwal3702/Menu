import menu1 from "../../assets/menu1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div id="menu" className="about">
        <div className="menu-title">
          <h1>Menu</h1>
        </div>
      </div>
      <div className="menu-sections">
        <div className="menu-left">
          <img src={menu1} alt="" />
        </div>

        <div className="menu-right">
          <ul className="menu-right">
            <li className="list-group-item">Cras justo odio</li>
            <br />
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <br />
            <li className="list-group-item">Morbi leo risus</li>
            <br />
            <li className="list-group-item">Porta ac consectetur ac</li>
            <br />
            <li className="list-group-item">Mini Vada</li>
            <br />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
