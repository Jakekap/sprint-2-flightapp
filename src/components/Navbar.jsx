import "../sass/_navbar.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <section className="main-container">
      <div className="logo">
        <figure className="logo-brand">
          <img src="/flight.svg" alt="Plane" />
        </figure>
        <h2 className="logo-name">E-flight</h2>
      </div>
      <div className="profile">
        <p className="profile-currency">USD</p>
        <button onClick={handleLogin} className="profile-network_icon">
          <img src="/network.svg" alt="Network" />
        </button>
        <figure className="profile-bell_icon">
          <img src="/bell.svg" alt="Bell" />
        </figure>
        <button className="profile-user_icon">
          <img className="profile-user_icon_img" src="/user.png" alt="User" />
        </button>
      </div>
    </section>
  );
}
