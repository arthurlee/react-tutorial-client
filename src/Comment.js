/**
 * Created by arthur on 16/9/7.
 */

var Comment = React.createClass({
	rawMarkup: function () {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return {__html: rawMarkup};
	},

	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

window.Comment = Comment;
