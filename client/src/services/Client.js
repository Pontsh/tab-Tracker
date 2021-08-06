import Api from '@/services/Api'

export default {
  clients () {
    return Api().get()
  }
}
