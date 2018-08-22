import Api from 'services/Api'

export default {
  index () {
    return Api().get('klijenti')
  },
  post (arg) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    return Api().post('klijent', arg)
  }
}
