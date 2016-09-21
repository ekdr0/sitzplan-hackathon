import React from 'react';
import { Link } from 'react-router';


export const Sidebar = React.createClass({

  render() {

    return (
        <aside className="game__aside">
          <Link to="/">Back...</Link>
          <p>
            Welcome to the <strong>Berlin</strong> office.
            Nerf guns are not allowed! Put your dirty dishes in the dishwasher...
          </p>
          <form>
            <input type="" placeholder="Search..." />
          </form>
        </aside>
      );

  }

});