import { connect } from 'react-redux'
import { switchPlayer, increment } from '../modules/counter'
import Counter from '../components/Counter'

const mapDispatchToProps = {
  switchPlayer,
  increment
}

const mapStateToProps = (state) => ({
  classes: state.classes
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
