/**
 * Created by arthur on 16/9/7.
 */

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

window.CommentBox = CommentBox;
