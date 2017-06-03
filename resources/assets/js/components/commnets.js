import React from 'react';
import CommentsHeader from './comments-header';
import CommentsList from './comments-list';

export default class Comments extends React.Component{
    render() {
        return (
            <div className='row inner-comments'>
                <div className='col-sm-10 col-sm-offset-1'>

                    <CommentsHeader count={this.props.data.length} />

                    <CommentsList
                        listenIdForComment={this.props.listenIdForComment}
                        listenIdForEdit={this.props.listenIdForEdit}
                        send={this.props.send}
                        data={this.props.data}
                    />
                </div>
            </div>
        );
    }
}