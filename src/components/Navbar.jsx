import "../sass/_navbar.scss";

export default function Navbar() {
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
        <figure className="profile-network_icon">
          <img src="/network.svg" alt="Network" />
        </figure>
        <figure className="profile-bell_icon">
          <img src="/bell.svg" alt="Bell" />
        </figure>
        <figure className="profile-user_icon">
          <img className="profile-user_icon_img" src="/user.png" alt="User" />
        </figure>
      </div>
    </section>
  );
}
