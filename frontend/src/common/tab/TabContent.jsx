import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends Component {
    render(){
        const {id, children, tab} = this.props
        let selected = tab.selected === id
        return(
            <div id={id}
                className={`tab-pane ${selected ?  'active' : ''}`}>
                {children}
            </div>
        )
    }
}
const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)