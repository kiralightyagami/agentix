import React from 'react'
import { Logo, LogoIcon } from './logo'
import { Container } from './container'
import Link from 'next/link';
import { Button } from './ui/button';

export const Navbar = () => {

 const navlinks = [
    {
        title: "Features",
        href: "/features"
    },
    {
        title: "Product",
        href: "/product"
    },
    {
        title: "Socials",
        href: "/social"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    
 ];

  return (
    <div className='border-b border-neutral-200 dark:border-neutral-800'>
        <Container className='flex items-center justify-between py-4'>
        <Logo/>
        <div className='flex items-center gap-4'>
            {navlinks.map((item,index) => (
                <Link key={index} 
                href={item.href}
                className='text-sm text-neutral-600 dark:text-neutral-400 font-medium'
                >
                {item.title}
                </Link>
            ))}
        </div>
        <div className='flex items-center gap-4'>
            <Link href="login" className='text-sm text-neutral-600 dark:text-neutral-400 font-medium'>
                Login
            </Link>
            <Button className=''>
                SignUp
            </Button>
        </div>
        </Container> 
    </div>
  )
}
