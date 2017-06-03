import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            clickForComment: false,
            clickForEdit: false
        };
        this.focus = this.focus.bind(this);
        this.postComment = this.postComment.bind(this);
        this.textChange = this.textChange.bind(this);
    }

    postComment(e) {

        e.preventDefault();

        let self = this,
            prnt_id = this.props.idForComment;

        if(self.state.value == '') {
            console.log('поустое поле');
            return false;
        }

        if(this.state.clickForEdit) {

            if(prnt_id == 0) {
                prnt_id = this.props.editComment.prnt_id;
            }

            axios.patch('/edit', {
                id: this.props.idForEdit,
                prnt_id: prnt_id,
                comment: self.state.value
            })
                .then(function (response) {

                    if(response['data']){
                        self.props.send();
                        self.props.deleteSubForEdite();
                        self.focus();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {

            axios.post('/store', {
                prnt_id: prnt_id,
                comment: self.state.value
            })
                .then(function (response) {

                    if(response['data']){
                        self.props.send();
                        self.setState({value: ''});
                        self.focus();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    focus(){
        this.textInput.focus();
    }

    textChange(e) {
        this.setState({value: e.target.value})
    }

    componentWillReceiveProps(nextProps){
        this.setState({clickForComment: nextProps.clickForComment});
        this.setState({clickForEdit: nextProps.clickForEdit});

        if(nextProps.clickForEdit != this.props.clickForEdit || nextProps.idForEdit != this.props.idForEdit || !nextProps.clickForEdit) {
            nextProps.editComment.comment ? this.setState({value: nextProps.editComment.comment}) : this.setState({value: ''});
        }
    }

    render() {
        return (
            <div className="row inner-form">
                <form onSubmit={this.postComment} className="col-sm-10 col-sm-offset-1">
                    <div className="form-group text-right">
                        <div className="sub">
                            {this.props.idForComment > 0 && <div>Комментарий к #{this.props.idForComment}<button onClick={this.props.deleteSubForComment} type="button" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></button></div>}
                            {this.props.idForEdit > 0 && <div>Редактировать комментарий #{this.props.idForEdit}<button onClick={this.props.deleteSubForEdite} type="button" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span></button></div>}
                        </div>
                        <textarea ref={(input) => this.textInput = input} value={this.state.value} onChange={this.textChange} name="comment" id="comment"  className="form-control" rows="3"></textarea>
                    </div>
                    <button id="submit-btn" type="submit" className="btn btn-default">Send</button>
                </form>
            </div>
        );
    }
}