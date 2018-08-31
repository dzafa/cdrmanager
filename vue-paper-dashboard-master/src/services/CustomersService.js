import Api from 'services/Api'

export default {
  index () {
    return Api().get('klijenti')
  },
  post (arg) {
    const fd = new FormData()
    fd.append('contract_number', arg.contract_number)
    fd.append('name', arg.name)
    fd.append('cdr_number', arg.cdr_number)
    fd.append('request_number', arg.request_number)
    fd.append('image', arg.pictureInput)
    fd.append('address', arg.address)
    fd.append('city', arg.city)
    fd.append('contact_person', arg.contact_person)
    fd.append('email', arg.email)
    fd.append('contact_number', arg.contact_number)
    fd.append('services_type', arg.services_type)
    fd.append('bht_support_contact', arg.bht_support_contact)
    return Api().post('klijent', fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  delete (id) {
    return Api().delete('klijent/' + id)
  }
}
