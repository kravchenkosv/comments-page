import React from 'react';
import CommentHeding from './comment-heding';


export default class CommentOne extends React.Component{
    render() {
        return (
            <div style={{marginLeft: this.props.styleML + 'px'}} id={this.props.comment.id} className="panel panel-success">

                <CommentHeding
                    comment={this.props.comment}
                    delete={this.props.delete}
                    listenIdForComment={this.props.listenIdForComment}
                    listenIdForEdit={this.props.listenIdForEdit}
                    disabled={this.props.disabled}
                />

                <div className="panel-body">
                    {this.props.comment.comment}
                </div>
                {this.props.comments.map((comment) =>

                    this.props.comment.id == comment.prnt_id &&
                    <CommentOne
                        delete={this.props.delete}
                        listenIdForComment={this.props.listenIdForComment}
                        listenIdForEdit={this.props.listenIdForEdit}
                        styleML='30'
                        key={comment.id}
                        comment={comment}
                        comments={this.props.comments}
                    />
                )}
            </div>
        );
    }
}