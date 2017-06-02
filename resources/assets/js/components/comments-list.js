import React from 'react';
import CommentOne from './comment-one';
import ReactDOM from 'react-dom';

class CommentsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            styleML: '0'
        };
        this.delete = this.delete.bind(this);
    }
    delete(e) {
        let self = this,
            id = e.target.getAttribute('data-id');

        axios({
            method: 'delete',
            url: '/delete',
            data: { id: id }
        })
            .then(function (response) {
                if(response['data']){
                    self.props.send();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
            <div>
                <div className='comments-list'>
                    {this.props.data.map((comment) =>
                        parseInt(comment.prnt_id) == 0 &&
                        <CommentOne delete={this.delete} listenIdForComment={this.props.listenIdForComment} listenIdForEdit={this.props.listenIdForEdit} key={comment.id} styleML={this.state.styleML} comment={comment} comments={this.props.data}/>
                    )}
                </div>
            </div>
        );
    }
}
export default CommentsList;
