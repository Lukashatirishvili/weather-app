import Itemlist from "./Itemlist";
import Logo from "./Logo";

function Layout() {
  return (
    <div className="col-2 border-right vh-100 ">
      <div className="pt-4">
        <Logo />
        <Itemlist />
      </div>
    </div>
  );
}

export default Layout;
