import { FormEvent, useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import axios from "axios";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    setIsUserSignedIn(true)

    await axios.post('/sessions', {
      email: 'matporto03@gmail.com',
      password: '12345678'
    })
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">

      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' classname='mt-4'>
          <h2>Ignite Lab</h2>
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          <p>Faça o login e comece a usar!</p>
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4' onSubmit={handleSignIn}>

        { isUserSignedIn && <Text>Login Realizado</Text>}

        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <Input.InputRoot>
          <Input.InputIcon>
            <Envelope />
          </Input.InputIcon>
          <Input.InputContent  id='email' placeholder='Digite seu e-mail' type='email' />
        </Input.InputRoot>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <Input.InputRoot>
          <Input.InputIcon>
            <Lock />
          </Input.InputIcon>
          <Input.InputContent id='password' placeholder='********' type='password'/>
        </Input.InputRoot>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm'>
          <a href="" className='underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text size='sm'>
          <a href="" className='underline hover:text-gray-200'>Não possui conta? Crie uma agora</a>          
        </Text>
      </footer>

    </div>
  )
}
