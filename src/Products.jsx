import React, { useState } from 'react'


export const products = [
  {
    id: 1,
    name: 'Iphone 15 Simple',
    description: "Un design en titane robuste et léger avec de nouveaux bords profilés, un nouveau bouton Action, d'importantes améliorations de l’appareil photo, et la puce A17 Pro offrant des performances et une expérience de jeu sur mobile inédites",
    price: 1000,
    image: '/assets/images/15simple.png'
  },
  {
    id: 2,
    name: 'Iphone 15 Pro Max ',
    description: "Un design en titane robuste et léger avec de nouveaux bords profilés, un nouveau bouton Action, d'importantes améliorations de l’appareil photo, et la puce A17 Pro offrant des performances et une expérience de jeu sur mobile inédites",
    price: 1200,
    image: '/assets/images/15promax.png'
  },
  {
    id: 3,
    name: 'Iphone 14 Simple',
    description: "L'iPhone 14 est équipé de deux caméras arrière, une classique et une ultra grand-angle, toutes deux de 12 mégapixels. Grâce au moteur photonique, une technologie propriétaire d'Apple, les photos prises dans des conditions de faible luminosité sont nettement améliorées.",
    price: 800,
    image: '/assets/images/14simple.jpg'
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    description: "L'Apple Watch Série 9 ne pourra que vous convaincre avec ses fonctionnalités avancées : montre GPS, connectivité cellulaire, suivi de santé et de fitness",
    price: 378,
    image: 'https://d2e6ccujb3mkqf.cloudfront.net/92c82ccb-7249-4269-ad94-50fea1698cfd-1_35b999e4-0f9f-4076-804f-49d4ccc6ac9d.jpg'
  },
  {
    id: 5,
    name: 'AirPods Max',
    description: "Les AirPods Max réinventent le casque circum-auriculaire. Un transducteur dynamique conçu par Apple livre un son haute-fidélité immersif.",
    price: 579,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604709508000'
  },
  {
    id: 6,
    name: 'AirPods 3e generation',
    description: "Découvrez les nouveaux AirPods (3ᵉ génération) dotés de l'audio spatial avec suivi dynamique des mouvements de la tête",
    price: 200,
    image: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/0b/e4/06/17228811/3756-1/tsp20240702172441/Apple-AirPods-3-avec-boitier-de-charge-Magsafe-Ecouteurs-sans-fil-True-Wirele.jpg'
  },
  {
    id: 7,
    name: 'MacBook Pro',
    description: "Pour la première fois, le MacBook Pro est doté du ray tracing à accélération matérielle. Associée à la nouvelle architecture graphique, cette technologie permet aux apps pro d’offrir des performances de rendu jusqu’à deux fois et demi plus rapides et aux jeux d’afficher des ombres et des reflets encore plus réalistes.",
    price: 1200,
    image: 'https://d2e6ccujb3mkqf.cloudfront.net/9a522de1-a1a4-44cf-80e9-35847bca2958-2_246889f1-6e6d-4707-9650-25c6424d1efc.jpg'
  },
  {
    id: 8,
    name: 'Galaxy A54',
    description: "Samsung met à jour sa gamme 2023 avec le Galaxy A54 5G, un smartphone de 6.4 pouces équipé du processeur maison Exynos 1380. Ce milieu de gamme vendu à partir ...",
    price: 400,
    image: 'https://img.us.news.samsung.com/us/wp-content/uploads/2023/03/14124128/SM-A546_Galaxy-A54-5G_Awesome-Violet_Front.png'
  },
  {
    id: 9,
    name: 'TV LG QNED',
    description: "Des couleurs éclatantes de clarté un impressionnant TV LG QNED. Notre nouveau processeur et nos zones de gestion du rétroéclairage, offrent une image sublimée, où les pixels se distinguent par leur netteté.",
    price: 2498,
    image: 'https://www.lg.com/content/dam/channel/wcms/fr/2024_he_lg-com/tv/qned-pdp/qned85/gallery/06-75-qned85-c/01-basic/2024_75_QNED85_C_EU_01-v1(Copy).jpg'
  },
  {
    id: 10,
    name: 'TV AI Neo QLED 65',
    description: "Quantum Mini LED : Une luminosité éclatante et maîtrisée, Processeur NQ4 AI Gen2: Améliore vos contenus grâce à l’IA, Design fin 25mm",
    price: 1999,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/fr/tq65qn85dbtxxc/gallery/fr-qled-qn85d-503117-tq65qn85dbtxxc-541119781?$650_519_PNG$'
  },
];

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}

export default function Products() {
  return (
    <div className='w-[80%] m-auto pt-6  bg-blue-500 mt-5'>
      <h1 className="text-2xl text-white font-bold mb-4">Produits</h1>
      <div className='grid grid-cols-3 gap-8'>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col items-center bg-white'>
            <div className='w-[50%]'>
            <img src={product.image} alt={product.name}/>
            </div>
            <div className=''>
            <h2 className='text-xl font-bold'>{product.name}</h2>
              <p>{truncateText(product.description, 25)}</p>
              <p className='text-xl font-bold'>Prix: {product.price}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
