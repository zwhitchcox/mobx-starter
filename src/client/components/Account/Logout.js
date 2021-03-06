import React from 'react'
import { connect } from 'mobx-connect'
import Loading from '../Common/Loading'

@connect
class Logout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const { account } = this.context.store
        const { state, router } = this.context

        account.logout().then(() => {
            this.setState({
                loading: false
            })
            setTimeout(() => router.push('/'), 200)
        })
    }

    render() {
        const { state } = this.context

        if (state.loading) {
            return <Loading/>
        }

        return <main>
            <center className="account">
                <h3>Signing out...</h3>
            </center>
        </main>
    }
}

export default Logout
