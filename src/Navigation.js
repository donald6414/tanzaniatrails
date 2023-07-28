import logo from './logo.svg';
export default function App() {
  return (
    <div className=''>
        <div className="flex justify-between p-6">
            <div>
                <img src={logo} className='w-16 h-16' />
            </div>
            <div>
                <ul className='flex flex-row justify-center text-center'>
                    <li className='p-2'>
                        Home
                    </li>
                    <li className='p-2'>Our Tours</li>
                    <li className='p-2'>Destination</li>
                    <li className='p-2'>Contacts</li>
                </ul>
            </div>
        </div>
    </div>
  )
}