import Api from 'services/Api'

export default {
  index () {
    return Api().get('sap')
  },
  post (arg) {
    return Api().post('sap', arg)
  }
}
