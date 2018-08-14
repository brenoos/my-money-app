import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

class TabHeader extends Component {
    render(){
        let selected = this.props.tab.selected === this.props.target
        const { selectTab, target, icon, label } = this.props
        return(
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;'
                    data-toggle='tab'
                    onClick={() => selectTab(target)}
                    data-target={target}>
                    <i className={`fa fa-${icon}`}></i> {label}
                </a>
            </li>
        )
    }
}
const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TabHeader)