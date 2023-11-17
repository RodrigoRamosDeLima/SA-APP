import React, { createContext, useContext, useState } from 'react';

const MeuContexto = createContext();

export function MeuContextoProvider({ children }) {
    let feedItems = [
        {
          id: '1',
          image: require('../../img/posts/blackVelvet.jpg'),
          name: 'Saulo Tavares',
          drink: 'BLACK VELVET',
          description: 'Esse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black Velvet',
        },
        {
          id: '2',
          image: require('../../img/posts/chocolate.jpg'),
          name: 'Rafael Pacheco',
          drink: 'CHOCOLATE',
          description: 'Esse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o Chocolate',
        },
        {
          id: '3',
          image: require('../../img/posts/superb.jpg'),
          name: 'Rodrigo Ramos',
          drink: 'SUPERB',
          description: 'Esse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o Superb',
        },
        {
          id: '4',
          image: require('../../img/posts/lucidFly.jpg'),
          name: 'Saulo Tavares',
          drink: 'LUCID FLY',
          description: 'O drink "Lucidfly" é uma explosão de sabores tropicais que encantam os sentidos. Seu aroma exala a doçura do coco e do abacaxi, com um toque de frescor de hortelã. O sabor é uma harmoniosa dança de frutas tropicais, proporcionando uma experiência sensorial exótica e refrescante que leva a mente a lugares paradisíacos.',
        },
        {
          id: '5',
          image: require('../../img/posts/horchata.jpg'),
          name: 'Rafael Pacheco',
          drink: 'Horchata',
          description: 'O drink Horchata cativa os sentidos com um aroma delicado de canela e baunilha, reminiscente de uma sobremesa caseira. Seu sabor é uma fusão suave de arroz, canela e doçura, resultando em uma experiência sensorial aconchegante e reconfortante. É a escolha perfeita para quem busca um coquetel com uma pitada de nostalgia e uma nota exótica de especiarias.',
        },
        {
          id: '6',
          image: require('../../img/posts/blueberryRum.jpg'),
          name: 'Rodrigo Ramos',
          drink: 'Blueberry Rum',
          description: 'Blueberry rum é uma deliciosa variante de rum que incorpora o sabor suculento e doce das blueberries (mirtilos) em sua destilação ou infusão. Esse rum oferece um equilíbrio intrigante entre as notas frutadas e o calor característico do rum, resultando em uma bebida que combina perfeitamente a riqueza do rum com a vibrante doçura das blueberries. Pode ser apreciado puro, em coquetéis tropicais ou como base para criações de bebidas únicas.',
        },
        {
          id: '7',
          image: require('../../img/posts/bloodmary.jpg'),
          name: 'Mano Juca',
          drink: 'Blood Mary',
          description: 'O Blood Mary é um coquetel icônico que deslumbra os sentidos com um aroma picante e salgado, destacando a fragrância do tomate fresco. Seu sabor é uma mistura ousada de suco de tomate, temperos vivos e um toque de vodka, proporcionando uma experiência sensorial picante e revigorante. É um coquetel estimulante que desperta os paladares com sua combinação única de sabores. ',
        },
        {
          id: '8',
          image: require('../../img/posts/cubalibre.jpg'),
          name: 'Astrogildo de Jesus',
          drink: 'Cuba Libre',
          description: 'O Cuba Libre é um coquetel refrescante que cativa os sentidos com um aroma cítrico e leve de limão. Seu sabor é uma fusão equilibrada de rum, cola e um toque de limão, criando uma experiência sensorial energizante e suave. É a escolha perfeita para quem busca um coquetel simples, porém cheio de sabor e vitalidade.',
        },
        {
          id: '9',
          image: require('../../img/posts/drymartini.jpg'),
          name: 'Ursula Silva',
          drink: 'Dry Martini',
          description: 'O Dry Martini é um coquetel elegante e clássico com um aroma suave e herbáceo de gin, equilibrado com a fragrância cítrica da casca de limão. Seu sabor é refinado e seco, com a união perfeita entre o gin e um toque de vermute, criando uma experiência sensorial sofisticada e balanceada. É a escolha de quem aprecia a simplicidade e a complexidade em um só gole.',
        },
        {
          id: '10',
          image: require('../../img/posts/gintonica.jpg'),
          name: 'Jose Marinho',
          drink: 'Gin Tonica',
          description: 'O Gin Tônica é um coquetel refrescante que seduz os sentidos com um aroma nítido de zimbro e ervas do gin, acentuado pela fragrância cítrica da rodela de limão. Seu sabor é uma combinação equilibrada de gin, tônica e gelo, resultando em uma experiência sensorial leve, efervescente e levemente amarga. É a escolha perfeita para os amantes de gin que buscam uma bebida clássica e revitalizante.',
        },
        {
          id: '11',
          image: require('../../img/posts/hankypanky.jpg'),
          name: 'Rafael Lindemman',
          drink: 'Hanky Panky',
          description: 'O drink Hanky Panky é uma explosão de sabores que envolvem os sentidos. Seu aroma é um equilíbrio intrigante de ervas, com toques cítricos e a doçura do vermute. O sabor é uma dança complexa de gin e Fernet-Branca, criando uma experiência sensorial intensa e sofisticada que surpreende o paladar. É a escolha perfeita para quem procura um coquetel ousado e cheio de personalidade.',
        },
        {
          id: '12',
          image: require('../../img/posts/mimosa.jpg'),
          name: 'Tavares Saulo',
          drink: 'Mimosa',
          description: 'O drink Mimosa é uma explosão de frescor e elegância para os sentidos. Seu aroma é dominado pela fragrância cítrica e efervescente do champanhe, com notas suaves de laranja. O sabor é uma harmonia perfeita de champanhe borbulhante e suco de laranja fresco, resultando em uma experiência sensorial efervescente, frutada e refrescante, perfeita para brindar momentos especiais.',
        },
        {
          id: '13',
          image: require('../../img/posts/mojito.jpg'),
          name: 'Lucas Naspolini',
          drink: 'Mojito',
          description: 'O Mojito é um coquetel que encanta os sentidos com um aroma fresco de hortelã e limão, complementado pelo suave toque de açúcar. Seu sabor é uma harmonia refrescante de rum, hortelã, limão e água com gás, resultando em uma experiência sensorial vibrante, cítrica e levemente adocicada. É a escolha perfeita para quem busca um coquetel tropical e revigorante.',
        },
        {
          id: '14',
          image: require('../../img/posts/negroni.jpg'),
          name: 'Ramos Rodrigo',
          drink: 'Negroni',
          description: 'O Negroni é um coquetel clássico que cativa os sentidos com um aroma marcante de zimbro e ervas do gin, equilibrado pela doçura e amargor do vermute e do Campari. Seu sabor é uma mistura ousada e equilibrada de notas herbais, cítricas e amargas, resultando em uma experiência sensorial complexa e sofisticada. É a escolha perfeita para quem aprecia coquetéis robustos e intensos.',
        },
        {
          id: '15',
          image: require('../../img/posts/blackVelvet.jpg'),
          name: 'Pacheco Rafael ',
          drink: 'Black Velvet',
          description: 'O Black Velvet é um coquetel que envolve os sentidos com um aroma suave de cerveja stout, complementado por um toque sutil de champanhe. Seu sabor é uma fusão harmoniosa dessas duas bebidas, criando uma experiência sensorial única de contraste entre o rico e o efervescente. É a escolha perfeita para os apreciadores de coquetéis ousados e intrigantes.',
        }
      ]

  return (
    <MeuContexto.Provider value={{ feedItems }}>
      {children}
    </MeuContexto.Provider>
  );
}

export function useMeuContexto() {
  return useContext(MeuContexto);
}