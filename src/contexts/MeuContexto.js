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
          image: require('../../img/posts/blackVelvet.jpg'),
          name: 'Saulo Tavares',
          drink: 'BLACK VELVET',
          description: 'Esse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black VelvetEsse é o Black Velvet',
        },
        {
          id: '5',
          image: require('../../img/posts/chocolate.jpg'),
          name: 'Rafael Pacheco',
          drink: 'CHOCOLATE',
          description: 'Esse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o ChocolateEsse é o Chocolate',
        },
        {
          id: '6',
          image: require('../../img/posts/superb.jpg'),
          name: 'Rodrigo Ramos',
          drink: 'SUPERB',
          description: 'Esse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o SuperbEsse é o Superb',
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