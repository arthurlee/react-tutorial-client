/**
 * Created by arthur on 16/9/7.
 */

var CommentBox = React.createClass({
	getInitialState() {
		return {
			data: []
		}
	},

	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
});

window.CommentBox = CommentBox;
