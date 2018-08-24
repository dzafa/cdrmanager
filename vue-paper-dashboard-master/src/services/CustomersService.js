import Api from 'services/Api'

export default {
  index () {
    return Api().get('klijenti')
  },
  post (arg) {
    const formData = new FormData()
    formData.append('avatar', arg.logo)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return Api().post('klijent', formData, config)
  }
}
