import Handlebars from 'handlebars'

import { Input } from '../../components/input/index.ts'
import { Title } from '../../components/title/index.ts'
import { Button } from '../../components/button/index.ts'
import { Link } from '../../components/link/index.ts'

import LoginForm from './index.hbs?raw'

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);

const template = Handlebars.compile(LoginForm)

const loginForm = (login: string, password: string) => template({login, password})

export default loginForm