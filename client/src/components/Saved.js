import React from "react";

import ResultOutput from "./children/ResultOutput";

class Saved extends React.Component {

  constructor(props) {
    super(props);
		console.log("Saved array content: ", this.props.savedArray);
		this.state = {
			"savedArray" : this.props.savedArray || true
		};
  }

	fillSaved(i){
		console.log("Read out1/1/1/1/1/1/1");
		return (
			<div>
				<ResultOutput articleTitle={i.title} articleLink={i.link} plusMinus={"minus"} method={"delete"}/>
				<hr />
			</div>
		);
	}

  render() {
		if(this.state.savedArray === true){
				return null;
		}
		else{
			return (
				<div className="row">
					<div className="offset-lg-2 col-lg-8 jumbotron">
						<h2 className="text-center text-primary">Saved</h2>
						<hr />
						{this.state.savedArray.map(this.fillSaved)}
					</div>
				</div>
			);
		}
  }
}

// Export the component back for use in other files
export default Saved;
