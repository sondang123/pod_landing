import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { DesktopContainer, MobileContainer } from '~/const/StyleGlobal'
interface ItemSLiderProps {
  title?: string
  subtile?: string
  avatar?: string
  name?: string
  position?: string
}
export const ListSlider: React.FC = () => {
  const ItemSlider: React.FC<ItemSLiderProps> = ({
    title,
    subtile,
    avatar,
    name,
    position,
  }) => {
    return (
      <div className="p-5 lg:p-8 bg-neutral-900 rounded-3 h-full flex flex-col">
        <div className="pb-4 lg:pb-8.5">
          <p className="typo-s16-w600 lg:typo-s18-w600 text-white">{title}</p>
          <p className="typo-s14-w500 lg:typo-s16-w500 text-neutral-300 pt-3 lg:pt-4">
            {subtile}
          </p>
        </div>
        <div className="pt-4 lg:pt-7 flex items-center mt-auto border-t border-neutral-700 ">
          <img
            src={avatar}
            alt="avatar-1"
            className="w-[56px] lg:w-[77px] mr-5 rounded-lg"
            loading="lazy"
          />

          <div>
            <p className="typo-s16-w600 lg:typo-s20-w600 text-white">{name}</p>
            <p className="typo-s12-w400 lg:typo-s14-w400 text-neutral-200">
              {position}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <DesktopContainer>
        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {AppData.dataSlider?.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <ItemSlider
                  title={item?.title}
                  subtile={item?.subTitle}
                  avatar={item?.avatar.src}
                  name={item?.name}
                  position={item?.position}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative">
            <div className="absolute left-[50%] bottom-[-76px] translate-x-[-50%]">
              <CarouselPrevious className=" ml-[-26px] w-[50px] h-[50px]" />
              <CarouselNext className="w-[50px] h-[50px]" />
            </div>
          </div>
        </Carousel>
      </DesktopContainer>
      <MobileContainer>
        <div className="flex flex-col gap-y-3">
          {AppData.dataSlider?.map((item, index) => (
            <div key={index}>
              <ItemSlider
                title={item?.title}
                subtile={item?.subTitle}
                avatar={item?.avatar.src}
                name={item?.name}
                position={item?.position}
              />
            </div>
          ))}
        </div>
      </MobileContainer>
    </div>
  )
}
