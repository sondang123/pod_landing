import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { AppResource } from '~/const/AppResource'

export const TabsWithPersonalify: React.FC = () => {
  return (
    <div>
      <Tabs defaultValue="WIDTH_PERSONALIFY">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
          <div>
            <TabsList className="grid grid-cols-2 rounded-[30px] p-0 bg-neutral-100 w-full lg:w-[368px] h-auto">
              <TabsTrigger
                value="WIDTH_PERSONALIFY"
                className="typo-s12-w600 lg:typo-s16-w600 text-neutral-400 data-[state=active]:bg-primary-black data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[30px] py-3.25"
              >
                With Personalify
              </TabsTrigger>
              <TabsTrigger
                value="WIDTHOUT_PERSONALIFY"
                className="typo-s12-w600 lg:typo-s16-w600 text-neutral-400 data-[state=active]:bg-primary-black data-[state=active]:text-white data-[state=active]:shadow-sm rounded-[30px] py-3.25"
              >
                Without Personalify
              </TabsTrigger>
            </TabsList>

            <div>
              <TabsContent value="WIDTH_PERSONALIFY">
                <div className="mt-4.5 lg:mt-12">
                  <p className="typo-s16-w700 lg:typo-s24-w700">
                    Boosting Sales and Conversion Rates
                  </p>
                  <div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_check.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Enhanced Shopping Experience:
                        </span>
                        The interactive customization process keeps customers
                        engaged, increasing the likelihood of completing a
                        purchase.
                      </p>
                    </div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_check.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Increased Conversion Rates:
                        </span>
                        Offering a unique and personalized shopping experience
                        significantly boosts conversion rates, turning more
                        visitors into paying customers.
                      </p>
                    </div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_check.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Improved Customer Loyalty and Retention:
                        </span>
                        <br className="lg:hidden" />
                        Satisfied customers are more likely to return.
                        Personalify’s customization options ensure that
                        customers get exactly what they want, leading to higher
                        satisfaction and repeat business.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="WIDTHOUT_PERSONALIFY">
                <div className="mt-4.5 lg:mt-12">
                  <p className="typo-s16-w700 lg:typo-s24-w700">
                    Lower Conversion Rates
                  </p>
                  <div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_close_error.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Reduced Customer Confidence:
                        </span>
                        The absence of real-time preview and personalization
                        options can reduce customer confidence in their purchase
                        decisions, leading to higher cart abandonment rates.
                      </p>
                    </div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_close_error.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Generic Marketing:
                        </span>
                        Without insights from customization data, your marketing
                        efforts remain broad and less effective, resulting in
                        lower engagement and conversion rates.
                      </p>
                    </div>
                    <div className="flex mt-4 lg:mt-8 items-start">
                      <img
                        src={AppResource.icons.ic_close_error.src}
                        alt="ic_check"
                        className="w-6 h-6 mr-3"
                        loading="lazy"
                      />
                      <p className="typo-s12-w500 lg:typo-s18-w500 text-neutral-700">
                        <span className="typo-s12-w600 lg:typo-s18-w600">
                          Weaker Customer Loyalty and Retention:
                        </span>
                        Without the ability to personalize products, customers
                        may feel less satisfied with their purchases, leading to
                        lower rates of repeat business.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
          <div>
            <TabsContent value="WIDTH_PERSONALIFY">
              <img
                src={AppResource.images.img_home_5.src}
                alt="img"
                className="w-full lg:w-[80%] ml-auto"
                loading="lazy"
              />
            </TabsContent>
            <TabsContent value="WIDTHOUT_PERSONALIFY">
              <img
                src={AppResource.images.img_home_6.src}
                alt="img"
                className="w-full lg:w-[80%] ml-auto"
                loading="lazy"
              />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
