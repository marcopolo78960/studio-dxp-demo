import { GetPath, TemplateConfig, TemplateProps } from '@yext/pages';
import GridContainer from '../components/GridContainer';
import '../index.css';

import HeaderSimple from '../components/HeaderSimple';
import Headline from '../components/Headline';
import HStack from '../components/HStack';
import Item from '../components/Item';
import ItemsGrid from '../components/ItemsGrid';
import Label from '../components/Label';

import BigButton from '../components/BigButton';
import CenteredContainer from '../components/CenteredContainer';
import Divider from '../components/Divider';
import Feature from '../components/Feature';
import FeatureList from '../components/FeatureList';
import IconBadge from '../components/IconBadge';
import PageLayout from '../components/PageLayout';
import Paragraph from '../components/Paragraph';
import ProductImage from '../components/ProductImage';
import ProductTable from '../components/ProductTable';
import Reviews from '../components/Reviews';
import SizePicker from '../components/SizePicker';
import VStack from '../components/VStack';
import '../index.css';

export const config: TemplateConfig = {
  stream: {
    $id: 'skis',
    filter: { entityTypes: ['ce_skis'] },
    localization: { locales: ['en'], primary: false },
    fields: ['name', 'c_price', 'description', 'photoGallery', 'slug'],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};

export default function Product({ document }: TemplateProps) {
  return (
    <>
      <PageLayout backgroundColor='#FFFFFF'>
        <HeaderSimple
          backgroundColor='#BAD8FD'
          logo=' https://a.mktgcdn.com/p/R9FjcYjRNA5dAespqgHFLMvu2m18-E5Apnb3KON0oJY/300x300.png'
        />
        <CenteredContainer>
          <GridContainer columns={2} paddingTop={10}>
            <VStack>
              <Headline
                value={document.name}
                fontWeight='bold'
                textSize='4xl'
              />
              <HStack>
                <Label value={document.c_price} />
                <Reviews averageRating={5} reviewCount={1995} />
              </HStack>
              <SizePicker />
              <BigButton title='Add to cart' />
              <Paragraph
                body={document.description}
                fontWeight='normal'
                textSize='sm'
              />
              <Divider />
              <FeatureList title='Features'>
                <Feature text='Twin Rocker' />
                <Feature text='Full Poplar Woodcore' />
                <Feature text='C/FX Carbon Weave' />
                <Feature text='Cork Damplifier' />
              </FeatureList>
              <GridContainer columns={2} paddingTop={10}>
                <IconBadge
                  title='Lowest Price'
                  subtitle='We guarantee the the lowest price'
                  icon='tag'
                />
                <IconBadge
                  title='Free Returns'
                  subtitle='We cover shipping on returns'
                  icon='tag'
                />
              </GridContainer>
            </VStack>
            <VStack>
              <ProductImage
                src={document.photoGallery[0].image.url}
                alt='Light green backpack with black canvas straps and front zipper pouch.'
              />
              <HStack>
                <ProductImage
                  src='https://cdn.shoplightspeed.com/shops/639258/files/47744503/1000x640x2/blizzard-blizzard-rustler-11-skis-2023.jpg'
                  alt=''
                />
                <ProductImage
                  src='https://cdn.skiessentials.com/media/catalog/product/cache/a62fda1dbcde718479b9c838816c57df/8a226100.jpg'
                  alt=''
                />
              </HStack>
            </VStack>
          </GridContainer>
          <ItemsGrid title='Similar Items'>
            <Item
              name='Nordica Enforcer 100 Skis 2023'
              image='https://images.evo.com/imgp/250/224769/902350/nordica-enforcer-100-skis-2023-.jpg'
              price={799.99}
            />
            <Item
              name='Atomic Bent 100 Skis 2023'
              image='https://images.evo.com/imgp/250/219400/896899/atomic-bent-100-skis-2023-.jpg'
              price={599.95}
            />
            <Item
              name='Saloman QST 98 Skis 2023'
              image='https://images.evo.com/imgp/250/197273/812057/salomon-qst-98-skis-2023-.jpg'
              price={599.95}
            />
            <Item
              name='Nordica Enforcer 88 Skis'
              image='https://images.evo.com/imgp/250/224771/910233/nordica-enforcer-88-skis-2023-.jpg'
              price={699.99}
            />
          </ItemsGrid>
          <ProductTable
            title='Product Details'
            rockerType='All Mountain Rocker – Smooth rocker at both tip and tail with camber underfoot provides balanced performance anywhere on the mountain.'
            shape='True Tip LT – By trimming the amount of heavy ABS plastic in the tip and extending the lightweight wood core into this area with a taper that further reduces weight, Nordica enhances playfulness and maneuverability of the ski without compromising that unmatchable feeling of powerful and control.'
            core='Lite Performance Wood | Poplar / Beech'
            laminates='Carbon Chassis LT – A proprietary blend of carbon materials to reduce weight while maximizing performance.'
            sidewalls='ABS Sidewalls'
            bindingCompatibility='We recommend a brake width equal to or at most 15 mm wider than the ski waist width.'
          />
          <Divider />
          <Headline
            value='Reviews'
            textSize='lg'
            fontWeight='medium'
            leftPadding={4}
          />
          <Divider />
          <VStack>
            <GridContainer columns={4}>
              <VStack>
                <Paragraph title='Aaron P' topMargin={0} />
              </VStack>
              <Reviews leftBorder={false} />
              <Paragraph
                colSpan={2}
                topMargin={0}
                textSize='sm'
                title='Perfect for Powder'
                body='The best skis for deep pow!!'
              />
            </GridContainer>
            <Divider />
          </VStack>
          <VStack>
            <GridContainer columns={4}>
              <VStack>
                <Paragraph title='Luc M' topMargin={0} />
              </VStack>
              <Reviews leftBorder={false} />
              <Paragraph
                colSpan={2}
                topMargin={0}
                textSize='sm'
                title='Amazing!'
                body='Best Skis in the world!!!'
              />
            </GridContainer>
            <Divider />
          </VStack>
          <VStack>
            <GridContainer columns={4}>
              <VStack>
                <Paragraph title='Andrew S' topMargin={0} />
              </VStack>
              <Reviews leftBorder={false} />
              <Paragraph
                colSpan={2}
                topMargin={0}
                textSize='sm'
                title='Ski of the Year'
                body='This ski does all without even breathing hard. Perfectly balanced, allows you to ski in multiple styles without punishing the rider.'
              />
            </GridContainer>
            <Divider />
          </VStack>
        </CenteredContainer>
      </PageLayout>
    </>
  );
}
