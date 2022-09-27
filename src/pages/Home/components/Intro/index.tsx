import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.svg'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill"/>}
              text='Compra simples e segura'
              iconBg={theme.colors["brand-purple-dark"]}
            />
            <InfoWithIcon
              icon={<Package weight="fill"/>}
              text='Embalagem mantém o café intacto'
              iconBg={theme.colors["brand-yellow-dark"]}
            />
            <InfoWithIcon
              icon={<Timer weight="fill"/>}
              text='Entrega rápida e rastreada'
              iconBg={theme.colors["brand-yellow"]}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill"/>}
              text='O café chega fresquinho até você'
              iconBg={theme.colors["brand-purple"]}
            />
          </BenefitsContainer>
        </div>
        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  )
}