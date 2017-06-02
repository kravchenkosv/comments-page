import React from 'react';
import AddButton from './add-button';
import TimeAgo from 'timeago-react';
import ReactDOM from 'react-dom';



class CommentHeding extends React.Component{
    constructor() {
        super();
        this.state= {
            timeAgo: ''
        }
    }
    componentDidMount() {
        let container = document.getElementById('comment-date-'+this.props.comment.id);
        ReactDOM.render(<TimeAgo datetime={this.props.comment.created_at} locale='ru' />, container);
    }


    render() {
        return (
                <div className="panel-heading">
                    <span className="panel-title">#{this.props.comment.id}</span>
                    <div className='pull-right'>
                        <span id={'comment-date-'+this.props.comment.id} className="comment-date">{this.state.timeAgo}</span>
                        <AddButton action={this.props.listenIdForComment} dataId={this.props.comment.id} type="info" icon="envelope" />
                        <AddButton action={this.props.listenIdForEdit} dataId={this.props.comment.id} type="warning" icon="pencil" />
                        <AddButton action={this.props.delete} dataId={this.props.comment.id} type="danger" icon="remove" />
                    </div>
                </div>
        );
    }
}
export default CommentHeding;