import product1 from './assets/img/product1.jpg'
import product2 from './assets/img/product2.webp'
import product3 from './assets/img/product3.webp'
import product4 from './assets/img/product4.webp'
import product5 from './assets/img/product5.webp'
import block1 from './assets/img/block1.webp'
import block2 from './assets/img/block2.webp'
import block3 from './assets/img/block3.webp'
import { type } from 'os'
import {FaMapMarkerAlt, FaPaperPlane} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import { createUniqueId } from './ultil'

type NavbarItem = {
    title: string,
    link?: string,
    item?: string[]
}

export type Product = {
    id: string,
    name: string,
    brand: string,
    price: number,
    thumbnail: string[],
    condition: string,
    size: number,
    warn: string[],
    type: string,
    quantity?: number | 1,
    totalPrice?: number 
}

export type Products = {
    products: Product[]
}

export type BlockItem = {
    thumbnail: string,
    title: string,
    desc: string
}

export type MainFooter = {
    title: string,
    content: {
        icon?: any,
        desc: string
    }[]
}

export type ReturnType<T> = {
    code: number,
    message?: string,
    data?: T
}

export const NavbarItem:NavbarItem[] = [
    {
        title: 'Giày nam',
        link: '/collections/giay-nam'
    },
    {
        title: 'Giày nữ',
        link: '/collections/giay-nu'

    },
    {
        title: 'Thương hiệu',
        link: '/',
        
        item: [
            'Nike',
            'Adidas',
            'Puma',
            'Reebok',
            'New Balance',
            'Lacoste',
            'Filla'
        ]
    },
    {
        title: 'Blog',
        link: '/',
    },
    {
        title: 'Giới thiệu',
        link: '/'
    }

]

export const ProductData:Product[] = [
    {
        id: '1',
        name: 'Giày thể thao (Sneaker) Nam Giày nam adidas Grand Court Base ART EE7904',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'Trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '2',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 41,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '3',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 42,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '4',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 43,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '5',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '6',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '7',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '8',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '9',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '10',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '11',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '12',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '13',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '14',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '15',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '16',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '17',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '18',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '19',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '20',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 800000,
        thumbnail: [
            product1,product2,product3,product4,product5
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    }
    

]

export const Block:BlockItem[] = [
    {
        thumbnail: block1,
        title: 'Phụ kiện thời trang',
        desc: 'Khuyến mãi tới 50%'
    },
    {
        thumbnail: block2,
        title: 'Cùng bạn xuống phố',
        desc: 'Phong cách'
    },
    {
        thumbnail: block3,
        title: 'Mùa hè rực rỡ',
        desc: 'Bộ sưu tập'
    }
]


export const Footer:MainFooter[] = [
    {
        title: 'Giới thiệu',
        content: [
            {
                desc: 'Trang mua sắm trực tuyến Top2hand.vn được vận hành bởi Giffan Group, chuyên trang cung cấp các sản phẩm giày dép chính hãng đã qua sử dụng.'
            }
        ]
    },
    {
        title: 'Liên kết',
        content: [
            {
                desc: 'Tìm kiếm'
            },
            {
                desc: 'Giới thiệu'
            },
            {
                desc: 'Chính sách đổi trả'
            },
            {
                desc: 'Chính sách bảo mật'
            },
            {
                desc: 'Điều khoản dịch vụ'
            },
            {
                desc: 'Liên hệ'
            }
        ]
    },
    {
        title: 'Thông tin liên hệ',
        content: [
            {
                icon: FaMapMarkerAlt,
                desc: '86 đường Vành Đai Làng Đại Học, KP Tân Lập, Phường Đông Hòa, TP Dĩ An, Bình Dương'
            },
            {
                icon: BiPhoneCall,
                desc: '0941835369'
            },
            {
                icon: FaPaperPlane,
                desc: 'namtien.ktvn@gmail.com'
            }
        ]
    },
]


export const AllBrand = [
    'Puma',
    'Adidas',
    'Nike',
    'Fila',
    'Khác',
    'Asic',
    'Lacoste',
    'Skechers',
    'Timeberland',
    'Reebok',
    'nike',
    "SKU: E0021"
]

export const AllSizeMen = [
    35,
    36,
    37,
    38,
    39,
    40,
    42,
    43,
    44
]