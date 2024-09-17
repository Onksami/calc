import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <nav>
        <div>
          <h3 className="title">Calculator</h3>
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
