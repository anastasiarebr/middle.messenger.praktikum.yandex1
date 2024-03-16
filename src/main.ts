import Handlebars from 'handlebars'
import loginForm from './pages/Login'

import { user } from './user'
import { inputUserField } from './helpers'

const template = Handlebars.compile(loginForm(user.login, user.password))

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template({})

const inputLogin = document.querySelector<HTMLDivElement>('#login')
const inputPassword = document.querySelector<HTMLDivElement>('#password')

inputLogin?.addEventListener('input', (e) => inputUserField(e, 'login'))
inputPassword?.addEventListener('input', (e) => inputUserField(e, 'password'))
