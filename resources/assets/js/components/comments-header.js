import React from 'react';
class CommentsHeader extends React.Component{
    render() {
        return (
            <div className='page-header'>
                <h3><small className='pull-right'>{this.props.count} комментариев</small> Комментарии...</h3>
            </div>
        );
    }
}
export default CommentsHeader;