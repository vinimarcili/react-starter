export default class ValidatorHelper {
  xor(x: any, y: any) {
    return (x || y) && !(x && y)
  }

  nameSpecialChars(name: string) {
    return /^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(name)
  }

  fullName(name: string): boolean {
    const nameVerified = name.trim()
    const arrayNames = nameVerified.split(' ')
    if (arrayNames.length < 2) {
      return false
    }
    for (const currentName of arrayNames) {
      if (!/^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(currentName)) {
        return false
      }
    }
    return true
  }

  email(email: string): boolean {
    // eslint-disable-next-line max-len
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      email
    )
  }

  ageLessThan(value: string, referenceNumber: number): boolean {
    const today = new Date()
    const birthDate = new Date(value)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() <= birthDate.getDate())) {
      age--
    }
    return age < referenceNumber
  }

  ageOverThan(value: string, referenceNumber: number): boolean {
    const today = new Date()
    const birthDate = new Date(value)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() <= birthDate.getDate())) {
      age--
    }
    return age > referenceNumber
  }

  url(url: string): boolean {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(url)
  }

  date(date: string): boolean {
    return !!Date.parse(date)
  }

  cnpj(value = '') {
    if (value.length !== 14) {
      return false
    }
    for (const digit of Array.from(Array(10).keys())) {
      if (Array(14).fill(digit).join('') === value) {
        return false
      }
    }

    let size = value.length - 2
    let numbers: any = value?.substring(0, size)
    const digits = value?.substring(size)
    let sum = 0
    let pos = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--
      if (pos < 2) {
        pos = 9
      }
    }
    if (sum % 11 < 2 ? 0 : 11 - (sum % 11) !== parseInt(digits.charAt(0), 10)) {
      return false
    }

    size = size + 1
    numbers = value?.substring(0, size)
    sum = 0
    pos = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(numbers - i) * pos--
      if (pos < 2) {
        pos = 9
      }
    }
    if (sum % 11 < 2 ? 0 : 11 - (sum % 11) !== parseInt(digits.charAt(1), 10)) {
      return false
    }
    return true
  }

  phone(phone = '') {
    const regex = /(\d{2})(\d{0,1})(\d{4})(\d{4})/
    return phone.match(regex) !== null
  }

  cpf(value = '') {
    let sum = 0
    let rest
    if (/^(.)\1+$/.test(value)) {
      return false
    }

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(value?.substring(i - 1, i), 10) * (11 - i)
    }
    rest = (sum * 10) % 11

    if (rest === 10 || rest === 11) {
      rest = 0
    }
    if (rest !== parseInt(value?.substring(9, 10), 10)) {
      return false
    }

    sum = 0
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(value?.substring(i - 1, i), 10) * (12 - i)
    }
    rest = (sum * 10) % 11

    if (rest === 10 || rest === 11) {
      rest = 0
    }
    if (rest !== parseInt(value?.substring(10, 11), 10)) {
      return false
    }
    return true
  }

  Fn = {
    validaRut: function (rutCompleto: string) {
      rutCompleto = rutCompleto.replace(/\./g, '').replace('‐', '-')
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false
      const tmp = rutCompleto.split('-')
      let digv = tmp[1]
      const rut = tmp[0]
      if (digv == 'K') digv = 'k'

      return this.dv(rut) == digv
    },
    dv: function (T: any) {
      let M = 0,
        S = 1
      for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11
      return S ? S - 1 : 'k'
    },
  }

  recordEmployment(recordEmployment = '') {
    let total = 0
    let residual = 0
    let strResto = ''

    if (recordEmployment === '00000000000') {
      return false
    }

    for (let i = 0, ftap = '3298765432', resultado = 0; i <= 9; i++) {
      resultado = Number(recordEmployment.slice(i, i + 1)) * Number(ftap.slice(i, i + 1))
      total = total + resultado
    }

    residual = total % 11
    if (residual !== 0) {
      residual = 11 - residual
    }

    if (residual === 10 || residual === 11) {
      strResto = residual.toString()
      residual = Number(strResto.slice(1, 2))
    }

    if (residual !== Number(recordEmployment.slice(10, 11))) {
      return false
    }

    return true
  }

  setCpfMask = (cpf: string) => {
    const num = cpf.replace(/[^\d]/g, '')
    const len = num.length

    if (len <= 6) {
      cpf = num.replace(/(\d{3})(\d{1,3})/g, '$1.$2')
    } else if (len <= 9) {
      cpf = num.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3')
    } else {
      cpf = num.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, '$1.$2.$3-$4')
    }
    return cpf
  }

  setCnpjMask = (cnpj: string) => {
    const num = cnpj.replace(/[^\d]/g, '')
    const len = num.length

    if (len <= 5) {
      cnpj = num.replace(/(\d{2})(\d{1,3})/g, '$1.$2')
    } else if (len <= 8) {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{1,3})/g, '$1.$2.$3')
    } else if (len <= 12) {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/g, '$1.$2.$3/$4')
    } else {
      cnpj = num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/g, '$1.$2.$3/$4-$5')
    }
    return cnpj
  }
}
