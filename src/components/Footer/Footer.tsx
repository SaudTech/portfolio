import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='h-40 w-full flex flex-col justify-center'>
      <p className='text-lightTextColor/50'>
        Built with <Link href="https://react.dev/" label='React' />, {" "}
        <Link href="https://www.typescriptlang.org/" label='TypeScript' />, {" "}
        <Link href="https://tailwindcss.com/" label='Tailwind' />, and {" "}
        <Link href="https://vercel.com/" label='Vercel' />.
      </p>
    </div>
  )
};


const Link = ({ href, label }: { href: string, label: string }) => <a className='hover:text-lightTextColor hover:underline transition-all duration-200' href={href} target='_blank'>{label}</a>;

export default Footer