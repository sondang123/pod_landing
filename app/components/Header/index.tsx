import { Link, useLocation } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'
import { cn } from '~/lib/utils'
import { ButtonFullBg } from '../AppButton/ButtonFullBg'

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const { pathname } = useLocation()

  const [isSticky, setIsSticky] = useState(false)
  const [open, setOpen] = React.useState(false)
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <DesktopContainer
        className={cn(
          ' sticky top-0 z-40 border-b border-neutral-700 bg-neutral-800',
          isSticky ? 'shadow-lg duration-200 ease-in' : ''
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-[25px]">
            <p className="typo-s24-w700 text-white">Personalify</p>
            <ButtonFullBg>Contact us</ButtonFullBg>
          </div>
        </div>
      </DesktopContainer>
      <MobileContainer
        className={cn(
          ' sticky top-0  z-40 bg-white',
          isSticky ? 'shadow-lg  duration-200 ease-in' : ''
        )}
      >
        <div>
          <div className="container mx-auto ">
            <nav className="flex  h-[56px] items-center justify-between ">
              <Link to="/">
                <img
                  src={AppResource.images.img_logo}
                  alt="logo"
                  className="h-[32px] object-contain"
                />
              </Link>

              <div>
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <i className="ri-menu-line ri-2x"></i>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[70%]">
                    {/* <SheetHeader></SheetHeader> */}
                    <div>
                      <Link
                        to="/"
                        onClick={() => {
                          setOpen(false)
                        }}
                      >
                        <img
                          src={AppResource.images.img_logo}
                          alt="logo"
                          className="h-[32px] object-contain"
                        />
                      </Link>
                    </div>
                    <div className="mt-3">
                      {AppData.dataMenu?.map((item, index) => {
                        if (
                          pathname === item?.link ||
                          (pathname === '/detail' && item?.link === '/careers')
                        ) {
                          return (
                            <Link
                              to={item?.link}
                              className="transition hover:opacity-80"
                              key={index}
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              <p className="typo-s16-w700 border-b border-shapes-2 py-3 text-main-primary">
                                {item?.title}
                              </p>
                            </Link>
                          )
                        } else {
                          return (
                            <Link
                              to={item?.link}
                              className="transition hover:opacity-80"
                              key={index}
                              onClick={() => {
                                setOpen(false)
                              }}
                            >
                              <p className="typo-s16-w500 border-b border-shapes-2 py-3 text-neutral-5">
                                {item?.title}
                              </p>
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </nav>
          </div>
        </div>
      </MobileContainer>
    </>
  )
}
