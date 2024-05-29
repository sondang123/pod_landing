import { AppResource } from '../AppResource'

export const AppData = {
  dataTabs: [
    {
      name: 'T-Shirt',
    },
    {
      name: 'Canvas',
    },
    {
      name: 'Blanket',
    },
    {
      name: 'Hats',
    },
    {
      name: 'Mug',
    },
  ],
  dataInputTShirt: [
    {
      label: "Grandpa's Name",
      placeholder: 'ex Papa,Grandpa,....',
      name: 'grandpa_name',
    },
    {
      label: "KID'S & GRANDKID'S NAMES 1",
      placeholder: 'ex Logan, Eli, Emily,...',
      name: 'KID_1',
    },
    {
      label: "KID'S & GRANDKID'S NAMES 2",
      placeholder: 'ex Logan, Eli, Emily,...',
      name: 'KID_2',
    },
    {
      label: "KID'S & GRANDKID'S NAMES 3",
      placeholder: 'ex Logan, Eli, Emily,...',
      name: 'KID_3',
    },
    {
      label: "KID'S & GRANDKID'S NAMES 4",
      placeholder: 'ex Logan, Eli, Emily,...',
      name: 'KID_4',
    },
  ],
  dataInputCanvas: [
    {
      label: 'Custom Nickname',
      placeholder: 'ex Daddy, Dad,...',
      name: 'custom_name',
    },
    {
      label: 'Baby Name',
      placeholder: 'ex Sophia, Ethan,..',
      name: 'baby_name',
    },
  ],
  dataInputBlanket: [
    {
      label: 'Other Nickname',
      placeholder: 'ex Mommy,Mom,...',
      name: 'other_nickname',
    },
    {
      label: 'Happy ... Christmas',
      placeholder: 'ex 1st, 2nd,...',
      name: 'happy_christmas',
    },
    {
      label: 'Your child’s name',
      placeholder: 'ex Charlotte,...',
      name: 'child_name',
    },
  ],
  dataInputHats: [
    {
      label: 'Enter Your Custom Text (Displayed on the visor of the hat)',
      placeholder: 'ex Papa, Daddy,..',
      name: 'custom_text',
    },
    {
      label: "GRANDPA'S NICKNAME",
      placeholder: 'ex Papa, Daddy,..',
      name: 'grandpa_nickname',
    },
    {
      label: "GRANDKID'S NAMES (UP TO 6 AND PUT A COMMA AFTER EACH NAME)",
      placeholder: 'ex Oliva, Cade,..',
      name: 'grandkid_names',
    },
  ],
  dataInputMug: [
    {
      label: 'Nickname',
      placeholder: 'ex Mimi, Grandma,..',
      name: 'nick_and_name',
    },
    {
      label: 'Kids or Grandkids Names (Between 2 Kids by Commas)',
      placeholder: 'ex Ethan, Evan,...',
      names: 'kids_or_grandkids',
    },
  ],
  dataWhyUsePersonalify: [
    {
      icon: AppResource.icons.ic_why_use_1,
      title: 'Easy and Fast Customization',
      subTitle:
        'Our interface is intuitive and easy to use, allowing customers to effortlessly customize fields such as names, images, and personal messages.',
    },
    {
      icon: AppResource.icons.ic_why_use_2,
      title: 'Enhance Personal and Business Brand Value',
      subTitle:
        'Businesses can use personalized products to promote their brand and leave a strong impression on customers and partners.',
    },
    {
      icon: AppResource.icons.ic_why_uses_3,
      title: 'Easy Integration and Connectivity',
      subTitle:
        'Personalify easily integrates with platform like Shopify allowing efficient store and order management.',
    },
  ],

  dataSlider: [
    {
      title: "That's very wonderful",
      subTitle:
        'Personalify has completely transformed my online store. My customers love the ability to personalize their products, and my sales have increased significantly.',
      avatar: AppResource.images.img_home_12,
      name: 'John Edward',
      position: 'Client ',
    },
    {
      title: 'It’s just incredible!',
      subTitle:
        'I’ve been using Personalify for a few months now, and the customization options are fantastic. My customers enjoy creating unique products, and the process is so intuitive.',
      avatar: AppResource.images.img_home_13,
      name: 'Emily R.',
      position: 'Client',
    },
    {
      title: 'It’s just incredible!',
      subTitle:
        'It’s easy for my customers to add their own text and images to products. The quality of the printed items is excellent, and I’ve seen a noticeable increase in repeat business.',
      avatar: AppResource.images.img_home_14,
      name: 'Jimmy Bartney',
      position: 'Client ',
    },
    {
      title: 'Personalify is truly outstanding',
      subTitle:
        'The variety of products that can be customized is impressive, and the interface is user-friendly. My customers are thrilled with their personalized items."',
      avatar: AppResource.images.img_home_15,
      name: 'Sarah Lisa',
      position: 'Client ',
    },
  ],
}
