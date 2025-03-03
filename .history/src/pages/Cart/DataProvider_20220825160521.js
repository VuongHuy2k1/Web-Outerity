import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            _id: '1',
            title: 'Wacth Product 01',
            images: [
                'https://product.hstatic.net/200000445353/product/ork401-2_0968602092d54d108e8922ef3137fd54_master.jpg',
                'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
                'https://product.hstatic.net/200000312481/product/82e0e6a27c78bc26e569_921da0a1b7ca4fadab1b39347286e2ee_master.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 101,
            count: 1,
        },
        {
            _id: '2',
            title: 'Wacth Product 02',
            images: [
                'https://product.hstatic.net/200000312481/product/dsc05973_6a76c062d4ca452bbbfa5b1bab83ef4b_master.png',
                'https://www.upsieutoc.com/images/2020/07/18/img1.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 102,
            count: 1,
        },
        {
            _id: '3',
            title: 'Wacth Product 03',
            images: [
                'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img1.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 103,
            count: 1,
        },
        {
            _id: '4',
            title: 'Wacth Product 04',
            images: [
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img1.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 104,
            count: 1,
        },
        {
            _id: '5',
            title: 'Wacth Product 05',
            images: [
                'https://www.upsieutoc.com/images/2020/07/18/img5.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 105,
            count: 1,
        },
        {
            _id: '6',
            title: 'Wacth Product 06',
            images: [
                'https://www.upsieutoc.com/images/2020/07/18/img6.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
                'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
            ],
            description: 'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
            content:
                'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
            colors: ['red', 'black', 'teal'],
            sizes: ['XL', 'L', 'M', 'XM', 'LX'],
            price: 106,
            count: 1,
        },
    ]);
    const [collects, setCollects] = useState([
        {
            _id: '1',
            title: 'QUÀN',
        },
        {
            _id: '2',
            title: 'ÁO',
        },
    ]);
    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every((item) => {
            return item._id !== id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product._id === id;
            });
            setCart([...cart, ...data]);
        } else {
            alert('The product has been added to cart.');
        }
    };

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart) setCart(dataCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);

    const value = {
        collects: [collects, setCollects],
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
    };

    return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
