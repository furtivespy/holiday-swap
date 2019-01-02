import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Alignment, Icon} from '@blueprintjs/core'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import {Link} from 'react-router-dom'

const Title = styled.span`
    font-weight: bold;
    font-size: 26px;
`

const UserImage = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

class Header extends React.Component {
    render () {
        return (
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading><Title>Holiday Swap!</Title></NavbarHeading>
                    <input className="pt-input" placeholder="Searh does nothing..." type="text" />
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Link to="/"><Button minimal={true} icon="home">Home</Button></Link>
                    <NavbarDivider />
                    <Link to="/login">
                        { !isLoaded(this.props.profile) || isEmpty(this.props.profile) ? 
                          <Button minimal={true}><Icon icon="user" iconSize={30}/></Button>
                        : <Button minimal={true}><UserImage src={this.props.profile.avatarUrl} alt="user image" /></Button>
                        }
                    </Link>
                    <Button minimal={true}><Icon icon="help" iconSize={20}/></Button>
                    <Link to="/admin"><Button minimal={true}><Icon icon="cog" iconSize={20}/></Button></Link>
                </NavbarGroup>
            </Navbar>
        )
    }
}

Header.propTypes = {
    profile: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Header)