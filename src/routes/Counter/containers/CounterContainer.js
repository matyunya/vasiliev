import { connect } from 'react-redux'
import { switchPlayer } from '../modules/counter'
import Counter from '../components/Counter'

const mapDispatchToProps = {
  switchPlayer
}

const mapStateToProps = (state) => ({
  playerClass: state.classes.playerClass,
  classes: state.classes
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
