import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { AppData } from '~/const/AppData'
import { AppResource } from '~/const/AppResource'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const TabsDemo: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="border-4 lg:border-10 border-neutral-300 bg-neutral-100 rounded-4 relative z-10">
        <div className="p-5 lg:p-10 rounded-4 ">
          <Tabs defaultValue={AppData.dataTabs?.[0]?.name}>
            <div className="p-3 lg:p-4 rounded-2 bg-white">
              <p className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700">
                Click to switch demo
                <span className="text-sematic-error pl-1">*</span>
              </p>

              <TabsList className="flex gap-2 justify-start bg-transparent p-0 pt-2 flex-wrap h-auto">
                {AppData.dataTabs?.map((item, index) => (
                  <TabsTrigger
                    value={item?.name}
                    key={index}
                    className="typo-s12-w400 text-neutral-700 data-[state=active]:typo-s12-w500 data-[state=active]:bg-primary-black data-[state=active]:text-white data-[state=active]:shadow-sm border border-neutral-200 rounded w-16"
                  >
                    {item?.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value={AppData.dataTabs?.[0]?.name} className="mt-4">
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="bg-white p-3 lg:p-10 rounded-2 col-span-12 lg:col-span-5">
                  <img
                    src={AppResource.images.img_home_1.src}
                    alt="img_home_1"
                    className="aspect-1/1 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-2 col-span-12 lg:col-span-7 h-max">
                  {AppData.dataInputTShirt?.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-4' : 'mt-0'}>
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor={item?.name}
                      >
                        {item?.label}
                      </Label>
                      <Input
                        placeholder={item?.placeholder}
                        className="mt-1 typo-s14-w400 lg:typo-s16-w400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value={AppData.dataTabs?.[1]?.name} className="mt-4">
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="bg-white p-3 lg:p-10 rounded-2 col-span-12 lg:col-span-5">
                  <img
                    src={AppResource.images.img_home_8.src}
                    alt="img_demo"
                    className="aspect-1/1 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-2 col-span-12 lg:col-span-7 h-max">
                  {AppData.dataInputCanvas?.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-4' : 'mt-0'}>
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor={item?.name}
                      >
                        {item?.label}
                      </Label>
                      <Input
                        placeholder={item?.placeholder}
                        className="mt-1 typo-s14-w400 lg:typo-s16-w400"
                      />
                    </div>
                  ))}
                  <div className="mt-4">
                    <div className="grid w-full gap-y-1">
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor="picture"
                      >
                        Upload Photo
                      </Label>

                      <Input
                        type="file"
                        id="files_picture"
                        className="hidden"
                      />
                      <Label
                        htmlFor="files_picture"
                        className="rounded-[6px] border border-neutral-200 mt-1"
                      >
                        <div className="flex items-center px-3 py-2">
                          <p className="typo-s14-w500 text-neutral-800 cursor-pointer rounded-lg border border-neutral-500 bg-neutral-200 px-3 py-1 leading-[20px] hover:opacity-80">
                            Choose file
                          </p>
                          <p className="typo-s14-w400 ml-2 text-main-neutral-600">
                            No file chosen
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value={AppData.dataTabs?.[2]?.name} className="mt-4">
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="bg-white p-3 lg:p-10 rounded-2 col-span-12 lg:col-span-5">
                  <img
                    src={AppResource.images.img_home_9.src}
                    alt="img_demo_2"
                    className="aspect-1/1 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-2 col-span-12 lg:col-span-7 h-max">
                  {AppData.dataInputBlanket?.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-4' : 'mt-0'}>
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor={item?.name}
                      >
                        {item?.label}
                      </Label>
                      <Input
                        placeholder={item?.placeholder}
                        className="mt-1 typo-s14-w400 lg:typo-s16-w400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value={AppData.dataTabs?.[3]?.name} className="mt-4">
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="bg-white p-3 lg:p-10 rounded-2 col-span-12 lg:col-span-5">
                  <img
                    src={AppResource.images.img_home_10.src}
                    alt="img_demo_3"
                    className="aspect-1/1 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-2 col-span-12 lg:col-span-7 h-max">
                  {AppData.dataInputHats?.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-4' : 'mt-0'}>
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor={item?.name}
                      >
                        {item?.label}
                      </Label>
                      <Input
                        placeholder={item?.placeholder}
                        className="mt-1 typo-s14-400 lg:typo-s16-w400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value={AppData.dataTabs?.[4]?.name} className="mt-4">
              <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                <div className="bg-white p-3 lg:p-10 rounded-2 col-span-12 lg:col-span-5">
                  <img
                    src={AppResource.images.img_home_11.src}
                    alt="img_demo_4"
                    className="aspect-1/1 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-2 col-span-12 lg:col-span-7 h-max">
                  {AppData.dataInputMug?.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-4' : 'mt-0'}>
                      <Label
                        className="typo-s14-w500 lg:typo-s16-w500 text-neutral-700"
                        htmlFor={item?.name}
                      >
                        {item?.label}
                      </Label>
                      <Input
                        placeholder={item?.placeholder}
                        className="mt-1 typo-s14-w400 lg:typo-s16-w400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
