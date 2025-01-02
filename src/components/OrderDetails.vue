<template>
    <div class="flex flex-col gap-6 p-4">
      <div class="flex justify-between items-center border-b pb-2">
        <div class="relative w-full flex flex-row gap-1 lg:gap-2 justify-between">
          <p
            class="font-roboto font-bold text-base leading-[16.8px] lg:leading-[19.2px] text-neutral-1000"
          >
            {{ `#S${order.identifier}` }}
          </p>
          <p
            class="font-roboto font-normal text-sm lg:text-md leading-[14.4px] lg:leading-[21px] text-neutral-900"
          >
            fecha de la orden
          </p>
        </div>
      </div>
      <div class="w-full flex sm:flex-row xs:flex-col justify-between gap-4">
        <div class="w-full bg-white flex flex-col gap-6 p-4 border border-[#CCCCCC] rounded">
          <p class="font-roboto font-bold text-sm leading-[14.06px] text-#343434">
            Datos de quien paga
          </p>
          <div class="flex flex-col gap-4">
            <p class="font-roboto text-md leading-[16.41px] text-[#999999]">Raydel Perez</p>
            <p class="font-roboto text-md leading-[16.41px] text-[#999999]">
              Calle 6ta #13 entre A y C, Reparto Celso Maragoto, Habana, 10400, Cuba
            </p>
          </div>
        </div>
        <div class="w-full bg-white flex flex-col gap-6 p-4 border border-[#CCCCCC] rounded">
          <p class="font-roboto font-bold text-sm leading-[14.06px] text-#343434">
            Dirección de quien recibe
          </p>
          <div class="flex flex-col gap-4">
            <p class="font-roboto text-md leading-[16.41px] text-[#999999]">Ernesto Perez</p>
            <p class="font-roboto text-md leading-[16.41px] text-[#999999]">
              Calle 6ta #13 entre A y C, Reparto Celso Maragoto, Playa, La Habana
            </p>
          </div>
        </div>
      </div>
  
      <div class="w-full flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <p class="font-roboto-condensed font-bold text-xl leading-6">Productos</p>
        </div>
        <div>CardOrders</div>
        <!-- <CardOrders
          :overview="false"
          v-for="(deliveryByStore, index) in order.shoporders"
          :key="deliveryByStore._id"
          :delivery="deliveryByStore"
          :index="index"
        /> -->
      </div>
      <div>PriceDatailsOverview</div>
      <!-- <PriceDetailsOverview :storeOrders="order.shoporders" /> -->
    </div>
  </template>
  <script setup lang="ts">

  
  
  import { ref } from 'vue'

  
  
  /**
   * The route of the application
   * @type {RouteLocationNormalizedLoaded | RouteLocationNormalizedLoaded | RouteLocationNormalized | RouteLocationNormalized}
   */
  
  /**
   * Function to get the data of the store
   * @returns {Promise<IOrder>} - The data of the store
   */
  
  
  /**
   * The store data
   * @type {Ref<IStore>}
   */
  const order = ref({
    _id: '676121797e4030ac68bdd45b',
    user: {
      _id: '667c2be65e58b37dcf855f04',
      name: 'Raydel',
      surname: 'Herrera',
      email: 'raydel9206@gmail.com',
      isActive: true,
      isVerified: true,
      createdAt: '2024-06-26T14:55:34.244Z',
      updatedAt: '2024-12-03T03:42:56.098Z',
      __v: 38,
      rol: 'seller',
      favoriteProducts: [
        '66cb9dfcf34c4ee7a98336f5',
        '66cbaaacf34c4ee7a983392d',
        '66cbb2d5f34c4ee7a983395b'
      ],
      enabled: true,
      billingData: {
        name: 'Raydel',
        surname: 'Perez',
        email: 'raydel9206@gmail.com',
        phone: '05 8541615',
        address: 'Calle 6ta #13 entre A y C, Reparto Celso Maragoto',
        province: 'Habana',
        municipality: 'Plaza',
        country: 'Cuba',
        postalCode: '10400'
      },
      fullName: 'Raydel Herrera'
    },
    deliveryAddress: {
      user: '667c2be65e58b37dcf855f04',
      name: 'Ernesto',
      surname: 'Perez',
      email: 'raydel9206@gmail.com',
      phone: '05 8541615',
      address: 'Calle 6ta #13 entre A y C, Reparto Celso Maragoto',
      province: 'La Habana',
      municipality: 'Playa',
      _id: '67607ee843cbd89e323797dd'
    },
    createdAt: '2024-12-17T07:00:09.619Z',
    identifier: 18,
    totalPrice: 32,
    status: 'pay_pending',
    paymentMethod: 'credit_card',
    shoporders: [
      {
        _id: '676121797e4030ac68bdd45e',
        order: '676121797e4030ac68bdd45b',
        shop: {
          _id: '6698982ad9bf679e000e4368',
          imageUrl:
            'https://tso-tienda-media-dev.s3.us-east-1.amazonaws.com/SHOP/6698982ad9bf679e000e4368-f714f22c-0eb0-4c07-be43-f5cee6ad5e2e.webp',
          name: 'Bazar Nórdico',
          description: 'Tienda dedicada a la venta de articulos de la mitologia nordica.',
          phoneNumber: '+53 5 5651996',
          currency: 'USD',
          commission: 5,
          published: true,
          prioritized: true,
          address: 'Perez 59 /  Ensenada y Atarez, Luyano',
          province: 'La Habana',
          municipality: 'Diez de Octubre',
          postalCode: '10700',
          createdAt: '2024-07-18T04:21:00.260Z',
          updatedAt: '2024-12-13T20:24:07.003Z',
          __v: 0,
          isDeleted: false,
          owner: '66abea026790dd7d4737fdac',
          enabled: true,
          shopType: 'Trabajador por cuenta propia',
          order: 1,
          maxDelivery: 6,
          minDelivery: 2,
          maxProductsToShow: 20
        },
        products: [
          {
            imagesUrl: [],
            minimumAdvanceDays: null,
            deniedReason: null,
            _id: '66ca8ca4f34c4ee7a98332e7',
            imageUrl:
              'https://tso-tienda-media-dev.s3.us-east-1.amazonaws.com/PRODUCT/66ca8ca4f34c4ee7a98332e7-8a8c4a7d-207a-4ce1-a2b1-688d40b98bc3.webp',
            code: 'P78977',
            brand: null,
            published: true,
            name: {
              es: 'Combo de Fin de Año',
              en: 'Combo de Fin de Año'
            },
            metadata: 'combo, pollo, perritos',
            subcategories: ['66c0ebbb705d33a383dd10be'],
            recommended: true,
            description: {
              es: 'Caja de Pollo de 10lbs y 2 paquetes de perrito',
              en: '10lbs Chicken box and 2 puppys pack'
            },
            dueDate: '2024-12-12T00:00:00.000Z',
            consumable: false,
            stock: {
              amountAvailable: 45,
              amountPredicted: 20,
              amountInitial: 20
            },
            expectedDeliveryDate: {
              from: 5,
              to: 10
            },
            um: 'kg',
            quantityAvailableBelow: 2,
            shop: '6698982ad9bf679e000e4368',
            salesAmount: 35,
            deliveryAreas: [
              {
                province: 'La Habana',
                municipalities: ['Plaza', 'Playa']
              },
              {
                province: 'Santiago de Cuba',
                municipalities: ['Contramaestre', 'Santiago de Cuba']
              }
            ],
            products: [
              {
                product: '66beecf207faa2092d105992',
                amount: 1
              },
              {
                product: '66beee0c07faa2092d10599d',
                amount: 3
              }
            ],
            approved: true,
            isActive: true,
            createdAt: '2024-07-25T01:45:09.229Z',
            updatedAt: '2024-12-02T22:12:17.343Z',
            __v: 0,
            categories: [],
            basePrice: 32,
            salePrice: 32,
            quantity: 1
          }
        ],
        quantities: [1],
        price: 32,
        status: 'pending',
        identifier: 1,
        createdAt: '2024-12-17T07:00:09.623Z',
        updatedAt: '2024-12-17T07:00:09.623Z',
        __v: 0
      },
      {
        _id: '676121797e4030ac68bdd45e',
        order: '676121797e4030ac68bdd45b',
        shop: {
          _id: '6698982ad9bf679e000e4368',
          imageUrl:
            'https://tso-tienda-media-dev.s3.us-east-1.amazonaws.com/SHOP/6698982ad9bf679e000e4368-f714f22c-0eb0-4c07-be43-f5cee6ad5e2e.webp',
          name: 'Bazar Nórdico',
          description: 'Tienda dedicada a la venta de articulos de la mitologia nordica.',
          phoneNumber: '+53 5 5651996',
          currency: 'USD',
          commission: 5,
          published: true,
          prioritized: true,
          address: 'Perez 59 /  Ensenada y Atarez, Luyano',
          province: 'La Habana',
          municipality: 'Diez de Octubre',
          postalCode: '10700',
          createdAt: '2024-07-18T04:21:00.260Z',
          updatedAt: '2024-12-13T20:24:07.003Z',
          __v: 0,
          isDeleted: false,
          owner: '66abea026790dd7d4737fdac',
          enabled: true,
          shopType: 'Trabajador por cuenta propia',
          order: 1,
          maxDelivery: 6,
          minDelivery: 2,
          maxProductsToShow: 20
        },
        products: [
          {
            imagesUrl: [],
            minimumAdvanceDays: null,
            deniedReason: null,
            _id: '66ca8ca4f34c4ee7a98332e7',
            imageUrl:
              'https://tso-tienda-media-dev.s3.us-east-1.amazonaws.com/PRODUCT/66ca8ca4f34c4ee7a98332e7-8a8c4a7d-207a-4ce1-a2b1-688d40b98bc3.webp',
            code: 'P78977',
            brand: null,
            published: true,
            name: {
              es: 'Combo de Fin de Año',
              en: 'Combo de Fin de Año'
            },
            metadata: 'combo, pollo, perritos',
            subcategories: ['66c0ebbb705d33a383dd10be'],
            recommended: true,
            description: {
              es: 'Caja de Pollo de 10lbs y 2 paquetes de perrito',
              en: '10lbs Chicken box and 2 puppys pack'
            },
            dueDate: '2024-12-12T00:00:00.000Z',
            consumable: false,
            stock: {
              amountAvailable: 45,
              amountPredicted: 20,
              amountInitial: 20
            },
            expectedDeliveryDate: {
              from: 5,
              to: 10
            },
            um: 'kg',
            quantityAvailableBelow: 2,
            shop: '6698982ad9bf679e000e4368',
            salesAmount: 35,
            deliveryAreas: [
              {
                province: 'La Habana',
                municipalities: ['Plaza', 'Playa']
              },
              {
                province: 'Santiago de Cuba',
                municipalities: ['Contramaestre', 'Santiago de Cuba']
              }
            ],
            products: [
              {
                product: '66beecf207faa2092d105992',
                amount: 1
              },
              {
                product: '66beee0c07faa2092d10599d',
                amount: 3
              }
            ],
            approved: true,
            isActive: true,
            createdAt: '2024-07-25T01:45:09.229Z',
            updatedAt: '2024-12-02T22:12:17.343Z',
            __v: 0,
            categories: [],
            basePrice: 32,
            salePrice: 32,
            quantity: 1
          }
        ],
        quantities: [1],
        price: 32,
        status: 'pending',
        identifier: 1,
        createdAt: '2024-12-17T07:00:09.623Z',
        updatedAt: '2024-12-17T07:00:09.623Z',
        __v: 0
      }
    ]
  })
  
  const pending = ref(false)

  </script>
  