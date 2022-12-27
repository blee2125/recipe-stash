import Navbar from './navbar'

export default function Layout({children}: {children: any}) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className='top-0 z-50 fixed w-full'><Navbar /></div>
        <main className='flex-1 overflow-y-auto p-20'>{children}</main>
      </div>
    </>
  )
}