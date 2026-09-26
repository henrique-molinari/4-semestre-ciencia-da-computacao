type HeaderProps = {
  title: string
  subtitle: string
}


export function Header({ title, subtitle }: HeaderProps) {

  return (

    <header className='bg-slate-900 px-6 py-4 text-white'>
      <h1 className='text-2xl font-bold'>
        {title}
      </h1>
      <p className="text-slate-300">
        {subtitle}
      </p>
    </header>
  )
}