import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="menu-wrap">
        <header>
          <img
            src="https://cdn0.iconfinder.com/data/icons/coffee-brewing-glyph/16/10-512.png"
            alt="Cafe Ferrol"
            width="128"
          />
          <h4 id="header-title" className="header-title ">
            Cafe Ferrol
          </h4>
        </header>

        <table className="table-menu">
          <tbody>
            <tr>
              <td className="t-title">Espresso</td>
              <td className="t-price">2.75</td>
            </tr>
            <tr>
              <td className="t-title">Macchiato</td>
              <td className="t-price">3.25</td>
            </tr>
            <tr>
              <td className="t-title">Cappuccino</td>
              <td className="t-price">3.5</td>
            </tr>
            <tr>
              <td className="t-title">Caffé Latte</td>
              <td className="t-price">4</td>
            </tr>
            <tr>
              <td className="t-title">Caffé Mocha</td>
              <td className="t-price">5</td>
            </tr>
            <tr>
              <td className="t-title">Drip Blend</td>
              <td className="t-price">2.75</td>
            </tr>
            <tr>
              <td className="t-title">Cold Brewed Iced</td>
              <td className="t-price">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
