import React from 'react';
import axios from 'axios';
import Form from './form';
import Comments from './commnets';
import SomePost from './some-post';

export default class App extends React.Component
{
    constructor() {
        super();
        this.state = {
            data: [],
            idForComment: 0,
            idForEdit: 0,
            clickForComment: false,
            clickForEdit: false,
            editComment: []
        };
    }

    getDataComments() {
        let self = this;

        axios.get('/show')
            .then(function (response) {

                if(response.data.length > 0){
                    self.setState({ data: response.data });
                    let bool_id = false;

                    self.state.data.forEach(function(item){

                        if(item.id == self.state.idForComment || item.id == self.state.idForEdit) {
                            bool_id = true;
                            return false;
                        }
                    });

                    if(!bool_id) {
                        self.setState({
                            idForEdit: 0,
                            clickForEdit: false,
                            idForComment: 0,
                            clickForComment:false,
                            editComment: []
                        });
                    }
                } else {
                    self.setState({
                        idForEdit: 0,
                        clickForEdit: false,
                        idForComment: 0,
                        clickForComment:false,
                        editComment: [],
                        data: []
                    });
                    console.log('пусто')
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    listenIdForComment(e){
        let self = this,
            id = e.target.getAttribute('data-id');

        if(self.state.clickForEdit) {
            if(this.state.idForEdit == id) {
                return false;
            }
            self.setState({
                idForComment: id,
                clickForComment: true
            });
        } else {
            self.setState({
                idForComment: id,
                clickForComment: true,
                editComment: []
            });
        }

    }

    listenIdForEdit(e){
        let self = this,
            id = e.target.getAttribute('data-id');
        self.setState({
            idForEdit: id,
            clickForEdit: true,
            idForComment: 0,
            clickForComment: false
        });

        if(id) {

            self.state.data.forEach(function(item) {

                if(id == item.id) {
                    self.setState({editComment: item});
                    return false;
                }
            });
        }
    }

    deleteSubForComment () {
        this.setState({
            idForComment: 0,
            clickForComment: false
        })
    }

    deleteSubForEdite () {
        this.setState({
            idForComment: 0,
            idForEdit: 0,
            clickForComment: false,
            clickForEdit: false,
            editComment: []
        })
    }

    componentDidMount(){
        this.getDataComments()
    }

    render() {
        return (
            <div className="container">

                <SomePost />

                <Comments
                    data={this.state.data}
                    listenIdForComment={this.listenIdForComment.bind(this)}
                    listenIdForEdit={this.listenIdForEdit.bind(this)}
                    send={this.getDataComments.bind(this)}
                />

                <Form
                    editComment={this.state.editComment}
                    send={this.getDataComments.bind(this)}
                    clickForComment={this.state.clickForComment}
                    clickForEdit={this.state.clickForEdit}
                    idForComment={this.state.idForComment}
                    idForEdit={this.state.idForEdit}
                    deleteSubForComment={this.deleteSubForComment.bind(this)}
                    deleteSubForEdite={this.deleteSubForEdite.bind(this)}
                />
            </div>
        );
    }
}
