import { connect } from 'react-redux'
import { Selectors } from '../reducers'
import { ActionCreators as Actions } from '../actions'
import { toJS } from '../lib'
import App from '../components/App'

const mapStateToProps = (state) => ({
  userEmail: Selectors.userEmail(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateUserEmail: email => dispatch(Actions.updateUserEmail(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(App))
