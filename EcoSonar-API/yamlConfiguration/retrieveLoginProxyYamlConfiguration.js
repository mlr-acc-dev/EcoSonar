const path = require('path')
const fs = require('fs')
const YAML = require('js-yaml')

module.exports = {
  getLoginInformations: async function () {
    try {
      const ymlFile = fs.readFileSync(path.join(__dirname, './login.yaml'), 'utf8')
      return YAML.load(ymlFile)
    } catch (e) {
      return false
    }
  },

  getProxyInformations: async function () {
    try {
      const ymlFile = fs.readFileSync(path.join(__dirname, './proxy.yaml'), 'utf8')
      return YAML.load(ymlFile)
    } catch {
      return false
    }
  },

  retrieveUserJourneyInformation: async function (url) {
    try {
      const files = fs.readdirSync(path.join(__dirname, './userJourney'))
      const urlWithoutSpecialCharacters = url.replace(/[:?/]/g, '') + '.json'
      if (files.includes(urlWithoutSpecialCharacters)) {
        return JSON.parse(fs.readFileSync(path.join(__dirname, './userJourney/', urlWithoutSpecialCharacters)))
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }
}
