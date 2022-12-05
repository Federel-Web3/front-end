import { ConnectArgs } from '@wagmi/core'
import { MetamaskConnect } from './components/MetamaskConnect'

type Props = {
  handleClick: () => void
  name: string
}

export const GenericConnect = ({ handleClick, name }: Props) => {
  if (name === 'MetaMask')
    return <MetamaskConnect handleClick={() => handleClick()}></MetamaskConnect>

  return (
    <li onClick={() => handleClick()}>
      <a
        href="#"
        className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
      >
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
      </a>
    </li>
  )
}
