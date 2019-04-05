import Vue from 'vue'

const api = {
  install: (Vue, options) => {
    Vue.mixin({
      methods: {
        $api() {
          const $axios = this.$store.$axios
          const $store = this.$store

          const token = $store.getters['token/getApiToken']
          if (token) {
            $axios.setToken(token, 'Bearer')
          }

          const methods = {
            menu: {
              async ui(params = {}) {
                return await $axios
                  .get('/ui', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              }
            },
            auth: {
              async login(params = {}) {
                return await $axios
                  .post('/auth/login', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              },
              async logout(params = {}) {
                return await $axios
                  .post('/auth/logout', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              },
              async register(params = {}) {
                return await $axios
                  .put('/auth/register', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              },
              async reset(params = {}) {
                return await $axios
                  .post('/auth/reset', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              },
              async restore(params = {}) {
                return await $axios
                  .post('/auth/reset/token', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err.response
                  })
              }
            },
            user: {
              async get(params = {}) {
                return await $axios
                  .get('/user', params)
                  .then(res => {
                    return res.data.data
                  })
                  .then(err => {
                    return err
                  })
              },
              async update(params = {}) {
                return await $axios
                  .post('/user', params)
                  .then(res => {
                    return res.data.data
                  })
                  .then(err => {
                    return err
                  })
              }
            },
            company: {
              async get(params = {}) {
                return await $axios
                  .get('/company', params)
                  .then(res => {
                    return res.data.data
                  })
                  .then(err => {
                    return err
                  })
              },
              async update(params = {}) {
                return await $axios
                  .post('/company', params)
                  .then(res => {
                    return res.data.data
                  })
                  .then(err => {
                    return err
                  })
              }
            },
            dataView: {
              async get(params = {}) {
                return await $axios
                  .get('/data-view', { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async create(params = {}) {
                return await $axios
                  .get('/data-view/create', { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/data-view/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async update(id, params = {}) {
                return await $axios
                  .post(`/data-view/${id}`, params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteById(id, params = {}) {
                return await $axios
                  .delete(`/data-view/${id}`, params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async render(id) {
                return await $axios
                  .get(`/data-view/render/${id}`, {
                    headers: {
                      Accept: 'application/pdf'
                    },
                    responseType: 'arraybuffer'
                  })
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async store(params = {}) {
                return await $axios
                  .put('/data-view', params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            recordGroups: {
              async get(params = {}) {
                return await $axios
                  .get('/record-groups', { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/record-groups/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getCertificatesById(id, params = {}) {
                return await $axios
                  .get(`/record-groups/${id}/certificates`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteById(id, params = {}) {
                return await $axios
                  .delete(`/record-groups/${id}`, { params })
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async updateById(id, params = {}) {
                return await $axios
                  .post(`/record-groups/${id}`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async add(params = {}) {
                return await $axios
                  .put(`/record-groups/`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            recordLookups: {
              async getRecordLookups(params = {}) {
                return await $axios
                  .get(`/record-lookups/`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async updateRecordLookups(id, params = {}) {
                return await $axios
                  .post(`/record-lookups/${id}`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async createRecordLookups(params = {}) {
                return await $axios
                  .put(`/record-lookups/custom`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteRecordLookups(id) {
                return await $axios
                  .delete(`/record-lookups/custom/${id}`)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            dataListDefaults: {
              async getDataListDefaults(params = {}) {
                return await $axios
                  .get(`/data-list-defaults`, params)
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            dataGroups: {
              async dataListGroups(params = {}) {
                return await $axios
                  .get(`/data-list-groups/`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/data-list-groups/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            roles: {
              async get(params = {}) {
                return await $axios
                  .get(`/roles`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteById(id, params = {}) {
                return await $axios
                  .delete(`/roles/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/roles/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async updateById(id, params = {}) {
                return await $axios
                  .post(`/roles/${id}`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getCreate(params = {}) {
                return await $axios
                  .get(`/roles/create`, { params })
                  .then(res => {
                    return res.data.data
                  })
              },
              async create(params = {}) {
                return await $axios
                  .put(`/roles`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            users: {
              async get(params = {}) {
                return await $axios
                  .get(`/users`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteById(id, params = {}) {
                return await $axios
                  .delete(`/users/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/users/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async updateById(id, params = {}) {
                return await $axios
                  .post(`/users/${id}`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async create(params = {}) {
                return await $axios
                  .put(`/users`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            upload: {
              async upload(params = {}) {
                return await $axios
                  .post(`/upload`, params)
                  .then(res => {
                    return res.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getImageByUrl(url) {
                return await $axios
                  .get(url, {
                    headers: {
                      Accept: 'image/*'
                    },
                    responseType: 'blob'
                  })
                  .then(res => {
                    return res.data
                  })
                  .catch(err => {
                    return err
                  })
              }
            },
            groups: {
              async get(params = {}) {
                return await $axios
                  .get(`/groups`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async deleteById(id, params = {}) {
                return await $axios
                  .delete(`/groups/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async getById(id, params = {}) {
                return await $axios
                  .get(`/groups/${id}`, { params })
                  .then(res => {
                    return res.data.data
                  })
                  .catch(err => {
                    return err
                  })
              },
              async updateById(id, params = {}) {
                return await $axios
                  .post(`/groups/${id}`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              },
              async create(params = {}) {
                return await $axios
                  .put(`/groups`, params)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    return err
                  })
              }
            }
          }
          return methods
        }
      }
    })
  }
}

Vue.use(api)
