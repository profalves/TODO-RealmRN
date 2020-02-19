
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = {
  linearGradient: {
    flex: 1,
    paddingTop: 30 + getStatusBarHeight(true),
    paddingHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  form: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20
  },
  input: {
    flex: 1,
    marginTop: 30,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF'
  },
  button: {
    backgroundColor: '#6bd4c1',
    marginLeft: 10,
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 20,
    height: 40,
    alignSelf: 'flex-end'
  },
  error: {
    color: '#F03',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginBottom: 15,
    color: '#000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export default styles;