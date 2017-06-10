import React from "react";
import Article from "../utils/articlesHelper";

class ResultOutput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "plusMinus" : this.props.plusMinus || "plus",
      "method" : this.props.method || "post"
    };
  }

  handleClick(link, title){
    if(this.state.method === "post"){
      Article.post(link, title);
    }
    else if(this.state.method === "delete"){
      Article.delete(title);
    }
  }

  render() {
    return (
			<div>
				<span>{this.props.articleTitle + " "}</span>
        <a href={this.props.articleLink} target={"_blank"}>
          <i className="fa fa-external-link" aria-hidden="true" />
        </a>
        <button onClick={() => this.handleClick(this.props.articleLink, this.props.articleTitle)} className="btn btn-success btn-sm float-right fancy">
          <i className={"fa fa-" + this.state.plusMinus} aria-hidden="true" />
        </button>
			</div>
    );
  }
}

// Export the component back for use in other files
export default ResultOutput;