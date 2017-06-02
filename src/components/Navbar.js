import React from "react";

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<nav className="navbar navbar-inverse bg-primary">
				<div className="container">
					<ul className="nav navbar-nav navbar-logo mx-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">
								<h1 className="text-center text-white">{"React NYT Search"}</h1>
							</a>
						</li>
					</ul>
				</div>
			</nav>
    );
  }
}

// Export the component back for use in other files
export default Navbar;
