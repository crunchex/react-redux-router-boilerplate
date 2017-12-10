import { connect } from 'react-redux'
import { Selectors } from '../reducers'
import { toJS } from '../lib'
import App from '../components/App'

const mapStateToProps = (state) => ({
  userEmail: Selectors.userEmail(state)
})

export default connect(mapStateToProps, null)(toJS(App))
