import { CSSTransition } from "react-transition-group";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";

export default function MobileNavSidebar({ showMobileNav, setShowMobileNav }) {
  return (
    <>
      <ClientOnlyPortal selector="#nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="navigation-sidebar">
            <NavigatorMobile />
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
