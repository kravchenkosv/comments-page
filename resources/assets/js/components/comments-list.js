import React from 'react';
import CommentOne from './comment-one';
import ReactDOM from 'react-dom';

export default class CommentsList extends React.Component{

    constructor(){
        super();
        this.state = {
            styleML: '0',
            disabled: false
        };
        this.delete = this.delete.bind(this);
    }

    delete(e) {
        let self = this,
            id = e.target.getAttribute('data-id');

        self.setState({disabled: true});
        setTimeout(function () {
            self.setState({disabled: false})
        }, 500);

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
                        <CommentOne
                            delete={this.delete}
                            listenIdForComment={this.props.listenIdForComment}
                            listenIdForEdit={this.props.listenIdForEdit}
                            key={comment.id} styleML={this.state.styleML}
                            comment={comment}
                            comments={this.props.data}
                            disabled={this.state.disabled}
                        />
                    )}
                </div>
            </div>
        );
    }
}
