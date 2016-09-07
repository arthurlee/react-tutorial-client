/**
 * Created by arthur on 16/9/7.
 */

var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment</Comment>
				<Comment author="Jordan Walke">This is *another* comment</Comment>
			</div>
		);
	}
});

window.CommentList = CommentList;