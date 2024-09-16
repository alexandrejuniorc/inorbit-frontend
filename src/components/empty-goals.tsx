import { Plus } from 'lucide-react'
import { letsStart, logo } from '../assets'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets start" />

      <p className="leading-relaxed text-center text-zinc-300 max-w-80">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button type="button">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
